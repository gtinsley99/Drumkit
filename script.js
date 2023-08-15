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

// soundBtns.array.forEach((letterSound) => {
//     letterSound.addEventListener("click", (e) => {

//     })
// });

boom.addEventListener("click", () => {
    boomAudio.load();
    boomAudio.play();
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

// document.addEventListener("keyPressed", () => {
//     if (keyPressed == "a" || keyPressed == "A"){
//     boomAudio.play();
//     } else if (keyPressed == "s" || keyPressed == "S"){
//         clapAudio.play();
//     }else if (keyPressed == "d" || keyPressed == "D"){
//         hihatAudio.play();
//     }else if (keyPressed == "f" || keyPressed == "F"){
//         kickAudio.play();
//     }else if (keyPressed == "g" || keyPressed == "G"){
//         openhatAudio.play();
//     }else if (keyPressed == "h" || keyPressed == "H"){
//         rideAudio.play();
//     }else if (keyPressed == "j" || keyPressed == "J"){
//         snareAudio.play();
//     }else if (keyPressed == "k" || keyPressed == "K"){
//         tinkAudio.play();
//     }else if (keyPressed == "l" || keyPressed == "L"){
//         tomAudio.play();
//     }
// })

