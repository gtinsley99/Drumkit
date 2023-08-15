const soundBtns = document.getElementById("soundBtns");
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const boomAudio = document.getElementById("boomAudio");
const clapAudio = document.getElementById("clapAudio");
const hihatAudio = document.getElementById("hihatAudio");
const kickAudio = document.getElementById("kickAudio");
const openhatAudio = document.getElementById("openhatAudio");
const rideAudio = document.getElementById("rideAudio");
const snareAudio = document.getElementById("snareAudio");
const tinkAudio = document.getElementById("tinkAudio");
const tomAudio = document.getElementById("tomAudio");

boom.addEventListener("click", () => {
    boomAudio.load();
    boomAudio.play();
    // boom.style.border = "5px solid green";
})

clap.addEventListener("click", () => {
    clapAudio.load();
    clapAudio.play();
})
hihat.addEventListener("click", () => {
    hihatAudio.load();
    hihatAudio.play();
})
kick.addEventListener("click", () => {
    kickAudio.load();
    kickAudio.play();
})
openhat.addEventListener("click", () => {
    openhatAudio.load();
    openhatAudio.play();
})
ride.addEventListener("click", () => {
    rideAudio.load();
    rideAudio.play();
})
snare.addEventListener("click", () => {
    snareAudio.load();
    snareAudio.play();
})
tink.addEventListener("click", () => {
    tinkAudio.load();
    tinkAudio.play();
})
tom.addEventListener("click", () => {
    tomAudio.load();
    tomAudio.play();
})

document.addEventListener("keydown", (e) => {
    if (e.code == "KeyA"){
        boomAudio.load();
        boomAudio.play();
    } else if (e.code == "KeyS"){
        clapAudio.load();
        clapAudio.play();
    } else if (e.code == "KeyD"){
        hihatAudio.load();
        hihatAudio.play();
    } else if (e.code == "KeyF"){
        kickAudio.load();
        kickAudio.play();
    } else if (e.code == "KeyG"){
        openhatAudio.load();
        openhatAudio.play();
    } else if (e.code == "KeyH"){
        rideAudio.load();
        rideAudio.play();
    } else if (e.code == "KeyJ"){
        snareAudio.load();
        snareAudio.play();
    } else if (e.code == "KeyK"){
        tinkAudio.load();
        tinkAudio.play();
    } else if (e.code == "KeyL"){
        tomAudio.load();
        tomAudio.play();
    }
})

