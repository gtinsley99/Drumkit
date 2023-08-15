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
    boom.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        boom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    boomAudio.load();
    boomAudio.play();
});

clap.addEventListener("click", () => {
    clap.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        clap.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    clapAudio.load();
    clapAudio.play();
});

hihat.addEventListener("click", () => {
    hihat.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        hihat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    hihatAudio.load();
    hihatAudio.play();
});

kick.addEventListener("click", () => {
    kick.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        kick.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    kickAudio.load();
    kickAudio.play();
});

openhat.addEventListener("click", () => {
    openhat.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        openhat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    openhatAudio.load();
    openhatAudio.play();
});

ride.addEventListener("click", () => {
    ride.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        ride.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    rideAudio.load();
    rideAudio.play();
});

snare.addEventListener("click", () => {
    snare.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        snare.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    snareAudio.load();
    snareAudio.play();
});

tink.addEventListener("click", () => {
    tink.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        tink.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    tinkAudio.load();
    tinkAudio.play();
});

tom.addEventListener("click", () => {
    tom.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        tom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    tomAudio.load();
    tomAudio.play();
});

document.addEventListener("keydown", (e) => {
    if (e.code == "KeyA"){
        boom.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        boom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        boomAudio.load();
        boomAudio.play();
    } else if (e.code == "KeyS"){
        clap.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        clap.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        clapAudio.load();
        clapAudio.play();
    } else if (e.code == "KeyD"){
        hihat.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        hihat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        hihatAudio.load();
        hihatAudio.play();
    } else if (e.code == "KeyF"){
        kick.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            kick.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        kickAudio.load();
        kickAudio.play();
    } else if (e.code == "KeyG"){
        openhat.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        openhat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        openhatAudio.load();
        openhatAudio.play();
    } else if (e.code == "KeyH"){
        ride.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        ride.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        rideAudio.load();
        rideAudio.play();
    } else if (e.code == "KeyJ"){
        snare.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        snare.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        snareAudio.load();
        snareAudio.play();
    } else if (e.code == "KeyK"){
        tink.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        tink.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        tinkAudio.load();
        tinkAudio.play();
    } else if (e.code == "KeyL"){
        tom.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
        tom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        tomAudio.load();
        tomAudio.play();
    }
});

