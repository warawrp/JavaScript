// 1.
    let days = {day: "Monday", color: "Yellow"}
    console.log(days);

    let days2 = {"day":"Sunday", "olor": "red"}
    console.log(days2);

// 2.
    let users ={
        user1 : "Warawrp",
        user2 : "Bluepill"
    }
    console.log(users);

// 3.
    let users2 ={
        ['user'+1*2] : "Warawrp",
        ['user'+2*2] : "Bluepill"
    }
    console.log(users2);

// 4. 
    let name = "เค้ก"

    let food={
        [name] :name+"มะม่วง", price : "250"
    }
    console.log(food);

// 5.
    let book = "Comic"

    let order ={
        [book]:book+" Naruto" , [book+"Type"]: "Shonen"
    }

    // console.log(order);

    let {Comic,ComicType}=order
    console.log(Comic);
    console.log(ComicType);
