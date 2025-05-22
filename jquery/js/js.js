$(function(){  //문서가 로드되기전에 실행되는걸 방지
    $("#hide").click(function(){
        $("p.one").hide(200);
    });
    $("#show").click(function() {
        $("p.one").show(1000);
    })

    //토글버튼
    $("button.control").click(function(){
        $("mark").toggle();
    });
})