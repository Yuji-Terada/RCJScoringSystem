var timerStartSound = new Audio("./timer.mp3");
var timerFinishSound = new Audio("./timerEnd.mp3");
var plus = new Audio("./plus.mp3");
var minus = new Audio("./minus.mp3");

function soundStop(){
    timerStartSound.pause();
    timerStartSound.currentTime = 0;
    timerFinishSound.pause();
    timerFinishSound.currentTime = 0;
    plus.pause();
    plus.currentTime = 0;
    minus.pause();
    minus.currentTime = 0;
}




//============================================================

//時計
function clock(){
    const d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;
    document.getElementById("clockDate").textContent = today;
    document.getElementById("clockTime").textContent = time;
};
setInterval(clock, 10);

//============================================================

//============================================================

//試合時間
var gTInit = 60000;
var gT = gTInit;

function gameTimerMain(){
    var gTMin = Math.floor(gT / 6000);
    gTMin = gTMin < 10 ? "0" + gTMin : gTMin;
    var gTSec = Math.ceil((gT % 6000) / 100);
    gTSec = gTSec < 10 ? "0" + gTSec : gTSec;
    gTMin = gTSec == 60 ? Number(gTMin) + 1 : gTMin;
    gTMin = Number(gTMin) < 10 ? "0" + Number(gTMin) : gTMin;
    gTSec = gTSec == 60 ? "00" : gTSec;

    document.getElementById("gameTimer").innerHTML = gTMin + ":" + gTSec;

    gT = gT > 0 ? gT - 1 : gT;
}
gameTimerMain();

$("#gameTimerStart").click(function(){
    $("#gameTimerStart").toggleClass("active");
    $("#gameTimerStop").toggleClass("active");
    gameTimer = setInterval("gameTimerMain()", 10);
});

$("#gameTimerStop").click(function(){
    $("#gameTimerStart").toggleClass("active");
    $("#gameTimerStop").toggleClass("active");
    clearInterval(gameTimer);
});

$("#gameTimerReset").click(function(){
    $("#gameTimerStart").removeClass("active");
    $("#gameTimerStop").removeClass("active");
    clearInterval(gameTimer);
    gT = gTInit;
    gameTimerMain();
});

//============================================================

//============================================================

//点数計算
var scoreLeft = 0;
var scoreRight = 0;

$("#blueScoreMinus").click(function(){
    scoreLeft = Number(scoreLeft) > 0 ? Number(scoreLeft) - 1 : Number(scoreLeft);
    scoreLeft = Number(scoreLeft) < 10 ? "0" + Number(scoreLeft) : Number(scoreLeft);
    document.getElementById("blueScore").innerHTML = scoreLeft;
    soundStop();
    minus.play();
});
$("#blueScorePlus").click(function(){
    scoreLeft = Number(scoreLeft) + 1;
    scoreLeft = Number(scoreLeft) < 10 ? "0" + Number(scoreLeft) : Number(scoreLeft);
    document.getElementById("blueScore").innerHTML = scoreLeft;
    soundStop();
    plus.play();
});

$("#yellowScoreMinus").click(function(){
    scoreRight = Number(scoreRight) > 0 ? Number(scoreRight) - 1 : Number(scoreRight);
    scoreRight = Number(scoreRight) < 10 ? "0" + Number(scoreRight) : Number(scoreRight);
    document.getElementById("yellowScore").innerHTML = scoreRight;
    soundStop();
    minus.play();
});
$("#yellowScorePlus").click(function(){
    scoreRight = Number(scoreRight) + 1;
    scoreRight = Number(scoreRight) < 10 ? "0" + Number(scoreRight) : Number(scoreRight);
    document.getElementById("yellowScore").innerHTML = scoreRight;
    soundStop();
    plus.play();
});

//============================================================

//============================================================

//機体別タイマー
var tInit = 6000;

var timer1;
var timer2;
var timer3;
var timer4;

var t1 = tInit;
var t2 = tInit;
var t3 = tInit;
var t4 = tInit;

