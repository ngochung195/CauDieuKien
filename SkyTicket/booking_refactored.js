function verifyBooking(user, flight) {
    if (user.isLoggedIn !== true) {
        return "Từ chối: Vui lòng đăng nhập để tiếp tục";
    }

    if (user.age < 18) {
        return "Từ chối: Khách hàng chưa đủ 18 tuổi";
    }

    if (user.accountBalance < flight.price) {
        return "Từ chối: Số dư không đủ";
    }

    if (flight.availableSeats <= 0) {
        return "Từ chối: Chuyến bay đã hết chỗ";
    }

    if (user.hasValidPassport !== true) {
        return "Từ chối: Hộ chiếu không hợp lệ hoặc hết hạn";
    }

    return "Thành công: Đặt vé hợp lệ";

}

const baseUser = {
    isLoggedIn: true,
    hasValidPassport: true,
    age: 20,
    accountBalance: 5000
};

const baseFlight = {
    availableSeats: 5,
    price: 1000
};

console.log("--- BẮT ĐẦU CHẠY KIỂM THỬ ---");

// Trường hợp 1: Chưa đăng nhập
const userTC1 = { ...baseUser, isLoggedIn: false };
console.log("TC1 (Chưa đăng nhập) ->",
    verifyBooking(userTC1, baseFlight) === "Từ chối: Vui lòng đăng nhập để tiếp tục" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 2: Chưa đủ 18 tuổi (Biên dưới: 17 tuổi)
const userTC2 = { ...baseUser, age: 17 };
console.log("TC2 (Dưới 18 tuổi)   ->",
    verifyBooking(userTC2, baseFlight) === "Từ chối: Khách hàng chưa đủ 18 tuổi" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 3: Hộ chiếu không hợp lệ
const userTC3 = { ...baseUser, hasValidPassport: false };
console.log("TC3 (Hộ chiếu lỗi)   ->",
    verifyBooking(userTC3, baseFlight) === "Từ chối: Hộ chiếu không hợp lệ hoặc hết hạn" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 4: Chuyến bay hết chỗ (Biên: 0 chỗ)
const flightTC4 = { ...baseFlight, availableSeats: 0 };
console.log("TC4 (Hết chỗ trống)   ->",
    verifyBooking(baseUser, flightTC4) === "Từ chối: Chuyến bay đã hết chỗ" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 5: Không đủ tiền (Biên: Thiếu đúng 1 đồng)
const userTC5 = { ...baseUser, accountBalance: 999 };
const flightTC5 = { ...baseFlight, price: 1000 };
console.log("TC5 (Không đủ tiền)   ->",
    verifyBooking(userTC5, flightTC5) === "Từ chối: Số dư không đủ" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 6: Đặt vé thành công (Vừa đủ tiền - Biên bằng nhau)
const userTC6 = { ...baseUser, accountBalance: 1000 };
const flightTC6 = { ...baseFlight, price: 1000 };
console.log("TC6 (Vừa đủ tiền)     ->",
    verifyBooking(userTC6, flightTC6) === "Thành công: Đặt vé hợp lệ" ? "✅ PASSED" : "❌ FAILED");

// Trường hợp 7: Đặt vé thành công (Dư tài chính, dư mọi điều kiện)
console.log("TC7 (Hợp lệ hoàn toàn)->",
    verifyBooking(baseUser, baseFlight) === "Thành công: Đặt vé hợp lệ" ? "✅ PASSED" : "❌ FAILED");

console.log("--- KẾT THÚC KIỂM THỬ ---");