import styled from "styled-components";

export const Container = styled.div`
  scroll-snap-align: start;
  background-image: url("https://gransaga.com./assets/images/desktop/pc_launcher/bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const PCDiv = styled.div`
  width: 1920px;
  height: 937px;
  display: flex;
  justify-content: center;
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

export const Hr = styled.hr`
  width: 1048px;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  position: absolute;
  margin-top: 690px;
`;

export const Content = styled.p`
  font-size: 66px;
  color: #222222;
  line-height: 1;
  letter-spacing: 0px;
  font-family: "Black Han Sans", sans-serif;
  text-align: center;
  margin-top: 540px;
  animation: upContent 0.3s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes upContent {
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

export const Download = styled.div`
  p {
    color: #979696;
    font-size: 21px;
    font-family: "Noto Sans KR", sans-serif;
  }
  animation: upDownload 0.3s linear;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-top: 70px;

  @keyframes upDownload {
    0% {
      opacity: 0;
      transform: translateY(-0%);
    }
    100% {
      opacity: 1;
      transform: translateY(-25%);
    }
  }
`;

export const Contents = styled.div`
  text-align: center;
`;
