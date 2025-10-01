var tennhanvat = /** @class */ (function () {
    function tennhanvat(name, slogan, mau) {
        this.name = name;
        this.slogan = slogan;
        this.mau = mau;
    }
    tennhanvat.prototype.chay = function () { };
    tennhanvat.prototype.chem = function () { };
    tennhanvat.prototype.hienthiten = function () {
        return "Nhan vat: ".concat(this.name, ",\n            slogan : ").concat(this.slogan, ",\n            mau : ").concat(this.mau, "\n                ");
    };
    return tennhanvat;
}());
var dienthoai = /** @class */ (function () {
    function dienthoai(ten, gia, sao, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    dienthoai.prototype.shownoidung = function () {
        return "San pham : ".concat(this.ten, " co gia la ").concat(this.gia, ",duoc danh gia ").concat(this.sao, " sao \n        co mau la : ").concat(this.mausac[0], ", ").concat(this.mausac[1], ", ").concat(this.mausac[2], " ");
    };
    return dienthoai;
}());
var nhanvat1 = new tennhanvat("liliana", "tuong phep co dong", 5050);
console.log(nhanvat1.hienthiten());
var sp1 = new dienthoai("samsung", 1900000, 4, ["xanh", "do", "tim", "vang"]);
console.log(sp1.shownoidung());
