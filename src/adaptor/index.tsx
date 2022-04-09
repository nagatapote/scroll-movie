import React from "react";
import { render } from "react-dom";
import { ScrollMovie, ScrollMovieProps } from "../ScrollMovie";

export default (selector: string | HTMLElement, option: ScrollMovieProps) => {
  const element =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  const templates = element.querySelectorAll("template");
  const tracks = [];
  if (templates.length > 0) {
    templates.forEach((template) => {
      const timingStart = template.getAttribute("timing-start");
      const timingEnd = template.getAttribute("timing-end");
      const buttonLabel = template.getAttribute("button-label");
      const animationStart = template.getAttribute("animation-start");
      const animationEnd = template.getAttribute("animation-end");
      tracks.push({
        html: template.innerHTML,
        timing: {
          start: timingStart,
          end: timingEnd,
        },
        buttonLabel: buttonLabel,
        animation: {
          start: animationStart,
          end: animationEnd,
        },
      });
    });
  }

  render(
    <ScrollMovie {...option} tracks={option.tracks ? option.tracks : tracks} />,
    element
  );
};
