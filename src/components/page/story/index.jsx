import React, { useRef } from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";

export default function Story() {
  const videoLink = [
    [
      "https://gransaga.com/assets/video/world_list/movie_thumb_1.mp4?v=2011131125",
      "https://gransaga.com/assets/images/desktop/world_list/list_1.jpg",
      "프롤로그",
      `
      에스프로젠에 엄습한 흑룡의 위협,
      흑룡을 물리치고 세상을 구원한 그랑나이트.
      그 위대한 의지를 계승하는
      이들의 여정의 시작`,
      useRef(null),
    ],
    [
      "https://gransaga.com/assets/video/world_list/movie_thumb_2.mp4?v=2011131125",
      "https://gransaga.com/assets/images/desktop/world_list/list_2.jpg",
      "그랑웨폰",
      `
      여신의 축복으로
      이 땅에 나타난 위대한 영혼,
      당신을 위한 강력한 무기로
      그 모습을 드러낼지어니
      `,
      useRef(null),
    ],
    [
      "https://gransaga.com/assets/video/world_list/movie_thumb_3.mp4?v=2011131125",
      "https://gransaga.com/assets/images/desktop/world_list/list_3.jpg",
      "아티팩트",
      `
      찬란했지만 이제는 빛바랜
      추억, 전설을 이어갈
      이들이 다시금 빛나게 할
      기억의 결정체
      `,
      useRef(null),
    ],
    [
      "https://gransaga.com/assets/video/world_list/movie_thumb_4.mp4?v=2011131125",
      "https://gransaga.com/assets/images/desktop/world_list/list_4.jpg",
      "왕국의 수호자",
      `
      여신의 숨결이 창조한
      시작의 땅 에스프로젠,
      그랑나이츠에 이어 그 유구한 역사를
      이어갈 이들의 이야기
      `,
      useRef(null),
    ],
  ];
  const page = useSelector((state) => state.movePage.page);

  for (let i = 0; i < videoLink.length; i++) {
    if (videoLink[i][4] !== null) {
      if (page === 3) {
        console.log('asd')
        videoLink[i][4].current.classList.add("active");
      } else {
        videoLink[i][4].current.classList.remove("active");
      }
    }
  }
  return (
    <>
      <S.StoryDiv id="story">
        {videoLink.map((item, i) => (
          <>
            <S.Story
              ref={item[4]}
              style={{ animationDelay: `${i * 0.05 + 0.4}s` }}
              url={item[1]}
              onMouseOver={(e) => {
                e.currentTarget.children[0].currentTime = 0;
                e.currentTarget.children[0].play();
                e.currentTarget.children[0].classList.add("play");
                e.currentTarget.children[1].children[3].classList.add("active");
                console.log(item[4]);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].pause();
                e.currentTarget.children[0].classList.remove("play");
                e.currentTarget.children[1].children[3].classList.remove(
                  "active"
                );
              }}
            >
              <video muted loop>
                <source src={item[0]} type="video/mp4" />
              </video>
              <S.Overlayer>
                <S.Title>{item[2]}</S.Title>
                <img
                  src="https://gransaga.com/assets/images/desktop/world_list/bar.png"
                  alt=""
                />
                <S.Content>
                  {item[3].split("\n").map((line) => {
                    return (
                      <span>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </S.Content>
                <S.More />
              </S.Overlayer>
            </S.Story>
          </>
        ))}
      </S.StoryDiv>
    </>
  );
}
