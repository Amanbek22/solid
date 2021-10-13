let coursesMainTitle = document.getElementsByClassName('card-main-title');
let cardSubTitle = document.getElementsByClassName('card-sub-title');
let duration = document.getElementsByClassName('duration');
let startData = document.getElementsByClassName('start-data');
let lessonDay = document.getElementsByClassName('lesson-day');
let lessonTime = document.getElementsByClassName('lesson-time');
let remain = document.getElementsByClassName('remain');


fetch('http://35.223.222.188:3000/data')
.then(result => result.json())
.then(data => {
  console.log(data);
  data.courses.coursesList.forEach((item, index) => {
    coursesMainTitle[index].innerHTML = item.title;
    cardSubTitle[index].innerText = item.price;
    duration[index].innerText = item.duration;
    startData[index].innerText = item.startData;
    lessonDay[index].innerText = item.lessonsDay;
    lessonTime[index].innerText = item.lessonsTime;
    remain[index].innerText = item.remain;
  });
});


//http://35.223.222.188:3000/data