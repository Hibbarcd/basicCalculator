 
const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");


const decimalBtn = document.getElementById("calc-period");
const clearBtn = document.getElementById("calc-clear");
const backspaceBtn = document.getElementById("calc-backspace");

const displayValElement = document.getElementById("calc-disp-val");

const calcNumBtns = document.getElementsByClassName("calc-btn-num");
const calcOpBtns = document.getElementsByClassName("calc-btn-operation");

const displayVal = 0;
const evalStringArray = [];

const updateDispVal = function(clickObj) {
 var btnTxt = clickObj.target.innerHTML;
    if (displayVal ==='0')  
        displayVal = '';
    
    displayVal += btnTxt;
    displayValElement.innerHTML = displayVal;

};

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener("click", updateDispVal, false) 
}
    //  const performOperation = () => {

//  };

for (let i = 0; i < calcOpBtns.length; i++) {
calcOpBtns[i].addEventListener("click", performOperation, false) 
}



clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;

}
