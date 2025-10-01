// trường hợp 1 : public 
    // trường hợp này là trường hợp như code bthg, gọi ở trong, ngoài, và class con đều được 

//trường hợp 2 : private 
class person {
    private ten : string;
    public height : number;
    constructor(ten : string,height : number){
        this.ten = ten;
        this.height = height;
    }
    private goiten(){ 
        console.log(this.ten);
    }
}
class hocsinh extends person{
    id : string;
    constructor(ten:string, height:number, id:string){
        super(ten,height);
        this.id = id;
    }
}

var a = new person("Dung",8);
console.log(a.ten);                
// dòng này sẽ ko chạy được vì ten là private, ko gọi được bên ngoài, chỉ gọi được gián tiếp
a.goiten(); 
// dòng này là private nên cùng vậy 


// truong hơp 3 : protect ( ko gọi được bên ngoài, nhưng gọi bên trong và trong class con )
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

class Student extends Person {
    introduce() {
        // ✅ được phép dùng vì sayHello là protected
        this.sayHello();
    }
}

const p = new Person("Dung");

// ❌ Không được gọi ở ngoài
// p.sayHello();

const s = new Student("Dat");
s.introduce(); // ✅ chạy được



// ở kiểu public thì in được cả ngoài lẫn trong class, và cả con của class parent nữ
// ở kiểu private thì không thể gọi từ bên ngoài class, hay ở class con, chi có thể gọi gián tiếp qua 1 hàm public trong class
// và hàmpublic này có thể gọi bên ngoài 