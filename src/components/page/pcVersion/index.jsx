import React from "react";
import BtnDn from "../../common/btn_dn";
import * as S from "./styles";

export default function PCVersion() {
  return (
    <S.Container>
      <S.PCDiv>
        <S.Contents>
          <S.Content>
            <span
              style={{
                fontSize: "40px",
                fontFamily: "'Noto Sans KR', sans-serif",
                letterSpacing: "-3px",
              }}
            >
              그랑사가 언제 어디서나
            </span>
            <br />
            <span>
              <span style={{ color: "#496EE5" }}>다양한 플랫폼</span>
              <span>에서 자유롭게!</span>
            </span>
          </S.Content>
          <S.Download>
            <p>게임 플레이 데이터가 모든 플랫폼에서 연동됩니다!</p>
            <BtnDn />
          </S.Download>
        </S.Contents>
        <S.Hr />
      </S.PCDiv>
    </S.Container>
  );
}
