class myClass{
    constructor(){
        var address;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address=address;
    }
}
let t=new myClass();
t.setAddress("Dhaka");
alert(t.getAddress())
