var video = document.getElementById("myVideo");
//변수인 비디오는 document에서 id myVideo를 찾는다
var btn = document.getElementById("myBtn");
//변수인 btn는 document에서 id myBtn를 찾는다

function myFunction(){
    //가정법으로 2개에 이벤트를 실행
    if(video.paused){
        video.play();
        btn.innerHTML = "Pause"
    }
    //위 상황에 반대
    else{
        video.pause();
        btn.innerHTML="Play";
    }
}