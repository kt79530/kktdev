import 'bootstrap/dist/css/bootstrap.min.css';
/*React에 후크함수 함수형 컴포넌트에서 상태를 관리하고 업데이트 할수 있게
해주는 기능 */
import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

//[]{}() api
const items = [
{
src:'https://picsum.photos/id/123/1200/400',
altText:'이걸확인한다면 이미지 터짐',
caption:'img title 1',
key:1,//0,1,2,3,4,5,6,7,8,9,10,11
},
{
src:'https://picsum.photos/id/456/1200/400',
altText:'이걸확인한다면 이미지 터짐',
caption:'img title 2',
key:2,
},
{
src:'https://picsum.photos/id/678/1200/400',
altText:'이걸확인한다면 이미지 터짐',
caption:'img title 3',
key:3,
},
];
//파라미터 => 매개변수{변수에 부수적인 옵션} 인수{매개변수에 결과값} : 비스킷 살돈은 없어
function Slide(args:any){//필요한 기능을 수행하기 위해서
    //초기화 변수에서 변하기 위한 준비단계 null 숫자일때 거짓은 0 string 기타 null false
    const [activeIndex, setActiveIndex] = useState(0)
    //0{거짓}1{진실}
    //위에 3개에 이미지 순번에 맞게 움직이거나 또는 강제로 이전 이후로 이동하게끔 하기 위해서 초기화를 시켜준다
    const [animating, setAnimating] = useState(false);

    //오른쪽 함수는  return을 사용하면 중지
    const next = () => {//편안한 사용을 위해 화살표함수
if (animating) return; //애니메이션이 실행중이면 함수 실행을 멈춤
//삼항 연산자 : 주어진 사항에서 거짓과 진실중에 선택 2 "2" 엄격한 같음 타입까지 고려
const nextIndex = activeIndex ===  items.length - 1  ? 0:activeIndex + 1;
// 다음 항목의 순번을 결정 
/*
ativeIndex = 현재 활성화된 항목의 인덱스
items.length - 1 = 배열의 마지막 인덱스 1,2,3 -2 -1 1 = 1 0
순환적인 인덱스를 처리하는 로직이다
*/
    }
  
    //왼쪽
    const previous = () => {
        if (animating) return; //애니메이션이 실행중이면 함수 실행을 멈춤
        const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex - 1;
    }

    //
    const gotoIndex = (newIndex : any) => {//newIndex 1,2,3중에 어떤것도 가능
        if (animating) return; //애니메이션이 실행중이면 함수 실행을 멈춤
        setActiveIndex(newIndex);
    }
/*집합 = 1, 집합2 = 2 단일변수에 여러값을 담을때 쓰는 솔루션 배열 집합 = [1,2,3...] 
리액트에 배열을 주로 사용하는 방법이 .map()
*/

/*
const slides = items.map((item) => {
    return(
<CarouselItem
onExiting={() => setAnimating(true)}
onExited={() => setAnimating(false)}
key={item.src}
>
    <img src={item.src} alt={item.altText} className='w-100'/>
    <CarouselCaption
    captionText={item.caption}
    captionHeader={item.caption}
    />
</CarouselItem>
);
});

return(
    <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    {...args}//확산연산자 es6에서 추가된 배열의 나머지 값을 받아오거나 편하게 확장하는것
    >
    <CarouselIndicators
    items={items}
    activeIndex={activeIndex}
    onClickHandler={goToIndex}
    />
    {slides}
<CarouselControl
direction='prev'
directionText='Previous'
onClickHandler={previous}
/>
<CarouselControl
direction='next'
directionText='Next'
onClickHandler={next}
/>
    </Carousel>
);*/


}
export default Slide;
/*
고지식한 프로젝트 방식 => 폭포수모델
클라이언트와 대응하면 프로젝트를 처리하는 방법 애자일 스프린터 방식
이미지소스 정의
최초자바스크립트에서 변수를 var 재선언 재할당 그걸방지하고자
es6에서 let[var], const[상수{변하지 않고 참조만 가능}]를 사용합니다 
재선언 재할당 금지
*/