class hero{
    private _ten : string;
    constructor(_ten:string){
        this._ten = _ten;
    } 

    get ten(){
        return this._ten;
    }
    set ten(v : string){
        this._ten = v;
    }

}
var zeus = new hero("zeus");
console.log("Ten tuong la : "+ zeus.ten);
zeus.ten = " than zeus";
console.log("ten tuong sau khi doi la : "+zeus.ten);

// lưu ý là ten là private rồi ( tránh bị hack từ ngoài, bảo mật cao) vì vậy nó phải tạo ra 1 hàm gián tiếp và hàm đó chính là ten() đó, nhưng ở aceessor nó ko tính là hàm, hay coi nó như là 1 property mới và gián tiếp, giúp chứa ,chỉnh sửa và in ra hàm private _ten, vì ten() ko phải hàm nên khi gọi nó chỉ cần zeus.ten như property ở trên là đc, và hàm get  dùng để in nó ra , còn hàm set là để thay đổi giá trị của nó từ bên ngoài, lúc này phải khai báo biến mới vd như ( v : string).