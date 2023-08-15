const soundBtns = document.getElementById("soundBtns");
const img = document.getElementById("drumkitImg")
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

// sounds and colour change when boxes clicked
boom.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    boom.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        boom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    boomAudio.load();
    boomAudio.play();
});

clap.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    clap.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        clap.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    clapAudio.load();
    clapAudio.play();
});

hihat.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    hihat.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        hihat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    hihatAudio.load();
    hihatAudio.play();
});

kick.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    kick.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        kick.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    kickAudio.load();
    kickAudio.play();
});

openhat.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    openhat.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        openhat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    openhatAudio.load();
    openhatAudio.play();
});

ride.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    ride.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        ride.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    rideAudio.load();
    rideAudio.play();
});

snare.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    snare.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        snare.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    snareAudio.load();
    snareAudio.play();
});

tink.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    tink.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        tink.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    tinkAudio.load();
    tinkAudio.play();
});

tom.addEventListener("click", () => {
    img.style.border = "3px solid rgb(94, 245, 101)";
    setTimeout(() => {
        img.style.border = "3px solid #333333";
    }, 350);
    tom.style.backgroundColor = "rgb(94, 245, 101)";
    setTimeout(() => {
        tom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
    }, 350);
    tomAudio.load();
    tomAudio.play();
});

// sounds and colour change on relevant key pressed
document.addEventListener("keydown", (e) => {
    if (e.code == "KeyA"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        boom.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            boom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        boomAudio.load();
        boomAudio.play();
    } else if (e.code == "KeyS"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        clap.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            clap.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        clapAudio.load();
        clapAudio.play();
    } else if (e.code == "KeyD"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        hihat.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            hihat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        hihatAudio.load();
        hihatAudio.play();
    } else if (e.code == "KeyF"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        kick.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            kick.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        kickAudio.load();
        kickAudio.play();
    } else if (e.code == "KeyG"){
            img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        openhat.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            openhat.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        openhatAudio.load();
        openhatAudio.play();
    } else if (e.code == "KeyH"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        ride.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            ride.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        rideAudio.load();
        rideAudio.play();
    } else if (e.code == "KeyJ"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        snare.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            snare.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        snareAudio.load();
        snareAudio.play();
    } else if (e.code == "KeyK"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        tink.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            tink.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        tinkAudio.load();
        tinkAudio.play();
    } else if (e.code == "KeyL"){
        img.style.border = "3px solid rgb(94, 245, 101)";
        setTimeout(() => {
            img.style.border = "3px solid #333333";
        }, 350);
        tom.style.backgroundColor = "rgb(94, 245, 101)";
        setTimeout(() => {
            tom.style.backgroundColor = "rgba(233, 150, 122, 0.705)";
        }, 350);
        tomAudio.load();
        tomAudio.play();
    }
});

