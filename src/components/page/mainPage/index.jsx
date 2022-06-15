import React, { useRef } from "react";
import * as S from "./styles";
import { btn_dn } from "../../../lib/export/data";
import BtnDn from "../../common/btn_dn";

export default function MainPage() {
  const arrowRef = useRef(null);

  const arrowActive = (bool) => {
    if (bool) {
      arrowRef.current.style =
        "animation: updown 0.3s ease-in-out infinite alternate;";
    } else {
      arrowRef.current.style = "animation: none";
    }
  };

  return (
    <S.Container>
      <S.BgVideo>
        <video muted loop autoPlay>
          <source
            src="https://gransaga.com/assets/video/main/video_066.mp4"
            type="video/mp4"
          />
        </video>
      </S.BgVideo>
      <S.Title>
        <img
          src="https://gransaga.com/assets/images/desktop/main/title_066.png"
          alt=""
        />
      </S.Title>
      <S.Btn_dn>
        <BtnDn />
      </S.Btn_dn>
      <S.Scroll
        onMouseOver={() => arrowActive(true)}
        onMouseOut={() => arrowActive(false)}
      >
        <img
          ref={arrowRef}
          src="https://gransaga.com/assets/images/desktop/main/arrow_dn_2.png"
          alt=""
        />
      </S.Scroll>
    </S.Container>
  );
}
