let matkhau: string = "tien dung dep trai";

class Nguoi {
    private _ten: string = "";

    get ten() {
        if (matkhau == "tien dung dep trai") {
            return this._ten;
        } else {
            return "sai mk rồi";
        }
    }

    set ten(v: string) {
        if (matkhau == "tien dung dep trai") {
            this._ten = v;
        } else {
            this._ten = "sai mk rồi";
        }
    }
}

// Dùng thử
matkhau = "tien dung dep trai";             // đổi mật khẩu → sai
let tiendung = new Nguoi();
tiendung.ten = "Tiến Dũng";     // setter chạy, nhưng mk sai
console.log(tiendung.ten);      // getter chạy → "sai mk rồi"
