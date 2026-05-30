let numbers = new Array(4);

// console.log(numbers);

numbers[0] = 10;

numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;

console.log(numbers);
console.log("크기 : " ,numbers.length);


let demo =document.getElementById("demo");
// for 문을 이용한 요소 출력
for ( let i =0 ;  i < numbers.length; i++ ) {
    //console.log(numbers[i]);

    demo.innerHTML  += numbers[i] +'<br>' ;
}

//배열객체 에서 제공된 forEach() 메서드 를 이용한 출력


numbers.forEach( (number , index) => {
    demo.innerHTML += `${numbers[i]}<br>`
    } 
)
