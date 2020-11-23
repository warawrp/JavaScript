// รูปแบบปกติ
function bluePill(a,b){
    return a+b;
}

let sumPill = bluePill(50,25);
console.log(sumPill);

// รูปแบบ arrow 
// 1.1 มีค่าในคำสั่งมากกว่า 1 คำสั่ง
const candy = (a,b)=>{
    console.log("Candy");
    return a+b;
}

let sumCandy = candy(10,10);
console.log(sumCandy);

// 1.2 มี return ค่าเดียว ไม่ต้องใส่ return และปีกกา {a+b} ได้
const candy1 = (a,b)=>a+b;

let sumCandy1 = candy1(5,5);
console.log(sumCandy1);


// 1.3 มีพารามิเตอร์ตัวเดียวไม่ต้องใส่วงเล็บตรง (a) ก็ได่
const sugar=a=>a+100;

let sumSugar = sugar(5);
console.log(sumSugar);

// 1.4 สามารถ return object ได้
const student=name=>({name:name, age:26})

let result = student("Waraphorn");
console.log(result);
