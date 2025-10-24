# **3\. Kiến trúc tổng thể** 

## ***3.1 Ngữ cảnh của hệ thống*** 

### *3.1.1. Sơ đồ ngữ cảnh hệ thống*

***Gợi ý:*** Sơ đồ ngữ cảnh hệ thống (system context diagram) xác định phạm vi và ranh giới của hệ thống phần mềm đang được phát triển; qua đó cung cấp cái nhìn vĩ mô đơn giản, trực quan, dễ hiểu cho tất cả các bên liên quan (kể cả CEO, Khách hàng) trước khi đi vào chi tiết kỹ thuật.  
Để vẽ sơ đồ ngữ cảnh hệ thống, cần trả lời ba câu hỏi: 1\) Hệ thống của bạn là gì? 2\) Ai sử dụng nó? 3\) Nó tích hợp với những hệ thống nào?  
Các thành phần chính:

| Thành phần | Đại diện | Vai trò |
| ----- | ----- | ----- |
| Hệ thống phần mềm | Trung tâm của sơ đồ | Sản phẩm đang xây dựng (ví dụ: Hệ thống E-commerce). |
| Tác nhân (Actors) | Người dùng/hệ thống ngoài | Con người hoặc hệ thống tương tác trực tiếp (ví dụ: Khách hàng, Quản trị viên). |
| Hệ thống bên ngoài (External Systems) | Hệ thống công nghệ khác | Các hệ thống mà hệ thống của bạn phụ thuộc/tích hợp để hoạt động (ví dụ: Hệ thống Thanh toán, Hệ thống Email). |

*Ví dụ:*  
*![][image1]*

### *3.1.2. Phụ thuộc ngoài (External Dependencies)*

***Gợi ý:*** Liệt kê tất cả các dịch vụ, API, hoặc nền tảng bên ngoài mà hệ thống của bạn cần kết nối để hoạt động. Với mỗi phụ thuộc, hãy trình bày rõ:

- Mục đích: Dịch vụ này dùng để làm gì? (Ví dụ: để xác thực người dùng, để gửi SMS, để lưu trữ file).  
- Loại giao diện: Giao thức hoặc chuẩn kết nối là gì? (Ví dụ: REST API, GraphQL, SMTP, WebSocket). Cần ghi rõ cơ chế bảo mật đi kèm (như HMAC, OAuth 2.0) nếu có.  
- Có thể thay thế bằng: Cho phép thiết kế hệ thống một cách linh hoạt, không "khóa cứng" vào một nhà cung cấp duy nhất.

*Ví dụ:*

| Tên | Mục đích | Loại giao diện | Có thể thay thế bằng |
| ----- | ----- | ----- | ----- |
| VNPay API | Xử lý thanh toán qua ngân hàng | REST API (HMAC signature) | MoMo, PayPal, Stripe |
| SMTP Server | Gửi email xác nhận đơn hàng | SMTP Protocol (TLS) | Gmail API, SendGrid |
| Cloud Storage (S3) | Lưu trữ hình ảnh sản phẩm | REST API | Google Cloud Storage, Azure Blob |

### *3.1.3. Giả định và Ràng buộc thiết kế*

#### Ràng Buộc (Constraints): 

***Gợi ý:*** Đây là những hạn chế không thể thay đổi, được đặt ra bởi khách hàng, công nghệ, hoặc môi trường. Hãy phân loại chúng cho rõ ràng (ví dụ: Ràng buộc công nghệ, Ràng buộc kinh doanh, Ràng buộc triển khai).  
*Ví dụ:* 

- Công nghệ: Phải sử dụng Java 17+, React 18+.  
- Triển khai: Triển khai trên AWS Free Tier trong giai đoạn POC.  
- Giao diện: Hỗ trợ giao diện responsive (desktop \+ mobile).  
- Bảo mật: Mọi API phải sử dụng HTTPS.

####  Giả Định (Assumptions): 

***Gợi ý:*** Đây là những điều kiện hoặc niềm tin mà NHÓM PHÁT TRIỂN CHO LÀ ĐÚNG tại thời điểm thiết kế. Các giả định này cần được kiểm chứng và có thể thay đổi trong tương lai. Chúng giúp đơn giản hóa bài toán trong giai đoạn đầu.  
*Ví dụ:* 

- Quy mô: Số lượng đơn hàng đồng thời \< 100/giờ trong 6 tháng đầu.  
- Độ tin cậy: Hệ thống thanh toán bên thứ ba có độ tin cậy 99.9%.  
- Hành vi người dùng: Người dùng sẽ có kết nối Internet ổn định khi sử dụng ứng dụng.

## ***3.2 Container Diagram***

