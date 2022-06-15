import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const BgVideo = styled.div`
  background-color: #000;
  width: 1920px;
  height: 937px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
  z-index: -100;
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    animation: fadein 0.5s linear;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      width: 150%;
      transform: translatex(-20%);
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }
`;

export const Btn_dn = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  width: 1050px;
  display: flex;
  justify-content: space-between;
  animation: up 0.3s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  opacity: 0;

  @keyframes up {
    0% {
      opacity: 0;
      transform: translate(-50%, -0%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -85%);
    }
  }
`;

export const Scroll = styled.div`
  width: 95px;
  height: 60px;
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -90%);
  animation: up 0.2s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes up {
    0% {
      opacity: 0;
      transform: translate(-50%, -55%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -90%);
    }
  }

  @keyframes updown {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(80%);
    }
  }
`;
