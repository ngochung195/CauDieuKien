/**
 * HỆ THỐNG TÍNH CƯỚC GIAO HÀNG - FASTTRACK LOGISTICS (LEGACY CODE)
 * Tình trạng: Mã nguồn sử dụng quá nhiều if-else lồng nhau gây rối mắt, lặp lại logic.
 */
function calculateShippingFee(serviceType, weight) {
    let baseFee = 0;
    let surcharge = 0;

    switch (serviceType) {
        case "STANDARD":
            baseFee = 20000;
            break;
        case "EXPRESS":
            baseFee = 40000;
            break;
        case "SAME_DAY":
            baseFee = 80000;
            break;
        default:
            return "Lỗi: Loại dịch vụ không hợp lệ!"
    }

    if (weight < 5) {
        surcharge = 0;
    } else if (weight <= 20) {
        surcharge = 10000;
    } else {
        surcharge = 50000;
    }

    return baseFee + surcharge;
}

// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
console.log("Cước giao chuẩn 3kg:", calculateShippingFee("STANDARD", 3)); // Kỳ vọng: 20000
console.log("Cước giao hỏa tốc 25kg:", calculateShippingFee("SAME_DAY", 25)); // Kỳ vọng: 130000