function timer1Main() {
    t1 = t1 > 599900 ? 599900 : t1;
    var t1Min = Math.floor(t1 / 6000);
    t1Min = t1Min < 10 ? "0" + t1Min : t1Min;
    var t1Sec = Math.ceil((t1 % 6000) / 100);
    t1Sec = t1Sec < 10 ? "0" + t1Sec : t1Sec;
    t1Min = t1Sec == 60 ? Number(t1Min) + 1 : t1Min;
    t1Min = Number(t1Min) < 10 ? "0" + Number(t1Min) : t1Min;
    t1Sec = t1Sec == 60 ? "00" : t1Sec;
    document.getElementById("t1").textContent = t1Min + ":" + t1Sec;
    if(t1 == 0){
        document.getElementById("t1Num").classList.add("finish");
        document.getElementById("t1").classList.add("finish");
        clearInterval(timer1);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t1Num").classList.add("active");
        document.getElementById("t1").classList.add("active");
    }
    t1 =  t1 > 0 ? t1 - 1 : t1;
}
timer1Main();

function timer2Main() {
    t2 = t2 > 599900 ? 599900 : t2;
    var t2Min = Math.floor(t2 / 6000);
    t2Min = t2Min < 10 ? "0" + t2Min : t2Min;
    var t2Sec = Math.ceil((t2 % 6000) / 100);
    t2Sec = t2Sec < 10 ? "0" + t2Sec : t2Sec;
    t2Min = t2Sec == 60 ? Number(t2Min) + 1 : t2Min;
    t2Min = Number(t2Min) < 10 ? "0" + Number(t2Min) : t2Min;
    t2Sec = t2Sec == 60 ? "00" : t2Sec;
    document.getElementById("t2").innerHTML = t2Min + ":" + t2Sec;
    if(t2 == 0){
        document.getElementById("t2Num").classList.add("finish");
        document.getElementById("t2").classList.add("finish");
        clearInterval(timer2);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t2Num").classList.add("active");
        document.getElementById("t2").classList.add("active");
    }
    t2 =  t2 > 0 ? t2 - 1 : t2;
}
timer2Main();

function timer3Main() {
    t3 = t3 > 599900 ? 599900 : t3;
    var t3Min = Math.floor(t3 / 6000);
    t3Min = t3Min < 10 ? "0" + t3Min : t3Min;
    var t3Sec = Math.ceil((t3 % 6000) / 100);
    t3Sec = t3Sec < 10 ? "0" + t3Sec : t3Sec;
    t3Min = t3Sec == 60 ? Number(t3Min) + 1 : t3Min;
    t3Min = Number(t3Min) < 10 ? "0" + Number(t3Min) : t3Min;
    t3Sec = t3Sec == 60 ? "00" : t3Sec;
    document.getElementById("t3").innerHTML = t3Min + ":" + t3Sec;
    if(t3 == 0){
        document.getElementById("t3Num").classList.add("finish");
        document.getElementById("t3").classList.add("finish");
        clearInterval(timer3);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t3Num").classList.add("active");
        document.getElementById("t3").classList.add("active");
    }
    t3 =  t3 > 0 ? t3 - 1 : t3;
}
timer3Main();

function timer4Main() {
    t4 = t4 > 599900 ? 599900 : t4;
    var t4Min = Math.floor(t4 / 6000);
    t4Min = t4Min < 10 ? "0" + t4Min : t4Min;
    var t4Sec = Math.ceil((t4 % 6000) / 100);
    t4Sec = t4Sec < 10 ? "0" + t4Sec : t4Sec;
    t4Min = t4Sec == 60 ? Number(t4Min) + 1 : t4Min;
    t4Min = Number(t4Min) < 10 ? "0" + Number(t4Min) : t4Min;
    t4Sec = t4Sec == 60 ? "00" : t4Sec;
    document.getElementById("t4").innerHTML = t4Min + ":" + t4Sec;
    if(t4 == 0){
        document.getElementById("t4Num").classList.add("finish");
        document.getElementById("t4").classList.add("finish");
        clearInterval(timer4);
        soundStop();
        timerFinishSound.play();
    }
    else{
        document.getElementById("t4Num").classList.add("active");
        document.getElementById("t4").classList.add("active");
    }
    t4 =  t4 > 0 ? t4 - 1 : t4;
}
timer4Main();





