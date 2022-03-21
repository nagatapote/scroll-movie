# ScrollMovie

Scroll Image is the library that enables you to animate background image as you scroll the window.

## Installation

### vanillaJS

```html
<script src="https://unpkg.com/scroll-movie@latest/dist/main.js"></script>
```

```javascript
ScrollMovie("#app", {
  tracks: tracks,
  getImage: getImage,
  imageSize: number,
  scrollsPerImage: number,
});
```

At `#app` section, You can specify the element with the query string that can be found by `document.querySelector`.
Other props can be found as you scroll the window.

### React

```shell
$ npm install scroll-movie --save

$ yarn add -D scroll-movie
```

```javascript
<ScrollMovie
  tracks={tracks}
  getImage={getImage}
  imageSize={number}
  scrollsPerImage={number}
/>
```

## Tracks

<img src="img/tracks.png" />

```javascript
[
  {
    html: "<h1>ScrollMovie.js</h1>Hello ScrollMovie.js",
    timing: { start: 0, end: 5000 },
    buttonLabel: "start",
    animation: {
      start: "scroll-movie__track-view_start",
      end: "scroll-movie__track-view_end",
    },
  },
  {
    html: "<h1>Thank You.</h1>ScrollMovie.js is Great.",
    timing: { start: 7000, end: 12000 },
    buttonLabel: "end",
  },
];
```

You can specify the appearance timing of the each section with the timing property. eg.) End section will appear when scrolled 7000px (scrollPerImages \* number of shown images) and disappear when scrolled 12000px (scrollPerImages \* number of shown images).

## Images

### getImage

`getImage` is the function to get the image path from the scroll amount.

<img src="./img/getImage.png" />

```javascript
getImage: (index) => { const pad = `${index}`.padStart(3, "0"); return `images/image_${pad}.jpg`;
```

### Number of images (Example)

<img src="./img/imageSize.png" />

```javascript
imageSize: 524;
```

The number of the images for the background-image you want to animate.

### Scroll per image

<img src="./img/scrollsPerImage.png" />

```javascript
scrollsPerImage: 60;
```

The scroll amount value for switching to the next image.

60 is recommended.

## Internal link

You can also put internal links so to jump to the specific sections you like.

### How

```html
<a href="#20000" style="color: #fff;">Click Here. Go to Animation #20000</a>;
```

## Animation

Animation can be customized freely in css.

With the following css, The section will fade out to the right.

### Sample CSS

```css
.original-css-start {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}

.original-css-end {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(100%, -50%);
  opacity: 0;
}
```

## Props

<table>
  <tr>
    <th>Props name</th>
    <th>Type</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td>tracks</td>
    <td>Track[]</td>
    <td>Display content.</td>
  </tr>
  <tr>
    <td>getImage</td>
    <td>(index: number) => string</td>
    <td>Moving background.</td>
  </tr>
  <tr>
    <td>imageSize</td>
    <td>number</td>
    <td>Number of images.</td>
  </tr>
  <tr>
    <td>scrollsPerImage</td>
    <td>number</td>
    <td>Scroll value per image.</td>
  </tr>
  <tr>
    <td>preload</td>
    <td>boolean (default: false)</td>
    <td>Preload images.(option)</td>
  </tr>
  <tr>
    <td>preloadTimes</td>
    <td>number (default: 0)</td>
    <td>Time to wait for preload.Unit is ms.(option)</td>
  </tr>
  <tr>
    <td>navigationDisplayTiming</td>
    <td>number (default: 0)</td>
    <td>When to display the navigation bar and label.(option)</td>
  </tr>
  <tr>
    <td>navigationDisabledBrowserSize</td>
    <td>{ height: number; width: number }</td>
    <td>
      If the browser size is less than or equal to the specified number,
      the navigation bar and label will not be displayed.(option)
    </td>
  </tr>
  <tr>
    <td>nowLoadingMessage</td>
    <td>string (default: '&lt;div&gt;NowLoading&lt;/div&gt;')</td>
    <td>Display until preload is completed.(option)</td>
  </tr>
  <tr>
    <td>onTrackEnter</td>
    <td>(target: HTMLElement) => void</td>
    <td>Function to be executed at Start of trackView.(option)</td>
  </tr>
  <tr>
    <td>onTrackLeave</td>
    <td>(target: HTMLElement) => void</td>
    <td>Function to be executed at the end of trackView.(option)</td>
  </tr>
  <tr>
    <td>classes</td>
    <td>ClassNames</td>
    <td>Change the default class name.(option)</td>
  </tr>
</table>

## Bonus

### Convert video to image

Don’t have the images for the background animation?

No worry!!

By following, You can convert the video to the images.

```shell
$ brew install ffmpeg

$ ffmpeg -i {filename}.mp4 -vcodec mjpeg image_%03d.jpg
```

### How to highlight source code

Use onTrackEnter props.

```javascript
onTrackEnter: (targetElement) => {
  targetElement.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
};
```

## Thank you

That's it. Please try it.
