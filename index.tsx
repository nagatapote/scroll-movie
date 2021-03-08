import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import ImageView from "./components/imageView";
import TextView from "./components/textView";
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
  const [images, setImages] = useState("");
  const [text, setText] = useState("");

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
      const imageData = data.images[imageNum];
      const textData = data.tracks[textNum];
      setImages(imageData);
      setText(textData);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [images, text]);
  return (
    <div id="home">
      <div className="image">
        <ImageView src={images} />
        <TextView text={text} />
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
