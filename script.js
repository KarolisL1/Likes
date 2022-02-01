var count = 0;
var count2 = 0;
var count3 = 0;

function countlikes() {
    count++;
    document.querySelector(".firsttopmiddle").innerText = count + " like(s)";
    console.log(count);
}

function countlikes2() {
    count2++;
    document.querySelector(".secondtopmiddle").innerText = count2 + " like(s)";
    console.log(count2);
}

function countlikes3() {
    count3++;
    document.querySelector(".thirdtopmiddle").innerText = count3 + " like(s)";
    console.log(count3);
}