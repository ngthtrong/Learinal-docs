# **Đặc tả yêu cầu phần mềm** 

# **cho**

# **Ứng dụng hỗ trợ học tập, luyện thi \- Learinal**

**Phiên bản 0.1** **Biên soạn bởi *Learinal Dev Team*** **Lớp Kỹ thuật phần mềm CLC K49, CTU** **01/09/2025**

---

# **Mục lục**

**Mục lục**  
**Lịch sử phiên bản**	  
**1\.	Giới thiệu**	  
1.1	Mục đích	  
1.2	Quy ước tài liệu	  
1.3	Phạm vi dự án	  
1.4	Tài liệu tham khảo  
**2\.	Mô tả tổng quan**	  
2.1	Bối cảnh sản phẩm	  
2.2	Phân loại và đặc điểm người dùng	  
2.3	Môi trường hoạt động	  
2.4	Các ràng buộc về thiết kế và triển khai	  
2.5	Các giả định và phụ thuộc	  
**3\.	Các tính năng của hệ thống**	  
3.1	Tính năng hệ thống 1	  
3.2	Tính năng hệ thống 2 (và các tính năng khác)	  
**4\.	Yêu cầu về dữ liệu**	  
4.1	Mô hình dữ liệu logic	  
4.2	Từ điển dữ liệu	  
4.3	Các báo cáo	  
4.4	Thu thập, toàn vẹn, lưu giữ và hủy bỏ dữ liệu	  
**5\.	Yêu cầu về giao diện bên ngoài**	  
5.1	Giao diện người dùng	  
5.2	Giao diện phần mềm	  
5.3	Giao diện phần cứng	  
5.4	Giao diện truyền thông	  
**6\.	Các thuộc tính chất lượng**	  
6.1	Tính khả dụng	  
6.2	Hiệu năng	  
6.3	Bảo mật	  
6.4	An toàn	  
6.5	\[Các thuộc tính liên quan khác\]	  
**7\.	Yêu cầu về quốc tế hóa và địa phương hóa**	  
**8\.	Các yêu cầu khác**	  
**Phụ lục A: Bảng chú giải thuật ngữ**	  
**Phụ lục B: Các mô hình phân tích**	

---

# **Lịch sử phiên bản**

| Tên | Ngày | Lý do thay đổi | Phiên bản |
| :---- | :---- | :---- | :---- |
| **Ứng dụng hỗ trợ học tập, luyện thi** | 15/09/2025 | Khởi tạo tài liệu | **v0.1.0** |
| **Learinal** | 27/09/2025 | Thêm tên dự án và hoàn thành tài liệu | **v0.1.1** |
| **Learinal** | 22/10/2025 | \[BỔ SUNG\] Cập nhật theo yêu cầu: Thêm mức độ câu hỏi, công thức tính điểm (trọng số theo mức độ), tóm tắt cho từng tài liệu, mô hình nhiều gói đăng ký và công thức tính hoa hồng cho Chuyên gia. | **v0.2** |

---

# **1\. Giới thiệu** 

Phần này cung cấp một cái nhìn tổng quan về Đặc tả Yêu cầu Phần mềm (SRS) cho dự án "Ứng dụng hỗ trợ học tập và luyện thi **Learinal**". Nó giải thích mục đích, các quy ước được sử dụng, phạm vi của sản phẩm và các tài liệu liên quan để người đọc có thể hiểu và sử dụng tài liệu này một cách hiệu quả.

## **1.1 Mục đích**

Tài liệu này đặc tả các yêu cầu chức năng và phi chức năng cho sản phẩm Ứng dụng hỗ trợ học tập, luyện thi **Learinal**, phiên bản 0.1.

Tài liệu này dành cho các đối tượng sau:

- Giảng viên hướng dẫn: Để theo dõi và đánh giá tiến độ, mức độ hoàn thành các yêu cầu của dự án.  
- Team Developer: Dùng làm cơ sở để thiết kế, triển khai và kiểm thử phần mềm, giúp các thành viên trong team có một cái nhìn đồng nhất về sản phẩm.  
- End user: Có thể tham khảo để hiểu rõ các tính năng và chức năng của ứng dụng.


## **1.2 Quy ước tài liệu** 

Tài liệu này tuân thủ một số quy ước trình bày để đảm bảo tính nhất quán và dễ đọc:

- Các yêu cầu chức năng, phi chức năng, use-case,... sẽ được định danh theo định dạng:   
* SF-XXX, trong đó SF viết tắt cho (System Feature), XXX là một số thứ tự duy nhất  
* FUNC-XXX, trong đó XXX là một số thứ tự duy nhất (ví dụ: FUNC-001).  
* NFR-XXX, trong đó XXX là một số thứ tự duy nhất (ví dụ: NFR-001).  
* UC-XXX, trong đó XXX là một số thứ tự duy nhất (ví dụ: UC-001).  
- Các thuật ngữ chuyên ngành sẽ được in đậm trong lần đầu tiên xuất hiện và được giải thích trong Phụ lục A: Bảng chú giải thuật ngữ.  
- Cụm từ **TBD** (To Be Determined \- Sẽ được xác định sau) được sử dụng để chỉ những thông tin chưa được quyết định tại thời điểm viết tài liệu.  
- Cụm từ **TBC** (To Be Confirmed- Sẽ được xác nhận sau) được sử dụng để chỉ những thông tin chưa và sẽ được xác nhận, thống nhất sau.  
- Các tài liệu tham khảo bên ngoài sẽ được in nghiêng

## **1.3 Phạm vi dự án** 

Mục tiêu chính của dự án là cung cấp một công cụ học tập thông minh, tận dụng sức mạnh của các Mô hình Ngôn ngữ Lớn (LLM) để tự động phân tích và chuyển đổi tài liệu học tập tĩnh của người dùng (văn bản, ghi chú, bài giảng) thành các công cụ ôn luyện tương tác như mục lục, tóm tắt và các bộ đề thi.

Phiên bản 0.1 của ứng dụng Learinal sẽ tập trung vào việc xây dựng các chức năng cốt lõi (Mức độ MVP \- Minimum Viable Product) cho ba nhóm người dùng chính.

### **Các tính năng trong phạm vi (In Scope):**

1. **Đối với Người học (Learner):**  
     
   * **Quản lý tài khoản:** Đăng ký, đăng nhập và quản lý thông tin tài khoản cá nhân.  
   * **Quản lý tài liệu:** Tải lên các tệp tài liệu (.pdf, .docx, .txt), hệ thống tự động trích xuất nội dung văn bản.  
   * **Tạo công cụ học tập:** Tự động tạo mục lục tổng hợp và tóm tắt nội dung cho một môn học dựa trên các tài liệu đã tải lên.  
   * **Tạo đề thi:** Tạo các bộ đề thi trắc nghiệm tùy chỉnh dựa trên nội dung tài liệu, với các tham số như số lượng câu hỏi, tỷ lệ nội dung và thời gian làm bài.  
   * **Luyện tập và xem kết quả:** Thực hiện làm bài thi thử, nhận kết quả ngay lập tức và xem lại đáp án kèm giải thích chi tiết.  
   * **Theo dõi tiến độ:** Xem bảng điều khiển thống kê kết quả học tập để nhận diện điểm mạnh, điểm yếu.  
   * **Tính năng Premium:** Yêu cầu đội ngũ Chuyên gia xác thực tính chính xác của một bộ đề thi do LLM tạo ra.  
   * **Chia sẻ bộ đề thi:** Tạo đường dẫn công khai để chia sẻ bộ đề thi với người khác.

   

2. **Đối với Chuyên gia (Expert):**  
     
   * **Kiểm duyệt nội dung:** Tiếp nhận, xem xét, chỉnh sửa và phê duyệt (hoặc từ chối) các bộ câu hỏi do Người học gửi yêu cầu xác thực.  
   * **Tạo nội dung Premium:** Soạn thảo và tải lên các bộ câu hỏi chất lượng cao để đưa vào kho đề chung của hệ thống.  
   * **Quản lý thu nhập:** Theo dõi hoa hồng nhận được từ hoạt động kiểm duyệt và từ các bộ đề tự tạo.

   

3. **Đối với Quản trị viên (Administrator):**  
     
   * **Quản lý quy trình xác thực:** Tiếp nhận yêu cầu xác thực từ Người học và phân công cho Chuyên gia phù hợp với lĩnh vực chuyên môn.  
   * **Quản lý người dùng:** Xem, tìm kiếm, vô hiệu hóa/kích hoạt và thay đổi vai trò của các tài khoản trong hệ thống.  
   * **Quản lý tài chính và thanh toán hoa hồng:** Theo dõi doanh thu từ các gói premium và quản lý quy trình thanh toán hoa hồng cho Chuyên gia.  
   * **Quản lý nội dung:** Duyệt và xuất bản các bộ câu hỏi do Chuyên gia tạo ra để đảm bảo chất lượng.  
   * **Cấu hình hệ thống:** Thiết lập và điều chỉnh thông tin các gói dịch vụ (giá, quyền lợi) và các chính sách, quy định chung.

### **Các tính năng ngoài phạm vi (Out of Scope):**

Để đảm bảo dự án được hoàn thành đúng tiến độ và tập trung vào giá trị cốt lõi, phiên bản 0.1 sẽ **không** bao gồm các tính năng sau:

* Hệ thống diễn đàn cộng đồng, nhắn tin trực tiếp giữa người dùng hoặc tạo nhóm học tập.  
* Ứng dụng di động độc lập (Native Mobile App) cho iOS và Android. Toàn bộ hệ thống sẽ là ứng dụng web.  
* Xử lý các định dạng tài liệu phức tạp như video, âm thanh hay file trình chiếu có nhiều hiệu ứng.  
* Tính năng tạo đề thi tự luận và chấm điểm tự động cho câu hỏi tự luận.  
* Các yếu tố trò chơi hóa (Gamification) như bảng xếp hạng, huy hiệu, điểm thưởng.  
* Tích hợp với các hệ thống quản lý học tập (LMS) của bên thứ ba.  
* Chức năng lớp học hoặc gia sư trực tuyến.

## **1.4 Tài liệu tham khảo**

1. Tài liệu API của dịch vụ Mô hình Ngôn ngữ Lớn sẽ được sử dụng \<Google Gemini API Documentation\>.

# **2\. Mô tả tổng quan**

Phần này trình bày một cái nhìn tổng quan cấp cao về sản phẩm Learinal, bối cảnh ra đời, các đối tượng người dùng dự kiến, môi trường hoạt động, cũng như các ràng buộc, giả định và yếu tố phụ thuộc đã được xác định.

## **2.1 Bối cảnh sản phẩm** 

Learinal là một sản phẩm phần mềm mới, được định vị như một công cụ học tập, luyện thi dành cho học sinh, sinh viên. Hệ thống sử dụng sức mạnh của Mô hình Ngôn ngữ Lớn (LLM) để phân tích và "hiểu" nội dung tài liệu mà người dùng tải lên, từ đó tự động chuyển đổi chúng thành các tài sản học tập có tính tương tác cao như mục lục, tóm tắt và các câu hỏi và bộ đề thi trắc nghiệm/tự luận, được kiểm duyệt tính chính xác của nội dung bởi đội ngũ chuyên gia khi người dùng có nhu cầu.

Sản phẩm này ra đời để giải quyết nhu cầu cá nhân hóa việc học, đặc biệt cho các môn học mang nặng tính lý thuyết hoặc các môn chuyên ngành có nguồn tài liệu đặc thù. Nó không phải là phiên bản kế thừa hay thay thế cho bất kỳ hệ thống nào trước đó.  
Sơ đồ ngữ cảnh của hệ thống:

![][image1]

## **2.2 Phân loại và đặc điểm người dùng** 

Hệ thống có hai nhóm người dùng chính được xác định như sau:

| Nhóm người dùng | Đặc điểm | Nhu cầu |
| :---- | :---- | :---- |
| Người học (Learner) | \- Là học sinh, sinh viên các cấp, hoặc người đi làm có nhu cầu tự học. \- Có sẵn tài liệu học tập ở định dạng kỹ thuật số (ví dụ: .pdf, .docx, .txt). \- Có kiến thức cơ bản về sử dụng máy tính. \- Thiếu thời gian và cần hiệu quả: Tìm kiếm các giải pháp giúp tự động hóa việc ôn tập để tiết kiệm thời gian. \- Tin tưởng vào các nội dung đã được "xác thực" hoặc được cộng đồng đánh giá cao. | \- Tạo công cụ học tập cá nhân hóa: Nhanh chóng biến tài liệu của riêng mình thành các bộ đề thi, mục lục, tóm tắt mà không cần tốn công soạn thảo thủ công. \- Sự tin cậy và chính xác: Cần một nguồn câu hỏi đáng tin cậy để ôn luyện cho các kỳ thi quan trọng.  \- Sẵn sàng trả phí để truy cập các bộ đề đã được chuyên gia xác thực. \- Luyện tập và đánh giá năng lực: Có một môi trường thi thử để làm quen với áp lực thời gian và kiểm tra kiến thức của bản thân. \- Khả năng chia sẻ và học tập cộng đồng: Muốn chia sẻ các bộ đề tự tạo với bạn bè và sử dụng các bộ đề do người khác chia sẻ. \- Theo dõi tiến độ và hiệu suất học tập của bản thân.\- Chia sẻ kiến thức (không chia sẻ dữ liệu): Muốn chia sẻ kết quả (bộ câu hỏi) với bạn bè hoặc cộng đồng mà không cần phải chia sẻ tài liệu gốc. |
| Chuyên gia (Expert) | \- Là nhân viên hoặc chuyên gia được công ty tuyển chọn và ký hợp đồng, không phải người dùng thông thường. \- Là người gác cổng chất lượng: Chịu trách nhiệm cuối cùng về tính chính xác học thuật của các bộ câu hỏi được đánh dấu "premium". \- Làm việc theo quy trình: Tuân thủ các quy trình và tiêu chuẩn kiểm duyệt nội dung do Quản trị viên đề ra. \- Có chuyên môn sâu và kinh nghiệm trong một hoặc nhiều lĩnh vực cụ thể (ví dụ: Toán cao cấp, Lịch sử Việt Nam, Kinh tế Vĩ mô...) | \- Một nguồn thu nhập minh bạch: Cần một hệ thống rõ ràng để theo dõi hiệu suất của các bộ đề mình tạo/kiểm duyệt và hoa hồng nhận được. \- Công cụ làm việc hiệu quả: Cần một giao diện (dashboard) chuyên nghiệp để dễ dàng nhận yêu cầu kiểm duyệt, chỉnh sửa câu hỏi, và tải lên các bộ đề mới. \- Quy trình làm việc rõ ràng: Cần các hướng dẫn và tiêu chuẩn cụ thể từ quản trị viên về việc thế nào là một bộ câu hỏi "đạt chuẩn". \- Có chuyên môn sâu và kinh nghiệm trong một hoặc nhiều lĩnh vực cụ thể (ví dụ: Toán cao cấp, Lịch sử Việt Nam, Kinh tế Vĩ mô...) |
| Quản trị viên (Administrator) | \- Là các thành viên trong nhóm phát triển và vận hành sản phẩm. \- Là người định hình chính sách: Đặt ra các quy tắc cho việc chia sẻ nội dung cộng đồng, các tiêu chuẩn cho việc xác thực của chuyên gia, và chính sách giá cho tài khoản premium.\- Quản lý toàn bộ hệ sinh thái: Giám sát sự tương tác giữa Người học, Chuyên gia, và nội dung trên nền tảng. \- Chịu trách nhiệm duy trì sự ổn định của hệ thống. | \- Quản lý quy trình xác thực: Cần một hệ thống để tiếp nhận yêu cầu xác thực từ Người học, phân công (assign) cho Chuyên gia phù hợp dựa trên lĩnh vực chuyên môn, và theo dõi tiến độ xử lý. \- Quản lý tài chính: Cần dashboard để theo dõi doanh thu từ các gói premium và quản lý lương/hoa hồng cho đội ngũ Chuyên gia. \- Bảo vệ quyền sở hữu trí tuệ: Xây dựng các điều khoản sử dụng rõ ràng, quy định rằng các bộ câu hỏi do người dùng tạo và chia sẻ có thể được nền tảng sử dụng và xác thực. |

Đối tượng người dùng chính mà phiên bản 0.1 tập trung hoàn thành sơ bộ dự án ở mức MVP.

## **2.3 Môi trường hoạt động** 

