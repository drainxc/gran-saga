import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/page/mainPage";
import GlobalStyle from "./style/styles";
import Banner_Forum from "./components/common/banner_forum";
import PCVersion from "./components/page/pcVersion";
import KeyArt from "./components/page/keyart";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./pagemove";
import Story from "./components/page/story";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const dummy = ["#main", "#pc", "#keyart", "#story"];

  let page =
    dummy.indexOf(window.location.hash, 0) >= 0
      ? dummy.indexOf(window.location.hash, 0)
      : 0;
  let scroll = false;

  window.location.href = dummy[page];

  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 50 && !scroll && page < dummy.length - 1) {
      movePage(1);
    } else if (e.deltaY < -50 && !scroll && page > 0) {
      movePage(-1);
    }
    if (page !== dummy.indexOf(window.location.hash, 0)) {
      page = dummy.indexOf(window.location.hash, 0);
    }
  });

  const movePage = (n) => {
    page += n;
    scroll = true;
    dispatch(increment(page));
    window.location.href = dummy[page];
    setTimeout(() => {
      scroll = false;
    }, 1000);
  };

  return (
    <>
      <GlobalStyle />
      <Banner_Forum />
      <MainPage />
      <PCVersion />
      <KeyArt />
      <Story />
    </>
  );
}

export default App;
