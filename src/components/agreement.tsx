import React, {useState} from "react";

import styled from "@emotion/styled";

const CheckImg = {
  check : "https://kmong.com/img/checkBox/round_checked.png",
  uncheck : "https://kmong.com/img/checkBox/round_unCheck.png"
}

export const Agreement= () => {

  const [isChecked,setChecked] = useState(false);
  const getImageName = isChecked? 'check' : 'uncheck';

    return (
      <AgreementSummit>
      <ArgreementHeader>약관동의</ArgreementHeader>
      <ArgreementCheckForm>
        <AgreementCheckAll>            
            <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckAllMsg>모두 동의합니다.</AgreementCheckAllMsg>
        </AgreementCheckAll>
        <AgreementCheckAllLine></AgreementCheckAllLine>
        <AgreementCheckElseForm>

          <AgreementCheckElse>
          <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckMsgForm>
              <AgreementCheckMsg>만 14세 이상입니다.</AgreementCheckMsg>
              <span style={{color : 'red'}}>&nbsp;(필수)</span>
            </AgreementCheckMsgForm>                       
          </AgreementCheckElse>

          <AgreementCheckElse>
          <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckMsgForm>
              <a href="http://www.naver.com" target="_blank">서비스 이용약관</a>
              <AgreementCheckMsg> 에 동의합니다.</AgreementCheckMsg>
              <span style={{color : 'red'}}>&nbsp;(필수)</span>
            </AgreementCheckMsgForm>                       
          </AgreementCheckElse>

          <AgreementCheckElse>
          <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckMsgForm>
              <a href="http://www.naver.com" target="_blank">개인정보 수집•이용</a>
              <AgreementCheckMsg> 에 동의합니다.</AgreementCheckMsg>
              <span style={{color : 'red'}}>&nbsp;(필수)</span>
            </AgreementCheckMsgForm>                       
          </AgreementCheckElse>   

          <AgreementCheckElse>
          <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckMsgForm>
              <AgreementCheckMsg>이벤트 할인 혜택 알림 수신에 동의합니다. (선택)</AgreementCheckMsg>
            </AgreementCheckMsgForm>                       
          </AgreementCheckElse>

          <AgreementCheckElse>
          <CheckBox type="image" checked={isChecked} onClick = {() => setChecked(!isChecked)} src={CheckImg[getImageName]}/>
            <AgreementCheckMsgForm>
              <AgreementCheckMsg>장기 미접속 시 계정 활성 상태 유지합니다. (선택)</AgreementCheckMsg>
            </AgreementCheckMsgForm>                       
          </AgreementCheckElse>                                                                  

        </AgreementCheckElseForm>       
      </ArgreementCheckForm>    
      <SummitButton>버튼만 누르면 가입완료!</SummitButton>                
    </AgreementSummit>


    );
  };


const AgreementSummit = styled.div`
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
  order: 3;
  flex-grow: 0;
  margin-top : 30px;
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
  height: 18px;
  width: 18px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
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

  margin : 0px 16px 13px 16px;
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

  width: 381px;
  height: 21px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */
  flex-grow: 0;
  margin : 0px 0px 9px 15px;
`;

const AgreementCheckMsgForm = styled.div`
  width: 360px;
  height: 21px;
  line-height : 21px;  
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
  width: auto;
  height: 21px;
`;

const SummitButton = styled.button`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 272px;

  cursor : pointer;
  background: #E4E5ED;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;
  color: #9A9BA7;
  /* Inside Auto Layout */

  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 10px 0px;
`;