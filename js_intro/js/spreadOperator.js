// แทรกข้อมูล array เก่าใน array ใหม่
// 1. array
    let colors=['blue', 'yellow'];
    console.log(colors);

    let newColors=['red', 'green', 'black']
    console.log(newColors);

    let allColors=[... colors,... newColors]
    console.log(allColors);

// 2. object8
    let books = {name: 'D-grayman', price:35}
    console.log(books);

    let updateBooks = {... books, category: 'Comic'}
    console.log(updateBooks);

    let updatePrice = {... updateBooks, price:50}
    console.log(updatePrice);
    