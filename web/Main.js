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

let boxes = ["box1", "box2", "box3"]

let myDivRef = document.getElementById(boxes[1].id)

myDivRef.innerHTML = boxes[1].children
myDivRef.style.backgroundColor = 1