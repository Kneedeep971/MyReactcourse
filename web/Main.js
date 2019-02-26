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

let boxes = ["box1", "box2", "box3"];

let myDivRef = document.getElementById(boxes[2].id);

myDivRef.innerHTML = boxes[2].children;

myDivRef.style.backgroundColor = boxes[2].color;