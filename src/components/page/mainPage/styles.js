import styled from "styled-components";

export const BgVideo = styled.div`
  width: 1920px;
  height: 937px;
  background-color: #000;
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
`;

export const Btn_dn = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -85%);
  width: 1050px;
  display: flex;
  justify-content: space-between;
`;

export const Scroll = styled.div`
  width: 95px;
  height: 60px;
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -95%);

  @keyframes updown {
    0% {
      transform: translateY(0%);
    }

    40% {
      transform: translateY(25%);
    }

    60% {
      transform: translateY(55%);
    }

    100% {
      transform: translateY(80%);
    }
  }
`;
