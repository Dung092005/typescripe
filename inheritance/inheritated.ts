class tuong{
    ten : string;
    motatuong: string;
    kinang : string[];

    constructor(ten: string, motatuong: string, kinang: string[]){
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang ;

    }
    showthongtin(){
        var kn : string = " ";
        for(var i = 0 ; i< this.kinang.length; ++i){
            kn +=  this.kinang[i];
            kn += " | "; 
        }
        
        return `
        Tên tương: ${this.ten}
        Mô tả : ${this.motatuong}
        kĩ năng : ${kn}`
    }
    
    
}
class satthu extends tuong{
    donsatthu : string;
    constructor(ten: string,motatuong:string, kinang: string[],donsatthu: string){
        super(ten,motatuong,kinang);
        this.donsatthu = donsatthu;
    }
    showthongtin(){
       return super.showthongtin() + `đòn sat thủ là : ${this.donsatthu}`
    }
}
var lilia = new tuong("lilia","nư phap su dame to",["mị thuật","chu tâm tiên","hoi tho yeu ho"]);
console.log(lilia.showthongtin());
var talon = new satthu ("talon","satthubongdem",["ám khi", "hồi phục","chiến sát"],"sathuvohinh");
console.log(talon.showthongtin());




//lên hiểu rõ super() ở class con, và super.tênfunction() như là thừa thế của class cha bên trên, và nếu function bên trên có return thì dưới cùng
// phải làm y hệt