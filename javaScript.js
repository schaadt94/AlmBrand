// når brugeren trykker på menubotton:
// skift/toggle klassen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}


// Dette element gør så alle href attributer falder glidende ned af siden.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Scroll tilbage til toppen - Knap

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("tilTop").style.display = "block";
    } else {
        document.getElementById("tilTop").style.display = "none";
    }
}

// Når man klikker på denne knap, så kommer man tilbage til toppen
function tilTopFunktion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
