/**
 * HỆ THỐNG THẨM ĐỊNH TÍN DỤNG - EASYLOAN (LEGACY CODE)
 * Tình trạng: Lỗi Arrow Anti-Pattern (if-else lồng nhau quá sâu).
 */
function verifyLoanEligibility(user) {
    if (user.hasBadDebt === true) {
        return "Từ chối: Khách hàng đang có nợ xấu";
    }

    if (user.creditScore <= 600) {
        return "Từ chối: Điểm tín dụng quá thấp";
    }

    if (user.income < 10000000) {
        return "Từ chối: Thu nhập không đủ điều kiện";
    }

    if (user.age < 18) {
        return "Từ chối: Khách hàng chưa đủ tuổi";
    }

    if (user.isActive !== true) {
        return "Từ chối: Tài khoản đang bị khóa";
    }

    return "Thành công: Đủ điều kiện vay vốn";
}

// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
const testUser = {
    isActive: true,
    age: 25,
    income: 15000000,
    creditScore: 650,
    hasBadDebt: false
};
console.log("Kết quả test:", verifyLoanEligibility(testUser));