***Gợi ý:*** Container Diagram mô tả "bản đồ kiến trúc" tổng thể của hệ thống. Hãy tưởng tượng bạn đang "zoom" vào bên trong Hệ thống từ sơ đồ ngữ cảnh.

- Liệt kê tất cả các "container" (ứng dụng, dịch vụ có thể chạy độc lập) sẽ tạo nên hệ thống. Các khối kiến trúc chính của hệ thống: ứng dụng web, ứng dụng di động, API backend, cơ sở dữ liệu, các dịch vụ nền (background services)  
- Vẽ sơ đồ thể hiện các container này và các kết nối giữa chúng (bao gồm cả kết nối đến hệ thống bên ngoài từ 3.1.2).  
- Với mỗi container, hãy mô tả theo một cấu trúc thống nhất: Vai trò, Công nghệ và Cách giao tiếp. Điều này giúp người đọc dễ dàng hình dung toàn bộ kiến trúc.

*Ví dụ:* Sơ đồ  
![][image2]

### *1\. Web Application (Frontend Web)*

Khi mô tả Web Application, sinh viên cần:

- Nêu vai trò của ứng dụng web (giao diện chính cho người dùng).  
- Ghi rõ công nghệ/framework dự kiến.  
- Mô tả cách giao tiếp với backend 

*Ví dụ:* Web Application cung cấp giao diện cho khách hàng và quản trị viên truy cập hệ thống thông qua trình duyệt. Ứng dụng được phát triển bằng ReactJS kết hợp TailwindCSS, triển khai dưới dạng Single Page Application (SPA). Giao tiếp với API Backend thông qua giao thức HTTPS/REST API.

### *2\. Mobile Application (Frontend Mobile)*

Trong mục này, sinh viên cần trình bày:

- Ai sử dụng ứng dụng di động, trong bối cảnh nào.  
- Loại mobile app (native hay hybrid).  
- Công nghệ/framework dự kiến.  
- Cách nó kết nối với backend.

*Ví dụ:* Mobile Application phục vụ người dùng cuối muốn mua hàng qua smartphone. Ứng dụng được phát triển bằng Flutter để hỗ trợ cả iOS và Android. Ứng dụng giao tiếp với API Backend thông qua HTTPS, định dạng dữ liệu JSON. Các chức năng chính tương đồng với Web App.

### *3\. API Backend (Application Server)*

Ở mục này, sinh viên nên làm rõ:

- Vai trò chính của backend trong xử lý nghiệp vụ.  
- Công nghệ/framework lựa chọn.  
- Loại API cung cấp (REST, GraphQL, gRPC…).  
- Cách kết nối tới database và hệ thống ngoài.

*Ví dụ:* API Backend chịu trách nhiệm xử lý logic nghiệp vụ (đặt hàng, quản lý giỏ hàng, xử lý thanh toán). Backend được phát triển bằng Spring Boot (Java 17), cung cấp REST API cho Web App và Mobile App. API Backend kết nối với PostgreSQL thông qua JPA/ Hibernate, đồng thời gọi dịch vụ ngoài như VNPay và SMTP Server qua giao thức HTTPS.

### *4\. Database*

Trong phần Database (Cơ sở dữ liệu – CSDL), sinh viên cần mô tả:

- Mục đích sử dụng (lưu dữ liệu gì).  
- Loại CSDL (quan hệ hay NoSQL).  
- Công nghệ dự kiến.  
- Cách kết nối từ backend.

*Ví dụ:* Database lưu trữ dữ liệu người dùng, sản phẩm, đơn hàng và thanh toán. Hệ thống sử dụng PostgreSQL 14 vì tính ổn định và hỗ trợ tốt cho dữ liệu quan hệ. API Backend kết nối với CSDL thông qua JPA/Hibernate.

### *5\. Background Services* 

***Gợi ý:*** Đây là các dịch vụ chạy ngầm, không trực tiếp tương tác với người dùng. Hãy suy nghĩ về các tác vụ tốn thời gian hoặc có thể xử lý sau (asynchronous).

- Liệt kê các công việc cụ thể mà dịch vụ nền này đảm nhận.  
- Giải thích lý do tại sao nó lại được tách ra thành một service riêng (ví dụ: để tránh block luồng xử lý chính, để dễ dàng mở rộng).  
- Mô tả cơ chế kích hoạt (trigger) cho nó (ví dụ: lịch trình cố định, sự kiện từ hàng đợi, lời gọi HTTP).

Phần dịch vụ nền này nên làm rõ:

- Các tác vụ bất đồng bộ/dài hạn mà hệ thống cần (gửi email, xử lý log, đồng bộ dữ liệu…).  
- Công nghệ/framework có thể sử dụng.  
- Cách giao tiếp với backend hoặc hệ thống ngoài.

