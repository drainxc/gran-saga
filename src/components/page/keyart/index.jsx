import React, { useRef } from "react";
import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { image } from "../../../lib/export/data";
import { useSelector } from "react-redux";

export default function KeyArt() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    arrow: true,
  };

  const TextRef1 = useRef(null);
  const TextRef2 = useRef(null);
  const KeyArtPicturesRef = useRef(null);

  const page = useSelector((state) => state.movePage.page);

  if (
    TextRef1.current !== null &&
    TextRef1.current !== null &&
    KeyArtPicturesRef.current !== null
  ) {
    if (page === 2) {
      TextRef1.current.classList.add("active");
      TextRef2.current.classList.add("active");
      KeyArtPicturesRef.current.classList.add("active");
    } else {
      TextRef1.current.classList.remove("active");
      TextRef2.current.classList.remove("active");
      KeyArtPicturesRef.current.classList.remove("active");
    }
  }

  return (
    <S.Container id="keyart">
      <S.KeyArtDiv>
        <S.Text top={20} left={5}>
          <img
            ref={TextRef1}
            src="https://gransaga.com/assets/images/desktop/poster_gallery/txt_066_2.png?"
            alt=""
          />
        </S.Text>
        <S.Text top={10} right={8}>
          <img
            ref={TextRef2}
            src="https://gransaga.com/assets/images/desktop/poster_gallery/txt_066_1.png"
            alt=""
          />
        </S.Text>
        <S.Art>
          <img
            src="https://gransaga.com/assets/images/desktop/poster_gallery/title_white.png"
            alt=""
          />
        </S.Art>
        <S.KeyArtPictures>
          <span ref={KeyArtPicturesRef}>
            <Slider {...settings}>
              {image.map((link) => (
                <>
                  <S.Picture>
                    <img src={link} alt="" />
                  </S.Picture>
                </>
              ))}
            </Slider>
          </span>
        </S.KeyArtPictures>
      </S.KeyArtDiv>
    </S.Container>
  );
}
