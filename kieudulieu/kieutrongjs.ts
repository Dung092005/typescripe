// kiểu dữ liệu string
let chu: string = "viet";
let chu2: string = "năm 2005 ko";
console.log(`Có phải bạn tên ${chu} sinh ${chu2}`);


//kiểu dữ liệu số 
let x : number; 
x = 10;
console.log(x)
//kiểu dữ liệu mảng string
let hocvien : string[];
hocvien = ["Dung","Hoang","Đại"];
console.log(hocvien[0]);

for(let i = 0; i<hocvien.length;i++){
    console.log(hocvien[i]);
}
//kiểu dữ liệu mảng số
let so : number[] = [2,4,6];
for(let i = 0; i< so.length; i++){
    console.log(so[i]);
}

// kiểu dữ liệu đúng sai 
let flag : boolean ;
flag = true;
console.log(flag);


// kiểu dữ liệu enum
enum trangthai {moidangky,dadangky,hoanthanh};
console.log(trangthai.hoanthanh);

// kiểu dữ liệu tuple
var tuple1 : [string,number,string];
tuple1 = ["viem",31,"hoa"];
console.log(tuple1[1]);

//kiểu dữ liệu any
// là kiểu dữ liệu chỉ cần khai báo là any thì mày viết cái gì cx đc 
var v : any;
v = "đây là kiểu any"
console.log(v)

// kiểu void, nhưng thg đi cùng funtion 
function tinhtoan() : void {
    console.log("đây là kiểu void và ko có return")
}
tinhtoan();

//phương pháp ép kiểu 
// chỉ có tác dụng với nhưng kiểu mập mờ như any 
// ko có tác dụng khi từ string sang number hay ngc lại 
// dùng dấu < .. > tên biến , để ép kiểu 
let kieu1 : any; 
kieu1 = "đay là kiẻu any ";
console.log(<string>kieu1.length);
//sử dụng từ khóa as 
console.log((kieu1 as string).length);

