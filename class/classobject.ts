class Student{
    name:String;
    id:number;
    constructor(name:string,id:number) {
        this.name=name;
        this.id=id;
    }
    display():void {
        console.log(`name ${this.name} id ${this.id}`);
    }
}
let std:Student=new Student("Golam Mustafa",333);
std.id=33;
std.name="golam mustfa"
std.display();
