// trường hợp 1 : public 
// trường hợp này là trường hợp như code bthg, gọi ở trong, ngoài, và class con đều được 
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
//trường hợp 2 : private 
var person = /** @class */ (function () {
    function person(ten, height) {
        this.ten = ten;
        this.height = height;
    }
    person.prototype.goiten = function () {
        console.log(this.ten);
    };
    return person;
}());
var hocsinh = /** @class */ (function (_super) {
    __extends(hocsinh, _super);
    function hocsinh(ten, height, id) {
        var _this = _super.call(this, ten, height) || this;
        _this.id = id;
        return _this;
    }
    return hocsinh;
}(person));
var a = new person("Dung", 8);
// console.log(a.ten);                
// dòng này sẽ ko chạy được vì ten là private, ko gọi được bên ngoài, chỉ gọi được gián tiếp
a.goiten();
// ở kiểu public thì in được cả ngoài lẫn trong class, và cả con của class parent nữ
// ở kiểu private thì không thể gọi từ bên ngoài class, hay ở class con, chi có thể gọi gián tiếp qua 1 hàm public trong class
// và hàmpublic này có thể gọi bên ngoài 
