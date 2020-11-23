// แบบเดิม
    // 1.
        let user = {
            name : "Waraphorn",
            age : 26,
            SayHi:function() {
                return "Hello " +this.name
            }
        }
        console.log(user.SayHi());

    // 2.
        function User(name,age){
            this.name=name
            this.age=age
        }
        User.prototype.SayHi=function(){
            console.log("Hello "+this.name+" age " +this.age);
        }

        var user1 = new User("Warawrp",26);
        user1.SayHi()
    
    // แบบใหม่
        class user2{
            constructor(name2,age2){
                this.name2=name2
                this.age2=age2
            }
            Sayhi2(){
                console.log("Hello "+this.name2+" age " +this.age2);
            }
        }
        
        let newuser = new user2("Waraphorn",26);
        newuser.Sayhi2()

    