import styled from "styled-components";

export const StoryDiv = styled.div`
  display: inline-flex;
  position: relative;
  width: 1920px;
  height: 937px;
  background-color: #000;
`;

export const Story = styled.div`
  position: relative;
  width: 484px;
  height: 937px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  animation: upStory 0.5s linear;
  animation-fill-mode: forwards;
  opacity: 0;

  video {
    width: 484px;
    height: 937px;
    object-fit: cover;
    opacity: 0;
  }

  .play {
    animation: storyFadeIn 0.3s linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes storyFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes upStory {
    0% {
      transform: translateY(15%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 392px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  text-align: center;

  div {
    color: #fff;
  }

  .active {
    animation: moreBtnShow 0.3s linear;
    animation-fill-mode: forwards;
  }

  @keyframes moreBtnShow {
    0% {
      background-image: url("https://gransaga.com/assets/images/desktop/world_list/btn_more.png");
    }
    100% {
      background-image: url("https://gransaga.com/assets/images/desktop/world_list/btn_more_over.png");
    }
  }
`;

export const Title = styled.div`
  font-size: 50px;
  margin-top: 15px;
  letter-spacing: -3px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Content = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-top: -25px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const More = styled.div`
  width: 80px;
  height: 80px;
  background-size: cover;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  background-image: url("https://gransaga.com/assets/images/desktop/world_list/btn_more.png");
`;
