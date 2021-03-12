import React from "react";
import { render } from "react-dom";
import ImageChangeScroll from "./imageChangeScroll";
import data from "./data";

const Index = () => {
  //以下、data.ts内の配列より取得
  const images = data.images;
  const tracks = data.tracks;
  const buttonTexts = data.buttonTexts;

  //imageの表示間隔(値が小さいほど、間隔が速い。)
  const imageTiming = 150;

  //trackの表示間隔(値が小さいほど、間隔が速い。)
  const trackTiming = 5;

  //trackのスライドイン、スライドアウトの時間
  const slide = 0.5;

  //trackの表示位置（横）
  const trackDisplayX = -200;

  //trackの表示位置（縦）
  const trackDisplayY = -250;

  //trackのスライドイン、スライドアウトする場所（縦）
  const trackDisappear = 600;

  //※以下、変更非推奨(表示が不安定になる。 trackTopTiming < trackBottomTiming)
  //trackTopTiming => 0.1〜0.8 ・・・　表示trackが上に消えるタイミング(下にスクロール時)

  //trackBottomTiming => 0.2〜0.9　・・・　表示trackが下に消えるタイミング(上にスクロール時)

  return (
    <div>
      <ImageChangeScroll
        images={images}
        tracks={tracks}
        buttonTexts={buttonTexts}
        imageTiming={imageTiming}
        trackTiming={trackTiming}
        slide={slide}
        trackDisplayX={trackDisplayX}
        trackDisplayY={trackDisplayY}
        trackDisappear={trackDisappear}
        trackTopTiming={0.4}
        trackBottomTiming={0.6}
      />
    </div>
  );
};

export default Index;

render(<Index />, document.getElementById("app"));