*Ví dụ:* Background Services chịu trách nhiệm thực hiện các tác vụ bất đồng bộ như gửi email xác nhận đơn hàng và đồng bộ dữ liệu sản phẩm. Dịch vụ nền có thể được triển khai bằng AWS Lambda hoặc Spring Scheduler. Các service này nhận sự kiện từ API Backend thông qua hàng đợi (ví dụ: RabbitMQ) hoặc được kích hoạt theo lịch trình định kỳ.

# **4\. Thiết kế chi tiết**

## ***4.1 Component Diagram*** 

***Gợi ý:*** Phân rã một Container chính (ví dụ như API/Backend Service) thành các Component logic nhỏ hơn, mỗi Component có trách nhiệm rõ ràng theo nguyên tắc *Single Responsibility Principle (SRP)*. Việc mô tả giúp làm rõ ranh giới trách nhiệm, xác định giao diện để các Component giao tiếp với nhau và chỉ ra sự phụ thuộc vào các thành phần khác hoặc dịch vụ bên ngoài.

- Chọn Container để phân rã: Thường chọn Container phức tạp nhất, chứa nhiều logic nghiệp vụ nhất (ví dụ: API Backend).  
- Xác định Component: Với mỗi nghiệp vụ chính (Quản lý người dùng, Quản lý đơn hàng, Thanh toán, v.v.), hãy tạo ra một Component tương ứng. Tên component nên phản ánh trách nhiệm của nó   
  (ví dụ: UserRegistrationService, OrderProcessingComponent).  
- Mô tả rõ ràng: Sử dụng bảng để liệt kê một cách hệ thống. Đảm bảo mỗi component đều có:  
  + Vai trò: Một câu mô tả ngắn gọn, súc tích.  
  + Giao diện: Cách thức các component khác tương tác với nó (API endpoint, tên method, message channel).  
  + Phụ thuộc: Nó cần dùng đến component hay dịch vụ nào khác để hoàn thành nhiệm vụ.

***Các mục trình bày:***

- Vẽ sơ đồ C4 Level 3 hoặc UML Component Diagram.  
- Liệt kê các Component chính, mô tả:  
  + Vai trò: trách nhiệm chính của component.  
  + Giao diện (Interface Contract): REST API, Method Signature, Message Queue Topic…  
  + Phụ thuộc: các component khác hoặc dịch vụ ngoài mà nó sử dụng.

- Đảm bảo mỗi component tuân thủ SRP và có ranh giới trách nhiệm rõ ràng.

*Ví dụ:*

| Component | Vai trò | Giao diện | Phụ thuộc |
| ----- | ----- | ----- | ----- |
| OrderService | Quản lý vòng đời đơn hàng (tạo, cập nhật) | REST API /orders | UserService, PaymentAdapter, DB |
| UserService | Quản lý thông tin người dùng | REST API /users | Database |
| PaymentAdapter | Tích hợp cổng thanh toán VNPay | Internal Method processPayment | VNPay API |
| NotificationSvc | Gửi email và thông báo hệ thống | Event Consumer | Email Server, Message Queue |

![][image3]

## ***4.2 Mô hình dữ liệu (Database Design)***

***Gợi ý:*** Mô tả chi tiết thiết kế cơ sở dữ liệu, bao gồm các bảng dữ liệu chính, quan hệ giữa chúng, cũng như các ràng buộc cần thiết. Việc thể hiện thông qua sơ đồ ERD hoặc mô tả bảng giúp đảm bảo tính toàn vẹn dữ liệu, hạn chế dư thừa và phục vụ tốt cho nghiệp vụ của hệ thống. Đồng thời, việc lựa chọn mô hình cơ sở dữ liệu (SQL hoặc NoSQL) cũng cần được giải thích rõ ràng.

