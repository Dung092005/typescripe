var matkhau = "tien dung dep trai";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
        this._ten = "";
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau == "tien dung dep trai") {
                return this._ten;
            }
            else {
                return "sai mk rồi";
            }
        },
        set: function (v) {
            if (matkhau == "tien dung dep trai") {
                this._ten = v;
            }
            else {
                this._ten = "sai mk rồi";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
// Dùng thử
matkhau = "tien dung dep trai"; // đổi mật khẩu → sai
var tiendung = new Nguoi();
tiendung.ten = "Tiến Dũng"; // setter chạy, nhưng mk sai
console.log(tiendung.ten); // getter chạy → "sai mk rồi"
