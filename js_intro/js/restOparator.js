// 1.
    const addUser = (name, lastname,... city) =>{
        return name + " " + lastname + " city " + city
    }
    console.log(addUser("Waraphorn", "Srijiw", "Nonthaburi","Bangkok"));
    console.log(addUser("Waraphorn", "Srijiw", "Bangkok"));

// 2. map
    const addMessage = (first,... message)=>{
        return message.map(m=>first+message)
    }
    console.log(addMessage("Hello ", "Suturday", "Sunday"));

//3. reduce
    const addNumber =(... number)=>{
        return number.reduce((first,current)=>{
            return first+current
        })
    }
    console.log(addNumber(1,2,3,4,5));