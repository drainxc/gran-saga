import React, { useRef } from "react";
import * as S from "./styles";

export default function MainPage() {
  const arrowRef = useRef(null);
  const btn_dn = [
    "https://gransaga.com/assets/images/desktop/main/btn_dn_google.png?v=00000000",
    "https://gransaga.com/assets/images/desktop/main/btn_dn_apple.png?v=00000000",
    "https://gransaga.com/assets/images/desktop/main/btn_dn_onestore.png?v=00000000",
    "https://gransaga.com/assets/images/desktop/main/btn_dn_galaxy.png?v=00000000",
    "https://gransaga.com/assets/images/desktop/main/btn_dn_pc.png?v=00000000",
    "https://gransaga.com/assets/images/desktop/main/btn_dn_mac.png?v=00000000",
  ];

  const arrowActive = (bool) => {
    if (bool) {
      arrowRef.current.style =
        "animation: updown 0.3s linear infinite alternate;";
    } else {
      arrowRef.current.style = "animation: none";
    }
  };

  return (
    <>
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
        {btn_dn.map((btn) => (
          <img src={btn} alt="" />
        ))}
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
    </>
  );
}
