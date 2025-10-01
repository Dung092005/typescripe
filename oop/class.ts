class tennhanvat{
    name : string;
    slogan: string;
    mau : number;

    constructor(name:string,slogan: string,mau : number){
        this.name = name;
        this.slogan = slogan;
        this.mau = mau;
    }
    chay(){}
    chem(){}
    hienthiten(){
    return `Nhan vat: ${this.name},
            slogan : ${this.slogan},
            mau : ${this.mau}
                `
    }
}
class dienthoai{
    ten : string;
    gia : number;
    sao : number;
    mausac : string[];
    constructor(ten: string, gia:number, sao: number, mausac: string[]){
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    shownoidung(){
        return `San pham : ${this.ten} co gia la ${this.gia},duoc danh gia ${this.sao} sao 
        co mau la : ${this.mausac[0]}, ${this.mausac[1]}, ${this.mausac[2]} `
    }
}

var nhanvat1 = new tennhanvat("liliana","tuong phep co dong",5050);

console.log(nhanvat1.hienthiten());

var sp1 = new dienthoai("samsung",1900000,4,["xanh","do","tim","vang"]);
console.log(sp1.shownoidung());