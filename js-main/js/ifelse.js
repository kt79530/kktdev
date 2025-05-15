const time = new Date().getHours(); // new:새로운 객체 생성./ 상수 시간은 = 데이터 객체를 얻고 거기서 시간을 얻어온다
let greeting; //let은 재선언 재할당이 금지
if (time < 10){
    greeting = "goodmorning"
}
else if (time < 20) {
    greeting = "it's a rainy day"
}
else {
    greeting = "Have a goodnight"
}
document.getElementById("con").innerHTML = greeting;

let text;
if(Math.random() < 0.5){
    text = "저는 0.5보다 작아요"
}
else{
    text = "<a href='http://youtube.com'>유튜브</a>"
}
document.getElementById("txt").innerHTML = text;

let day;
switch(new Date().getDay()){
    case 0:
        day = "일요일"
        break;
    case 1:
        day = "월요일"
        break;
    case 4:
        day = "목요일"
        break;
    case 6:
        day = "수요일"
        break;
    default :
    day = "오늘은 아마도 목요일인것 같아요"
}
document.getElementById("day").innerHTML = day;