Phần này mô tả môi trường kỹ thuật mà hệ thống website Learinal sẽ hoạt động, bao gồm cả phía người dùng (Client) và phía máy chủ (Server).

**Phía Người dùng (Client-Side):**

- Trình duyệt web: Hệ thống có thể truy cập được thông qua các trình duyệt web hiện đại. Yêu cầu tương thích với hai phiên bản chính mới nhất của các trình duyệt phổ biến như:  
* Google Chrome  
* Mozilla Firefox  
* Microsoft Edge  
* Safari  
* …  
- Hệ điều hành: Có thể truy cập từ bất kỳ hệ điều hành nào có hỗ trợ các trình duyệt nêu trên (ví dụ: Windows, macOS, Linux, Android, iOS).  
- Phần cứng: Không yêu cầu phần cứng đặc biệt, chỉ cần một thiết bị (máy tính để bàn, laptop, máy tính bảng, điện thoại thông minh) có khả năng chạy trình duyệt web và có kết nối Internet.

**Phía Máy chủ (Server-Side):**

- Môi trường triển khai: Hệ thống sẽ được triển khai trên một nền tảng dịch vụ đám mây \<**TBC** Vercel\> để đảm bảo tính sẵn sàng và khả năng mở rộng.  
- Máy chủ web (Web Server): \<**TBC** Render\>.  
- Nền tảng/Ngôn ngữ phía máy chủ: \<**TBC** Nodejs với Nest.js\>.  
- Cơ sở dữ liệu: Sử dụng phi quan hệ (NoSQL) MongoDB.  
- Dịch vụ AI/ML: Hệ thống sẽ tích hợp và tương tác với một dịch vụ **Mô hình Ngôn ngữ Lớn (LLM)** của bên thứ ba thông qua API \<**TBC** Google Gemini API\>.

## **2.4 Các ràng buộc về thiết kế và triển khai** 

Phần này mô tả các yếu tố ràng buộc, giới hạn các lựa chọn cho đội ngũ phát triển khi thiết kế và xây dựng hệ thống.

- **Responsive Design**: Giao diện người dùng của website phải có khả năng tự động điều chỉnh để hiển thị tốt trên nhiều kích thước màn hình khác nhau, từ máy tính để bàn (desktop) đến máy tính bảng (tablet) và điện thoại di động (mobile).  
- **Technology Stack**: \<**TBC** ReactJS  cho frontend, Nodejs  với Nest.js cho backend).  
- **Tương thích trình duyệt**: Hệ thống phải đảm bảo hoạt động ổn định và nhất quán trên các trình duyệt đã được liệt kê trong mục 2.3.  
- **Độ trễ (Latency)**: Quá trình xử lý tài liệu và tạo đề thi phụ thuộc vào thời gian phản hồi của API từ dịch vụ LLM. Hệ thống phải được thiết kế để xử lý các tác vụ này một cách bất đồng bộ (ví dụ: sử dụng hàng đợi xử lý \- message queue, thông báo cho người dùng khi hoàn thành) để không làm treo giao diện người dùng.  
- **Chi phí (Cost):** Mỗi lệnh gọi đến API của LLM đều tốn chi phí, được tính dựa trên số lượng token (dữ liệu) đầu vào và đầu ra. Thiết kế hệ thống phải tối ưu hóa số lượng và độ lớn của các lệnh gọi API để kiểm soát chi phí vận hành.  
- **Giới hạn API (API Rate Limits):** Các dịch vụ LLM thường có giới hạn về số lượng yêu cầu mỗi phút (rate limit) và kích thước tối đa của tài liệu đầu vào (token limit). Hệ thống phải có cơ chế xử lý khi vượt quá các giới hạn này \<**TBD**: thử lại sau một khoảng thời gian, chia nhỏ tài liệu lớn\>.  
- **Quyền riêng tư dữ liệu**: Dữ liệu trong tài liệu của người dùng sẽ được gửi đến một nhà cung cấp dịch vụ LLM bên thứ ba để xử lý. Điều này phải được nêu rõ trong điều khoản sử dụng và chính sách bảo mật của ứng dụng.  
- **Tính nhất quán của đầu ra từ LLM:** Kết quả trả về từ LLM (cấu trúc JSON, chất lượng câu hỏi) có thể không phải lúc nào cũng nhất quán 100%. Backend phải có các bước kiểm tra (validation), làm sạch (sanitization) và xử lý lỗi chặt chẽ để đảm bảo dữ liệu hiển thị cho người dùng là hợp lệ và an toàn.  
- **Ngôn ngữ**: đáp ứng đủ hai phiên bản ngôn ngữ tiếng Việt và tiếng Anh  
- **Bảo mật**: Phải áp dụng các biện pháp bảo mật web cơ bản, quan trọng nhất là sử dụng giao thức HTTPS (SSL/TLS) để mã hóa toàn bộ dữ liệu truyền tải giữa client và server, bảo vệ thông tin của người dùng.  
- **Thời gian**: Các tính năng cốt lõi của phiên bản 0.1 phải được hoàn thành theo kế hoạch của môn học **(10 tuần) \+ 1 tuần sửa lỗi, thêm tính năng \+ 1 tuần hoàn thiện \= 10 tuần**.  
- Giới hạn tài nguyên (Resource Limits): Để đảm bảo hiệu năng hệ thống và kiểm soát chi phí vận hành, các giới hạn sau được áp dụng và có thể thay đổi tùy theo quyền lợi (entitlements) của từng gói đăng ký (xem Mục 4.1 
SubscriptionPlans):  
  - Dung lượng tệp tải lên: Mỗi tệp tin (.pdf, .docx, .txt) do người dùng tải lên không được vượt quá 20MB.  
  - Số lượng tệp tối đa: Mỗi Môn học được tạo ra không được chứa quá 50 tệp tài liệu (có thể khác nhau theo gói).  
  - Giới hạn chức năng theo gói (ví dụ mặc định): Gói Free tối đa 5 lần tạo đề thi/tháng; các gói trả phí có hạn mức cao hơn hoặc không giới hạn (cấu hình bởi Admin).

## **2.5 Các giả định và phụ thuộc** 

Phần này liệt kê các yếu tố được giả định là đúng và các yếu tố bên ngoài mà dự án phụ thuộc vào để có thể thành công.  
**Các giả định:**

- Người dùng có quyền truy cập vào một trình duyệt web hiện đại và đường truyền Internet ổn định để tải lên tài liệu và sử dụng các tính năng của hệ thống.  
- Người dùng có sẵn các tài liệu học tập của họ dưới dạng tệp kỹ thuật số (ví dụ: .pdf, .docx, .txt, .ppt, .doc,...).  
- Tài liệu do người dùng tải lên có cấu trúc tương đối rõ ràng (có tiêu đề, chương, mục) để các thuật toán xử lý ngôn ngữ tự nhiên có thể hoạt động hiệu quả.  
- Người dùng hiểu rằng chất lượng của kết quả (mục lục, đề thi) phụ thuộc vào chất lượng của tài liệu đầu vào.  
- Giả định rằng mô hình LLM được chọn có đủ khả năng hiểu và xử lý chính xác nội dung học thuật bằng tiếng Việt và tiếng Anh.  
- Giả định rằng LLM có thể tuân thủ một cách đáng tin cậy các chỉ dẫn (prompts) để trả về kết quả dưới định dạng JSON có cấu trúc như yêu cầu.

**Các phụ thuộc:**

- Phụ thuộc vào các dịch vụ/thư viện Xử lý Ngôn ngữ Tự nhiên (NLP): Chức năng cốt lõi của ứng dụng (phân tích văn bản, tạo câu hỏi) sẽ phụ thuộc vào các thư viện mã nguồn mở hoặc API của bên thứ ba. Hiệu suất, độ chính xác và chi phí (nếu có) của các dịch vụ này là một yếu tố phụ thuộc lớn.  
- Phụ thuộc vào nhà cung cấp dịch vụ đám mây: Sự ổn định, hiệu năng và các chính sách của nền tảng đám mây được chọn để triển khai backend sẽ ảnh hưởng trực tiếp đến hoạt động của toàn bộ website.  
- Phụ thuộc vào tên miền và DNS: Hệ thống cần một tên miền đã đăng ký và dịch vụ DNS hoạt động chính xác để người dùng có thể truy cập.  
- Phụ thuộc cốt lõi vào dịch vụ LLM của bên thứ ba: Toàn bộ chức năng xử lý nội dung của dự án phụ thuộc hoàn toàn vào tính sẵn có, hiệu suất, chính sách và chi phí của nhà cung cấp dịch vụ LLM. Bất kỳ thay đổi nào từ phía nhà cung cấp (ví dụ: thay đổi API, ngừng cung cấp mô hình, tăng giá) sẽ ảnh hưởng trực tiếp và nghiêm trọng đến hoạt động của sản phẩm.

# **3\. Các tính năng của hệ thống**

Phần này mô tả chi tiết các yêu cầu chức năng của sản phẩm. Các yêu cầu được nhóm theo từng tính năng chính mà hệ thống cung cấp. Để trực quan hóa sự tương tác giữa người dùng và hệ thống, một sơ đồ Use Case tổng quan sẽ được sử dụng, theo sau là các bảng phân rã chi tiết cho từng Use Case.

## **Sơ đồ Use Case tổng quan**

*![][image2]*  
---

## **Các tính năng dành cho Người học**

## **3.1. SF-01: Quản lý Tài khoản Người dùng**

Cung cấp các chức năng nền tảng cho phép người dùng tạo, xác thực và truy cập vào tài khoản cá nhân của họ. Đây là cổng vào để sử dụng tất cả các tính năng khác của hệ thống, đảm bảo định danh và bảo mật cho mỗi người dùng.

