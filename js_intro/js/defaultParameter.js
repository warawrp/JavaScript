const addUser = (name, lastname, city = "Bangkok")=>{
    return name +" "+ lastname + " city : " + city
}
console.log(addUser("Waraphorn", "Srijiw", "Nonthaburi"));
console.log(addUser("Wara", "Srijiw"));