var t1Active = true;
var t2Active = true;
var t3Active = true;
var t4Active = true;

$("#t1Start").click(function(){
    $("#t1Num").toggleClass("active");
    $("#t1").toggleClass("active");
    $("#t1Start").toggleClass("active");
    if(t1Active){
        document.getElementById("t1Start").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t1Active = !t1Active;
        timer1 = setInterval("timer1Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("t1Start").innerHTML = '<i class="fa-solid fa-play"></i>';
        t1Active = !t1Active;
        clearInterval(timer1);
    }
});

$("#t2Start").click(function(){
    $("#t2Num").toggleClass("active");
    $("#t2").toggleClass("active");
    $("#t2Start").toggleClass("active");
    if(t2Active){
        document.getElementById("t2Start").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t2Active = !t2Active;
        timer2 = setInterval("timer2Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("t2Start").innerHTML = '<i class="fa-solid fa-play"></i>';
        t2Active = !t2Active;
        clearInterval(timer2);
    }
});

$("#t3Start").click(function(){
    $("#t3Num").toggleClass("active");
    $("#t3").toggleClass("active");
    $("#t3Start").toggleClass("active");
    if(t3Active){
        document.getElementById("t3Start").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t3Active = !t3Active;
        timer3 = setInterval("timer3Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("t3Start").innerHTML = '<i class="fa-solid fa-play"></i>';
        t3Active = !t3Active;
        clearInterval(timer3);
    }
});

$("#t4Start").click(function(){
    $("#t4Num").toggleClass("active");
    $("#t4").toggleClass("active");
    $("#t4Start").toggleClass("active");
    if(t4Active){
        document.getElementById("t4Start").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t4Active = !t4Active;
        timer4 = setInterval("timer4Main()", 10);
        soundStop();
        timerStartSound.play();
    }
    else{
        document.getElementById("t4Start").innerHTML = '<i class="fa-solid fa-play"></i>';
        t4Active = !t4Active;
        clearInterval(timer4);
    }
});

$("#allReset").click(function(){
    timer1Reset();
    timer2Reset();
    timer3Reset();
    timer4Reset();
    timer1Main();
    timer2Main();
    timer3Main();
    timer4Main();
    $("#t1Num").removeClass("active");
    $("#t1").removeClass("active");
    $("#t1Num").removeClass("finish");
    $("#t1").removeClass("finish");
    $("#t1Start").removeClass("active");
    $("#t2Num").removeClass("active");
    $("#t2").removeClass("active");
    $("#t2Num").removeClass("finish");
    $("#t2").removeClass("finish");
    $("#t2Start").removeClass("active");
    $("#t3Num").removeClass("active");
    $("#t3").removeClass("active");
    $("#t3Num").removeClass("finish");
    $("#t3").removeClass("finish");
    $("#t3Start").removeClass("active");
    $("#t4Num").removeClass("active");
    $("#t4").removeClass("active");
    $("#t4Num").removeClass("finish");
    $("#t4").removeClass("finish");
    $("#t4Start").removeClass("active");
});

function timer1Reset(){
    t1Active = true;
    t1 = tInit;
    timer1Main();
    clearInterval(timer1);
    $("#t1Num").removeClass("active");
    $("#t1").removeClass("active");
    $("#t1Num").removeClass("finish");
    $("#t1").removeClass("finish");
    $("#t1Start").removeClass("active");
    document.getElementById("t1Start").innerHTML = '<i class="fa-solid fa-play"></i>';
}
function timer2Reset(){
    t2Active = true;
    t2 = tInit;
    timer2Main();
    clearInterval(timer2);
    $("#t2Num").removeClass("active");
    $("#t2").removeClass("active");
    $("#t2Num").removeClass("finish");
    $("#t2").removeClass("finish");
    $("#t2Start").removeClass("active");
    document.getElementById("t2Start").innerHTML = '<i class="fa-solid fa-play"></i>';
}
function timer3Reset(){
    t3Active = true;
    t3 = tInit;
    timer3Main();
    clearInterval(timer3);
    $("#t3Num").removeClass("active");
    $("#t3").removeClass("active");
    $("#t3Num").removeClass("finish");
    $("#t3").removeClass("finish");
    $("#t3Start").removeClass("active");
    document.getElementById("t3Start").innerHTML = '<i class="fa-solid fa-play"></i>';
}
function timer4Reset(){
    t4Active = true;
    t4 = tInit;
    timer4Main();
    clearInterval(timer4);
    $("#t4Num").removeClass("active");
    $("#t4").removeClass("active");
    $("#t4Num").removeClass("finish");
    $("#t4").removeClass("finish");
    $("#t4Start").removeClass("active");
    document.getElementById("t4Start").innerHTML = '<i class="fa-solid fa-play"></i>';
}


$("#t1Reset").click(function(){
    timer1Reset();
});

$("#t2Reset").click(function(){
    timer2Reset();
});

$("#t3Reset").click(function(){
    timer3Reset();
});

$("#t4Reset").click(function(){
    timer4Reset();
});

//============================================================

//============================================================

//前後半・ハーフタイム切り替え
var gameMode = 0;
var gameModeWord = ["前半", "ハーフ", "後半", "休憩"];

var hTInit = 30000;

$("#now").click(function(){
    gameMode = gameMode < gameModeWord.length-1 ? gameMode + 1 : 0;
    document.getElementById("now").innerHTML = gameModeWord[gameMode];
    if(gameModeWord[gameMode] == "前半" || gameModeWord[gameMode] == "後半"){
        $("#gameTimerStart").removeClass("active");
        $("#gameTimerStop").removeClass("active");
        clearInterval(gameTimer);
        gT = gTInit;
        gameTimerMain();
    }
    else if(gameModeWord[gameMode] == "ハーフ"){
        $("#gameTimerStart").removeClass("active");
        $("#gameTimerStop").removeClass("active");
        clearInterval(gameTimer);
        gT = hTInit;
        gameTimerMain();
    }
});

//============================================================

//============================================================

//試合時間等設定画面
var gameTimerSettingMin = document.getElementById("gameTimerSettingMin");
var gameTimerSettingSec = document.getElementById("gameTimerSettingSec");
var halfTimerSettingMin = document.getElementById("halfTimerSettingMin");
var halfTimerSettingSec = document.getElementById("halfTimerSettingSec");
var robotTimerSettingMin = document.getElementById("robotTimerSettingMin");
var robotTimerSettingSec = document.getElementById("robotTimerSettingSec");
var blueTeamSetting = document.getElementById("blueTeam");
var yellowTeamSetting = document.getElementById("yellowTeam");

function settingUpdate(){
    gTInit = (Number(gameTimerSettingMin.value) * 60 + Number(gameTimerSettingSec.value)) * 100;
    tInit = (Number(robotTimerSettingMin.value) * 60 + Number(robotTimerSettingSec.value)) * 100;
    hTInit = (Number(halfTimerSettingMin.value) * 60 + Number(halfTimerSettingSec.value)) * 100;
    document.getElementById("teamNameBlue").innerHTML = blueTeamSetting.value;
    document.getElementById("teamNameYellow").innerHTML = yellowTeamSetting.value;

    timer1Reset();
    timer2Reset();
    timer3Reset();
    timer4Reset();

    clearInterval(gameTimer);
    gT = gTInit;
    gameTimerMain();
}

$("#settingOpen").click(function(){
    $("#dialog").addClass("active");
});

$("#settingClose").click(function(){
    $("#dialog").removeClass("active");
    settingUpdate();
});
settingUpdate();

//============================================================

//バージョン管理（ページタイトル変更など）
var version = "0.1.1"   //ここを変更することですべて変更される
document.title = "RCJ Score Manager | ver " + version;
var versionDisplay = document.getElementById("version");
versionDisplay.textContent = "ver " + version;