| Tên Use Case | UC-001: Đăng ký tài khoản |
| :---- | :---- |
| **Mã số** | UC-001 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người dùng mới (Khách truy cập) |
| **Mô tả** | Người dùng cung cấp thông tin cá nhân cần thiết (Họ tên, email, mật khẩu) để tạo một tài khoản mới trên hệ thống Learinal. Quá trình này yêu cầu xác thực qua email để kích hoạt và sử dụng tài khoản. |
| **Điều kiện tiên quyết** | 1\. Người dùng chưa có tài khoản trên hệ thống với email dự định đăng ký.  2\. Người dùng đang ở trang Đăng ký của ứng dụng. |
| **Luồng sự kiện chính (Thành công)** | 1\. Người dùng chọn chức năng "Đăng ký". 2\. Hệ thống hiển thị form đăng ký yêu cầu các thông tin: Họ và tên, Email, Mật khẩu, và Xác nhận mật khẩu. 3\. Người dùng nhập đầy đủ và hợp lệ các thông tin được yêu cầu. 4\. Người dùng nhấn nút "Đăng ký". 5\. Hệ thống kiểm tra và xác nhận email chưa tồn tại trong Cơ sở dữ liệu (CSDL). 6\. Hệ thống thực hiện mã hóa (hash) mật khẩu của người dùng. 7\. Hệ thống tạo một bản ghi tài khoản mới trong CSDL với các thông tin đã cung cấp, gán vai trò mặc định là \`Learner\` và trạng thái tài khoản là \`Chờ xác thực\`. 8\. Hệ thống gửi một email chứa đường dẫn kích hoạt đến địa chỉ email người dùng đã đăng ký. 9\. Hệ thống hiển thị thông báo đăng ký thành công, kèm theo hướng dẫn người dùng kiểm tra hộp thư email để kích hoạt tài khoản. |
| **Luồng sự kiện thay thế (Thất bại)** | **3a. Thông tin đầu vào không hợp lệ:** Tại bước 3, nếu người dùng nhập thông tin không hợp lệ: **3a1.** Nếu bất kỳ trường nào bị bỏ trống, hệ thống hiển thị lỗi tại trường đó: "Vui lòng không để trống". **3a2.** Nếu định dạng email không đúng (ví dụ: abc@mail, abc), hệ thống báo lỗi: "Định dạng email không hợp lệ".  **3a3.** Nếu Mật khẩu không khớp với Xác nhận mật khẩu, hệ thống báo lỗi: "Mật khẩu xác nhận không khớp".  **3a4.** Nếu Mật khẩu không đáp ứng chính sách bảo mật (xem *Yêu cầu đặc biệt*), hệ thống báo lỗi và chỉ rõ yêu cầu: "Mật khẩu quá yếu. Cần ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt."  *Use case kết thúc tại đây, người dùng ở lại trang để sửa lỗi.* **5a. Email đã tồn tại:** Tại bước 5, nếu hệ thống phát hiện email đã có trong CSDL:  Hệ thống báo lỗi: "Email này đã được sử dụng. Vui lòng sử dụng email khác hoặc chọn 'Quên mật khẩu'."  *Use case kết thúc tại đây, người dùng ở lại trang để sửa lỗi.* **8a. Gửi email xác thực thất bại:** Tại bước 8, nếu hệ thống gặp lỗi khi gửi email:  Hệ thống ghi nhận lỗi nội bộ.  Hệ thống hiển thị thông báo cho người dùng: "Đã có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ hỗ trợ." *Use case kết thúc.*  |
| **Điều kiện sau** | **Thành công:** Một tài khoản mới được tạo trong hệ thống với trạng thái "Chờ xác thực". Một email kích hoạt đã được gửi đến địa chỉ email của người dùng. **Thất bại:** Không có tài khoản nào được tạo. Người dùng nhận được thông báo lỗi tương ứng.  |
| **Yêu cầu đặc biệt** | \- **Chính sách mật khẩu:** Mật khẩu phải được lưu trữ trong CSDL dưới dạng đã mã hóa (hashed). Mật khẩu phải có độ dài tối thiểu 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt. \- Kích hoạt tài khoản: Tài khoản chỉ có thể đăng nhập và sử dụng đầy đủ chức năng sau khi người dùng nhấp vào đường dẫn kích hoạt trong email. Đường dẫn này sẽ có thời hạn hiệu lực là 24 giờ. |
| **Ghi chú/Quan hệ** | \- **Khởi tạo:** Luồng sự kiện chính của Use Case này sẽ khởi tạo một quy trình riêng biệt là **UC-XXX: Kích hoạt tài khoản** (cần được định nghĩa), bắt đầu khi hệ thống gửi email xác thực. \- Điều kiện tiên quyết cho: Use Case này là điều kiện tiên quyết cho UC-002: Đăng nhập và hầu hết các Use Case khác của vai trò Người học và Chuyên gia. \- Quan hệ khác: Use Case này không \`\<\>\` hay \`\<\>\` bất kỳ Use Case hỗ trợ nào khác (như UC-AUTH) vì nó diễn ra trước khi người dùng được xác thực. |

| Tên Use Case | UC-002: Đăng nhập |
| :---- | :---- |
| **Mã số** | UC-002 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học, Chuyên gia, Quản trị viên |
| **Mô tả** | Người dùng cung cấp email và mật khẩu để xác thực và truy cập vào các chức năng của hệ thống tương ứng với vai trò của họ. |
| **Điều kiện tiên quyết** | 1\. Người dùng đã có một tài khoản được tạo (UC-001) và đã được **kích hoạt** qua email. 2\. Người dùng đang ở trang Đăng nhập của ứng dụng. |
| **Luồng sự kiện chính (Thành công)** | 1\. Người dùng nhập email và mật khẩu vào các trường tương ứng trên form đăng nhập. 2\. Người dùng nhấn nút "Đăng nhập". 3\. Hệ thống kiểm tra tính hợp lệ của dữ liệu đầu vào (không được để trống). 4\. Hệ thống tìm kiếm tài khoản trong CSDL dựa trên email người dùng cung cấp. 5\. Hệ thống so sánh mật khẩu người dùng nhập (sau khi hash) với mật khẩu đã được mã hóa lưu trong CSDL. 6\. Hệ thống xác nhận trạng thái tài khoản là "Đang hoạt động". 7\. Hệ thống tạo một phiên làm việc (session) hoặc một token xác thực (ví dụ: JWT) cho người dùng. 8\. Hệ thống chuyển hướng người dùng đến trang Bảng điều khiển (Dashboard) phù hợp với vai trò của họ (Người học, Chuyên gia hoặc Quản trị viên). |
| **Luồng sự kiện thay thế (Thất bại)** | **5a. Thông tin không chính xác:** Tại bước 4 hoặc 5, nếu email không tồn tại hoặc mật khẩu không khớp, hệ thống sẽ hiển thị một thông báo lỗi chung: "Thông tin đăng nhập không chính xác."     *Use case kết thúc, người dùng ở lại trang để nhập lại.*  6a. Tài khoản chưa kích hoạt: Tại bước 6, nếu trạng thái tài khoản là "Chờ xác thực", hệ thống hiển thị thông báo: "Tài khoản của bạn chưa được kích hoạt. Vui lòng kiểm tra email để hoàn tất đăng ký."     *Use case kết thúc.*  6b. Tài khoản bị vô hiệu hóa: Tại bước 6, nếu trạng thái tài khoản là "Vô hiệu hóa", hệ thống hiển thị thông báo: "Tài khoản của bạn đã bị khóa. Vui lòng liên hệ bộ phận hỗ trợ."     *Use case kết thúc.*  7a. Quá nhiều lần đăng nhập thất bại: Nếu hệ thống phát hiện quá nhiều lần đăng nhập sai từ một địa chỉ IP hoặc cho một tài khoản trong khoảng thời gian ngắn (ví dụ: 5 lần trong 5 phút):     1\. Hệ thống tạm thời khóa chức năng đăng nhập cho tài khoản/IP đó.     2\. Hệ thống hiển thị thông báo: "Bạn đã đăng nhập sai quá nhiều lần. Vui lòng thử lại sau 15 phút."     *Use case kết thúc.* |
| **Điều kiện sau** | **Thành công:** Người dùng được xác thực, có một phiên làm việc hợp lệ và có thể truy cập các tính năng được cấp phép theo vai trò của mình. **Thất bại**: Người dùng vẫn ở trang Đăng nhập và nhận được thông báo lỗi tương ứng. Không có phiên làm việc nào được tạo. |
| **Yêu cầu đặc biệt** | \- **Bảo mật:** Trang đăng nhập phải có liên kết đến chức năng "Quên mật khẩu". Hệ thống phải triển khai cơ chế chống tấn công Brute-force như đã mô tả trong luồng 7a. \- Trải nghiệm người dùng: Hệ thống nên có tùy chọn "Ghi nhớ đăng nhập" để duy trì phiên làm việc cho người dùng trong một khoảng thời gian dài hơn. |
| **Ghi chú/Quan hệ** | \- **Là điều kiện tiên quyết cho:** Hầu hết các Use Case khác trong hệ thống, vì chúng đều yêu cầu xác thực thông qua **UC-AUTH**. \- Phụ thuộc vào: Tài khoản đã được tạo và kích hoạt từ UC-001: Đăng ký tài khoản. |

---

## **3.2. SF-02: Quản lý và Xử lý Tài liệu học tập**

Là tính năng nền tảng cho phép người dùng tải lên tài liệu học tập (ví dụ: .pdf, .docx). Hệ thống sẽ tự động tiếp nhận, xử lý (trích xuất văn bản), và lưu trữ nội dung để chuẩn bị cho các tính năng tạo công cụ học tập khác.

| Tên Use Case | UC-003: Tải lên và xử lý tài liệu |
| :---- | :---- |
| **Mã số** | UC-003 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Người học tải lên một hoặc nhiều tệp tài liệu cho một môn học cụ thể. Hệ thống sẽ tự động đưa vào hàng đợi để số hóa (trích xuất văn bản) và phân tích nội dung. |
| **Điều kiện tiên quyết** | Người học đã đăng nhập vào hệ thống. |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn một môn học hoặc tạo môn học mới. 2\. Người học chọn chức năng "Tải lên tài liệu". 3\. Hệ thống hiển thị giao diện cho phép chọn tệp từ máy tính cá nhân. 4\. Người học chọn một hoặc nhiều tệp hợp lệ (.pdf, .docx, .txt). 5\. Hệ thống hiển thị trạng thái đang tải lên cho từng tệp. 6\. Sau khi tải lên hoàn tất, hệ thống đưa yêu cầu xử lý tệp vào hàng đợi (queue) và thông báo cho người dùng rằng "Tài liệu đang được xử lý". 7\. Một tiến trình nền (background worker) lấy yêu cầu từ hàng đợi và thực hiện:      7a. Trích xuất nội dung văn bản.      7b. Gọi API của LLM để tạo một bản tóm tắt cho nội dung tài liệu vừa trích xuất      7c. Phân tích cấu trúc sơ bộ. 8\. Hệ thống lưu trữ nội dung đã xử lý, liên kết với tài khoản người dùng và môn học tương ứng. 9\. Hệ thống gửi thông báo (notification) cho người dùng khi xử lý hoàn tất và cập nhật giao diện quản lý tài liệu. |
| **Luồng sự kiện thay thế (Thất bại)** | **4a. Chọn tệp không hợp lệ:** Tại bước 4, nếu người dùng chọn tệp không đúng định dạng hoặc vượt quá dung lượng tối đa cho phép, hệ thống sẽ báo lỗi ngay lập tức và không cho phép tải lên. 7a. Quá trình trích xuất văn bản thất bại: Tại bước 7, nếu tệp bị lỗi, có mật khẩu bảo vệ, hoặc chỉ chứa hình ảnh (không có lớp văn bản), hệ thống sẽ cập nhật trạng thái tệp thành "Lỗi xử lý" và thông báo cho người dùng.7b. Lỗi trích xuất do định dạng kém: Tại bước 7, nếu hệ thống phát hiện tệp chỉ chứa hình ảnh (văn bản không thể chọn được) hoặc có cấu trúc quá phức tạp không thể phân tích, hệ thống sẽ cập nhật trạng thái tệp thành "Lỗi xử lý \- Định dạng không phù hợp" và gửi thông báo cho người dùng. |
| **Điều kiện sau** | **Thành công:** Nội dung văn bản từ tài liệu được lưu trữ trong CSDL, sẵn sàng cho các chức năng khác. Thất bại: Tệp không được xử lý và người dùng nhận được thông báo lỗi. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu người dùng phải được xác thực trước khi thực hiện. \- Điều kiện tiên quyết cho: UC-004 (Tạo mục lục), UC-005 (Tạo đề thi), UC-009 (Xóa tài liệu). \- Kiến trúc: Việc sử dụng hàng đợi (queue) là một yêu cầu quan trọng để xử lý bất đồng bộ, tránh làm treo giao diện người dùng. |

| Tên Use Case | UC-003A: Hiển thị tóm tắt tự động cho từng tài liệu |
| :---- | :---- |
| **Mã số** | UC-003A |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Khi người học mở một tài liệu đã được xử lý, hệ thống hiển thị phần tóm tắt ngắn gọn (auto summary) ở đầu nội dung tài liệu, tương tự trải nghiệm "pinned summary" như NotebookLM. Người học có thể xem phiên bản tóm tắt đầy đủ và làm mới (re-generate) khi nội dung tài liệu thay đổi. |
| **Điều kiện tiên quyết** | 1. Người học đã đăng nhập. 2. Tài liệu đã được xử lý thành công và có trường `document.summaryShort` hoặc `document.summaryFull`. |
| **Luồng sự kiện chính (Thành công)** | 1. Người học mở trang chi tiết của một tài liệu. 2. Hệ thống tải metadata của tài liệu và phần tóm tắt. 3. Hệ thống hiển thị "Tóm tắt" (phiên bản ngắn) ở đầu trang, cho phép mở rộng để xem phiên bản đầy đủ. 4. Nếu chưa có tóm tắt, hệ thống hiển thị nút "Tạo tóm tắt" và đưa yêu cầu vào hàng đợi để LLM tạo. |
| **Luồng sự kiện thay thế** | 4a. LLM lỗi hoặc vượt hạn mức: Hệ thống hiển thị thông báo thân thiện và cho phép thử lại sau. 4b. Tài liệu quá dài: Hệ thống gợi ý rút gọn nội dung hoặc tạo tóm tắt theo từng phần. |
| **Điều kiện sau** | Người học luôn thấy tóm tắt của tài liệu ở vị trí cố định trên cùng, giúp nắm bắt nhanh nội dung chính. |
| **Yêu cầu đặc biệt** | - Độ dài mặc định: summaryShort ~ 3-5 câu; summaryFull ~ 6-10 gạch đầu dòng (cấu hình được). - Hệ thống lưu thời điểm tạo tóm tắt để tự động gợi ý cập nhật khi `extractedText` thay đổi đáng kể. |

---

## **3.3. SF-03: Tạo công cụ học tập tương tác**

Là bộ tính năng cốt lõi của Learinal, sử dụng sức mạnh của Mô hình Ngôn ngữ Lớn (LLM) để biến đổi nội dung tài liệu tĩnh thành các công cụ học tập hữu ích và tương tác như mục lục, tóm tắt và các bộ đề thi trắc nghiệm.

| Tên Use Case | UC-004: Tạo mục lục và tóm tắt môn học |
| :---- | :---- |
| **Mã số** | UC-004 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Dựa trên tất cả tài liệu đã được xử lý thành công cho một môn học, hệ thống sử dụng LLM để tự động tạo ra một cấu trúc mục lục tổng hợp và một bản tóm tắt các ý chính. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Đã tải lên và xử lý thành công ít nhất một tài liệu cho môn học (UC-003). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn môn học muốn xem. 2\. Người học nhấn nút "Cập nhật mục lục/tóm tắt". 3\. Backend tổng hợp toàn bộ nội dung văn bản của các tài liệu thuộc môn học đó. 4\. Backend tạo một prompt chi tiết và gửi nội dung đến dịch vụ LLM, yêu cầu trả về cấu trúc mục lục và tóm tắt theo định dạng JSON. 5\. Hệ thống nhận kết quả từ LLM, xác thực (validate) cấu trúc và lưu vào CSDL. 6\. Hệ thống hiển thị mục lục và tóm tắt mới cho người dùng. |
| **Luồng sự kiện thay thế (Thất bại)** | **5a. Dịch vụ LLM trả về lỗi:** Nếu API của LLM trả về lỗi (ví dụ: quá tải, nội dung không phù hợp), hệ thống sẽ thông báo cho người dùng: "Không thể tạo mục lục lúc này, vui lòng thử lại sau." 5b. Định dạng trả về không hợp lệ: Nếu LLM trả về dữ liệu không đúng cấu trúc JSON mong đợi, backend sẽ cố gắng xử lý lại hoặc báo lỗi cho người dùng. |
| **Điều kiện sau** | Người học có một cái nhìn tổng quan về cấu trúc và nội dung chính của môn học. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Phụ thuộc vào: UC-003 (Tải lên và xử lý tài liệu). |

| Tên Use Case | UC-005: Tạo bộ đề thi trắc nghiệm |
| :---- | :---- |
| **Mã số** | UC-005 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Người học tùy chỉnh các tham số để tạo một bộ đề thi trắc nghiệm từ một hoặc nhiều phần nội dung trong môn học. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Môn học đã có mục lục được tạo thành công (UC-004). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn chức năng "Tạo đề thi". 2\. Hệ thống hiển thị giao diện tùy chỉnh, bao gồm cấu trúc mục lục của môn học. 3\. Người học chọn các chương/mục muốn đưa vào đề thi. 4\. Người học thiết lập các tham số: số lượng câu hỏi, tỷ lệ các câu hỏi theo mức độ (Biết, Hiểu, Vận dụng, Vận dụng cao), và thời gian làm bài (tùy chọn). (ví dụ: 40% Biết, 30% Hiểu, 20% Vận dụng, 10% Vận dụng cao) 5\. Người học nhấn "Bắt đầu tạo". 6\. Hệ thống gửi yêu cầu (bao gồm nội dung các phần đã chọn và tham số) đến backend. 7\. Backend sử dụng LLM để sinh ra bộ câu hỏi, đáp án, và giải thích chi tiết theo định dạng JSON. 8\. Hệ thống nhận kết quả, xác thực định dạng, và lưu bộ đề thi mới vào CSDL. 9\. Hệ thống thông báo tạo đề thành công và thêm bộ đề vào danh sách bài thi của người dùng. |
| **Điều kiện sau** | Một bộ đề thi mới được tạo và sẵn sàng để người học luyện tập. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Phụ thuộc vào: UC-004 (Tạo mục lục). \- Là điều kiện tiên quyết cho: UC-006 (Làm bài thi thử), UC-010 (Yêu cầu xác thực). |

---

## **3.4. SF-04: Luyện thi và Theo dõi tiến độ**

Cung cấp môi trường cho người học thực hành làm các bài thi thử đã tạo, xem lại kết quả chi tiết sau khi hoàn thành, và theo dõi hiệu suất học tập của mình qua các biểu đồ, thống kê trực quan.

| Tên Use Case | UC-006: Làm bài thi thử |
| :---- | :---- |
| **Mã số** | UC-006 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Người học thực hiện làm một bộ đề thi đã tạo trong khoảng thời gian (nếu có) đã định. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Có ít nhất một bộ đề thi đã được tạo (UC-005). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn một bộ đề thi từ danh sách. 2\. Hệ thống hiển thị giao diện làm bài thi với các câu hỏi và bộ đếm thời gian (nếu có). 3\. Người học đọc và chọn câu trả lời cho từng câu. 4\. Người học nhấn nút "Nộp bài" (hoặc hết giờ, hệ thống tự nộp). 5\. Hệ thống ghi nhận các câu trả lời, tự động chấm điểm. 6\. Hệ thống lưu lại kết quả bài làm (điểm số, các câu trả lời đã chọn) vào CSDL. 7\. Hệ thống chuyển hướng người dùng đến trang kết quả (UC-007). |
| **Điều kiện sau** | Kết quả bài làm của người học được ghi lại. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Phụ thuộc vào: UC-005 (Tạo đề thi). \- Kích hoạt: Use Case này sẽ tự động kích hoạt UC-007 (Xem lại kết quả) sau khi hoàn thành. |

| Tên Use Case | UC-007: Xem lại kết quả và đáp án |
| :---- | :---- |
| **Mã số** | UC-007 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Người học |
| **Mô tả** | Sau khi nộp bài, người học xem lại chi tiết bài làm của mình, bao gồm điểm số, câu trả lời đúng/sai và lời giải thích chi tiết. |
| **Điều kiện tiên quyết** | Người học vừa hoàn thành một bài thi (UC-006) hoặc chọn xem lại một bài thi đã làm trong lịch sử. |
| **Luồng sự kiện chính (Thành công)** | 1\. Hệ thống hiển thị trang kết quả với điểm số tổng quát. 2\. Người dùng chọn xem lại chi tiết. 3\. Hệ thống hiển thị lại toàn bộ câu hỏi, chỉ rõ: câu trả lời của người dùng, đáp án đúng, và phần giải thích/gợi ý ghi nhớ cho mỗi câu. |
| **Điều kiện sau** | Người học hiểu được lỗi sai của mình và củng cố kiến thức. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Được kích hoạt bởi: UC-006 (Làm bài thi thử). |

| Tên Use Case | UC-008: Xem bảng điều khiển tiến độ |
| :---- | :---- |
| **Mã số** | UC-008 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Người học |
| **Mô tả** | Người học truy cập trang dashboard để xem các thống kê và biểu đồ về quá trình học tập của mình. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Đã làm ít nhất một bài thi (UC-006). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học truy cập vào mục "Tiến độ học tập". 2\. Hệ thống truy xuất dữ liệu từ các bài làm trước đó. 3\. Hệ thống tổng hợp và hiển thị các thông tin: điểm số trung bình, tỷ lệ trả lời đúng/sai theo từng chương/mục (dựa trên mục lục của môn học), biểu đồ tiến bộ qua thời gian.  |
| **Điều kiện sau** | Người học có cái nhìn tổng quan về năng lực của mình để điều chỉnh kế hoạch học tập. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Phụ thuộc vào: Dữ liệu được tạo ra từ UC-006 (Làm bài thi thử). |

---

## **3.5. SF-05: Quản lý Tài liệu và Bộ đề cá nhân**

Cho phép người học quản lý không gian làm việc cá nhân của mình, bao gồm các chức năng như xem lại danh sách và xóa các tài liệu hoặc bộ đề không còn cần thiết, giúp giữ cho tài khoản luôn gọn gàng.

| Tên Use Case | UC-009: Xóa tài liệu học tập |
| :---- | :---- |
| **Mã số** | UC-009 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Người học |
| **Mô tả** | Người học có thể xóa một hoặc nhiều tài liệu đã tải lên khỏi một môn học khi không còn nhu cầu sử dụng. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Đã tải lên ít nhất một tài liệu (UC-003). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học vào trang quản lý tài liệu của một môn học. 2\. Người học chọn tài liệu muốn xóa. 3\. Hệ thống hiển thị hộp thoại yêu cầu xác nhận hành động xóa. 4\. Người học xác nhận. 5\. Hệ thống xóa tệp tài liệu gốc và nội dung đã trích xuất khỏi CSDL. 6\. Hệ thống thông báo xóa thành công, cập nhật lại giao diện và có thể đề nghị người dùng cập nhật lại mục lục môn học. |
| **Luồng sự kiện thay thế (Thất bại)** | **4a. Người học hủy bỏ hành động:** Tại bước 4, người học chọn "Hủy". Hệ thống đóng hộp thoại và không thực hiện hành động nào. |
| **Điều kiện sau** | Tài liệu được chọn bị xóa vĩnh viễn khỏi hệ thống. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Phụ thuộc vào: UC-003 (Tải lên và xử lý tài liệu). |

---

## **3.6. SF-06: Tương tác Cộng đồng và Nâng cao chất lượng**

Bao gồm các tính năng cho phép người học nâng cao chất lượng nội dung học tập của mình (thông qua việc yêu cầu chuyên gia xác thực) và chia sẻ kiến thức (thông qua việc chia sẻ bộ đề) với bạn bè hoặc cộng đồng.

| Tên Use Case | UC-010: Yêu cầu xác thực bộ câu hỏi |
| :---- | :---- |
| **Mã số** | UC-010 |
| **Mức độ ưu tiên** | CAO (Tính năng cốt lõi cho tài khoản Premium) |
| **Tác nhân** | Người học (có tài khoản premium) |
| **Mô tả** | Người học gửi một bộ đề thi do LLM tạo để đội ngũ chuyên gia của Learinal kiểm duyệt, chỉnh sửa và xác nhận tính chính xác. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Người học có tài khoản premium đang hoạt động. 3\. Có ít nhất một bộ đề thi đã tạo (UC-005). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn một bộ đề thi từ danh sách. 2\. Người học nhấn vào nút "Yêu cầu chuyên gia xác thực". 3\. Hệ thống tạo một yêu cầu xác thực và gửi vào hàng đợi của Quản trị viên. 4\. Hệ thống cập nhật trạng thái của bộ đề thành "Đang chờ xác thực". 5\. Người học nhận được thông báo yêu cầu đã được gửi thành công. |
| **Điều kiện sau** | Một yêu cầu xác thực mới được tạo và chờ Quản trị viên phân công (UC-015). |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- \<\> UC-PREMIUM: Nếu người dùng không có tài khoản premium, luồng UC-PREMIUM sẽ được kích hoạt để mời nâng cấp. \- Kích hoạt: Use Case này là điểm khởi đầu cho luồng công việc kiểm duyệt, kích hoạt UC-015 (Phân công yêu cầu). |

| Tên Use Case | UC-011: Chia sẻ bộ câu hỏi |
| :---- | :---- |
| **Mã số** | UC-011 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Người học |
| **Mô tả** | Người học tạo một đường dẫn công khai để chia sẻ bộ đề thi cho bạn bè hoặc cộng đồng. Hệ thống cũng cho phép người học thu hồi quyền truy cập vào đường dẫn đã chia sẻ. |
| **Điều kiện tiên quyết** | 1\. Người học đã đăng nhập. 2\. Có ít nhất một bộ đề thi. |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn một bộ đề thi muốn chia sẻ. 2\. Người học nhấn nút "Chia sẻ". 3\. Hệ thống tạo một đường dẫn duy nhất, không thể đoán trước cho bộ đề đó. 4\. Hệ thống hiển thị đường dẫn và cho phép người dùng sao chép. |
| **Luồng phụ: Thu hồi chia sẻ** | 1\. Người học truy cập trang quản lý các bộ đề đã tạo. 2\. Người học chọn bộ đề đang được chia sẻ và nhấn vào tùy chọn "Ngừng chia sẻ". 3\. Hệ thống hiển thị hộp thoại yêu cầu xác nhận. 4\. Người học xác nhận hành động. 5\. Hệ thống xóa đường dẫn chia sẻ duy nhất khỏi cơ sở dữ liệu, làm cho đường dẫn cũ không còn hiệu lực. Giao diện được cập nhật để phản ánh trạng thái mới. |
| **Điều kiện sau** | Bất kỳ ai có đường dẫn đều có thể xem và làm bài thi trên bộ đề được chia sẻ mà không cần đăng nhập. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng để thực hiện hành động chia sẻ. |

---

## **Các tính năng dành cho Chuyên gia (Expert)**

## **3.7. SF-07: Quản lý và Kiểm duyệt Nội dung**

Cung cấp các công cụ cần thiết cho Chuyên gia để thực hiện vai trò đảm bảo chất lượng học thuật, bao gồm việc tiếp nhận, chỉnh sửa, phê duyệt các bộ câu hỏi từ người dùng và tự tạo ra các bộ đề chuẩn để đóng góp cho hệ thống.

| Tên Use Case | UC-012: Tiếp nhận và kiểm duyệt bộ câu hỏi |
| :---- | :---- |
| **Mã số** | UC-012 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Chuyên gia |
| **Mô tả** | Chuyên gia nhận các yêu cầu kiểm duyệt được phân công, sau đó xem xét, chỉnh sửa (nếu cần) và phê duyệt hoặc từ chối bộ câu hỏi để đảm bảo chất lượng học thuật. |
| **Điều kiện tiên quyết** | 1\. Chuyên gia đã đăng nhập. 2\. Có ít nhất một yêu cầu được Quản trị viên phân công (UC-015). |
| **Luồng sự kiện chính (Thành công \- Phê duyệt)** | 1\. Chuyên gia truy cập vào dashboard kiểm duyệt cá nhân. 2\. Hệ thống hiển thị danh sách các yêu cầu đang chờ xử lý được phân công cho Chuyên gia đó. 3\. Chuyên gia chọn một yêu cầu để xử lý. 4\. Hệ thống hiển thị giao diện chỉnh sửa chi tiết bộ câu hỏi, cho phép Chuyên gia sửa nội dung câu hỏi, các lựa chọn, đáp án đúng và lời giải thích. 5\. Sau khi hoàn tất rà soát và chỉnh sửa, Chuyên gia nhấn nút "Phê duyệt". 6\. Hệ thống cập nhật trạng thái bộ đề thành "Đã xác thực", đồng thời lưu lại lịch sử chỉnh sửa. 7\. Hệ thống gửi thông báo cho Người học (người yêu cầu ban đầu) rằng bộ đề của họ đã được xác thực thành công. |
| **Luồng sự kiện thay thế (Thành công \- Từ chối)** | **5a. Chất lượng quá thấp hoặc không phù hợp:** Nếu bộ đề có chất lượng quá thấp hoặc không phù hợp với chuyên môn, tại bước 5, Chuyên gia có thể chọn "Từ chối".     1\. Hệ thống yêu cầu Chuyên gia nhập lý do từ chối.     2\. Chuyên gia nhập lý do và xác nhận.     3\. Hệ thống cập nhật trạng thái bộ đề thành "Bị từ chối" và gửi thông báo kèm lý do cho Người học.     4\. Hệ thống hiển thị giao diện chỉnh sửa chi tiết bộ câu hỏi, cho phép Chuyên gia sửa nội dung câu hỏi, các lựa chọn, đáp án đúng, mức độ khó và lời giải thích. |
| **Điều kiện sau** | Bộ đề được cập nhật trạng thái mới (Đã xác thực hoặc Bị từ chối) và Người học nhận được thông báo tương ứng. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu Chuyên gia phải được xác thực và có đúng vai trò. \- Phụ thuộc vào: UC-015 (Phân công yêu cầu xác thực). \- Tương tác dữ liệu: Thao tác này thay đổi trạng thái của đối tượng \`QuestionSet\` và \`ValidationRequest\`. |

| Tên Use Case | UC-013: Tạo bộ câu hỏi chuẩn |
| :---- | :---- |
| **Mã số** | UC-013 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Chuyên gia |
| **Mô tả** | Chuyên gia tự soạn thảo và tải lên các bộ câu hỏi chất lượng cao để đóng góp vào kho đề "premium" của hệ thống, từ đó có thể nhận hoa hồng. |
| **Điều kiện tiên quyết** | Chuyên gia đã đăng nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Chuyên gia truy cập vào mục "Tạo bộ câu hỏi mới". 2\. Hệ thống cung cấp một form/giao diện chi tiết để nhập từng câu hỏi, các đáp án, chọn đáp án đúng, chọn mức độ khó và soạn giải thích. 3\. Chuyên gia có thể lưu bộ câu hỏi dưới dạng "Bản nháp" để hoàn thiện sau. 4\. Khi đã hoàn tất, Chuyên gia nhấn nút "Gửi duyệt". 5\. Hệ thống cập nhật trạng thái bộ câu hỏi thành "Chờ duyệt" và đưa vào hàng đợi của Quản trị viên. |
| **Điều kiện sau** | Một bộ câu hỏi mới do Chuyên gia tạo được thêm vào hệ thống và chờ Quản trị viên duyệt (UC-019). |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Chuyên gia. \- Kích hoạt: Use Case này là điểm khởi đầu cho luồng duyệt nội dung, kích hoạt UC-019 (Duyệt và xuất bản nội dung của Chuyên gia). |

---

## **3.8. SF-08: Quản lý Tài chính Chuyên gia**

Cung cấp cho Chuyên gia một công cụ minh bạch để theo dõi hiệu suất làm việc và các khoản thu nhập (hoa hồng) tương ứng từ hoạt động kiểm duyệt và tạo nội dung, tạo động lực và sự tin tưởng vào nền tảng.

| Tên Use Case | UC-014: Quản lý thu nhập |
| :---- | :---- |
| **Mã số** | UC-014 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Chuyên gia |
| **Mô tả** | Chuyên gia theo dõi thu nhập và hoa hồng của mình một cách minh bạch. Hoa hồng được tính theo công thức ở Mục 4.1.2 dựa trên doanh thu gói trả phí và số lượt làm bài của người dùng trả phí trên các bộ đề do Chuyên gia tạo (Published) hoặc đã xác thực (Validated). |
| **Điều kiện tiên quyết** | Chuyên gia đã đăng nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Chuyên gia truy cập vào trang "Thu nhập của tôi". 2\. Hệ thống hiển thị một bảng điều khiển tổng quan: tổng thu nhập, số dư hiện tại, số tiền đã thanh toán. 3\. Hệ thống liệt kê chi tiết lịch sử các khoản thu nhập, bao gồm: mã yêu cầu kiểm duyệt, tên bộ đề, ngày ghi nhận và số tiền hoa hồng tương ứng. 4\. Chuyên gia có thể lọc lịch sử thu nhập theo khoảng thời gian (ngày, tháng, năm). |
| **Điều kiện sau** | Chuyên gia có cái nhìn minh bạch về hiệu suất làm việc và thu nhập của mình. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Chuyên gia. \- Tương tác dữ liệu: Dữ liệu thu nhập được ghi nhận khi UC-012 (Kiểm duyệt) và UC-019 (Xuất bản) hoàn thành thành công. |

---

## **Các tính năng dành cho Quản trị viên (Administrator)**

## **3.9. SF-09: Điều phối và Quản lý Hệ thống**

Là nhóm tính năng trung tâm giúp Quản trị viên điều hành các hoạt động cốt lõi của hệ thống, từ việc phân công công việc kiểm duyệt cho Chuyên gia đến việc quản lý (xem, sửa, khóa) tài khoản của toàn bộ người dùng.

| Tên Use Case | UC-015: Phân công yêu cầu xác thực |
| :---- | :---- |
| **Mã số** | UC-015 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên tiếp nhận các yêu cầu xác thực từ Người học và phân công cho Chuyên gia phù hợp dựa trên lĩnh vực chuyên môn của bộ đề. |
| **Điều kiện tiên quyết** | 1\. Quản trị viên đã đăng nhập. 2\. Có ít nhất một yêu cầu xác thực đang ở trạng thái "Đang chờ" (được tạo từ UC-010). |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên truy cập vào dashboard "Quản lý yêu cầu xác thực". 2\. Hệ thống hiển thị danh sách các yêu cầu chưa được phân công. 3\. Quản trị viên chọn một yêu cầu, xem thông tin về môn học/chủ đề của bộ đề. 4\. Dựa trên thông tin đó, hệ thống gợi ý danh sách các Chuyên gia có chuyên môn phù hợp. 5\. Quản trị viên chọn một Chuyên gia và nhấn "Phân công". 6\. Hệ thống cập nhật trạng thái yêu cầu thành "Đã phân công", gán \`expert\_id\` cho yêu cầu đó và gửi thông báo cho Chuyên gia được chọn. |
| **Điều kiện sau** | Yêu cầu xác thực được chuyển đến hàng đợi làm việc của Chuyên gia, sẵn sàng cho UC-012. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. \- Phụ thuộc vào: UC-010 (Yêu cầu xác thực). \- Kích hoạt: Use Case này là bước trung gian, kích hoạt UC-012 (Tiếp nhận và kiểm duyệt). |

| Tên Use Case | UC-016: Quản lý Người dùng |
| :---- | :---- |
| **Mã số** | UC-016 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên có khả năng xem, tìm kiếm, và quản lý tất cả các tài khoản người dùng trong hệ thống (Người học, Chuyên gia). |
| **Điều kiện tiên quyết** | Quản trị viên đã đăng nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên truy cập vào mục "Quản lý Người dùng". 2\. Hệ thống hiển thị một danh sách tất cả người dùng với thông tin cơ bản (email, vai trò, trạng thái, ngày tham gia) và có phân trang. 3\. Quản trị viên sử dụng công cụ tìm kiếm hoặc bộ lọc (theo vai trò, trạng thái) để tìm người dùng cụ thể. 4\. Quản trị viên có thể thực hiện các hành động trên một hoặc nhiều tài khoản: Vô hiệu hóa/Kích hoạt lại, Thay đổi vai trò (ví dụ: nâng cấp Người học thành Chuyên gia). |
| **Điều kiện sau** | Thông tin hoặc trạng thái của tài khoản người dùng được cập nhật theo hành động của Quản trị viên. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. \- Lưu ý: Hành động thay đổi vai trò hoặc trạng thái cần được ghi lại trong nhật ký hệ thống (audit log) để theo dõi. |

---

## **3.10. SF-10: Quản lý Tài chính và Doanh thu**

Cung cấp cho Quản trị viên các công cụ để theo dõi sức khỏe tài chính của nền tảng, bao gồm việc xem báo cáo doanh thu từ các gói dịch vụ và quản lý quy trình phê duyệt, ghi nhận thanh toán hoa hồng cho đội ngũ Chuyên gia.

| Tên Use Case | UC-017: Theo dõi Doanh thu |
| :---- | :---- |
| **Mã số** | UC-017 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên xem bảng điều khiển tài chính để theo dõi doanh thu từ việc bán các gói tài khoản premium. |
| **Điều kiện tiên quyết** | Quản trị viên đã đăng nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên truy cập vào "Bảng điều khiển Doanh thu". 2\. Hệ thống hiển thị các chỉ số tài chính quan trọng: tổng doanh thu, số lượng người dùng premium mới, doanh thu theo các khoảng thời gian (ngày, tuần, tháng). 3\. Hệ thống cung cấp biểu đồ trực quan hóa xu hướng doanh thu. 4\. Quản trị viên có thể xuất báo cáo doanh thu ra tệp (ví dụ: .csv). |
| **Điều kiện sau** | Quản trị viên nắm được tình hình kinh doanh của sản phẩm. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. |

| Tên Use Case | UC-018: Quản lý Thanh toán cho Chuyên gia |
| :---- | :---- |
| **Mã số** | UC-018 |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên xem xét, phê duyệt và ghi nhận các khoản thanh toán lương/hoa hồng cho đội ngũ Chuyên gia. |
| **Điều kiện tiên quyết** | 1\. Quản trị viên đã đăng nhập. 2\. Có ít nhất một Chuyên gia có phát sinh thu nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên truy cập vào mục "Quản lý Thanh toán Chuyên gia". 2\. Hệ thống hiển thị danh sách các Chuyên gia cùng với số dư hoa hồng hiện tại. 3\. Quản trị viên xem chi tiết thu nhập của một Chuyên gia. 4\. Quản trị viên thực hiện việc thanh toán cho chuyên gia (thông qua một quy trình bên ngoài hệ thống như chuyển khoản ngân hàng). 5\. Sau khi thanh toán, Quản trị viên nhấn nút "Xác nhận đã thanh toán" trên hệ thống và có thể nhập mã giao dịch tham chiếu. 6\. Hệ thống ghi nhận giao dịch, reset số dư của Chuyên gia về 0 và gửi email xác nhận cho họ. |
| **Điều kiện sau** | Giao dịch thanh toán hoa hồng cho Chuyên gia được ghi nhận trên hệ thống. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. \- Lưu ý: Quy trình thanh toán thực tế (bước 4\) là quy trình thủ công, nằm ngoài hệ thống phần mềm. Hệ thống chỉ có chức năng ghi nhận và quản lý. |

---

## **3.11. SF-11: Quản lý Nội dung và Chính sách**

Cho phép Quản trị viên kiểm soát chất lượng nội dung cao cấp trên toàn hệ thống (duyệt các bộ đề do Chuyên gia tạo) và định hình các quy tắc kinh doanh, chính sách của sản phẩm (cấu hình giá, quyền lợi các gói dịch vụ).

| Tên Use Case | UC-019: Duyệt và xuất bản nội dung của Chuyên gia |
| :---- | :---- |
| **Mã số** | UC-019 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên xem xét và phê duyệt các bộ câu hỏi chuẩn do Chuyên gia tạo (từ UC-013) trước khi chúng được xuất bản ra kho đề premium. |
| **Điều kiện tiên quyết** | 1\. Quản trị viên đã đăng nhập. 2\. Có ít nhất một bộ câu hỏi từ Chuyên gia đang ở trạng thái "Chờ duyệt". |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên vào mục "Duyệt nội dung Chuyên gia". 2\. Hệ thống hiển thị danh sách các bộ câu hỏi đang chờ phê duyệt. 3\. Quản trị viên chọn một bộ đề để xem xét chi tiết. 4\. Quản trị viên nhấn "Phê duyệt" để xuất bản bộ đề ra kho premium. 5\. Hệ thống cập nhật trạng thái bộ đề thành "Đã xuất bản" và gửi thông báo cho Chuyên gia. |
| **Luồng sự kiện thay thế (Thất bại)** | **4a. Chất lượng không đạt:** Nếu chất lượng không đạt, Quản trị viên nhấn "Từ chối" và nhập lý do/phản hồi.     1\. Hệ thống trả lại bộ đề về trạng thái "Bản nháp" và gửi phản hồi cho Chuyên gia để họ chỉnh sửa. |
| **Điều kiện sau** | Bộ câu hỏi được xuất bản hoặc bị từ chối kèm phản hồi. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. \- Phụ thuộc vào: UC-013 (Tạo bộ câu hỏi chuẩn). |

| Tên Use Case | UC-020: Cấu hình Gói dịch vụ và Chính sách |
| :---- | :---- |
| **Mã số** | UC-020 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Quản trị viên |
| **Mô tả** | Quản trị viên thiết lập và điều chỉnh các gói đăng ký (nhiều tier: Free/Basic/Pro/...) với quyền lợi (entitlements) và giá khác nhau; đồng thời cấu hình các quy định của hệ thống. |
| **Điều kiện tiên quyết** | Quản trị viên đã đăng nhập. |
| **Luồng sự kiện chính (Thành công)** | 1\. Quản trị viên truy cập vào "Cài đặt Hệ thống". 2\. Quản trị viên chọn mục "Quản lý Gói dịch vụ". 3\. Hệ thống cho phép: tạo mới/sửa/xóa gói; cấu hình `planName`, `billingCycle`, `price`, `entitlements` (ví dụ: maxMonthlyTestGenerations, maxValidationRequests, priorityProcessing, shareLimits, maxSubjects). 4\. Quản trị viên lưu lại thay đổi; hệ thống version hóa cấu hình để bảo toàn lịch sử. 5\. (Luồng khác) Quản trị viên chọn mục "Tiêu chuẩn kiểm duyệt" và cập nhật các hướng dẫn, quy định cho Chuyên gia. |
| **Điều kiện sau** | Các chính sách và giá cả của dịch vụ được cập nhật trên toàn hệ thống. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực vai trò Quản trị viên. \- Ảnh hưởng: Các thay đổi trong Use Case này sẽ ảnh hưởng trực tiếp đến trải nghiệm của Người học (khi nâng cấp tài khoản) và quy trình làm việc của Chuyên gia. |

## **3.12. SF-12: Quản lý Thông báo**

Cung cấp một trung tâm thông báo tập trung trên giao diện, giúp người dùng (Người học, Chuyên gia, Quản trị viên) theo dõi các cập nhật quan trọng về trạng thái công việc và các sự kiện trong hệ thống một cách kịp thời.

| Tên Use Case | UC-021: Xem và quản lý thông báo |
| :---- | :---- |
| **Mã số** | UC-021 |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Người học, Chuyên gia, Quản trị viên |
| **Mô tả** | Người dùng tương tác với biểu tượng thông báo trên giao diện để xem danh sách các cập nhật mới và đánh dấu chúng là đã đọc. |
| **Điều kiện tiên quyết** | Người dùng đã đăng nhập vào hệ thống. |
| **Luồng sự kiện chính (Thành công)** | 1\. Hệ thống hiển thị một chỉ báo (ví dụ: chấm đỏ) trên biểu tượng thông báo (hình chuông) khi có thông báo mới, chưa đọc. 2\. Người dùng nhấp vào biểu tượng thông báo. 3\. Hệ thống hiển thị một danh sách thả xuống liệt kê các thông báo gần đây, sắp xếp theo thời gian mới nhất. 4\. Người dùng nhấp vào một thông báo cụ thể để đánh dấu là đã đọc và có thể được điều hướng đến trang liên quan (ví dụ: nhấp vào thông báo "Bộ đề đã được xác thực" sẽ mở trang chi tiết của bộ đề đó). |
| **Điều kiện sau** | Người dùng nắm được các thông tin cập nhật quan trọng. |
| **Ghi chú/Quan hệ** | \- \<\> UC-AUTH: Yêu cầu xác thực người dùng. \- Được kích hoạt bởi nhiều Use Case khác như: UC-003 (Xử lý tài liệu hoàn tất), UC-012 (Bộ đề được phê duyệt/từ chối), UC-015 (Chuyên gia được phân công nhiệm vụ mới). |

#### 

---

## **3.13. SF-13: Các Use Case Hỗ trợ và Tái sử dụng**

Bao gồm các chức năng hệ thống dùng chung, không phải là mục tiêu cuối cùng của người dùng nhưng đóng vai trò nền tảng, được tái sử dụng trong nhiều luồng nghiệp vụ khác để đảm bảo an ninh (kiểm tra đăng nhập & quyền) và hỗ trợ mô hình kinh doanh (xử lý yêu cầu tính năng premium).

| Tên Use Case | UC-AUTH: Kiểm tra Đăng nhập & Quyền |
| :---- | :---- |
| **Mã số** | UC-AUTH |
| **Mức độ ưu tiên** | CAO |
| **Tác nhân** | Hệ thống (System) |
| **Mô tả** | Đây là một Use Case dùng chung, có chức năng kiểm tra xem người dùng đã đăng nhập và có quyền hạn cần thiết để thực hiện một hành động hay chưa. Nó được tự động kích hoạt trước khi thực thi hầu hết các Use Case khác để bảo vệ các tài nguyên và tính năng của hệ thống. |
| **Điều kiện tiên quyết** | Một người dùng (đã hoặc chưa đăng nhập) cố gắng truy cập một tính năng/đường dẫn yêu cầu phải được xác thực. |
| **Luồng sự kiện chính (Thành công)** | 1\. Người dùng khởi tạo một yêu cầu đến một tính năng được bảo vệ. 2\. Hệ thống chặn yêu cầu lại để kiểm tra. 3\. Hệ thống xác thực phiên làm việc (session/token) của người dùng là hợp lệ. 4\. Hệ thống kiểm tra vai trò (\`role\`) của người dùng có nằm trong danh sách được phép truy cập tính năng đó hay không. 5\. Yêu cầu ban đầu được cho phép tiếp tục thực thi. |
| **Luồng sự kiện thay thế (Thất bại)** | **3a. Phiên làm việc không hợp lệ:** Tại bước 3, nếu phiên làm việc không tồn tại, hết hạn hoặc không hợp lệ:     1\. Hệ thống hủy bỏ yêu cầu ban đầu.     2\. Hệ thống chuyển hướng người dùng đến trang "Đăng nhập" (UC-002). 4a. Không đủ quyền truy cập: Tại bước 4, nếu người dùng đã đăng nhập nhưng vai trò không phù hợp (ví dụ: Người học cố gắng truy cập chức năng của Quản trị viên):     1\. Hệ thống hủy bỏ yêu cầu ban đầu.     2\. Hệ thống hiển thị trang lỗi hoặc thông báo "Bạn không có quyền truy cập chức năng này." |
| **Điều kiện sau** | **Thành công:** Yêu cầu của người dùng được tiếp tục xử lý. **Thất bại:** Yêu cầu của người dùng bị từ chối và họ được chuyển hướng hoặc nhận thông báo lỗi. |
| **Ghi chú/Quan hệ** | \- **Quan hệ \<\<include\>\>:** Use Case này được bao gồm bởi **hầu hết** các Use Case khác trong hệ thống, ngoại trừ UC-001 (Đăng ký) và UC-002 (Đăng nhập). Ví dụ: UC-003, UC-004, UC-010, UC-012, v.v. đều \<\<include\>\> UC-AUTH. |

| Tên Use Case | UC-PREMIUM: Xử lý Yêu cầu Tính năng Premium |
| :---- | :---- |
| **Mã số** | UC-PREMIUM |
| **Mức độ ưu tiên** | TRUNG BÌNH |
| **Tác nhân** | Người học |
| **Mô tả** | Use Case này mô tả luồng xử lý khi một Người học với tài khoản thông thường (miễn phí) cố gắng sử dụng một tính năng chỉ dành cho tài khoản premium. Nó có vai trò như một cổng chặn và là điểm giới thiệu, kêu gọi người dùng nâng cấp gói dịch vụ. |
| **Điều kiện tiên quyết** | Một Người học chưa có tài khoản premium đã khởi tạo một hành động yêu cầu quyền premium (ví dụ: nhấn nút trong UC-010). |
| **Luồng sự kiện chính (Thành công)** | 1\. Người học chọn một tính năng premium (ví dụ: nhấn nút "Yêu cầu chuyên gia xác thực"). 2\. Hệ thống kiểm tra và xác định tài khoản của người dùng không phải là premium (đây là điểm mở rộng \- extension point \- để UC này được kích hoạt). 3\. Hệ thống tạm dừng hành động gốc và hiển thị một thông báo/popup giới thiệu về lợi ích của tài khoản premium. 4\. Thông báo có nút kêu gọi hành động (call-to-action) rõ ràng, ví dụ: "Nâng cấp ngay". 5\. Người học nhấn vào nút "Nâng cấp ngay". 6\. Hệ thống chuyển hướng người dùng đến trang giới thiệu và thanh toán các gói dịch vụ. |
| **Luồng sự kiện thay thế (Thất bại)** | **5a. Người học từ chối nâng cấp:** Tại bước 5, người học chọn đóng thông báo hoặc hủy bỏ.     1\. Hệ thống quay trở lại màn hình trước đó.     2\. Hành động gốc (yêu cầu xác thực) không được thực hiện. |
| **Điều kiện sau** | **Thành công:** Người dùng được điều hướng đến trang nâng cấp tài khoản. Thất bại: Người dùng quay lại trang trước đó và hành động yêu cầu tính năng premium bị hủy bỏ. |
| **Ghi chú/Quan hệ** | \- **Quan hệ \<\<extend\>\>:** Use Case này "mở rộng" cho các Use Case yêu cầu tài khoản premium. Cụ thể:     \- UC-PREMIUM \`\<\>\` UC-010: Yêu cầu xác thực bộ câu hỏi.     \- Điểm mở rộng là tại bước kiểm tra loại tài khoản của người dùng. |

---

# **4\. Yêu cầu về dữ liệu**

Phần này mô tả các yêu cầu liên quan đến việc cấu trúc, lưu trữ và quản lý dữ liệu trong hệ thống Learinal. Do hệ thống sử dụng cơ sở dữ liệu NoSQL (MongoDB), mô hình dữ liệu sẽ được mô tả dưới dạng các "bộ sưu tập" (collections) và "tài liệu" (documents).

![][image3]

## **4.1 Mô hình dữ liệu logic**

Mô hình dữ liệu logic sẽ bao gồm các thực thể chính sau đây để hỗ trợ các luồng nghiệp vụ đã được mô tả trong Mục 3, với các cập nhật dựa trên thông tin đã làm rõ.

1. **Users (Người dùng)**  
     
   * **Mục đích:** Lưu trữ thông tin về tất cả các tài khoản trong hệ thống.  
   * **Các thuộc tính chính:**   
     * userId, fullName, email, hashedPassword,   
     * role (enum: 'Learner', 'Expert', 'Admin')  
     * status (enum: 'PendingActivation', 'Active', 'Deactivated')  
     * subscriptionPlanId (tham chiếu đến SubscriptionPlans.planId)  
     * subscriptionStatus (enum: 'None', 'Active', 'Expired', 'Cancelled')  
     * subscriptionRenewalDate  
     * createdAt.

   

2. **Subjects (Môn học)**  
     
   * **Mục đích:** Tổ chức các tài liệu và bộ đề thi theo từng môn học của người dùng.  
   * **Các thuộc tính chính:**   
     * subjectId, userId (tham chiếu người sở hữu)  
     * subjectName, description  
     * tableOfContents (mảng các đối tượng Mục lục, có thể do AI tạo và người dùng tùy chỉnh)  
     * summary (bản tóm tắt do AI tạo)  
     * createdAt.

   

3. **Documents (Tài liệu)**  
     
   * **Mục đích:** Lưu trữ thông tin về các tệp tài liệu mà người dùng tải lên.  
   * **Các thuộc tính chính:**   
     * documentId  
     * subjectId (tham chiếu môn học)  
     * originalFileName, fileType, fileSize, storagePath, extractedText  
     * summaryShort (tóm tắt ngắn, hiển thị ở đầu nội dung)  
     * summaryFull (tóm tắt đầy đủ)  
     * summaryUpdatedAt  
     * status (enum: 'Uploading', 'Processing', 'Completed', 'Error')  
     * uploadedAt.

   

4. **QuestionSets (Bộ câu hỏi/Đề thi)**  
     
   * **Mục đích:** Lưu trữ một bộ đề thi hoàn chỉnh.  
   * **Các thuộc tính chính:**   
     * setId, userId (tham chiếu người tạo)  
     * subjectId, title  
     * status (enum: 'Public', 'PendingValidation', 'InReview', 'Validated', 'Rejected', 'Draft', 'PendingApproval', 'Published')  
     * questions (mảng các đối tượng Question)  
     * isShared  
     * sharedUrl  
     * createdAt.

   

5. **Questions (Câu hỏi) \- *Nhúng trong QuestionSet***  
     
   * **Mục đích:** Lưu trữ chi tiết một câu hỏi trắc nghiệm.  
   * **\[Cập nhật theo làm rõ\]** **Các thuộc tính chính:**   
     * questionId, questionText, options  
     * correctAnswerIndex, explanation  
     * topicTags (mảng các chuỗi/ID tham chiếu đến chương/mục trong Subjects.tableOfContents)  
     * topicStatus (enum: 'active', 'disabled').  
     * difficultyLevel (enum: 'Biết', 'Hiểu', 'Vận dụng', 'Vận dụng cao').

   

6. **QuizAttempts (Lượt làm bài)**  
     
   * **Mục đích:** Ghi lại kết quả mỗi lần một người dùng làm một bộ đề thi.  
   * **Các thuộc tính chính:**   
     * attemptId  
     * userId (người làm bài  
     * setId (bộ đề)  
     * score  
     * userAnswers,  
     * isCompleted (boolean)  
     * startTime, endTime.

   

7. **ValidationRequests (Yêu cầu xác thực)**  
     
   * **Mục đích:** Quản lý quy trình xác thực một bộ đề.  
   * **Các thuộc tính chính:**   
     * requestId  
     * setId  
     * learnerId  
     * adminId  
     * expertId  
     * status (enum: 'PendingAssignment', 'Assigned', 'Completed')  
     * requestTime, completionTime.

   

8. **CommissionRecords (Bản ghi Hoa hồng)**  
     
   * **Mục đích:** Ghi lại từng khoản hoa hồng phát sinh cho Chuyên gia một cách minh bạch.  
   * **Các thuộc tính chính:**   
     * recordId  
     * expertId (người nhận hoa hồng)  
     * attemptId (tham chiếu đến lượt làm bài phát sinh hoa hồng)  
     * setId (tham chiếu đến bộ đề)  
     * commissionAmount  
     * transactionDate  
     * status (enum: 'Pending', 'Paid').

9. **SubscriptionPlans (Gói đăng ký)**  
   
  * **Mục đích:** Định nghĩa các gói đăng ký với quyền lợi (entitlements) và giá khác nhau.  
  * **Các thuộc tính chính:**  
    * planId, planName (ví dụ: Free, Basic, Pro), description  
    * billingCycle (enum: 'Monthly', 'Yearly')  
    * price (đơn vị tiền tệ chuẩn của hệ thống)  
    * entitlements (đối tượng cấu hình, ví dụ: { maxMonthlyTestGenerations: number | 'unlimited', maxValidationRequests: number, priorityProcessing: boolean, shareLimits: number, maxSubjects: number })  
    * status (enum: 'Active', 'Archived')  
    * createdAt, updatedAt.

10. **UserSubscriptions (Đăng ký của Người dùng)**  
    
   * **Mục đích:** Theo dõi vòng đời đăng ký của từng người dùng (lịch sử nâng cấp/hạ cấp).  
   * **Các thuộc tính chính:**  
    * subscriptionId  
    * userId, planId  
    * startDate, endDate, renewalDate  
    * status (enum: 'Active', 'Expired', 'Cancelled', 'PendingPayment')  
    * entitlementsSnapshot (sao lưu quyền lợi tại thời điểm kích hoạt, phục vụ đối soát).

###

### **4.1.1. Công thức tính trọng số điểm theo mức độ và tính điểm cuối cùng**

1) Bảng trọng số mặc định theo mức độ (cấu hình được bởi Admin trong Cài đặt Hệ thống):  
  - Biết (Knowledge): weight = 1.00  
  - Hiểu (Comprehension): weight = 1.25  
  - Vận dụng (Application): weight = 1.50  
  - Vận dụng cao (High Application): weight = 2.00  

2) Quy tắc tính điểm cho một bài thi (thang 10):  
  - Tổng điểm tối đa của bộ đề: `MaxPoints = Σ weight(q_j)` với mọi câu hỏi j.  
  - Tổng điểm đạt được: `EarnedPoints = Σ weight(q_i)` với mọi câu trả lời đúng i.  
  - Điểm cuối cùng: `FinalScore = round( (EarnedPoints / MaxPoints) * 10, 2 )`.  
  - Trả lời sai hoặc bỏ qua: cộng 0 điểm (không trừ điểm).  
  - Quy tắc làm tròn: làm tròn 2 chữ số thập phân; hiển thị UI có thể làm tròn 1 chữ số (cấu hình được).

3) Ví dụ minh họa:  
  - Đề 4 câu: 1 Biết (1.0), 1 Hiểu (1.25), 1 Vận dụng (1.5), 1 Vận dụng cao (2.0).  
  - `MaxPoints = 1.0 + 1.25 + 1.5 + 2.0 = 5.75`. Nếu thí sinh làm đúng 3 câu Biết, Hiểu, Vận dụng:  
  - `EarnedPoints = 1.0 + 1.25 + 1.5 = 3.75`.  
  - `FinalScore = (3.75 / 5.75) * 10 ≈ 6.52` (làm tròn 2 chữ số).

4) Tính tương thích với UC-005: Trình tạo đề cho phép cấu hình tỷ lệ phân bổ số câu theo mức độ; điểm số vẫn được chuẩn hóa theo công thức trên để đảm bảo công bằng giữa các đề có cấu trúc khác nhau.

### **4.1.2. Công thức tính hoa hồng cho Chuyên gia**

Mục tiêu: Minh bạch, dễ kiểm chứng, hỗ trợ cả nội dung do Chuyên gia tạo (Published) và nội dung do Người học tạo nhưng đã được Chuyên gia xác thực (Validated).

Định nghĩa:  
  - `NetPremiumRevenue_m`: Doanh thu thực nhận từ các gói đăng ký trả phí trong tháng m sau khi trừ hoàn tiền, chiết khấu, thuế/ phí cổng thanh toán.  
  - `CommissionPoolRate`: Tỷ lệ % doanh thu dành chi trả hoa hồng cho toàn bộ Chuyên gia trong tháng (mặc định 30%, cấu hình được).  
  - `CommissionPool_m = NetPremiumRevenue_m * CommissionPoolRate`.  
  - `PremiumAttempts_m`: Tổng số lượt làm bài (chỉ người dùng thuộc gói trả phí) trên các bộ đề đủ điều kiện tính hoa hồng trong tháng m.  
  - `PerAttemptUnit_m = CommissionPool_m / max(1, PremiumAttempts_m)` (đơn giá một lượt làm bài).  
  - Loại nội dung của bộ đề: `type(set) ∈ {PublishedByExpert, ValidatedByExpert}` với hệ số:  
    - `Rate_Published` (mặc định 0.40), `Rate_Validated` (mặc định 0.20) — cấu hình bởi Admin.

Quy tắc tính cho một lượt làm bài `attempt` trên bộ đề `set` của Chuyên gia `E` trong tháng m:  
  - Nếu `type(set) = PublishedByExpert` và `author(set) = E` ⇒ `commission(attempt) = PerAttemptUnit_m * Rate_Published`.  
  - Nếu `type(set) = ValidatedByExpert` và `validator(set) = E` ⇒ `commission(attempt) = PerAttemptUnit_m * Rate_Validated` trong thời hạn hưởng quyền `T` ngày kể từ khi được xác thực (mặc định T = 180 ngày, cấu hình được).  
  - Nếu nhiều Chuyên gia cùng tham gia xác thực (đồng kiểm), chia đều theo tỷ lệ đóng góp (nếu có trường `contributionRatio` thì phân chia theo tỷ lệ này, mặc định chia đều).

Hoa hồng tháng của Chuyên gia `E`:  
`Commission_E_m = Σ commission(attempt_k)` với mọi attempt đủ điều kiện trong tháng m. Trạng thái ghi nhận: tạo `CommissionRecords` ở thời điểm nộp bài (UC-006) hoặc khi đối soát cuối tháng.

Ngoại lệ và xử lý biên:  
  - Lượt làm bài bị hủy/hoàn tiền do vi phạm ⇒ không tính hoa hồng (hủy hoặc trừ bút toán).  
  - Nếu `PremiumAttempts_m = 0` ⇒ `PerAttemptUnit_m = 0` (không phát sinh hoa hồng); không mang sang tháng sau trừ khi có chính sách riêng.  
  - Tất cả thông số (rates, T) đều do Admin cấu hình trong UC-020.
### 

### **4.1.1. Công thức tính điểm trong số:**

1. Trọng số theo mức độ: Mỗi mức độ khó của câu hỏi (difficultyLevel) sẽ có một trọng số điểm (weight) được định nghĩa sẵn trong hệ thống:  
* Biết (Knowledge): 1.0 điểm  
* Hiểu (Comprehension): 1.25 điểm  
* Vận dụng (Application): 1.5 điểm  
* Vận dụng cao (High Application): 2.0 điểm  
2. Công thức tính điểm cuối cùng: Điểm của một bài thi được tính trên thang điểm 10 theo công thức: **FinalScore \= (Tổng điểm đạt được / Tổng điểm tối đa của bộ đề) \* 10**  
* Tổng điểm đạt được \= Σ (weight\_i) cho tất cả các câu trả lời đúng i.  
* Tổng điểm tối đa của bộ đề \= Σ (weight\_j) cho tất cả các câu hỏi j trong bộ đề.

## **4.2 Từ điển dữ liệu**

Bảng dưới đây định nghĩa chi tiết một số trường dữ liệu quan trọng có các quy tắc nghiệp vụ cụ thể.

| Tên Trường (Field Name) | Thuộc Thực thể (Entity) | Kiểu dữ liệu (Data Type) | Mô tả và Quy tắc (Description and Rules) |
| :---- | :---- | :---- | :---- |
| Subject.tableOfContents | Subjects | Mảng đối tượng | Lưu cấu trúc mục lục do AI tạo và người dùng có thể chỉnh sửa. Mỗi đối tượng có thể có dạng: { "topicId": "uuid", "topicName": "Chương 1: Giới thiệu", "childTopics": \[...\] } |
| Question.topicStatus | Questions | Boolean | Trạng thái liên kết của câu hỏi với mục lục. 'true': liên kết hợp lệ. 'false': tài liệu gốc đã bị xóa, liên kết tạm thời vô hiệu. |
| Question.difficultyLevel | Questions | Enum (String) | Bắt buộc một trong: 'Biết', 'Hiểu', 'Vận dụng', 'Vận dụng cao'. Dùng để tính trọng số điểm theo Mục 4.1.1 và để cấu hình phân bổ số câu khi tạo đề (UC-005). |
| QuizAttempt.isCompleted | QuizAttempts | Boolean | Cờ xác định lượt làm bài đã hoàn thành (nộp bài). Đây là điều kiện để ghi nhận CommissionRecords cho Chuyên gia. |
| CommissionRecord.status | CommissionRecords | Enum (String) | Trạng thái thanh toán hoa hồng. 'Pending': đã ghi nhận, chờ thanh toán. 'Paid': Admin đã xác nhận thanh toán. |
| User.subscriptionPlanId | Users | ObjectId/UUID | Tham chiếu đến gói đăng ký hiện tại. Nếu không có gói, để null và subscriptionStatus = 'None'. |
| Document.summaryShort | Documents | String (Text) | Tóm tắt ngắn hiển thị ở đầu nội dung tài liệu (3-5 câu). Tự động tạo hoặc làm mới khi nội dung thay đổi đáng kể. |
| Document.summaryFull | Documents | String (Rich Text/Markdown) | Bản tóm tắt đầy đủ (6-10 gạch đầu dòng). Cho phép hiển thị dạng mở rộng. |
| SubscriptionPlans.entitlements | SubscriptionPlans | Object (JSON) | Quyền lợi theo gói, ví dụ: { maxMonthlyTestGenerations, maxValidationRequests, priorityProcessing, shareLimits, maxSubjects }. Được sử dụng bởi kiểm soát hạn mức. |
| UserSubscriptions.status | UserSubscriptions | Enum (String) | Trạng thái đăng ký: 'Active', 'Expired', 'Cancelled', 'PendingPayment'. Dùng để xác định quyền truy cập tính năng premium. |

## **4.3 Các báo cáo**

Hệ thống cần cung cấp khả năng truy xuất dữ liệu để tạo các báo cáo sau:

1. **Báo cáo Doanh thu (dành cho Admin):**  
     
   * **Mục đích:** Theo dõi hiệu quả kinh doanh từ các gói premium.  
   * **Dữ liệu cần có:** Tổng doanh thu theo ngày/tuần/tháng, số lượng người dùng nâng cấp gói premium, doanh thu trung bình trên mỗi người dùng (ARPU).  
   * **Nguồn dữ liệu:** Users (thông tin gói), Transactions (nếu có một collection riêng cho giao dịch).

   

2. **Báo cáo Thu nhập Chuyên gia (dành cho Admin và Expert):**  
     
   * **Mục đích:** Tính toán và theo dõi hoa hồng cho Chuyên gia.  
   * **Dữ liệu cần có:** Danh sách các bộ đề đã xác thực/tạo bởi Chuyên gia, số lượt làm bài của người dùng premium trên từng bộ đề, tổng hoa hồng chưa thanh toán, lịch sử thanh toán.  
   * **Nguồn dữ liệu:** QuestionSets, QuizAttempts, Users.

   

3. **Báo cáo Hiệu suất Nội dung (dành cho Admin):**  
     
   * **Mục đích:** Đánh giá chất lượng và mức độ tương tác của các bộ đề.  
   * **Dữ liệu cần có:** Top các bộ đề được làm nhiều nhất, tỷ lệ trả lời đúng trung bình trên từng bộ đề, thời gian trung bình để Chuyên gia hoàn thành một yêu cầu xác thực.  
   * **Nguồn dữ liệu:** QuizAttempts, ValidationRequests.

## **4.4 Thu thập, toàn vẹn, lưu giữ và hủy bỏ dữ liệu**

* **Thu thập dữ liệu (Data Collection):**  
    
  * Dữ liệu được thu thập từ người dùng (nhập liệu, tải tệp) và do hệ thống tự sinh ra (nội dung từ LLM, kết quả bài làm, log).


* **Toàn vẹn dữ liệu (Data Integrity):**  
    
  * Backend phải thực hiện kiểm tra tính hợp lệ (validation) cho mọi dữ liệu đầu vào.  
  * Các mối quan hệ logic giữa các thực thể phải được đảm bảo ở tầng ứng dụng.


* **Lưu giữ và Hủy bỏ dữ liệu (Data Retention and Disposal):**  
    
  * **\[Cập nhật theo làm rõ\]**  
  * **Tài khoản người dùng:** Dữ liệu tài khoản sẽ được lưu giữ vô thời hạn trừ khi người dùng gửi yêu cầu xóa tài khoản.  
  * **Khi xóa tài liệu (UC-009):**  
    * Tệp gốc và nội dung trích xuất (Document) sẽ bị xóa vĩnh viễn.  
    * Mục lục của môn học (Subject.tableOfContents) sẽ được hệ thống tự động cập nhật để loại bỏ các chương/mục liên quan đến tài liệu đã xóa.  
    * Đối với các câu hỏi trong các QuestionSet đã tạo có liên quan đến nội dung bị xóa, trường Question.topicStatus sẽ được cập nhật thành disabled. Câu hỏi này vẫn tồn tại nhưng có thể được hiển thị với một cảnh báo cho người dùng.  
  * **Khi xóa tài khoản:**  
    * Tất cả dữ liệu liên quan đến người dùng đó, bao gồm: thông tin cá nhân, các môn học, tài liệu, bộ đề đã tạo (bất kể trạng thái Public hay Validated), các lượt làm bài, các yêu cầu xác thực... sẽ bị **xóa vĩnh viễn** khỏi hệ thống.

---

# **5\. Yêu cầu về giao diện bên ngoài**

Phần này cung cấp thông tin để đảm bảo rằng hệ thống Learinal sẽ giao tiếp một cách hiệu quả và an toàn với người dùng cuối cũng như các thành phần phần mềm bên ngoài.

## **5.1 Giao diện người dùng (User Interface \- UI)**

Giao diện người dùng là điểm tương tác chính giữa người dùng và hệ thống. Thiết kế giao diện phải đảm bảo tính trực quan, dễ sử dụng và nhất quán trên toàn bộ ứng dụng.

* **Tiêu chuẩn thiết kế chung:**  
    
  * **Thiết kế đáp ứng (Responsive Design):** Như đã nêu trong ràng buộc (mục 2.4), giao diện phải tự động điều chỉnh và hiển thị tốt trên các kích thước màn hình khác nhau, bao gồm máy tính để bàn, máy tính bảng và điện thoại di động.  
  * **Tính nhất quán:** Toàn bộ ứng dụng phải tuân thủ một bộ quy tắc thiết kế (Style Guide) chung về màu sắc, font chữ, biểu tượng (icons), và cách bố trí các thành phần để tạo ra trải nghiệm đồng nhất cho người dùng.  
  * **Khả năng tiếp cận (Accessibility):** Giao diện nên tuân thủ các tiêu chuẩn cơ bản của Hướng dẫn Tiếp cận Nội dung Web (WCAG), ví dụ như đảm bảo độ tương phản màu sắc đủ, hỗ trợ điều hướng bằng bàn phím và cung cấp văn bản thay thế cho hình ảnh.


* **Bố cục màn hình chính:**  
    
  * **Thanh điều hướng (Navigation Bar):** Luôn hiển thị ở vị trí cố định (trên cùng), chứa logo, các liên kết chính (ví dụ: Bảng điều khiển, Môn học), và menu người dùng (Thông tin tài khoản, Đăng xuất).  
  * **Vùng nội dung chính (Main Content Area):** Hiển thị các chức năng và dữ liệu tương ứng với trang người dùng đang truy cập.  
  * **Hệ thống thông báo (Notifications):** Các thông báo về trạng thái (ví dụ: "Tài liệu đang được xử lý", "Tạo đề thi thành công") cần được hiển thị ở một vị trí dễ thấy nhưng không làm gián đoạn luồng làm việc của người dùng.


* **Các màn hình/luồng chức năng chính (Tham chiếu đến các Use Case ở Mục 3):**  
    
  * **Luồng xác thực:** Giao diện cho các trang Đăng ký (UC-001), Đăng nhập (UC-002), và Quên mật khẩu phải đơn giản, rõ ràng.  
  * **Giao diện cho Người học (Learner):**  
    * *Bảng điều khiển (Dashboard):* Hiển thị tổng quan các môn học và thống kê nhanh về tiến độ (UC-008).  
    * *Quản lý Môn học/Tài liệu:* Giao diện cho phép tạo môn học, tải lên tài liệu (kéo-thả), xem danh sách và xóa tài liệu (UC-003, UC-009).  
    * *Xem tài liệu:* Trên trang chi tiết tài liệu, hệ thống hiển thị một khối "Tóm tắt" cố định ở đầu nội dung với phiên bản ngắn (có thể mở rộng để xem bản đầy đủ), cho phép làm mới khi nội dung thay đổi (UC-003A).  
    * *Tạo đề thi:* Giao diện trực quan cho phép người dùng chọn chương/mục từ mục lục, thiết lập số lượng câu hỏi và thời gian (UC-005).  
    * *Làm bài thi:* Giao diện tập trung, không gây xao nhãng, hiển thị câu hỏi, các lựa chọn, và đồng hồ đếm ngược (UC-006).  
    * *Xem kết quả:* Hiển thị điểm số, câu trả lời đúng/sai và giải thích chi tiết (UC-007).  
  * **Giao diện cho Chuyên gia (Expert) và Quản trị viên (Administrator):**  
    * Các giao diện quản lý phải được thiết kế dưới dạng bảng (table) có hỗ trợ tìm kiếm, lọc và phân trang để xử lý lượng lớn dữ liệu một cách hiệu quả (UC-012, UC-015, UC-016).  
    * Giao diện chỉnh sửa bộ câu hỏi (UC-012) cần cho phép Chuyên gia dễ dàng thay đổi văn bản câu hỏi, đáp án và lời giải thích.

## **5.2 Giao diện phần mềm (Software Interface)**

Hệ thống Learinal sẽ tương tác với các dịch vụ phần mềm của bên thứ ba thông qua Giao diện Lập trình Ứng dụng (API).

1. **Dịch vụ Mô hình Ngôn ngữ Lớn (LLM):**  
     
   * **Tên dịch vụ:** Google Gemini API (hoặc dịch vụ tương đương).  
   * **Mục đích:** Là giao diện cốt lõi để thực hiện các chức năng thông minh của hệ thống, bao gồm:  
     * Phân tích và trích xuất nội dung văn bản từ tài liệu.  
     * Tạo mục lục và tóm tắt môn học (UC-004).  
     * Sinh ra các bộ câu hỏi, đáp án và giải thích chi tiết (UC-005).  
   * **Giao thức và Định dạng dữ liệu:** Giao tiếp thông qua các lệnh gọi API RESTful qua giao thức HTTPS. Dữ liệu yêu cầu (prompt) và dữ liệu phản hồi sẽ ở định dạng JSON.  
   * **Ràng buộc:** Hệ thống phải xử lý các giới hạn về tần suất gọi API (rate limits) và chi phí liên quan đến số lượng token sử dụng, như đã nêu trong mục 2.4.

   

2. **Dịch vụ Gửi Email (Email Service):**  
     
   * **Tên dịch vụ:** TBD (ví dụ: SendGrid, Amazon SES).  
   * **Mục đích:** Gửi các email giao dịch tự động đến người dùng, bao gồm:  
     * Email kích hoạt tài khoản sau khi đăng ký (UC-001).  
     * Email hướng dẫn đặt lại mật khẩu.  
     * Email thông báo (ví dụ: thông báo bộ đề đã được chuyên gia xác thực thành công).  
   * **Giao thức:** Tương tác thông qua API của nhà cung cấp dịch vụ qua giao thức HTTPS.

## **5.3 Giao diện phần cứng (Hardware Interface)**

Learinal là một ứng dụng web, không có yêu cầu tương tác trực tiếp với bất kỳ thành phần phần cứng chuyên dụng nào. Hệ thống sẽ hoạt động trên các thiết bị phần cứng tiêu chuẩn (máy tính cá nhân, laptop, máy tính bảng, điện thoại thông minh) có khả năng chạy một trình duyệt web hiện đại và kết nối Internet.

## **5.4 Giao diện truyền thông (Communication Interface)**

* **Giao thức mạng:** Toàn bộ giao tiếp giữa trình duyệt của người dùng (client) và máy chủ của Learinal (server), cũng như giữa server và các dịch vụ API bên ngoài, phải được thực hiện qua giao thức **HTTPS (Hypertext Transfer Protocol Secure)**.  
* **Mã hóa:** Việc sử dụng HTTPS đảm bảo rằng tất cả dữ liệu truyền đi, bao gồm thông tin đăng nhập, nội dung tài liệu tải lên và kết quả bài thi, đều được mã hóa để bảo vệ quyền riêng tư và an toàn thông tin cho người dùng.  
* **Email:** Hệ thống sẽ sử dụng giao thức **SMTP (Simple Mail Transfer Protocol)** để gửi email, thông qua một dịch vụ email chuyên dụng như đã mô tả ở mục 5.2.

---

# **6\. Các thuộc tính chất lượng**

Phần này đặc tả các yêu cầu phi chức năng, xác định các tiêu chí về chất lượng mà hệ thống phải đáp ứng. Những yêu cầu này ảnh hưởng đến trải nghiệm người dùng, chi phí vận hành và khả năng bảo trì của sản phẩm.

## **6.1 Tính khả dụng (Usability)**

Tính khả dụng đo lường mức độ dễ dàng và hiệu quả khi người dùng tương tác với hệ thống.

* **NFR-001 (Dễ học):** Một người dùng mới (vai trò Người học) sau khi đăng ký phải có khả năng tự mình hoàn thành luồng chức năng cốt lõi (tải lên tài liệu, tạo một bộ đề thi, và làm bài thi đó) trong vòng 10 phút mà không cần tài liệu hướng dẫn chi tiết.  
* **NFR-002 (Hiệu quả sử dụng):** Các tác vụ thường xuyên phải được thực hiện với số bước tối thiểu. Ví dụ: Từ Bảng điều khiển chính, người dùng phải truy cập được chức năng "Tạo đề thi" cho một môn học trong vòng không quá 3 lần nhấp chuột.  
* **NFR-003 (Thông báo lỗi thân thiện):** Tất cả các thông báo lỗi hiển thị cho người dùng cuối phải được viết bằng ngôn ngữ rõ ràng, dễ hiểu (tiếng Việt/tiếng Anh), giải thích vấn đề là gì và gợi ý hành động khắc phục (nếu có), thay vì hiển thị các mã lỗi kỹ thuật.  
* **NFR-004 (Tính nhất quán):** Giao diện người dùng phải nhất quán trên toàn bộ ứng dụng về cách bố trí, thuật ngữ, màu sắc và biểu tượng, tuân thủ theo một hệ thống thiết kế (Design System) đã được định sẵn.

## **6.2 Hiệu năng (Performance)**

Hiệu năng xác định tốc độ phản hồi và khả năng chịu tải của hệ thống.

* **NFR-005 (Thời gian phản hồi giao diện):** Các hành động giao diện người dùng cơ bản (ví dụ: mở một menu, chuyển trang, xác nhận một form đơn giản) phải có thời gian phản hồi dưới 500 mili giây.  
* **NFR-006 (Thời gian tải trang):** Các trang chính của ứng dụng (Bảng điều khiển, trang chi tiết Môn học) phải tải xong và sẵn sàng tương tác trong vòng 3 giây trên kết nối Internet băng thông rộng (tối thiểu 10 Mbps).  
* **NFR-007 (Xử lý tác vụ nền):** Do việc xử lý tài liệu và tạo đề thi phụ thuộc vào LLM có thể mất thời gian, hệ thống phải xử lý các tác vụ này một cách bất đồng bộ:  
  * Hệ thống phải tiếp nhận yêu cầu và đưa vào hàng đợi xử lý trong vòng 5 giây sau khi người dùng nhấn nút.  
  * Người dùng phải nhận được thông báo ngay lập tức rằng yêu cầu "đang được xử lý" và họ có thể thực hiện các công việc khác.  
  * Người dùng phải nhận được thông báo ngay lập tức rằng yêu cầu "đang được xử lý" và họ có thể thực hiện các công việc khác. **Thông báo về việc hoàn thành tác vụ sẽ được hiển thị trực tiếp trên giao diện người dùng (thông qua hệ thống thông báo) khi người dùng còn hoạt động trên trang, không gửi qua email.**  
* **NFR-008 (Thời gian xử lý của LLM):** Mục tiêu thời gian xử lý trọn vẹn cho một tài liệu 10 trang (\~20MB) từ lúc tải lên đến khi tạo xong bộ đề 20 câu hỏi là dưới 3 phút trong điều kiện hoạt động bình thường của dịch vụ LLM.  
* **NFR-009 (Khả năng chịu tải):** Hệ thống phải duy trì được các chỉ số hiệu năng đã nêu với ít nhất 100 người dùng hoạt động đồng thời.

## **6.3 Bảo mật (Security)**

Bảo mật là yếu tố tối quan trọng để bảo vệ dữ liệu người dùng và sự toàn vẹn của hệ thống.

* **NFR-010 (Mã hóa đường truyền):** Toàn bộ dữ liệu trao đổi giữa trình duyệt người dùng và máy chủ phải được mã hóa bằng giao thức HTTPS (sử dụng TLS 1.2 trở lên).  
* **NFR-011 (Lưu trữ mật khẩu):** Mật khẩu của người dùng phải được lưu trữ trong cơ sở dữ liệu dưới dạng đã được băm (hashed) và rắc muối (salted) bằng một thuật toán mạnh (ví dụ: bcrypt). Hệ thống không bao giờ được lưu trữ mật khẩu dưới dạng văn bản thuần.  
* **NFR-012 (Phân quyền truy cập):** Hệ thống phải thực thi nghiêm ngặt cơ chế Phân quyền Dựa trên Vai trò (Role-Based Access Control \- RBAC). Người dùng thuộc một vai trò không được phép truy cập vào các chức năng hoặc dữ liệu của vai trò khác (ví dụ: Người học không thể gọi API dành cho Quản trị viên).  
* **NFR-013 (Bảo vệ chống lại tấn công phổ biến):** Ứng dụng phải có các cơ chế để ngăn chặn các loại tấn công web phổ biến như Cross-Site Scripting (XSS), SQL/NoSQL Injection, và Cross-Site Request Forgery (CSRF).  
* **NFR-014 (Quyền riêng tư dữ liệu):** Nội dung tài liệu do người dùng tải lên phải được coi là dữ liệu riêng tư. Không một người dùng nào khác có thể truy cập vào tài liệu của người khác, trừ khi được chia sẻ một cách tường minh (qua tính năng chia sẻ bộ đề).

## **6.4 An toàn (Safety)**

An toàn liên quan đến việc ngăn chặn các tổn thất dữ liệu hoặc các hành động không mong muốn.

* **NFR-015 (Xác nhận hành động nguy hiểm):** Các hành động có thể gây mất dữ liệu vĩnh viễn (ví dụ: xóa một môn học, xóa tài liệu) phải yêu cầu người dùng xác nhận lại một lần nữa thông qua hộp thoại cảnh báo.  
* **NFR-016 (Xử lý lỗi dịch vụ bên ngoài):** Trong trường hợp dịch vụ LLM của bên thứ ba không khả dụng, hệ thống phải xử lý một cách hợp lý: các chức năng cốt lõi không phụ thuộc vào LLM (đăng nhập, xem lại các đề thi đã tạo) vẫn phải hoạt động. Các tính năng liên quan đến LLM sẽ bị vô hiệu hóa tạm thời và hiển thị thông báo phù hợp cho người dùng.

## **6.5 Các thuộc tính liên quan khác**

* **NFR-017 (Tính sẵn sàng \- Availability):** Hệ thống phải đạt được độ sẵn sàng là 99.5% trong giờ hoạt động (uptime). Thời gian bảo trì hệ thống (nếu có) phải được lên kế hoạch và thông báo trước cho người dùng.  
* **NFR-018 (Khả năng bảo trì \- Maintainability):** Mã nguồn phải được viết theo các tiêu chuẩn lập trình rõ ràng, có cấu trúc module và có tài liệu đi kèm cho các thành phần phức tạp để dễ dàng sửa lỗi và phát triển các tính năng mới trong tương lai.  
* **NFR-019 (Khả năng mở rộng \- Scalability):** Kiến trúc của hệ thống phải được xây dựng trên nền tảng đám mây, cho phép mở rộng quy mô (thêm tài nguyên máy chủ) một cách linh hoạt khi số lượng người dùng tăng lên mà không cần phải thiết kế lại toàn bộ hệ thống.  
* **NFR-020 (Khả năng thay thế \- Interchangeability):** Để giảm thiểu sự phụ thuộc vào một nhà cung cấp LLM duy nhất, kiến trúc backend phải được thiết kế theo mẫu Adapter (hoặc Wrapper). Mọi tương tác với dịch vụ LLM phải thông qua một lớp giao diện trung gian, giúp việc chuyển đổi sang một nhà cung cấp API khác trong tương lai trở nên dễ dàng hơn mà không ảnh hưởng lớn đến logic nghiệp vụ cốt lõi.

---

# **7\. Yêu cầu về quốc tế hóa và địa phương hóa (Internationalization and Localization)**

Phần này đặc tả các yêu cầu cần thiết để đảm bảo sản phẩm Learinal có thể hoạt động và hiển thị một cách phù hợp cho người dùng ở các khu vực địa lý và ngôn ngữ khác nhau.

**Quốc tế hóa (Internationalization \- i18n)** là quá trình thiết kế và phát triển phần mềm sao cho nó có thể dễ dàng được điều chỉnh để hỗ trợ các ngôn ngữ và khu vực khác nhau mà không cần thay đổi về mặt kỹ thuật. **Địa phương hóa (Localization \- l10n)** là quá trình tùy chỉnh phần mềm cho một ngôn ngữ và khu vực cụ thể bằng cách thêm các thành phần dành riêng cho địa phương đó.

## **7.1 Hỗ trợ đa ngôn ngữ (Multilingual Support)**

* **NFR-020 (Ngôn ngữ mặc định và chuyển đổi):**  
    
  * Phiên bản 0.1 của hệ thống phải hỗ trợ đầy đủ hai ngôn ngữ: **Tiếng Việt (vi)** và **Tiếng Anh (en)**.  
  * Ngôn ngữ mặc định có thể được xác định dựa trên cài đặt của trình duyệt người dùng.  
  * Hệ thống phải cung cấp một cơ chế rõ ràng trên giao diện người dùng (ví dụ: một menu thả xuống ở thanh điều hướng) cho phép người dùng dễ dàng chuyển đổi qua lại giữa các ngôn ngữ được hỗ trợ. Lựa chọn này phải được lưu lại cho các lần truy cập sau của người dùng.


* **NFR-021 (Tách biệt chuỗi văn bản):**  
    
  * Tất cả các chuỗi văn bản hiển thị trên giao diện người dùng (nhãn nút, tiêu đề, thông báo, mục menu, v.v.) không được viết trực tiếp trong mã nguồn (hard-coded).  
  * Thay vào đó, chúng phải được quản lý trong các tệp tài nguyên ngôn ngữ riêng biệt (ví dụ: vi.json, en.json). Hệ thống sẽ tải tệp tương ứng dựa trên ngôn ngữ người dùng đã chọn.


* **NFR-022 (Khả năng xử lý nội dung đa ngôn ngữ của LLM):**  
    
  * Hệ thống được giả định (như đã nêu ở mục 2.5) và yêu cầu rằng dịch vụ LLM được tích hợp có khả năng hiểu và xử lý nội dung học thuật bằng cả tiếng Việt và tiếng Anh.  
  * Các "prompt" (câu lệnh) gửi đến LLM phải được điều chỉnh linh hoạt để yêu cầu LLM tạo ra kết quả (câu hỏi, tóm tắt) bằng ngôn ngữ tương ứng với tài liệu đầu vào của người dùng.

## **7.2 Định dạng dữ liệu theo địa phương (Locale-Specific Data Formatting)**

* **NFR-023 (Định dạng Ngày và Giờ):**  
    
  * Ngày và giờ hiển thị trên toàn hệ thống (ví dụ: ngày tải lên tài liệu, thời gian làm bài) phải được định dạng theo quy ước của ngôn ngữ/khu vực người dùng đã chọn.  
    * **Tiếng Việt:** DD/MM/YYYY HH:mm (ví dụ: 25/12/2025 14:30).  
    * **Tiếng Anh (US):** MM/DD/YYYY hh:mm A (ví dụ: 12/25/2025 02:30 PM).  
  * Dữ liệu ngày giờ trong cơ sở dữ liệu phải được lưu trữ ở một định dạng chuẩn, không phụ thuộc vào múi giờ, chẳng hạn như UTC (Coordinated Universal Time).


* **NFR-024 (Định dạng Số):**  
    
  * Các con số, đặc biệt là trong các báo cáo tài chính, phải được định dạng theo quy ước của địa phương.  
    * **Tiếng Việt:** Dấu phẩy (,) dùng để phân cách phần thập phân, dấu chấm (.) dùng để phân cách hàng nghìn (ví dụ: 1.234.567,89).  
    * **Tiếng Anh:** Dấu chấm (.) dùng để phân cách phần thập phân, dấu phẩy (,) dùng để phân cách hàng nghìn (ví dụ: 1,234,567.89).

## **7.3 Hỗ trợ bộ ký tự (Character Set Support)**

* **NFR-025 (Mã hóa UTF-8):** Toàn bộ hệ thống, từ giao diện người dùng, máy chủ đến cơ sở dữ liệu, phải sử dụng mã hóa **UTF-8** để đảm bảo khả năng hiển thị và xử lý chính xác tất cả các ký tự, bao gồm cả tiếng Việt có dấu và các ký tự đặc biệt khác.

---

# **8\. Các yêu cầu khác**

Phần này bao gồm các yêu cầu quan trọng không thuộc các danh mục trước đó nhưng cần thiết để đảm bảo hệ thống tuân thủ các quy định pháp lý, có thể vận hành ổn định và được quản trị hiệu quả.

## **8.1 Yêu cầu về Pháp lý và Tuân thủ (Legal and Compliance Requirements)**

* **NFR-026 (Chính sách Bảo mật \- Privacy Policy):**  
    
  * Hệ thống phải có một trang Chính sách Bảo mật rõ ràng, dễ truy cập.  
  * Chính sách này phải mô tả chi tiết loại dữ liệu cá nhân nào được thu thập (ví dụ: họ tên, email), mục đích thu thập, cách thức dữ liệu được sử dụng và lưu trữ.  
  * **Đặc biệt quan trọng:** Chính sách phải nêu rõ rằng nội dung tài liệu của người dùng sẽ được gửi đến một nhà cung cấp dịch vụ Mô hình Ngôn ngữ Lớn (LLM) bên thứ ba để xử lý, và phải có liên kết đến chính sách bảo mật của nhà cung cấp đó.


* **NFR-027 (Điều khoản Sử dụng \- Terms of Service):**  
    
  * Hệ thống phải có một trang Điều khoản Sử dụng mà người dùng phải đồng ý khi đăng ký tài khoản.  
  * Điều khoản này phải quy định rõ trách nhiệm của người dùng (không tải lên nội dung vi phạm bản quyền, bất hợp pháp), quyền sở hữu trí tuệ đối với các bộ câu hỏi được tạo ra, và các giới hạn trách nhiệm của Learinal.


* **NFR-028 (Tuân thủ Cổng thanh toán):**  
    
  * Hệ thống không được lưu trữ trực tiếp thông tin nhạy cảm về thanh toán của người dùng (như số thẻ tín dụng).  
  * Mọi giao dịch thanh toán cho các gói premium phải được xử lý thông qua một cổng thanh toán bên thứ ba uy tín và tuân thủ các tiêu chuẩn bảo mật ngành thẻ thanh toán (PCI DSS).

## **8.2 Yêu cầu về Vận hành và Bảo trì (Operational and Maintenance Requirements)**

* **NFR-029 (Ghi nhật ký hệ thống \- System Logging):**  
    
  * Hệ thống phải ghi lại nhật ký (log) cho các sự kiện quan trọng để phục vụ cho việc gỡ lỗi và phân tích sự cố.  
  * Các sự kiện cần ghi nhật ký bao gồm:  
    * Lỗi hệ thống và lỗi ứng dụng (ví dụ: API của LLM trả về lỗi, không kết nối được cơ sở dữ liệu).  
    * Các sự kiện bảo mật: đăng nhập thành công/thất bại, yêu cầu đặt lại mật khẩu.  
    * Các lệnh gọi API đến dịch vụ LLM, bao gồm thông tin về chi phí (số token) nếu có thể.


* **NFR-030 (Giám sát hệ thống \- System Monitoring):**  
    
  * Phải có các công cụ giám sát để theo dõi "sức khỏe" của hệ thống trong thời gian thực.  
  * Các chỉ số cần theo dõi bao gồm:  
    * Tải của máy chủ (CPU, bộ nhớ).  
    * Thời gian phản hồi của ứng dụng.  
    * Tỷ lệ lỗi.  
    * Trạng thái của các dịch vụ bên thứ ba (LLM, dịch vụ gửi email).


* **NFR-031 (Dấu vết kiểm toán \- Audit Trail):**  
    
  * Hệ thống phải ghi lại dấu vết của các hành động nhạy cảm được thực hiện bởi các vai trò có quyền cao (Chuyên gia, Quản trị viên) để đảm bảo tính minh bạch và trách nhiệm.  
  * Các hành động cần được kiểm toán bao gồm:  
    * **Quản trị viên:** Thay đổi vai trò hoặc trạng thái của một người dùng (UC-016), thay đổi cấu hình gói dịch vụ (UC-020), phê duyệt/từ chối nội dung của Chuyên gia (UC-019).  
    * **Chuyên gia:** Phê duyệt hoặc từ chối một bộ câu hỏi (UC-012).

## **8.3 Yêu cầu về Triển khai (Deployment Requirements)**

* **NFR-032 (Quy trình triển khai tự động):**  
  * Quá trình triển khai phiên bản mới của ứng dụng lên môi trường hoạt động chính thức (production) phải được tự động hóa thông qua một quy trình Tích hợp Liên tục/Triển khai Liên tục (CI/CD). Điều này giúp giảm thiểu lỗi do con người, đảm bảo tính nhất quán và tăng tốc độ phát hành.

---

# **Phụ lục A: Bảng chú giải thuật ngữ (Glossary)**

Phần này định nghĩa các thuật ngữ, từ viết tắt và các khái niệm chuyên ngành được sử dụng trong tài liệu để đảm bảo sự hiểu biết nhất quán cho tất cả các bên liên quan.

| Thuật ngữ | Định nghĩa |
| :---- | :---- |
| **Administrator (Quản trị viên)** | Vai trò người dùng có quyền cao nhất trong hệ thống, chịu trách nhiệm quản lý người dùng, tài chính, nội dung và cấu hình hệ thống. |
| **API (Application Programming Interface)** | Giao diện Lập trình Ứng dụng. Một tập hợp các quy tắc và công cụ cho phép các ứng dụng phần mềm khác nhau giao tiếp với nhau. Trong dự án này, Learinal sử dụng API để kết nối với dịch vụ LLM. |
| **Expert (Chuyên gia)** | Vai trò người dùng có chuyên môn, được hệ thống tuyển chọn để kiểm duyệt, chỉnh sửa và tạo ra các bộ câu hỏi chất lượng cao (nội dung premium). |
| **i18n** | Viết tắt của "Internationalization" (Quốc tế hóa). Là quá trình thiết kế ứng dụng để có thể dễ dàng thích ứng với các ngôn ngữ và khu vực khác nhau. |
| **l10n** | Viết tắt của "Localization" (Địa phương hóa). Là quá trình tùy chỉnh ứng dụng cho một ngôn ngữ hoặc khu vực cụ thể. |
| **Learner (Người học)** | Vai trò người dùng chính của ứng dụng, là những người tải lên tài liệu, tạo đề thi và thực hiện ôn luyện. |
| **LLM (Large Language Model)** | Mô hình Ngôn ngữ Lớn. Là một loại mô hình trí tuệ nhân tạo được huấn luyện trên một lượng lớn dữ liệu văn bản để có thể hiểu, tạo và xử lý ngôn ngữ tự nhiên. Đây là công nghệ cốt lõi của Learinal. |
| **MVP (Minimum Viable Product)** | Sản phẩm Khả dụng Tối thiểu. Một phiên bản của sản phẩm với các tính năng cốt lõi đủ để đáp ứng nhu cầu của những người dùng đầu tiên và thu thập phản hồi cho việc phát triển trong tương lai. Phiên bản 0.1 của Learinal là một MVP. |
| **Premium Account** | Tài khoản trả phí, cho phép Người học truy cập các tính năng nâng cao, chẳng hạn như yêu cầu Chuyên gia xác thực bộ câu hỏi. |
| **Prompt** | Một câu lệnh hoặc một đoạn văn bản hướng dẫn được cung cấp cho LLM để yêu cầu nó thực hiện một nhiệm vụ cụ thể (ví dụ: "Hãy tạo 10 câu hỏi trắc nghiệm từ đoạn văn bản sau đây..."). |
| **Responsive Design** | Thiết kế đáp ứng. Một phương pháp thiết kế web giúp giao diện người dùng có thể hiển thị tối ưu trên nhiều loại thiết bị và kích thước màn hình khác nhau. |
| **SRS (Software Requirements Specification)** | Đặc tả Yêu cầu Phần mềm. Là tài liệu mô tả toàn diện về các yêu cầu chức năng và phi chức năng của một sản phẩm phần mềm. |
| **TBC (To Be Confirmed)** | Sẽ được xác nhận sau. Được sử dụng để chỉ những thông tin đã có nhưng cần được các bên liên quan xem xét và xác nhận lại. |
| **TBD (To Be Determined)** | Sẽ được xác định sau. Được sử dụng để chỉ những thông tin chưa được quyết định tại thời điểm viết tài liệu. |
| **Token** | Trong ngữ cảnh của LLM, token là một đơn vị cơ bản của văn bản (có thể là một từ, một phần của từ, hoặc một dấu câu). Chi phí sử dụng dịch vụ LLM thường được tính dựa trên số lượng token đầu vào và đầu ra. |
| **Use Case (Ca sử dụng)** | Một mô tả về cách một người dùng (tác nhân) tương tác với hệ thống để đạt được một mục tiêu cụ thể. |

---

# **Phụ lục B: Các mô hình phân tích (Analysis Models)**

Phần này cung cấp các mô hình trực quan hóa để làm rõ hơn các yêu cầu và luồng hoạt động của hệ thống. Trong bối cảnh tài liệu này, các mô hình sẽ được mô tả bằng văn bản.

## **B.1 Sơ đồ Use Case tổng quan**

Sơ đồ Use Case tổng quan đã được trình bày ở đầu Mục 3\. Một sơ đồ chi tiết hơn sẽ bao gồm các mối quan hệ \<\<include\>\> và \<\<extend\>\> giữa các Use Case. Ví dụ:

* Hầu hết các Use Case (như UC-003, UC-004, ...) đều **\<\<include\>\>** UC-AUTH (Kiểm tra Đăng nhập & Quyền) vì người dùng phải được xác thực trước khi thực hiện.  
* UC-010 (Yêu cầu xác thực bộ câu hỏi) có một điểm mở rộng cho phép UC-PREMIUM (Xử lý Yêu cầu Tính năng Premium) được kích hoạt (mối quan hệ **\<\<extend\>\>**). Luồng này chỉ xảy ra khi người dùng không có tài khoản premium.

## **B.2 Sơ đồ chuyển đổi trạng thái (State Transition Diagram)**

Các sơ đồ này mô tả vòng đời của các đối tượng quan trọng trong hệ thống.

### **B.2.1 Trạng thái của một Bộ câu hỏi (QuestionSet)**

Đối tượng này có một vòng đời phức tạp, đi qua nhiều trạng thái khác nhau tùy thuộc vào hành động của Người học, Quản trị viên và Chuyên gia.

1. **\[Bắt đầu\]** \-\> **Bản nháp (Draft)**  
   * *Mô tả:* Chuyên gia đang trong quá trình tạo bộ câu hỏi (UC-013).  
2. **Bản nháp** \-\> **Chờ duyệt (Pending Approval)**  
   * *Hành động kích hoạt:* Chuyên gia nhấn "Gửi duyệt" (UC-013).  
3. **Chờ duyệt** \-\> **Đã xuất bản (Published)**  
   * *Hành động kích hoạt:* Quản trị viên nhấn "Phê duyệt" (UC-019). Bộ đề được đưa vào kho premium.  
4. **Chờ duyệt** \-\> **Bản nháp**  
   * *Hành động kích hoạt:* Quản trị viên "Từ chối" và gửi phản hồi (UC-019). Chuyên gia cần chỉnh sửa lại.  
5. **\[Bắt đầu khác\]** \-\> **Công khai (Public)**  
   * *Mô tả:* Một bộ đề do Người học tạo ra bằng LLM (UC-005).  
6. **Công khai** \-\> **Chờ xác thực (Pending Validation)**  
   * *Hành động kích hoạt:* Người học premium "Yêu cầu chuyên gia xác thực" (UC-010). Yêu cầu được gửi đến Quản trị viên.  
7. **Chờ xác thực** \-\> **Đang xử lý (In Review)**  
   * *Hành động kích hoạt:* Quản trị viên "Phân công" cho một Chuyên gia (UC-015).  
8. **Đang xử lý** \-\> **Đã xác thực (Validated)**  
   * *Hành động kích hoạt:* Chuyên gia nhấn "Phê duyệt" (UC-012). Bộ đề trở thành nội dung chất lượng cao.  
9. **Đang xử lý** \-\> **Bị từ chối (Rejected)**  
   * *Hành động kích hoạt:* Chuyên gia nhấn "Từ chối" và cung cấp lý do (UC-012).

### **B.2.2 Trạng thái của một Tài khoản Người dùng (User Account)**

1. **\[Bắt đầu\]** \-\> **Chờ xác thực (Pending Activation)**  
   * *Hành động kích hoạt:* Người dùng hoàn thành form đăng ký (UC-001).  
2. **Chờ xác thực** \-\> **Đang hoạt động (Active)**  
   * *Hành động kích hoạt:* Người dùng nhấp vào đường dẫn kích hoạt trong email.  
3. **Đang hoạt động** \<-\> **Vô hiệu hóa (Deactivated)**  
   * *Hành động kích hoạt:* Quản trị viên thực hiện hành động vô hiệu hóa/kích hoạt lại tài khoản (UC-016).

### **B.3 Mô hình Quan hệ Thực thể (Entity-Relationship Model \- ERD)**

Mô hình ERD trực quan hóa các thực thể dữ liệu (được mô tả logic trong Mục 4.1) và mối quan hệ giữa chúng.

* **User** (1) \---\< (n) **Subject**: Một người dùng có thể tạo và sở hữu nhiều môn học.  
* **Subject** (1) \---\< (n) **Document**: Một môn học có thể chứa nhiều tài liệu.  
* **Subject** (1) \---\< (n) **QuestionSet**: Một môn học có thể có nhiều bộ đề thi.  
* **User** (1) \---\< (n) **QuestionSet**: Một người dùng (Learner) có thể tạo ra nhiều bộ đề thi.  
* **User** (1) \---\< (n) **QuizAttempt**: Một người dùng có thể có nhiều lượt làm bài thi.  
* **QuestionSet** (1) \---\< (n) **QuizAttempt**: Một bộ đề thi có thể được làm nhiều lần bởi nhiều người dùng.  
* **QuestionSet** (1) \--- (1) **ValidationRequest**: Một bộ đề thi có thể có (hoặc không) một yêu cầu xác thực.  
* **User (Admin)** (1) \---\< (n) **ValidationRequest**: Một Admin có thể phân công nhiều yêu cầu.  
* **User (Expert)** (1) \---\< (n) **ValidationRequest**: Một Expert có thể được giao nhiều yêu cầu.

---

Copyright © 2025 by Learinal Dev Team
