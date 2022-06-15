import React from "react";
import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { image } from "../../../lib/export/data";

export default function KeyArt() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    arrow: true,
  };

  return (
    <S.Container>
      <S.KeyArtDiv>
        <S.Text top={50} left={5}>
          <img
            src="https://gransaga.com/assets/images/desktop/poster_gallery/txt_066_2.png?"
            alt=""
          />
        </S.Text>
        <S.Text top={40} right={8}>
          <img
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
          <span>
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
