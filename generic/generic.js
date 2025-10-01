// hàm bình thường phải nhập đối số, kiểu của đối số, kiểu trả về, nhưng hàm generic thì khác, mik có thể tùy ý nhập vào theo ý mik.
// vd hàm generic bình thường
function xem(x) {
    return x;
}
console.log(xem(9999));
// sử dụng generic trong class
var maytinh = /** @class */ (function () {
    function maytinh() {
    }
    maytinh.xemthongtin = function (x) {
        console.log(x);
    };
    return maytinh;
}());
maytinh.xemthongtin(["hp", "macbook"]);
// sử dụng generic với class 
var opdienthoai = /** @class */ (function () {
    function opdienthoai(id, ten, gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    opdienthoai.prototype.xem = function () {
        console.log("\n            id : ".concat(this.id, ";\n            ten :").concat(this.ten, ";\n            gia :").concat(this.gia, ";\n            "));
    };
    return opdienthoai;
}());
var op1 = new opdienthoai(1, "op con thỏ", 800000);
var op2 = new opdienthoai(2, "op con soi", "8 usd");
op1.xem();
op2.xem();
