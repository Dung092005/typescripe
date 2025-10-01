// kiểu dữ liệu string
var chu = "viet";
var chu2 = "năm 2005 ko";
console.log("C\u00F3 ph\u1EA3i b\u1EA1n t\u00EAn ".concat(chu, " sinh ").concat(chu2));
//kiểu dữ liệu số 
var x;
x = 10;
console.log(x);
//kiểu dữ liệu mảng string
var hocvien;
hocvien = ["Dung", "Hoang", "Đại"];
console.log(hocvien[0]);
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
//kiểu dữ liệu mảng số
var so = [2, 4, 6];
for (var i = 0; i < so.length; i++) {
    console.log(so[i]);
}
// kiểu dữ liệu đúng sai 
var flag;
flag = true;
console.log(flag);
// kiểu dữ liệu enum
var trangthai;
(function (trangthai) {
    trangthai[trangthai["moidangky"] = 0] = "moidangky";
    trangthai[trangthai["dadangky"] = 1] = "dadangky";
    trangthai[trangthai["hoanthanh"] = 2] = "hoanthanh";
})(trangthai || (trangthai = {}));
;
console.log(trangthai.hoanthanh);
// kiểu dữ liệu tuple
var tuple1;
tuple1 = ["viem", 31, "hoa"];
console.log(tuple1[1]);
//kiểu dữ liệu any
// là kiểu dữ liệu chỉ cần khai báo là any thì mày viết cái gì cx đc 
var v;
v = "đây là kiểu any";
console.log(v);
// kiểu void, nhưng thg đi cùng funtion 
function tinhtoan() {
    console.log("đây là kiểu void và ko có return");
}
tinhtoan();
//phương pháp ép kiểu 
// chỉ có tác dụng với nhưng kiểu mập mờ như any 
// ko có tác dụng khi từ string sang number hay ngc lại 
// dùng dấu < .. > tên biến , để ép kiểu 
var kieu1;
kieu1 = "đay là kiẻu any ";
console.log(kieu1.length);
//sử dụng từ khóa as 
console.log(kieu1.length);
