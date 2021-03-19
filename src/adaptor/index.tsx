import React from "react"
import { render } from "react-dom"
import { ScrollMovie, ScrollMovieProps } from "../ScrollMovie"

export default (selector: string | HTMLElement, option: ScrollMovieProps) => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector
  render(<ScrollMovie {...option} />, element)
}
