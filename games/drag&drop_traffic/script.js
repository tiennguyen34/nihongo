//initial references
let draggableObjects;
let dropPoints;
const startButton = document.getElementById("start");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-objects");
const dropContainer = document.querySelector(".drop-points");
const data = [
"オートバイ","クラクションを鳴らす","スポーツカー","タクシー","トラック","バス","パトカー","フェリー",
"ヘリコプター","ヨット","右に曲がる","横断歩道を渡す","汽車","救急車","橋を渡す","左に曲がる","三輪車",
"自転車","車","渋滞","消防車","信号を守る","信号を無視する","信号待","新幹線","人力車","制限速度オーバー",
"制限速度を守る","船","前の車を追い越される","前の車を追い越す","地下鉄","電車","道がすく","道が混む",
"道を曲がる","馬車","白バイ","帆船","飛行機","免許証をもっていますか",

    
];

let deviceType = "";
let initialX = 0,
initialY = 0;
let currentElement = "";
let moveElement = false;

//detect touch device
const isTouchDevice = () => {
    try{
        //we try to create Touch Event (It would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

let count = 0;

//random value from array
const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)];
};

//win game displa
const stopGame = () => {
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
};

//drag & drop functions
function dragStart(e) {
    if (isTouchDevice()) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        //start movement for touch
        moveElement = true;
        currentElement = e.target;
    } else {
        //for non touch decices set data to be transfered
        e.dataTransfer.setData("text", e.target.id);
    }
}

//events fired on the drop target
function dragOver(e) {
    e.preventDefault();
}

//for touchscreen movement
const touchMove = (e) => {
    if (moveElement) {
        e.preventDefault();
        let newX = e.touches[0].clientX;
        let newY = e.touches[0].clientY;
        let currentSelectedElement = document.getElementById(e.target.id);
        currentSelectedElement.parentElement.style.top=
        currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
        currentSelectedElement.parentElement.style.left=
        currentSelectedElement.parentElement.offsetLeft -
        (initialX - newX) +
        "px";
        initialX = newX;
        initialY = newY;
    }
};

const drop = (e) => {
    e.preventDefault();
    //for touch screen
    if (isTouchDevice()) {
        moveElement = false;
        //select country name div using the custom attribute
        const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
        //get boundaries of div
        const currentDropBound = currentDrop.getBoundingClientRect();
        //if the position of flag falls inside the bounds of the countru name
        if(
            initialX >= currentDropBound.left &&
            initialX <= currentDropBound.right &&
            initialX >= currentDropBound.top &&
            initialX <= currentDropBound.bottom
        ) {
            currentDrop.classList.add("dropped");
            //hide actual image
            currentElement.classList.add("hide");
            currentDrop.innerHTML = ``;
            //insert new img element
            currentDrop.insertAdjacentHTML(
                "afterbegin",
                `<img src= "${currentElement.id}.jpg"`
            );
            count += 1;
        }
    }else{
        //access data
        const draggedElementData = e.dataTransfer.getData("text");
        //get custom attribute value
        const droppableElementData = e.target.getAttribute("data-id");
        if (draggedElementData === droppableElementData){
            const draggedElement = document.getElementById(draggedElementData);
            //dropped class
            e.target.classList.add("dropped");
            //hide current img
            draggedElement.classList.add("hide");
            //draggable set to false
            draggedElement.setAttribute("draggable","false");
            e.target.innerHTML = ``;
            //insert new img
            e.target.insertAdjacentHTML(
                "afterbegin",
                `<img src="${draggedElementData}.jpg">`
            );
            count += 1;
        }
    }
    //win
    if (count == 8) {
        result.innerText = `You Won!`;
        stopGame();
    }
};

//creates flags and countries
const creator = () => {
    dragContainer.innerHTML = "";
    dropContainer.innerHTML = "";
    let randomData = [];
    //for string random values in array
    for (let i = 1; i <= 8; i++) {
        let randomValue = randomValueGenerator();
        if (!randomData.includes(randomValue)) {
            randomData.push(randomValue);
        } else{
            //if value already exists then decrement i by 1
            i -= 1;
        }
    }
    for(let i of randomData){
        const flagDiv = document.createElement("div");
        flagDiv.classList.add("draggable-image");
        flagDiv.setAttribute("draggable", true);
        if (isTouchDevice()) {
            flagDiv.style.position = "absolute";
        }
        flagDiv.innerHTML = `<img src="${i}.jpg" id="${i}">`;
        dragContainer.appendChild(flagDiv);
    }
    //sort the array randomly before creating country divs
    randomData = randomData.sort(() => 0.5 - Math.random());
    for (let i of randomData) {
        const countryDiv = document.createElement("div");
        countryDiv.innerHTML = `<div class='countries'data-id='${i}'>
        ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", "")}
        </div>
        `;
        dropContainer.appendChild(countryDiv);
    }
};

//start game
startButton.addEventListener(
    "click",
    (startGame = async () => {
        currentElement = "";
        controls.classList.add("hide");
        startButton.classList.add("hide");
        //this will wait for creator to create the images and then move forward
        await creator();
        count = 0;
        dropPoints = document.querySelectorAll(".countries");
        draggableObjects = document.querySelectorAll(".draggable-image");

        //events
        draggableObjects.forEach((element) => {
            element.addEventListener("dragstart", dragStart);
            //for touch screen
            element.addEventListener("touchstart", dragStart);
            element.addEventListener("touchend", drop);
            element.addEventListener("touchmove", touchMove);
        });
        dropPoints.forEach((element) => {
            element.addEventListener("dragover", dragOver);
            element.addEventListener("drop", drop);
        });
    })
);