// let box1 = {
//     id: "item1",
//     color: "purple",
//     children: "This is box1"
// };
// let box2 = {
//     id: "item2",
//     color: "yellow",
//     children: "This is box2"
// };
// let box3 = {
//     id: "item3",
//     color: "orange",
//     children: "This is box3"
// };

// let boxes = [box1, box2, box3];

// //let myDivRef = document.getElementById(boxes[0].id);
// //myDivRef.innerHTML = boxes[0].children;
// //myDivRef.style.backgroundColor = boxes[0].color;

// //myDivRef = document.getElementById(boxes[1].id);
// //myDivRef.innerHTML = boxes[1].children;
// //myDivRef.style.backgroundColor = boxes[1].color;

// //myDivRef = document.getElementById(boxes[2].id);
// //myDivRef.innerHTML = boxes[2].children;
// //myDivRef.style.backgroundColor = boxes[2].color;

// for (let index = 0; index < 3; index++) {

//      let myDivRef = document.getElementById(boxes[index].id);
//      myDivRef.innerHTML = boxes[index].children;
//      myDivRef.style.backgroundColor = boxes[index].color;
// }

function  randomInt() {
     let digit = Math.floor(Math.random() * (10));
     console.log(digit)
     return digit
}
const selectedNumbers =[];
const allQuickPick3s = [];

randomInt()

function generateQuickPick3() {
     for (let boxNumber = 1; boxNumber <= 3; boxNumber++) {
         flipNumbers(boxNumber);
     }
 
     setTimeout(updateOutput, 3000)
 }

function flipNumbers(boxNumber) {
     const updatingBox = document.getElementById(`item${boxNumber}`);
     let timerId = setInterval ((updatingBox)=> {
          someDigit = randomInt();
          updatingBox.innerText = someDigit;
     }, 100, updatingBox);
setTimeout((boxNumber)=>{
     clearInterval(timerId);
     const updatedBox = document.getElementById(`item${boxNumber}`);

     selectedNumbers [boxNumber-1] = updatedBox.innerText;
}, 2000, boxNumber);
}

function updateOutput() {

     let latestQuickPick3 = `${selectedNumbers[0]}${selectedNumbers[1]}${selectedNumbers[2]}`

     allQuickPick3s.push(latestQuickPick3);

     document.getElementById("allQuickPick3s").innerText = allQuickPick3s;
}

