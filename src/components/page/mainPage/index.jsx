import React, { useRef } from "react";
import * as S from "./styles";
import { btn_dn } from "../../../lib/export/data";
import BtnDn from "../../common/btn_dn";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../pagemove";

export default function MainPage() {
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);
  const page = useSelector((state) => state.movePage.page);
  const dispatch = useDispatch();

  if (
    titleRef.current !== null &&
    btnRef.current !== null &&
    arrowRef.current !== null
  ) {
    if (page === 0) {
      titleRef.current.classList.add("active");
      btnRef.current.classList.add("active");
      arrowRef.current.classList.add("active");
    } else {
      titleRef.current.classList.remove("active");
      btnRef.current.classList.remove("active");
      arrowRef.current.classList.remove("active");
    }
  }

  const moveDown = () => {
    dispatch(increment(1));
    window.location.href = "#pc";
  };

  return (
    <S.Container id="main">
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
          className="active"
          ref={titleRef}
          src="https://gransaga.com/assets/images/desktop/main/title_066.png"
          alt=""
        />
      </S.Title>
      <S.Btn_dn>
        <div ref={btnRef} className="active">
          <BtnDn />
        </div>
      </S.Btn_dn>
      <div onClick={() => moveDown()}>
        <S.Scroll
          onMouseOver={(e) => {
            e.currentTarget.children[0].classList.remove("active");
            e.currentTarget.children[0].classList.add("active1");
          }}
          onMouseOut={(e) => {
            e.currentTarget.children[0].classList.remove("active1");
          }}
        >
          <img
            ref={arrowRef}
            className="active"
            src="https://gransaga.com/assets/images/desktop/main/arrow_dn_2.png"
            alt=""
          />
        </S.Scroll>
      </div>
    </S.Container>
  );
}
