// hàm bình thường phải nhập đối số, kiểu của đối số, kiểu trả về, nhưng hàm generic thì khác, mik có thể tùy ý nhập vào theo ý mik.

// vd hàm generic bình thường
function xem<t>(x:t) : t{
    return x;
}
console.log(xem<number>(9999));


// sử dụng generic trong class
class maytinh{
    static xemthongtin<t>(x : t[]) : void{
        console.log(x); 
    }
}

maytinh.xemthongtin<string>(["hp","macbook"]);



// sử dụng generic với class 

class opdienthoai<x,y,z>{
    id : x;
    ten : y;
    gia : z;
    constructor(id:x,ten:y,gia:z){
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    xem() : void{
        console.log(
            `
            id : ${this.id};
            ten :${ this.ten};
            gia :${ this.gia};
            `
        );
    }
}

let op1 =new opdienthoai<number,string,number>(1,"op con thỏ",800000);
let op2 =new  opdienthoai<number,string,string>(2,"op con soi","8 usd");
op1.xem();
op2.xem();