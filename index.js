const CIRCLE = "●";
const CROSS = "×";

let turn = 1;

function $(id) {
    return document.getElementById(id);
}

function isCircle() {
    return turn % 2 ===1;
}

function changeNowPlayer() {
    if(isClircle()) $("tool_nowPlayer").innerHTML = CIRCLE + "のターン";
    else $("tool_nowPlayer").innerHTML = CROSS + "のターン"
}

function clickToCheck(e) {
    let id = e.target.id;

    let object = $(id);

    if (object.value !== "") return;

    if (isCircle()) object.value = CIRCLE;
    else object.value = CROSS;

    if (completeMark()) return;

    turn++;
}

completeMark() {
    let isEnd = false;

    for (let row = 0; row < 3; row++) {
        isEnd = isComplete(ID_LIST[row][0], ID_LIST[row][1], ID_LIST[row][2]);
        if (isEnd) return true;
    }

    for(let col = 0; col < 3; col++) {
        isEnd = isComplete(ID_LIST[0][col], ID_LIST[1][col], ID_LIST[2][col]);
        if (isEnd) return true;
    }
}

function isComplete(firstId, secondId, thirdId) {
    
    if ($(firstId).value === "" || $(secondId).value === "" || $(thirdId).value === "") return;
    
   
    else if ($(firstId).value === $(secondId).value && $(secondId).value === $(thirdId).value) return true;
    
    
    else return false;
  }

const ID_LIST = [
    ["s1", "s2", "s3"],
    ["s4", "s5", "s6"],
    ["s7", "s8", "s9"],
];

function isComplete(firstId, secondID, thirdId) {
    console.log(firstId);
    console.log(secondID);
    console.log(thirdId);
}

function completeMark(){
    for (let row = 0; row < 3; row++){
        isComplete(ID_LIST[row][0], ID_LIST[row][1], ID_LIST[row][2]);
    }
}

function onloadAction() {
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            $(ID_LIST[row][col]).onclick = clickToCheck;
        }
    }    
}

window.onload = onloadAction;

function winLossResults(message) {
    $("tool_resultText").innerHTML = message;
}
 
let isRun = true; 


function winLossResults(message) {
  
  isRun = false;  

  $("tool_resultText").innerHTML = message;
}


function clickToCheck(e) {
 
  if (!isRun) return;  

  let id = e.target.id;

  
  let object = $(id);

  
  if (object.value !== "") return;

  
  if (isCircle()) object.value = CIRCLE;
  else object.value = CROSS;

  
  if (completeMark()) return;

  
  turn++;

  
  changeNowPlayer();
}

function resetAction() {
    
    turn = 1;
  
    
    changeNowPlayer();
  
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        $(ID_LIST[row][col]).value = "";
      }
    }
  
    
    winLossResults("");
  
    
    isRun = true;
  }
  
  
  
  function onloadAction() {
   
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        $(ID_LIST[row][col]).onclick = clickAction;
      }
    }
  
    
    $("reset").onclick = resetAction;
  
    
    resetAction();
  }

  function resetAction() {
    
    turn = 1;
  
    
    changeNowPlayer();
  
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        $(ID_LIST[row][col]).value = "";
      }
    }
  
    
    winLossResults("");
  
    
    $("tool_nowPlayer").style.display = "block";
  
    
    $("tool_resultText").style.display = "none";
  
    
    isRun = true;
  }