class myrootclass
  {  
     myrootshow()  
    {  
      alert("hello")
    }  
  }  

class subclass extends myrootclass
  {  
  }  

var t=new subclass();  
t.myrootshow();  