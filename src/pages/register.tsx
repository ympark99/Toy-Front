import React, {useState} from "react";

import styled from "@emotion/styled";

function RegisterPage(){

  const [typingName, setName] = useState("")
  const [typingEmail, setEmail] = useState("");
  const [typingPassword, setPassword] = useState("");
  const [typingConfirmPassword, setConfirmPassword] = useState("")    

    // 키보드 입력시 입력내용 input tag에 써주기
    const onNameHandler = (event) => {
      setName(event.currentTarget.value)
  }    
    const onEmailHandler = (event) => {        
      setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }  
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
}

const onSubmitHandler = (event) => {
  event.preventDefault(); // 로그인 버튼 클릭시 리프레시 막아줌

  if(typingPassword !== typingConfirmPassword){
      return alert('비밀번호가 일치하지 않습니다.')
  }

}




  return (
    <Background>
      <Container>
      <Image src = "https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"/>
        <Frame>
          <Header>딱 이것만 체크하면 가입 완료!!</Header>
          <Content>
              <TypingForm>
                <Name>
                  <NameHeader>이름</NameHeader>
                  <NameInput type = "text" value={typingName} placeholder ="이름을 입력하세요" onChange = {onNameHandler} />
                </Name>
                <Email>
                  <EmailHeader>이메일</EmailHeader>
                  <EmailSummit>
                    <EmailInput type = "email" value={typingEmail} placeholder ="이메일을 입력하세요"  onChange = {onEmailHandler}/>
                    <EmailConfirm>인증하기</EmailConfirm>
                  </EmailSummit>
                </Email>
                <Password>
                  <PasswordHeader>비밀번호</PasswordHeader>
                  <PasswordInput type = "password" value={typingPassword} placeholder ="비밀번호를 입력해주세요 (6자 이상)"  onChange = {onPasswordHandler} />
                  <PasswordConfirmInput type = "password" value={typingConfirmPassword} placeholder ="비밀번호를 한 번 더 입력해주세요."  onChange = {onConfirmPasswordHandler} />
                </Password>
              </TypingForm>
              <Agreement>
                <ArgreementHeader>약관동의</ArgreementHeader>
                <ArgreementCheckForm>
                  <AgreementCheckAll>
                      <CheckBox type="checkbox" />
                      <AgreementCheckAllMsg>모두 동의합니다.</AgreementCheckAllMsg>
                  </AgreementCheckAll>
                  <AgreementCheckAllLine></AgreementCheckAllLine>
                  <AgreementCheckElseForm>

                    <AgreementCheckElse>
                      <CheckBox type="checkbox" />
                      <AgreementCheckMsgForm>
                        <AgreementCheckMsg>만 14세 이상입니다.</AgreementCheckMsg>
                        <Essential>(필수)</Essential>
                      </AgreementCheckMsgForm>                       
                    </AgreementCheckElse>

                    <AgreementCheckElse>
                      <CheckBox type="checkbox" />
                      <AgreementCheckMsgForm>
                        <AgreementCheckMsg>서비스 이용약관에 동의합니다.</AgreementCheckMsg>
                        <Essential>(필수)</Essential>
                      </AgreementCheckMsgForm>                       
                    </AgreementCheckElse>               

                  </AgreementCheckElseForm>       
                </ArgreementCheckForm>    
              </Agreement>
          </Content>
        </Frame>
      </Container>
    </Background>
  );
};

const Background = styled.div``;

const Container = styled.div`
  padding-top: 48px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: center;
`;

const Frame = styled.div`
  /* Frame */
  display: flex;
  flex-direction: column;

  width: 600px;
  height: 835px;
  left: 340px;
  top: 130px;

  margin-top : 27px;

  background: #FFFFFF;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Header = styled.div`
    /* 딱 이것만 체크하면 가입완료!! */

    margin-top : 86px;
    margin-left : 101px;
    margin-right : 146px;

    width: 353px;
    height: 33px;
    left: 441px;
    top: 216px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 118% */
    
    letter-spacing: 0.3px;
    
    color: #303441;
`;

const Image = styled.img`
  /* Rectangle */
  width: 108px;
  height: 27px;
  left: 586px;
  top: 76px;
  
  background: url(.png);
  border-radius: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin : 36px 101px 123px 101px;
  padding: 0px;

  width: 398px;
  height: 697px;
  left: 441px;
  top: 285px;
`;

const TypingForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 345px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 85px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NameHeader = styled.div`
  font-size: 16px;
  color: #303441
`;

const NameInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;

  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  
  width: 398px;
  height: 85px;
  left: 0px;
  top: 100px;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const EmailHeader = styled.div`
  width: 53x;
  height: 25px;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 165% */

  letter-spacing: 0.16px;

  color: #303441;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const EmailSummit = styled.div`
  display : flex;
  flex-direction : row;

  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;
  
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;
  
  /* Inside Auto Layout */
  
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px 10px 0px;  
`;

const EmailInput = styled.input`

  padding : 0px 120px 0px 0px;
  order : 1;

  background: #FFFFFF;
  border: 0px;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;

`;

const EmailConfirm = styled.button`
  cursor : pointer;

  margin : 5px 5px 5px 5px;
  order : 2;

  width: 110px;
  height: 40px;
  left: 283px;
  top: 5px;  

  background: #E4E5ED;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;

  color: #9A9BA7;
  font-size: 14px;  

`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 145px;
  left: 0px;
  top: 200px;


  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const PasswordHeader = styled.div`
  width: 80px;
  height: 25px;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 165% */

  letter-spacing: 0.16px;

  color: #303441;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PasswordInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;

  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const PasswordConfirmInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 95px;

  background: #FAFAFA;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Agreement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 322px;
  left: 0px;
  top: 375px;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 15px 0px;
`;

const ArgreementHeader = styled.div`
  width: 67px;
  height: 25px;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 165% */

  letter-spacing: 0.16px;

  color: #303441;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ArgreementCheckForm = styled.div`
  width: 398px;
  height: 227px;
  left: 0px;
  top: 35px;

  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const AgreementCheckAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 121px;
  height: 21px;
  left: 16px;
  top: 20px;

  margin : 20px 15px;
`;

const CheckBox = styled.input`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: url(image.png);
`;

const AgreementCheckAllMsg = styled.div`
  width: 250px;
  height: 21px;
  left: 23px;
  top: 0px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  color: #555969;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 5px;
`;

const AgreementCheckAllLine = styled.div`
  width: 366px;
  height: 1px;
  left: 16px;
  top: 56px;

  background: #CCCCCC;  
`;

const AgreementCheckElseForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 245px;
  height: 141px;
  left: 16px;
  top: 70px;
`;

const AgreementCheckElse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 146px;
  height: 21px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */
  flex-grow: 0;
  margin : 10px 15px;
`;

const AgreementCheckMsgForm = styled.div`
  width: 250px;
  height: 21px;
  left: 23px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 20px;
  /* or 182% */


  color: #555969;

  display : flex;
  flex-direction: row;

  /* Inside Auto Layout */

  margin: 0px 5px;
`;

const AgreementCheckMsg = styled.div`
  width: 200px;
  height: 21px;

`;

const Essential = styled.button`
  width: 50px;
  height: 21px;

  color: #ff402b;
  cursor: pointer;
  background: white !important;
  border : 0px;
  margin : 0;
  padding : 0;
`;


export default RegisterPage;