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
    endTime.setHours(5);
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


document.body.addEventListener("click", function() {
    document.querySelector(".popup-modal").style.display = "none";
});

// document.body.addEventListener('click', () => {
//     // document.querySelector(".popup").style.display = "none";

//     console.log('mouse click');
// });