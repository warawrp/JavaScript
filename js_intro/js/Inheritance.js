class admin{
    constructor(){
        console.log("Call Constructor");
    }
    isPermission(){
        console.log("Read Write Data from Database");
    }
}


class user extends admin{
    constructor(name,age){
        super()
        this.name=name
        this.age=age
    }
    Sayhi(){
        console.log("Hello "+this.name+" age " +this.age);
    }
}

let newuser = new user("Waraphorn",26);
newuser.Sayhi()
newuser.isPermission()