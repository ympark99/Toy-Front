import React from "react";

import styled from "@emotion/styled";

function RegisterPage(){
  return (
    <Background>
      <Container>
      <Image src = "https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"/>
        <Frame>
          <Header>딱 이것만 체크하면 가입 완료!!</Header>
          <Content>
            <Form>
              <Name>
                <NameHeader>이름</NameHeader>
                <NameInput value="" placeholder ="이름을 입력하세요" />
              </Name>
              <Email>
                <EmailHeader>이메일</EmailHeader>
                <EmailSummit>
                  <EmailInput value="" placeholder ="이메일을 입력하세요" />
                  <EmailConfirm>인증하기</EmailConfirm>
                </EmailSummit>
              </Email>
            </Form>
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

const Form = styled.div``;

const Name = styled.div``;

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

const Email = styled.div``;

const EmailHeader = styled.h5`
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
  margin: 10px 0px;
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
  margin: 10px 0px;  
`;

const EmailInput = styled.input`

  padding : 5px 120px 5px 15px;
  order : 1;

  background: #FFFFFF;
  border: 0px;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const EmailConfirm = styled.button`
  cursor : pointer;

  margin-top : 5px;
  margin-right : 5px;
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

export default RegisterPage;