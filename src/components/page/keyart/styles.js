import styled from "styled-components";

export const Container = styled.div`
  scroll-snap-align: start;
  background-image: url("https://gransaga.com/assets/images/desktop/poster_gallery/bg_066.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const KeyArtDiv = styled.div`
  width: 1920px;
  height: 937px;
  position: relative;
`;

export const Bg = styled.div`
  position: absolute;
  img {
    width: 1920px;
    object-fit: cover;
  }
  z-index: -100;
`;

export const Text = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  left: ${(props) => props.left}%;
  transform: translate(${(props) => -props.left || -props.right}%,${(props) => -props.top}%);

  .active {
    animation: FadeInText 1s ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    animation-delay: 0.5s;
  }

  @keyframes FadeInText {
    0% {
      opacity: 0;
      transform: translate(${(props) => -props.left || -props.right}%,${(props) => props.top + 20}%);
    }
    100% {
      opacity: 1;
      transform: translate(${(props) => -props.left || -props.right}%,${(props) => props.top}%);
    }
  }
`;

export const Art = styled.div`
  text-align: center;
  padding-top: 480px;
`;

export const KeyArtPictures = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -90px;

  .slick-prev:before {
    content: "";
  }
  .slick-next:before {
    content: "";
  }

  .slick-arrow {
    position: absolute;
    width: 95px;
    height: 40px;
    border: none;
    background: none;
    background-image: url("https://gransaga.com/assets/images/desktop/main/arrow_dn_2.png");
    object-fit: cover;
    margin-top: -20px;
  }

  .slick-prev {
    transform: rotate(0.25turn);
    left: -110px;
    transition: 0.5s;
  }
  .slick-prev:hover {
    transform: translateX(-10%) rotate(0.25turn);
  }

  .slick-next {
    transform: rotate(0.75turn);
    right: -100px;
    transition: 0.5s;
  }
  .slick-next:hover {
    transform: translateX(10%) rotate(0.75turn);
  }

  span {
    width: 480px;
  }

  .active {
    animation: FadeInKeyArt 1s ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    animation-delay: 0.5s;
  }

  @keyframes FadeInKeyArt {
    0% {
      opacity: 0;
      transform: translateY(15%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const Picture = styled.div`
  background: white;
  width: 146px;
  img {
    width: 146px;
    height: 204px;
    object-fit: cover;
  }
`;
