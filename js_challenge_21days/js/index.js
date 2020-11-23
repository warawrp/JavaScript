function appendImgElem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/200x150?${keyword}&sig=${index}`;
    // index ทำให้รูปไม่ซ้ำ

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function removePhoto() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword != '') {
        removePhoto();
        for (let i = 1; i <= 12; i++) {
            appendImgElem(keyword, i);
        }
    }
}

function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keypress', searchPhotos);
}

run();
















// const myName = 'Waraphorn';
// let height = 160;
// let isMale = false;
// let city = null;
// console.log(myName, height, isMale, city);

// const person = {
//     name: 'Waraphorn',
//     height: 162,
//     city: 'Nonthaburi'
// };
// console.log(person.city);

// person.height = 170;
// console.log(person);

// person.weight = 50;
// console.log(person);

// const numbers = [1, 3, 5, 7, 9];
// console.log(numbers[4]);

// numbers.push(11);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.shift()
// console.log(numbers);

// let result = 10 + 2;
// console.log(result);

// let password = '';
// if (password === '') {
//     console.log("Password is require");
// } else if (password.length >= 8 && password.length <= 12) {
//     console.log("Password is valid");
// } else {
//     console.log("Password is invalid");
// }

// function calVat(money, vat) {
//     return money * vat / 100;
// }

// const totalVat = calVat(100, 7);
// console.log(totalVat);

// const totalVat10 = calVat(100, 10);
// console.log(totalVat10);

// for (let counter = 0; counter < 10; counter++) {
//     if (counter === 5) {
//         break;
//     }
//     console.log(counter);
// }