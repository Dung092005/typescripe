var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tuong = /** @class */ (function () {
    function tuong(ten, motatuong, kinang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang;
    }
    tuong.prototype.showthongtin = function () {
        var kn = " ";
        for (var i = 0; i < this.kinang.length; ++i) {
            kn += this.kinang[i];
            kn += " | ";
        }
        return "\n        T\u00EAn t\u01B0\u01A1ng: ".concat(this.ten, "\n        M\u00F4 t\u1EA3 : ").concat(this.motatuong, "\n        k\u0129 n\u0103ng : ").concat(kn);
    };
    return tuong;
}());
var satthu = /** @class */ (function (_super) {
    __extends(satthu, _super);
    function satthu(ten, motatuong, kinang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    satthu.prototype.showthongtin = function () {
        return _super.prototype.showthongtin.call(this) + "\u0111\u00F2n sat th\u1EE7 l\u00E0 : ".concat(this.donsatthu);
    };
    return satthu;
}(tuong));
var lilia = new tuong("lilia", "nư phap su dame to", ["mị thuật", "chu tâm tiên", "hoi tho yeu ho"]);
console.log(lilia.showthongtin());
var talon = new satthu("talon", "satthubongdem", ["ám khi", "hồi phục", "chiến sát"], "sathuvohinh");
console.log(talon.showthongtin());
//lên hiểu rõ super() ở class con, và super.tênfunction() như là thừa thế của class cha bên trên, và nếu function bên trên có return thì dưới cùng
// phải làm y hệt
