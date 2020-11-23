// แบบเดิม
    const name = 'Waraphorn';
    const lastname = 'Srijiw';
    const city = 'Nonthaburi'

    const all = 'Name : '+name+' Lastname : '+lastname+' city : '+city;
    console.log(all);

    const allNew = 'Name : '+name+ 
    '\nLastname : '+lastname+ 
    '\ncity : '+city;
    console.log(allNew);

// แบบใหม่
    const allName1 = `Name : ${name} Lastname : ${lastname} City : ${city}`
    console.log(allName1);

    const allName2 = `Name : ${name}
    Lastname : ${lastname}
    City : ${city}`
    console.log(allName2);