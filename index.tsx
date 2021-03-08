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

  const maxImageLength = data.images.length * 150;

  const valuetext = (value) => {
    return `${value}`;
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    scrollTo(0, newValue);
  };

  useEffect(() => {
    const onScroll = () => {
      setValue(scrollY);
      let imageNum = Math.floor(scrollY / 150);
      let textNum = Math.floor(scrollY / 2000);

      (document.getElementById("images") as HTMLImageElement).src =
        data.images[imageNum];
      (document.getElementById("text") as HTMLInputElement).innerText =
        data.tracks[textNum];
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
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={2000}
          max={maxImageLength}
          onChange={handleSliderChange}
          marks={data.marks}
        />
      </div>
    </div>
  );
};

render(<ImagesChangeScroll />, document.getElementById("app"));
