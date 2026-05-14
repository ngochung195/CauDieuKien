// --- 5 TEST CASES KIỂM THỬ TOÀN DIỆN ---

// 1. Kiểm tra biên dưới của mức phụ phí (Đúng 5kg)
// Kỳ vọng: EXPRESS (40000) + 5kg (10000) = 50000
console.log("Test 1 - Biên 5kg (Express):", calculateShippingFee("EXPRESS", 5));

// 2. Kiểm tra biên trên của mức phụ phí (Đúng 20kg)
// Kỳ vọng: STANDARD (20000) + 20kg (10000) = 30000
console.log("Test 2 - Biên 20kg (Standard):", calculateShippingFee("STANDARD", 20));

// 3. Kiểm tra mức cân nặng lớn ở dịch vụ nhanh nhất
// Kỳ vọng: SAME_DAY (80000) + 50kg (50000) = 130000
console.log("Test 3 - Nặng vượt mức 20kg (Same Day):", calculateShippingFee("SAME_DAY", 50));

// 4. Kiểm tra dịch vụ Express với cân nặng nhẹ
// Kỳ vọng: EXPRESS (40000) + 2kg (0) = 40000
console.log("Test 4 - Hàng nhẹ (Express):", calculateShippingFee("EXPRESS", 2));

// 5. Kiểm tra xử lý lỗi (Dịch vụ không tồn tại)
// Kỳ vọng: "Lỗi: Loại dịch vụ không hợp lệ!"
console.log("Test 5 - Sai tên dịch vụ:", calculateShippingFee("ECONOMY", 10));