// 1. global , lacal->block scope
// var
    var price = 20;
    var fruit = 'Apple';

    if(price ===20){
        // update
        var fruit = 'Orange';
        console.log(fruit);
    }

    console.log(fruit);
    // ความจริง Orange ควรแสดงผลที่ใน if และ Apple ควรแสดงผลที่ด้านนอก if

// let วิธีแก้คือใช้ let แทน var
    let price2 = 20;
    let fruit2 = 'Apple';

    if(price2 ===20){
        let fruit2 = 'Orange';
        console.log("in block",fruit2);
    }

    console.log("out block", fruit2);

// const : constant ค่าคงที่
    // 1. เก็บข้อมูลเป็นตัวเลข, ตัวอักษร ไม่สามารถเปลี่ยนแปลงค่าได้
    const total = 100;

    //ถ้า update ค่า total ใหม่ระบบจะ error
    // total=200; 

    console.log(total);

    // 2. เก็บข้อมูลเป็น Object สามารถเปลี่ยนแปลค่าได้
    const person = {name:"warawrp",lastname:"srijiw"}

    // update ค่าใหม่ได้
    person.name ="wara";
    console.log(person);