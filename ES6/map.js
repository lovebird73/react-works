/* map() 함수 
 -배열의 각 요소에 대해 주어진 함수를 호출한
 결과를 모아 새로운 배열을 반환하는 함수 */



 const numbers = [1,2,3,4] ;

 // map( 콜백함수 )- 중괄호와 리턴 생략 할수있다.

 /*
 const newNumbers = numbers.map( (x) =>  {
    return x*2;
 });*/


const newNumbers = numbers.map( x=> x*2);

console.log(newNumbers);

// 객체 배열에서 특정 속성만 추출하기

const users = [
    {name : 'Jerry' , age :25},
    {name : 'Linda' , age :30},
    {name : 'Tom' , age :35}

] ;

const names  = users.map(user => user.name);
const ages  = users.map(a => a.age);



console.log(names);
console.log(ages);





