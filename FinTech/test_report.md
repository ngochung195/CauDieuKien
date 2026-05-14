// --- BỔ SUNG 5 TEST CASES KIỂM THỦ TOÀN DIỆN ---

// 1. Kiểm tra khách hàng hoàn hảo (Tất cả điều kiện đều thỏa mãn)
// Kỳ vọng: "Thành công: Đủ điều kiện vay vốn"
console.log("Test 1 - Khách hàng lý tưởng:", verifyLoanEligibility({
    isActive: true, age: 30, income: 20000000, creditScore: 750, hasBadDebt: false
}));

// 2. Kiểm tra nợ xấu (Điều kiện chặn đầu tiên)
// Kỳ vọng: "Từ chối: Khách hàng đang có nợ xấu"
console.log("Test 2 - Có nợ xấu:", verifyLoanEligibility({
    isActive: true, age: 25, income: 15000000, creditScore: 650, hasBadDebt: true
}));

// 3. Kiểm tra biên thu nhập (Dưới 10 triệu)
// Kỳ vọng: "Từ chối: Thu nhập không đủ điều kiện"
console.log("Test 3 - Thu nhập thấp (9tr):", verifyLoanEligibility({
    isActive: true, age: 25, income: 9000000, creditScore: 650, hasBadDebt: false
}));

// 4. Kiểm tra độ tuổi (Vị thành niên)
// Kỳ vọng: "Từ chối: Khách hàng chưa đủ tuổi"
console.log("Test 4 - Chưa đủ tuổi (17t):", verifyLoanEligibility({
    isActive: true, age: 17, income: 15000000, creditScore: 650, hasBadDebt: false
}));

// 5. Kiểm tra tài khoản bị khóa
// Kỳ vọng: "Từ chối: Tài khoản đang bị khóa"
console.log("Test 5 - Tài khoản inactive:", verifyLoanEligibility({
    isActive: false, age: 40, income: 30000000, creditScore: 800, hasBadDebt: false
}));