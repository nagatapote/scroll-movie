# ScrollMovie

## Install

```
$ npm install scroll-movie --save
```

## Usage

When using as React component

```tsx
<ScrollMovie
  getImage={(index) => {
    const pad = `${index}`.padStart(3, "0");
    return `images/image_${pad}.jpg`;
  }}
  imageSize={758}
  scrollsPerImage={scrollsPerImage}
  tracks={[
    {
      html:
        "<h1>ScrollMovie.js</h1><br />If you scroll, the background and display characters will change.",
      timing: {
        start: 0,
        end: 5000,
      },
      buttonLabel: "top",
    },
    {
      html:
        "<h1>Installation</h1><br />React<br /><br />$ npm i scroll-movie<br /><br />&lt;ScrollMovie getImage={images} imageSize={758} scrollsPerImage={60} tracks={tracks} /&gt;<br /><br />Vanilla<br /><br />ScrollMovie(&quot;#app&quot;,{ getImage: images,imageSize: 758,scrollsPerImage: 60,tracks: tracks,});",
      timing: {
        start: 7000,
        end: 12000,
      },
      buttonLabel: "installation",
    },

    {
      html:
        "<h1>html</h1><br/><b>It can be expressed freely in html.</b><br /><br /><i>It can be expressed freely in html.</i><br /><br /><S>It can be expressed freely in html.</S>",
      timing: {
        start: 14000,
        end: 19000,
      },
      buttonLabel: "html",
    },
    {
      html: "<h1>Not Label</h1>You can do it without a label.",
      timing: {
        start: 21000,
        end: 26000,
      },
    },
    {
      html:
        "<h1>animation</h1><br />Animation can be customized freely in css.<br /><br />I'm using css that fades out to the right.",
      timing: {
        start: 28000,
        end: 33000,
      },
      buttonLabel: "animation",
      animation: {
        start: "originalCssStart",
        end: "originalCssEnd",
      },
    },
    {
      html:
        "<h1>Convert video to image</h1><br/>$ brew install ffmpeg<br /><br />$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg",
      timing: {
        start: 35000,
        end: 40000,
      },
      buttonLabel: "image",
    },
    {
      html: "<h1>Thank you</h1><br/>That's it. Please try it.",
      timing: {
        start: 42000,
        end: 45480,
      },
      buttonLabel: "end",
    },
  ]}
/>
```

When using as vanilla.js

```tsx
const tracks = [
  {
    html:
      "<h1>ScrollMovie.js</h1><br />If you scroll, the background and display characters will change.",
    timing: {
      start: 0,
      end: 5000,
    },
    buttonLabel: "top",
  },
  {
    html:
      "<h1>Installation</h1><br />React<br /><br />$ npm i scroll-movie<br /><br />&lt;ScrollMovie getImage={images} imageSize={758} scrollsPerImage={60} tracks={tracks} /&gt;<br /><br />Vanilla<br /><br />ScrollMovie(&quot;#app&quot;,{ getImage: images,imageSize: 758,scrollsPerImage: 60,tracks: tracks,});",
    timing: {
      start: 7000,
      end: 12000,
    },
    buttonLabel: "installation",
  },

  {
    html:
      "<h1>html</h1><br/><b>It can be expressed freely in html.</b><br /><br /><i>It can be expressed freely in html.</i><br /><br /><S>It can be expressed freely in html.</S>",
    timing: {
      start: 14000,
      end: 19000,
    },
    buttonLabel: "html",
  },
  {
    html: "<h1>Not Label</h1>You can do it without a label.",
    timing: {
      start: 21000,
      end: 26000,
    },
  },
  {
    html:
      "<h1>animation</h1><br />Animation can be customized freely in css.<br /><br />I'm using css that fades out to the right.",
    timing: {
      start: 28000,
      end: 33000,
    },
    buttonLabel: "animation",
    animation: {
      start: "originalCssStart",
      end: "originalCssEnd",
    },
  },
  {
    html:
      "<h1>Convert video to image</h1><br/>$ brew install ffmpeg<br /><br />$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg",
    timing: {
      start: 35000,
      end: 40000,
    },
    buttonLabel: "image",
  },
  {
    html: "<h1>Thank you</h1><br/>That's it. Please try it.",
    timing: {
      start: 42000,
      end: 45480,
    },
    buttonLabel: "end",
  },
];
ScrollMovie("#app", {
  getImage: (index) => {
    const pad = `${index}`.padStart(3, "0");
    return `images/image_${pad}.jpg`;
  },
  imageSize: 758,
  scrollsPerImage: 60,
  tracks: tracks,
});
```
