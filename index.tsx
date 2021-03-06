import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";
import "./@types/global.d.ts";

const ImagesChangeScroll = () => {
  const [count, setCount] = useState(0);

  let i = 0;

  const goImage = () => {
    const scrollY: number = window.scrollY;
    if (scrollY < 2000) {
      i += 500;
      scrollBy(0, i);
    }
  };

  const backImage = () => {
    const scrollY: number = window.scrollY;
    if (scrollY <= 2500 && scrollY > 0) {
      i -= 500;
      scrollBy(0, i);
    }
  };

  const onScroll = () => {
    const scrollY: number = window.scrollY;
    setCount(scrollY);
    const images = [
      "images/sample_image_1.png",
      "images/sample_image_2.png",
      "images/sample_image_3.png",
      "images/sample_image_4.png",
      "images/sample_image_5.png",
    ];

    let num = 0;
    document.getElementById("text").innerText = "sample_text_1";

    if (scrollY >= 500 && scrollY < 1000) {
      num = 1;
      document.getElementById("text").innerText = "sample_text_2";
    } else if (scrollY >= 1000 && scrollY < 1500) {
      num = 2;
      document.getElementById("text").innerText = "sample_text_3";
    } else if (scrollY >= 1500 && scrollY < 2000) {
      num = 3;
      document.getElementById("text").innerText = "sample_text_4";
    } else if (scrollY >= 2000 && scrollY <= 2500) {
      num = 4;
      document.getElementById("text").innerText = "sample_text_5";
    }
    (document.getElementById("images") as HTMLImageElement).src = images[num];
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });
  return (
    <div id="home">
      <div className="image">
        <img
          border="1"
          src="images/sample_image_1.png"
          id="images"
          height="400"
          width="500"
        />
        <p id="text">sample_text_1</p>
      </div>

      <div>
        <p>スクロール量：{count}</p>
        <input type="button" id="back" value="戻る" onClick={backImage} />
        <input type="button" id="go" value="進む" onClick={goImage} />
      </div>
    </div>
  );
};

render(<ImagesChangeScroll />, document.getElementById("app"));
