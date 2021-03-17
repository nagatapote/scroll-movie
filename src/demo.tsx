import React from "react";
import { render } from "react-dom";
import smoothscroll from "smoothscroll-polyfill";
import { ScrollMovie } from "./ScrollMovie";
import "../demo.css";

smoothscroll.polyfill();

export const Demo = () => {
  //imageの表示間隔(値が小さいほど、間隔が速い。)
  const scrollsPerImage = 60; //

  //timing数値のMAXは、scrollsPerImage * imageSizeがMAX

  /*トップにhtmlを表示させる場合、フェードインアニメーションをつけなければアクセス時に表示される。
    animation: {
                start: "notFadeInStart",
                end: "scroll-movie__track-view_end",
               },
  */

  return (
    <div>
      <ScrollMovie
        getImage={(index) => {
          const pad = `${index}`.padStart(3, "0");
          return `images/image_${pad}.jpg`;
        }}
        imageSize={758}
        tracks={[
          {
            html: "<h1>ドローンで撮影した映像です。</h1>",
            timing: { start: 0, end: 1000 },
            buttonLabel: "トップ",
            animation: {
              start: "notFadeInStart",
              end: "scroll-movie__track-view_end",
            },
          },
          {
            html: "とてもきれいな風景で癒やされます。",
            timing: { start: 10000, end: 3000 },
            buttonLabel: "風景",
          },
          {
            html: "海の波がとてもきれい。",
            timing: {
              start: 20000,
              end: 2000,
            },
          },
          {
            html:
              "<h1>ドローン操縦</h1><br /><small>ドローン操縦してみたい。</small>",
            timing: {
              start: 30000,
              end: 2000,
            },
            buttonLabel: "感想",
            animation: { start: "notFadeInStart", end: "notFadeInEnd" },
          },
          {
            html: "これで風景映像は終了です。",
            timing: {
              start: 45000,
              end: 3000,
            },
            buttonLabel: "より詳しく知りたい方は",
          },
        ]}
        scrollsPerImage={scrollsPerImage}
      />
    </div>
  );
};

render(<Demo />, document.getElementById("app"));
