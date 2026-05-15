// --- KHU VỰC THỬ NGHIỆM ---

// 1. Kiểm tra loại giao dịch DEPOSIT (Nạp tiền)
console.log("Phí nạp 500k:", calculateTransactionFee("DEPOSIT", 500000));
console.log("Phí nạp 10 triệu:", calculateTransactionFee("DEPOSIT", 10000000));

// 2. Kiểm tra loại giao dịch WITHDRAW (Rút tiền)
console.log("Phí rút 500k (Dưới 1tr):", calculateTransactionFee("WITHDRAW", 500000));
console.log("Phí rút 1 triệu (Mốc biên):", calculateTransactionFee("WITHDRAW", 1000000));
console.log("Phí rút 2 triệu (Từ 1tr - 5tr):", calculateTransactionFee("WITHDRAW", 2000000));
console.log("Phí rút 5 triệu (Mốc biên):", calculateTransactionFee("WITHDRAW", 5000000));
console.log("Phí rút 6 triệu (Trên 5tr):", calculateTransactionFee("WITHDRAW", 6000000));

// 3. Kiểm tra loại giao dịch TRANSFER (Chuyển khoản)
console.log("Phí chuyển 500k (Dưới 1tr):", calculateTransactionFee("TRANSFER", 500000));
console.log("Phí chuyển 1 triệu (Mốc biên):", calculateTransactionFee("TRANSFER", 1000000));
console.log("Phí chuyển 3 triệu (Từ 1tr - 5tr):", calculateTransactionFee("TRANSFER", 3000000));
console.log("Phí chuyển 5 triệu (Mốc biên):", calculateTransactionFee("TRANSFER", 5000000));
console.log("Phí chuyển 6 triệu (Trên 5tr):", calculateTransactionFee("TRANSFER", 6000000));

// 4. Kiểm tra các trường hợp lỗi dữ liệu
console.log("Phí thanh toán hóa đơn (Sai loại GD):", calculateTransactionFee("PAYMENT", 200000));
console.log("Phí rút tiền viết thường (Sai định dạng):", calculateTransactionFee("withdraw", 1000000));