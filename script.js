window.addEventListener("load", function() {
    var currentTime = new Date();
    var startTime = new Date();
    var endTime = new Date();

    startTime.setHours(11);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    endTime.setHours(16);
    endTime.setMinutes(26);
    endTime.setSeconds(0);
    currentTime.getHours();
    currentTime.getMinutes();
    currentTime.getSeconds();

    if (currentTime >= startTime) {
        console.log("ok");
        document.querySelector(".popup").style.display = "block";
    }
    if (currentTime >= endTime) {

        console.log("no");
        document.querySelector(".popup").style.display = "none";
    }
});


document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});