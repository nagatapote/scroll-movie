import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import data from "./data";
import "./style.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  })
);

const ImagesChangeScroll = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const maxImageLength = data.images.length * 380;
  const maxScrollLength = data.images.length * 500;

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    scrollTo(0, newValue);
  };

  let i = 0;

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);

      let num = 0;

      if (scrollY >= 500 && scrollY < 1000) {
        num = 1;
      } else if (scrollY >= 1000 && scrollY < 1500) {
        num = 2;
      } else if (scrollY >= 1500 && scrollY < 2000) {
        num = 3;
      } else if (scrollY >= 2000 && scrollY <= 2500) {
        num = 4;
      }
      (document.getElementById("images") as HTMLImageElement).src =
        data.images[num];
      (document.getElementById("text") as HTMLInputElement).innerText =
        data.tracks[num];
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div id="home">
      <div className="image">
        <img
          src="https://ct.st.keio.ac.jp/wordpress/wp-content/themes/ko-campus/assets/movie_images/movie0001.jpg"
          id="images"
          height="100%"
          width="100%"
        />
        <span id="text">リアルキャンパスツアーへようこそ。</span>
      </div>

      <div className={classes.root}>
        <Slider
          value={value}
          defaultValue={0}
          aria-labelledby="discrete-slider-custom"
          step={1}
          valueLabelDisplay="auto"
          max={maxImageLength}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

render(<ImagesChangeScroll />, document.getElementById("app"));
