// 숫자형 배열
let arr = [10,20];
console.log(arr[0]);
console.log(arr[1]);



// 구조 분해 할당
// [a , b] = [10 ,20]
let [a , b] = arr;

console.log(a);
console.log(b);

//객체의 구조분해할당

const product = {
    name : "무선마우스" ,
    price: 27000

}


// const {객체 속성 }  = 객체 
const {name , price} = product;


console.log(`제품명 : ${name} `);
console.log(`가격 : ${price} `);
