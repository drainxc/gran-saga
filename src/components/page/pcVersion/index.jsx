import React, { useRef } from "react";
import BtnDn from "../../common/btn_dn";
import * as S from "./styles";
import { useSelector } from "react-redux";

export default function PCVersion() {
  const page = useSelector((state) => state.movePage.page);
  const ContentRef = useRef(null);
  const DownloadRef = useRef(null);

  if (ContentRef.current !== null && DownloadRef.current !== null) {
    if (page === 1) {
      ContentRef.current.classList.add("active");
      DownloadRef.current.classList.add("active");
    } else {
      ContentRef.current.classList.remove("active");
      DownloadRef.current.classList.remove("active");
    }
  }

  return (
    <S.Container id="pc">
      <S.PCDiv>
        <S.Contents>
          <S.Content>
            <div ref={ContentRef}>
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
            </div>
          </S.Content>
          <S.Download>
            <div ref={DownloadRef}>
              <p>게임 플레이 데이터가 모든 플랫폼에서 연동됩니다!</p>
              <BtnDn />
            </div>
          </S.Download>
        </S.Contents>
        <S.Hr />
      </S.PCDiv>
    </S.Container>
  );
}
