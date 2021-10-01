function header(title){
    console.log(`\n-------<<[${title.toUpperCase()}]>>------- `)
}
  header ( "21 question")

let x = "John";
let y = "Doe";
console.log(x +" "+y)
header ("22 question")

let object = {
    name: "Asadbek",
    surname: "Azamjonov",
    email:"asadbek010azamjonov@gmail.com"

}
header ("23 question")

delete object.age
console.log(object)
header("24 question")

let array = ['cow', 'dog', 'cat','pig',]
console.log(array)
header ("26 question")
const random = function(n){
let array = []
for (let i =0; i<n; i++ ){
    array.push(Math.floor(Math.random()*100)+1)
return array
}
}
console.log(random(10))

header("27 question")
function getRandom(max,min){
min = Math.ceil(min);
max = Math.random(max);
return  Math.floor(Math.random()*(max-min)+min);
}
console.log(getRandom(10,2))
header ("28 question")

const getArray = Array(10) 
	.fill()
	.map(() => Math.floor(10 * Math.random()));

console.log(getArray);
header("29 question")

function longestArray(par1,par2){
longestArray=[];
    if(par1.length === par2.length){
        return par1
    }else{
        return par2
    }


}
console.log(longestArray("Hi","hello"))
header ("30 question")
const higherNumber = (num1,num2)=> num1===num2 ? num1 : num2
console.log(higherNumber(5,10))
header("31 question")
document.getElementById("container")
document.querySelectorAll("td")
 function changeHeading(){
     let change = document.querySelector("h1")
     change.innerText = "Hello World"
 }
 function addItem (){
     let takeListItem = document.getElementById("list")
     let listItem =document.createElement("li")
     listItem.appendChild(document.createTextNode("Projects"))
     takeListItem.appendChild(listItem)
 }

    // document.addEventListener('mouseover', function(event) {
    //     var hoverLink = event.target; // The actual element which was hovered.
    //     if (hoverLink.alert !== 'a') { return; } // Ignore non links
        
    // });
    function hide(){
        let hideTable=document.getElementById("table")
        hideTable.style.display = none
    }

 