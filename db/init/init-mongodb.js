// Learinal DB Init Script
// Usage (mongosh):
//   use learinal
//   load("db/init/init-mongodb.js")
//
// This script is idempotent: it will create or update collection validators
// and ensure indexes exist.

(function () {
  function hasCollection(name) {
    try {
      return db.getCollectionNames().includes(name);
    } catch (e) {
      return db.getCollectionNames().indexOf(name) !== -1;
    }
  }

  function collModOrCreate(name, schema) {
    if (hasCollection(name)) {
      print("[collMod] " + name);
      db.runCommand({
        collMod: name,
        validator: { $jsonSchema: schema },
        validationLevel: "moderate",
        validationAction: "error",
      });
    } else {
      print("[createCollection] " + name);
      db.createCollection(name, {
        validator: { $jsonSchema: schema },
        validationLevel: "moderate",
        validationAction: "error",
      });
    }
  }

  function ensureIndex(name, keys, options) {
    print("[createIndex] " + name + " => " + tojson(keys));
    db.getCollection(name).createIndex(keys, options || {});
  }

  // ===== JSON Schemas =====
  const usersSchema = {
    bsonType: "object",
    required: [
      "fullName",
      "email",
      "hashedPassword",
      "role",
      "status",
      "subscriptionStatus",
      "createdAt",
      "updatedAt",
    ],
    properties: {
      fullName: { bsonType: "string", minLength: 1 },
      email: { bsonType: "string", pattern: ".+@.+" },
      hashedPassword: { bsonType: "string", minLength: 20 },
      role: { enum: ["Learner", "Expert", "Admin"] },
      status: { enum: ["PendingActivation", "Active", "Deactivated"] },
      subscriptionPlanId: { bsonType: ["objectId", "null"] },
      subscriptionStatus: { enum: ["None", "Active", "Expired", "Cancelled"] },
      subscriptionRenewalDate: { bsonType: ["date", "null"] },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const subjectsSchema = {
    bsonType: "object",
    required: ["userId", "subjectName", "createdAt", "updatedAt"],
    properties: {
      userId: { bsonType: "objectId" },
      subjectName: { bsonType: "string", minLength: 1 },
      description: { bsonType: ["string", "null"] },
      tableOfContents: { bsonType: ["array", "null"] },
      summary: { bsonType: ["string", "null"] },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const documentsSchema = {
    bsonType: "object",
    required: [
      "subjectId",
      "ownerId",
      "originalFileName",
      "fileType",
      "fileSize",
      "storagePath",
      "status",
      "uploadedAt",
    ],
    properties: {
      subjectId: { bsonType: "objectId" },
      ownerId: { bsonType: "objectId" },
      originalFileName: { bsonType: "string" },
      fileType: { enum: [".pdf", ".docx", ".txt"] },
      fileSize: { bsonType: ["int", "long", "double", "decimal"] },
      storagePath: { bsonType: "string" },
      extractedText: { bsonType: ["string", "null"] },
      summaryShort: { bsonType: ["string", "null"] },
      summaryFull: { bsonType: ["string", "null"] },
      summaryUpdatedAt: { bsonType: ["date", "null"] },
      status: { enum: ["Uploading", "Processing", "Completed", "Error"] },
      uploadedAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const questionSetsSchema = {
    bsonType: "object",
    required: [
      "userId",
      "subjectId",
      "title",
      "status",
      "questions",
      "createdAt",
      "updatedAt",
    ],
    properties: {
      userId: { bsonType: "objectId" },
      subjectId: { bsonType: "objectId" },
      title: { bsonType: "string", minLength: 1 },
      status: {
        enum: [
          "Public",
          "PendingValidation",
          "InReview",
          "Validated",
          "Rejected",
          "Draft",
          "PendingApproval",
          "Published",
        ],
      },
      isShared: { bsonType: ["bool", "null"] },
      sharedUrl: { bsonType: ["string", "null"] },
      questions: {
        bsonType: "array",
        minItems: 1,
        items: {
          bsonType: "object",
          required: [
            "questionId",
            "questionText",
            "options",
            "correctAnswerIndex",
            "difficultyLevel",
          ],
          properties: {
            questionId: { bsonType: "string" },
            questionText: { bsonType: "string" },
            options: {
              bsonType: "array",
              minItems: 2,
              items: { bsonType: "string" },
            },
            correctAnswerIndex: { bsonType: ["int", "long"] },
            explanation: { bsonType: ["string", "null"] },
            topicTags: {
              bsonType: ["array", "null"],
              items: { bsonType: "string" },
            },
            topicStatus: { enum: ["active", "disabled", null] },
            difficultyLevel: {
              enum: ["Biết", "Hiểu", "Vận dụng", "Vận dụng cao"],
            },
          },
          additionalProperties: true,
        },
      },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const quizAttemptsSchema = {
    bsonType: "object",
    required: [
      "userId",
      "setId",
      "score",
      "userAnswers",
      "isCompleted",
      "startTime",
      "endTime",
    ],
    properties: {
      userId: { bsonType: "objectId" },
      setId: { bsonType: "objectId" },
      score: { bsonType: ["int", "long", "double", "decimal"] },
      userAnswers: {
        bsonType: "array",
        items: {
          bsonType: "object",
          required: ["questionId", "selectedOptionIndex", "isCorrect"],
          properties: {
            questionId: { bsonType: "string" },
            selectedOptionIndex: { bsonType: ["int", "long"] },
            isCorrect: { bsonType: "bool" },
          },
        },
      },
      isCompleted: { bsonType: "bool" },
      startTime: { bsonType: "date" },
      endTime: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const validationRequestsSchema = {
    bsonType: "object",
    required: ["setId", "learnerId", "status", "requestTime"],
    properties: {
      setId: { bsonType: "objectId" },
      learnerId: { bsonType: "objectId" },
      adminId: { bsonType: ["objectId", "null"] },
      expertId: { bsonType: ["objectId", "null"] },
      status: { enum: ["PendingAssignment", "Assigned", "Completed"] },
      requestTime: { bsonType: "date" },
      completionTime: { bsonType: ["date", "null"] },
    },
    additionalProperties: true,
  };

  const commissionRecordsSchema = {
    bsonType: "object",
    required: [
      "expertId",
      "setId",
      "commissionAmount",
      "transactionDate",
      "status",
    ],
    properties: {
      expertId: { bsonType: "objectId" },
      attemptId: { bsonType: ["objectId", "null"] },
      setId: { bsonType: "objectId" },
      commissionAmount: { bsonType: ["int", "long", "double", "decimal"] },
      transactionDate: { bsonType: "date" },
      status: { enum: ["Pending", "Paid"] },
    },
    additionalProperties: true,
  };

  const subscriptionPlansSchema = {
    bsonType: "object",
    required: [
      "planName",
      "billingCycle",
      "price",
      "entitlements",
      "status",
      "createdAt",
      "updatedAt",
    ],
    properties: {
      planName: { bsonType: "string" },
      description: { bsonType: ["string", "null"] },
      billingCycle: { enum: ["Monthly", "Yearly"] },
      price: { bsonType: ["int", "long", "double", "decimal"] },
      entitlements: { bsonType: "object" },
      status: { enum: ["Active", "Archived"] },
      createdAt: { bsonType: "date" },
      updatedAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  const userSubscriptionsSchema = {
    bsonType: "object",
    required: ["userId", "planId", "startDate", "status"],
    properties: {
      userId: { bsonType: "objectId" },
      planId: { bsonType: "objectId" },
      startDate: { bsonType: "date" },
      endDate: { bsonType: ["date", "null"] },
      renewalDate: { bsonType: ["date", "null"] },
      status: { enum: ["Active", "Expired", "Cancelled", "PendingPayment"] },
      entitlementsSnapshot: { bsonType: ["object", "null"] },
    },
    additionalProperties: true,
  };

  const notificationsSchema = {
    bsonType: "object",
    required: ["userId", "title", "message", "type", "isRead", "createdAt"],
    properties: {
      userId: { bsonType: "objectId" },
      title: { bsonType: "string" },
      message: { bsonType: "string" },
      type: { enum: ["info", "success", "warning", "error"] },
      isRead: { bsonType: "bool" },
      relatedEntityType: { bsonType: ["string", "null"] },
      relatedEntityId: { bsonType: ["objectId", "null"] },
      createdAt: { bsonType: "date" },
    },
    additionalProperties: true,
  };

  // ===== Apply validators (create or collMod) =====
  collModOrCreate("users", usersSchema);
  collModOrCreate("subjects", subjectsSchema);
  collModOrCreate("documents", documentsSchema);
  collModOrCreate("questionSets", questionSetsSchema);
  collModOrCreate("quizAttempts", quizAttemptsSchema);
  collModOrCreate("validationRequests", validationRequestsSchema);
  collModOrCreate("commissionRecords", commissionRecordsSchema);
  collModOrCreate("subscriptionPlans", subscriptionPlansSchema);
  collModOrCreate("userSubscriptions", userSubscriptionsSchema);
  collModOrCreate("notifications", notificationsSchema);

  // ===== Indexes =====
  // users
  ensureIndex("users", { email: 1 }, { unique: true });
  ensureIndex("users", { role: 1, status: 1, email: 1 });
  ensureIndex("users", { subscriptionPlanId: 1, subscriptionStatus: 1 });

  // subjects
  ensureIndex("subjects", { userId: 1, subjectName: 1 });

  // documents
  ensureIndex("documents", { subjectId: 1, uploadedAt: -1 });
  ensureIndex("documents", { ownerId: 1, uploadedAt: -1 });

  // questionSets
  ensureIndex("questionSets", { userId: 1, subjectId: 1, status: 1, createdAt: -1 });
  ensureIndex(
    "questionSets",
    { sharedUrl: 1 },
    { unique: true, partialFilterExpression: { sharedUrl: { $exists: true } } }
  );

  // quizAttempts
  ensureIndex("quizAttempts", { userId: 1, endTime: -1 });
  ensureIndex("quizAttempts", { setId: 1, endTime: -1 });

  // validationRequests
  ensureIndex("validationRequests", { status: 1, requestTime: -1 });
  ensureIndex("validationRequests", { expertId: 1, status: 1 });
  ensureIndex("validationRequests", { adminId: 1, status: 1 });
  // Chỉ cho phép 1 request mở (Pending/Assigned) trên 1 set
  ensureIndex(
    "validationRequests",
    { setId: 1, status: 1 },
    {
      unique: true,
      partialFilterExpression: { status: { $in: ["PendingAssignment", "Assigned"] } },
    }
  );

  // commissionRecords
  ensureIndex("commissionRecords", { expertId: 1, status: 1, transactionDate: -1 });
  ensureIndex("commissionRecords", { setId: 1, transactionDate: -1 });

  // subscriptionPlans
  ensureIndex("subscriptionPlans", { planName: 1 }, { unique: true });
  ensureIndex("subscriptionPlans", { status: 1 });

  // userSubscriptions
  ensureIndex("userSubscriptions", { userId: 1, status: 1, startDate: -1 });
  ensureIndex("userSubscriptions", { planId: 1, status: 1 });

  // notifications
  ensureIndex("notifications", { userId: 1, isRead: 1, createdAt: -1 });

  print("\nAll validators and indexes applied.");
})();
