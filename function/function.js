function tinhtong() {
    return 100 + 200;
}
console.log(tinhtong());
//ham tra ve string 
function kieuchu() {
    return "chao buoi sang";
}
console.log(kieuchu());
//ham tra ve kieu mảng chữ 
function mang() {
    return ["lienminhhuyenthoai", "conduongtolua", "volamtruyenky", "eimifukada"];
}
console.log(mang());
// kieu mang so
function mangso() {
    return [4, 6, 7, 8, 9];
}
console.log(mangso());
// hàm đối tượng ( any );
function doituong() {
    var nhanvatgame = {
        ten: "chuot",
        mau: 50,
        kinang: {
            kinang1: "tanhinh",
            kinang2: "bắn độc"
        }
    };
    return nhanvatgame;
}
console.log(doituong());
// sử dụng hàm để tính trung bình cộng 
function tinhtbc(x, y) {
    var tbc = (x + y) / 2;
    console.log("trung bình cộng của " + x + " và " + y + "là : " + tbc);
}
tinhtbc(900, 100);
// hàm anonymous 
var z = function (x, y) {
    return "ch\u00E0o ".concat(y, ",n\u0103m nay b\u1EA1n ").concat(x, " c\u00F3 ph\u1EA3i kh\u00F4ng");
};
console.log(z(20, "dũng"));
