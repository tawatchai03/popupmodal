// popup-modal container 
window.addEventListener("load", function() {
    var zoneTime = new Date().toLocaleString('th-TH', { timeZone: 'Asia/jakarta' });
    var currentTime = new Date();
    var startTime = new Date();
    var endTime = new Date();
    console.log(zoneTime);
    //เริ่มทำงาน
    startTime.setDate(15);
    startTime.setMonth(8);
    startTime.setYear(22);
    startTime.setHours(10);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    //จบการทำงาน
    endTime.setDate(16);
    endTime.setMonth(8);
    endTime.setYear(22);
    endTime.setHours(22);
    endTime.setMinutes(0);
    endTime.setSeconds(0);

    currentTime.setDate(16);
    currentTime.setMonth(8);
    currentTime.setYear(22);
    currentTime.getHours();
    currentTime.getMinutes();
    currentTime.getSeconds();

    if (currentTime >= startTime) {
        document.querySelector(".popup-modal").style.display = "block";
    }
    if (currentTime >= endTime) {
        document.querySelector(".popup-modal").style.display = "none";
    }
});
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup-modal").style.display = "none";
});

//document.body.addEventListener("click", function() {
//  document.querySelector(".popup-modal").style.display = "none";
//});

//container Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Start autoplaying automatically
var autoplayInterval = setInterval(function() {
    // Get element via id and click next
    document.getElementById("next").click();
}, 4000); // Do this every 1 second, increase this!

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("slider__navlink");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}