- Lựa chọn CSDL: Giải thích ngắn gọn tại sao chọn SQL (PostgreSQL, MySQL) hoặc NoSQL (MongoDB, Redis). Lý do thường dựa trên tính chất dữ liệu (có cấu trúc rõ ràng, cần quan hệ phức tạp \=\> SQL; dữ liệu linh hoạt, truy vấn đơn giản, cần hiệu năng cao \=\> NoSQL).  
- Vẽ ERD: Sử dụng công cụ như [Draw.io](https://Draw.io), Lucidchart. Đảm bảo thể hiện đầy đủ các thực thể, thuộc tính chính và mối quan hệ (1-1, 1-nhiều, nhiều-nhiều).  
- Mô tả bảng: Chọn ra 3-5 bảng quan trọng nhất để mô tả chi tiết. Với mỗi cột, hãy cân nhắc:  
  + Kiểu dữ liệu: Chọn cho phù hợp (VARCHAR(255) cho chữ, INT/BIGINT cho số, DECIMAL cho tiền, DATETIME cho thời gian).  
  + Ràng buộc: Sử dụng NOT NULL cho dữ liệu bắt buộc, UNIQUE cho các trường không trùng lặp, CHECK để giới hạn giá trị (ví dụ: Price \> 0).

***Các mục trình bày:***

- Trình bày lý do chọn loại cơ sở dữ liệu (SQL/NoSQL).  
- Vẽ ERD (Entity Relationship Diagram) mô tả các thực thể và các quan hệ  
- Với mỗi bảng chính, mô tả chi tiết:  
  + Tên bảng.  
  + Tên cột.  
  + Kiểu dữ liệu (cụ thể, ví dụ VARCHAR(255), DECIMAL(10,2)).  
  + Nullability (có thể null hay không).  
  + Khóa chính (PK), Khóa ngoại (FK).  
  + Các ràng buộc khác (UNIQUE, CHECK, DEFAULT).

*Ví dụ:* Bảng Product

| Cột | Kiểu Dữ liệu | Nullable | PK/FK | Ràng buộc |
| ----- | ----- | ----- | ----- | ----- |
| ProductID | BIGINT | NO | PK | AUTO INCREMENT |
| Name | VARCHAR(255) | NO |  | UNIQUE |
| Price | DECIMAL(10, 2\) | NO |  | CHECK (Price \> 0\) |

## ***4.3 Thiết kế lớp***

***Gợi ý:*** Chi tiết cấu trúc lớp và luồng xử lý nghiệp vụ chính, qua đó làm rõ cách các thành phần trong hệ thống phối hợp với nhau. Việc thiết kế bao gồm cả sơ đồ lớp (Class Diagram) để mô tả cấu trúc tĩnh và sơ đồ tuần tự (Sequence Diagram) để minh họa luồng xử lý động. Đồng thời, cần chỉ ra các Design Pattern (như Repository, Adapter, Factory, v.v.) được áp dụng và cách tuân thủ nguyên tắc SOLID nhằm đảm bảo hệ thống dễ mở rộng, dễ bảo trì và có tính linh hoạt cao.

### *4.3.1. Class Diagram* 

***Gợi ý:***

- Tập trung vào module chính: Không cần vẽ toàn bộ hệ thống, hãy chọn một module nghiệp vụ quan trọng (ví dụ: module Quản lý Đơn hàng).  
- Xác định các lớp cốt lõi: Thường bao gồm: Controller (nhận request), Service (xử lý logic nghiệp vụ), Repository (giao tiếp với database), Entity/Model (đối tượng dữ liệu).  
- Thể hiện mối quan hệ: Sử dụng các mũi tên để chỉ rõ quan hệ "phụ thuộc", "sở hữu", hay "kế thừa".  
- Áp dụng Design Pattern: Nếu có, hãy ghi chú lại (ví dụ: "Sử dụng Repository Pattern để tách biệt logic nghiệp vụ và truy xuất dữ liệu").

***Các mục trình bày:***

- Vẽ các lớp chính trong một module (Controller, Service, Repository).  
- Mỗi lớp phải có mô tả trách nhiệm rõ ràng.  
- Nếu dùng Interface, giải thích cách tuân thủ Dependency Inversion Principle (DIP).

### *4.3.2. Sequence Diagram* 

***Gợi ý:***

- Chọn kịch bản điển hình: Chọn một luồng nghiệp vụ cụ thể, có đầu vào và đầu ra rõ ràng (ví dụ: "Người dùng tạo đơn hàng").  
- Xác định các đối tượng tham gia: Các đối tượng này thường tương ứng với các lớp trong Class Diagram.  
- Vẽ từ trên xuống dưới, theo thời gian: Thể hiện rõ thứ tự các bước xử lý.  
- Chú ý các tương tác bất đồng bộ: Nếu có gửi message đến hàng đợi hoặc xử lý callback, hãy thể hiện rõ bằng các mũi tên khác biệt.  
- Ghi chú cho các bước phức tạp: Đừng ngần ngại thêm ghi chú để giải thích các logic quan trọng hoặc các quyết định xử lý lỗi.

***Các mục trình bày:***

- Vẽ luồng xử lý cho một nghiệp vụ quan trọng (ví dụ: đặt hàng và thanh toán).  
- Làm rõ ranh giới (Boundary), logic xử lý (Service), và tầng dữ liệu (Repository).  
- Thể hiện rõ các lần gọi phương thức và dữ liệu trao đổi.
