let persons =[
    {
        name : "이정후",
        age :  27 ,
        sports : "야구" 
    } ,
    {
        name : "최민정",
        age :  23 ,
        sports : "스피드 스케이딩" 
    } ,
] 


let p1 = persons[1];  // 두번째 객체

console.log(p2) ;

let demo =document.getElementById("demo")


demo.innerHTML  =  `
    <h3>${p1.name} </h3>
     <p>나이${p1.age} </h3>
     <p>${p1.sports} </h3>
`