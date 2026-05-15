function calculateRewardPoints(customerTier, orderTotal) {
    let points = 0;

    if (orderTotal < 0) {
        return "Tổng tiền không được âm!";
    }

    if (customerTier === "MEMBER") {
        points = orderTotal / 10000;
    } else if (customerTier === "VIP") {
        if (orderTotal >= 500000) {
            points = (orderTotal / 10000) * 2;
        } else if (orderTotal < 500000) {
            points = orderTotal / 10000;
        }
    } else {
        return "Hạng khách hàng không hợp lệ";
    }

    return Math.floor(points);
}

console.log("Test VIP 600k:", calculateRewardPoints("VIP", 600000)); // Ra 120 (Đúng)
console.log("Test VIP 200k:", calculateRewardPoints("VIP", 200000)); // Ra 20 (Đúng)

// --- KIỂM THỬ CÁC TRƯỜNG HỢP GIÁ TRỊ BIÊN ---

console.log("TC01 - VIP 499.999đ (Dưới biên):", calculateRewardPoints("VIP", 499999));  // Kỳ vọng: 49
console.log("TC02 - VIP 500.000đ (Ngay biên):", calculateRewardPoints("VIP", 500000));  // Kỳ vọng: 100
console.log("TC03 - VIP 500.001đ (Trên biên):", calculateRewardPoints("VIP", 500001));  // Kỳ vọng: 100
console.log("TC04 - MEMBER 500.000đ (Hạng thường):", calculateRewardPoints("MEMBER", 500000)); // Kỳ vọng: 50

// --- KIỂM THỬ CÁC TRƯỜNG HỢP NGOẠI LỆ (NEGATIVE TESTING) ---

console.log("TC05 - GUEST 100.000đ (Hạng lạ):", calculateRewardPoints("GUEST", 100000));  // Kỳ vọng: Hạng khách hàng không hợp lệ
console.log("TC06 - VIP 0đ (Biên cực tiểu):", calculateRewardPoints("VIP", 0));       // Kỳ vọng: 0
console.log("TC07 - VIP -10.000đ (Giá trị âm):", calculateRewardPoints("VIP", -10000));  // Kỳ vọng: Tổng không được âm