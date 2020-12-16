(() =>{

    //1. Lexical scope and Dynamic 
        // function printName(){
        //     console.log(this);
        // }

        // printName();

    //2. How to know what is "this"
        // function printName(){
        //     console.log(this);
        //     console.log(`My name is ${this.name}`);
        // }

        //2.1 Invoker object
            // const warawrp = {name:"warawrp", printName}
            // const waraphorn = {name:"Waraphorn", printName}

            // warawrp.printName();
            // waraphorn.printName();

        //2.2 Global object (window / global)
            // name = "Wara"
            // printName();

        //2.3 Constructor function
            // function Person(){
            //     this.name = name;
            //     this.printName = printName;
            // }

            // const warawrp = new Person('Warawrp');
            // warawrp.printName();

    //3. call() / apply() / bind()
        function printName (nationality, city){
            console.log(this);
            console.log(`My name is ${this.name}, I'm ${nationality} and an living in ${city}`);
        }

        function Person(name, nationality, city){
            this.name = name;
            this.nationality = nationality;
            this.city = city;

            printName(this.nationality, this.city);
            printName.call(this, this.nationality, this.city);
            printName.apply(this, [this.nationality, this.city]);

            const printWaraphorn = printName.bind(this);
            printWaraphorn(this, this.nationality, this.city);
        }

        const waraphorn = new Person('Waraphorn', 'Thai' , 'Nonthaburi');
})();