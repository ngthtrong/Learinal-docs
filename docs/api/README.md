# Learinal API – Backend Guide

This guide summarizes conventions, constraints, and external services for the Learinal MVP API. The canonical, machine-readable contract lives in `docs/api/learinal-openapi.yaml` (OpenAPI 3.1).

## Base URL & Versioning
- Base path: `/api/v1`
- Environments: local, staging, production (see `servers` section in OpenAPI).

## Security
- OAuth 2.0 / OIDC (Google) for authentication.
- API uses JWT bearer tokens: `Authorization: Bearer <access_token>`.
- Roles: `Learner`, `Expert`, `Admin` (enforced at route level).

## Conventions
- Pagination: `page`, `pageSize`; responses return `{ items: [...], meta: { page, pageSize, total, totalPages } }`.
- Sorting: optional `sort` query (e.g., `-createdAt`).
- ETags: use `ETag` header on GET; clients send `If-None-Match` or `If-Match` for caching/optimistic locking.
- Idempotency: send `Idempotency-Key` on POST that create/charge to safely retry.
- Rate limits: default `60 rpm` per IP. Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.
- Error shape: `{ code, message, details }`.

## Modules & Key Endpoints
- Auth: exchange OAuth `code`, refresh, logout.
- Users: `GET /users/me`, `PATCH /users/me`.
- Subjects: CRUD for user subjects.
- Documents: multipart upload (`20MB`, `.pdf/.docx/.txt`), get summaries.
- Question Sets: generate via LLM, update, share link, request review.
- Quiz Attempts: start and submit answers.
- Validation Workflow: list/update validation requests (expert/admin).
- Notifications: list and mark as read.
- Subscriptions: list plans, start subscription; Stripe webhook.
- Health: `/health`.

Full details, request/response schemas, and examples are in the OpenAPI file.

## External Services
- LLM: Google Gemini API (generation, summarization). Timeout & retries handled by `LLMAdapter`.
- Email: SendGrid/SES via REST or SMTP. Use templates and sender domain config.
- Object Storage: S3/Cloudinary for user documents. Enforce `20MB` max.
- OAuth: Google OIDC (PKCE on frontend, token verification on backend).
- Payment: Stripe (TBC) – webhook `/webhooks/stripe` verifies signature.

## Constraints & Limits
- File uploads: `20MB` max; extensions `.pdf`, `.docx`, `.txt`.
- Async jobs: generation/review flows publish to message queue; consumers must be idempotent.
- Data model: see `docs/mongodb-schema.md` and ERD for collections and relations.
- Privacy: user documents private by default; share links are random tokens; permissions checked at API.

## Local Development Tips
- Use `localhost:8080/api/v1` server from OpenAPI.
- Seed minimal data: one user per role; at least one subscription plan if integrating payments.
- Feature flags: payment integration may be toggled off in MVP.

---

For endpoint-by-endpoint details, open `learinal-openapi.yaml` in your OpenAPI viewer (VS Code plugin, Swagger UI, or Redoc).

## Run the OpenAPI locally (docs, mock, lint, generate)

Below are quick, Windows PowerShell–friendly ways to use `docs/api/learinal-openapi.yaml` without changing your backend.

### 1) Preview interactive docs

- Option A — Swagger UI (Docker, no Node required):

```powershell
docker run --rm -p 8081:8080 `
	-e SWAGGER_JSON=/learinal-openapi.yaml `
	-v "${PWD}/docs/api:/usr/share/nginx/html:ro" `
	swaggerapi/swagger-ui
# Open http://localhost:8081
```

- Option B — ReDoc (Node/npx):

```powershell
npx -y redoc-cli serve .\docs\api\learinal-openapi.yaml --watch --port 8082
# Open http://localhost:8082
```

Tips:
- Use the “Authorize” button in the viewer and paste a Bearer JWT to try secured endpoints.
- Pick the correct server in the top-right (e.g., `http://localhost:8080/api/v1`).

### 2) Mock the API (no backend required)

Serve realistic mock responses that match your schemas:

```powershell
npx -y @stoplight/prism-cli mock .\docs\api\learinal-openapi.yaml --port 4010
# Frontend base URL: http://localhost:4010
```

Notes:
- Prism ignores auth by default; you can add auth headers if your client requires them.
- File upload routes and JSON bodies are supported from the spec.

### 3) Validate / lint the spec

Catch mistakes early in CI or locally:

```powershell
# Spectral (open-source)
npx -y @stoplight/spectral-cli lint .\docs\api\learinal-openapi.yaml

# Or Redocly CLI (rich rules for OpenAPI 3.1)
npx -y @redocly/cli lint .\docs\api\learinal-openapi.yaml
```

### 4) Generate clients (optional)

Type-safe SDKs for your frontend or integrations.

```powershell
# TypeScript (axios)
npx -y @openapitools/openapi-generator-cli generate `
	-i .\docs\api\learinal-openapi.yaml `
	-g typescript-axios `
	-o .\src\clients\typescript-axios

# Type-only models (great for React/RTK Query)
npx -y openapi-typescript .\docs\api\learinal-openapi.yaml -o .\src\clients\types.ts
```

Other languages: `-g` supports many (java, kotlin, swift, go, python, etc.). See https://openapi-generator.tech/docs/generators

### 5) Generate server stubs (optional)

Kickstart a backend wired to this contract:

```powershell
# Node/Express stub
npx -y @openapitools/openapi-generator-cli generate `
	-i .\docs\api\learinal-openapi.yaml `
	-g nodejs-express-server `
	-o .\src\server-stub-express

# Java/Spring Boot stub
npx -y @openapitools/openapi-generator-cli generate `
	-i .\docs\api\learinal-openapi.yaml `
	-g spring `
	-o .\src\server-stub-spring
```

Align the stub’s base-path with `/api/v1` (as defined under `servers`).

### 6) Import into API clients

- Postman: Import the YAML, it will create a collection automatically.
- Insomnia: Import > From File > select the YAML.

---

Troubleshooting
- Docker on Windows: ensure Docker Desktop is running; `${PWD}` resolves to your current folder in PowerShell.
- npx: requires Node.js installed; use `node -v` to verify.
- OpenAPI 3.1: use recent versions of generators/viewers (OpenAPI Generator v7+, Redocly CLI, Prism ≥ 5).