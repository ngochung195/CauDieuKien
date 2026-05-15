MA TRẬN KIỂM THỬ

| ID   | Tên Test Case          | Input: Tier | Input: Total | Output| Ghi chú / Logic 
| TC01 | VIP - Cận dưới (499k)  | "VIP"       | 499999       | 49    | Dưới 500k: 499999/10000 = 49.99 (Floor -> 49) 
| TC02 | VIP - Ngay biên (500k) | "VIP"       | 500000       | 100   | Đạt 500k: (500000/10000)*2 = 100 
| TC03 | VIP - Cận trên (501k)  | "VIP"       | 500001       | 100   | Trên 500k: (500001/10000)*2 = 100.0002 (Floor -> 100) 
| TC04 | MEMBER - Tại biên 500k | "MEMBER"    | 500000       | 50    | Hạng thường: 500000/10000 = 50 (Không nhân đôi) 
| TC05 | Invalid Tier - Hạng lạ | "GUEST"     | 100000       | -1    | Rơi vào nhánh else cuối cùng (Xử lý lỗi) 
| TC06 | Biên nhỏ nhất (0đ)     | "VIP"       | 0            | 0     | Kiểm tra giá trị tối thiểu 
| TC07 | Giá trị âm (Negative)  | "VIP"       | -10000       | -1    | Kiểm tra dữ liệu đầu vào không hợp lệ 