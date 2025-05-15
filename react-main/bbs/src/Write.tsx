import {Component} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
//react에서 api와 통신할때 사용하는 모듈 = axios
import <Axios> from "axios";//미들웨어
//write라는 페이지는 쓰기 페이지여서 이벤트 발생 1) 글을 쓴다 2)성공 또는 실패
//상태 초기화를 해줌
state = {
    isModifyMode : false,//수정모드는 허용하지 않음
    title:"",
    content:"",
}
//write를 싱행하는 함수 작성, get : 기존에 있는 내용을 리턴(웹페이지 주소창에서 모든게 노출)
//쓰는 명령어를 줄때는 일반적으로 post사용
write = () => {
    Axios.post("http://")
}
class Write extends Component{
    render(){
        return(
            <>
<Container>
    <Row>
        <Col>
        <Form>
    <Form.Group className="mb-3">
<Form.Label>제목</Form.Label>
<Form.Control
type="text" 
name="title"
placeholder="제목을 입력하세요"
/>
    </Form.Group>
    <Form.Group className="my-3">
<Form.Label>내용</Form.Label>
<Form.control as="textarea" placeholder="내용을 입력하세요"/>
<input type="text"/>
    </Form.Group>
</Form>
        </Col>
    </Row>
</Container>            
            </>
           
        )
    }
}

export default Write;
