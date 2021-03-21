# ScrollMovie

## Install

When using as React component

```
$ npm install scroll-movie --save
```

When using as vanilla.js

```
<script src="https://unpkg.com/scroll-movie@1.0.0/dist/main.js"></script>
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
        "<h1>ScrollMovie.js</h1><br />If you scroll, the background image will move.<br /><br />I'll show you how to install this library.",
      timing: {
        start: 0,
        end: 5000,
      },
      buttonLabel: "top",
    },
    {
      html:
        "<h1>Installation</h1>・Vanilla<br /><br />&lt;script src=&quot;https://unpkg.com/scroll-movie@1.0.0/dist/main.js&quot;&gt;&lt;/script&gt;<br /><br />ScrollMovie(&quot;#app&quot;,{ getImage: images,imageSize: number,scrollsPerImage: number,tracks: tracks,});<br /><br />・React<br /><br />$ npm install scroll-movie --save<br /><br />&lt;ScrollMovie getImage={images} imageSize={number} scrollsPerImage={number} tracks={tracks} /&gt;",
      timing: {
        start: 7000,
        end: 12000,
      },
      buttonLabel: "installation",
    },

    {
      html:
        "<h1>tracks</h1><br/>{ html: &lt;h1&gt;ScrollMovie.js&lt;/h1&gt;Hello ScrollMovie.js, timing: { start: 0,end: 5000},buttonLabel: &quot;animation&quot;,ScrollMovie: {start: &quot;scroll-movie__track-view_start&quot;,end: &quot;scroll-movie__track-view_end&quot;}",
      timing: {
        start: 14000,
        end: 19000,
      },
      buttonLabel: "tracks",
    },
    {
      html:
        "<h1>Convert video to image</h1><br/>$ brew install ffmpeg<br /><br />$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg<br /><br />getImage: (index) => { const pad = `${index}`.padStart(3, &quot;0&quot;); return `images/image_${pad}.jpg`;",
      timing: {
        start: 21000,
        end: 26000,
      },
      buttonLabel: "images",
    },
    {
      html: "<h1>Not Label</h1>You can do it without a label.",

      timing: {
        start: 28000,
        end: 33000,
      },
    },
    {
      html:
        "<h1>animation</h1><br />Animation can be customized freely in css.<br /><br />I'm using css that fades out to the right.",
      timing: {
        start: 35000,
        end: 40000,
      },
      buttonLabel: "animation",
      animation: {
        start: "originalCssStart",
        end: "originalCssEnd",
      },
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
      "<h1>ScrollMovie.js</h1><br />If you scroll, the background image will move.<br /><br />I'll show you how to install this library.",
    timing: {
      start: 0,
      end: 5000,
    },
    buttonLabel: "top",
  },
  {
    html:
      "<h1>Installation</h1>・Vanilla<br /><br />&lt;script src=&quot;https://unpkg.com/scroll-movie@1.0.0/dist/main.js&quot;&gt;&lt;/script&gt;<br /><br />ScrollMovie(&quot;#app&quot;,{ getImage: images,imageSize: number,scrollsPerImage: number,tracks: tracks,});<br /><br />・React<br /><br />$ npm install scroll-movie --save<br /><br />&lt;ScrollMovie getImage={images} imageSize={number} scrollsPerImage={number} tracks={tracks} /&gt;",
    timing: {
      start: 7000,
      end: 12000,
    },
    buttonLabel: "installation",
  },

  {
    html:
      "<h1>tracks</h1><br/>{ html: &lt;h1&gt;ScrollMovie.js&lt;/h1&gt;Hello ScrollMovie.js, timing: { start: 0,end: 5000},buttonLabel: &quot;animation&quot;,ScrollMovie: {start: &quot;scroll-movie__track-view_start&quot;,end: &quot;scroll-movie__track-view_end&quot;}",
    timing: {
      start: 14000,
      end: 19000,
    },
    buttonLabel: "tracks",
  },
  {
    html:
      "<h1>Convert video to image</h1><br/>$ brew install ffmpeg<br /><br />$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg<br /><br />getImage: (index) => { const pad = `${index}`.padStart(3, &quot;0&quot;); return `images/image_${pad}.jpg`;",
    timing: {
      start: 21000,
      end: 26000,
    },
    buttonLabel: "images",
  },
  {
    html: "<h1>Not Label</h1>You can do it without a label.",

    timing: {
      start: 28000,
      end: 33000,
    },
  },
  {
    html:
      "<h1>animation</h1><br />Animation can be customized freely in css.<br /><br />I'm using css that fades out to the right.",
    timing: {
      start: 35000,
      end: 40000,
    },
    buttonLabel: "animation",
    animation: {
      start: "originalCssStart",
      end: "originalCssEnd",
    },
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
  tracks: tracks,
  getImage: (index) => {
    const pad = `${index}`.padStart(3, "0");
    return `images/image_${pad}.jpg`;
  },
  imageSize: 758,
  scrollsPerImage: 60,
  sliderBarLength: 60,
});
```
