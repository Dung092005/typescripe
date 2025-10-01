function tinhtong() : number{
    return 100 + 200;
}
console.log(tinhtong());

//ham tra ve string 

function kieuchu() : string{
    return "chao buoi sang"
}

console.log(kieuchu());

//ham tra ve kieu mảng chữ 
function mang() : string[] {
    return ["lienminhhuyenthoai","conduongtolua","volamtruyenky","eimifukada"];
}

console.log(mang());

// kieu mang so
function mangso() : number[]{
    return [4,6,7,8,9];
}
console.log(mangso());

// hàm đối tượng ( any );
function doituong() : any{
    var nhanvatgame = {
        ten : "chuot",
        mau : 50,
        kinang : {
            kinang1 : "tanhinh",
            kinang2 : "bắn độc"
        }
    }
    return nhanvatgame;
}

console.log(doituong());

// sử dụng hàm để tính trung bình cộng 
function tinhtbc(x:number,y:number) : void{
    var tbc = (x+y)/2;
    console.log("trung bình cộng của "+ x + " và "+y +"là : "+ tbc );

}

tinhtbc(900,100);

// hàm anonymous 
var z  = function(x:number,y:string) : string {
    return `chào ${y},năm nay bạn ${x} có phải không`;

}

console.log(z(20,"dũng"));

