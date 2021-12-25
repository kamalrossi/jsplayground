class myClass{

    constructor(name){
        this.name=name;
    }
    myshow(){
        alert(this.name)
    }
}

let a=new myClass("testman");
a.myshow() 