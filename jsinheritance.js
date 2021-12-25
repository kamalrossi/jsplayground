class superClass
{
    constructor(){
        this.name="rossi"
    }
}
class subClass extends superClass{
    constructor(address){
        super();
        this.address=address
    }
}
var t=new subClass("dhaka");
alert(t.name)
