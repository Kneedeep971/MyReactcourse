let box1 = {
    id: "item1",
    color: "purple",
    children: "This is box1"
};
let box2 = {
    id: "item2",
    color: "yellow",
    children: "This is box2"
};
let box3 = {
    id: "item3",
    color: "orange",
    children: "This is box3"
};

let boxes = [box1, box2, box3];

//let myDivRef = document.getElementById(boxes[0].id);
//myDivRef.innerHTML = boxes[0].children;
//myDivRef.style.backgroundColor = boxes[0].color;

//myDivRef = document.getElementById(boxes[1].id);
//myDivRef.innerHTML = boxes[1].children;
//myDivRef.style.backgroundColor = boxes[1].color;

//myDivRef = document.getElementById(boxes[2].id);
//myDivRef.innerHTML = boxes[2].children;
//myDivRef.style.backgroundColor = boxes[2].color;

for (let index = 0; index < 3; index++) {

     let myDivRef = document.getElementById(boxes[index].id);
     myDivRef.innerHTML = boxes[index].children;
     myDivRef.style.backgroundColor = boxes[index].color;
}