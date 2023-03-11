// //ELEMSB
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             entry.target.classList.remove('hidden');
//         } else {
//             entry.target.classList.remove('show');
//             entry.target.classList.add('hidden');
//         }
//     })
// })
// const hidden = document.querySelectorAll('.hidden');
// hidden.forEach((el) => observer.observe(el));

// //Countdown
// const countDownElem = document.getElementById("countdowntxt");
// const countDownDate = new Date(2023, 0, 1, 00, 00);
// const endTime = countDownDate.getTime();
// let f = setInterval(() => {
//     let todayDate = new Date();
//     let todayTime = todayDate.getTime();
//     let remainingTime = endTime - todayTime;
//     let oneMin = 60 * 1000;
//     let oneHr = 60 * oneMin;
//     let oneDay = 24 * oneHr;

//     let addZeroes = (num) => (num < 10 ? `0${num}` : num);
//     if (endTime < todayTime) {
//         clearInterval(f);
//         countDownElem.innerText = "🎉Happy 2023";
//     } else {
//         let daysLeft = Math.floor(remainingTime / oneDay);
//         let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
//         let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
//         let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

//         countDownElem.innerText = `${daysLeft} Days, ${hrsLeft} Hours, ${minsLeft} Mins, and ${secsLeft} Seconds`
//     }
// }, 1000);