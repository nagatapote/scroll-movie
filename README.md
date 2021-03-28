# ScrollMovie

## Install

When using as vanilla.js

```
<script src="https://unpkg.com/scroll-movie@latest/dist/main.js"></script>
```

When using as React component

```
$ npm install scroll-movie --save
```

## Usage

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
      "<h1>Installation</h1>・Vanilla<pre><code>&lt;script src=&quot;https://unpkg.com/scroll-movie@latest/dist/main.js&quot;&gt;&lt;/script&gt;</code></pre><pre><code>ScrollMovie(&quot;#app&quot;,{ getImage: images, imageSize: number, scrollsPerImage: number, tracks: tracks,});</code></pre>・React<pre><code>$ npm install scroll-movie --save</code></pre><pre><code>&lt;ScrollMovie getImage={images} imageSize={number} scrollsPerImage={number} tracks={tracks} /&gt;</code></pre>",
    timing: {
      start: 7000,
      end: 12000,
    },
    buttonLabel: "installation",
  },

  {
    html:
      "<h1>tracks</h1><pre><code>{<br /> html: &lt;h1&gt;ScrollMovie.js&lt;/h1&gt;Hello ScrollMovie.js,<br /> timing: { start: 0,end: 5000 },<br /> buttonLabel: &quot;animation&quot;,<br /> ScrollMovie: {start: &quot;scroll-movie__track-view_start&quot;,end: &quot;scroll-movie__track-view_end&quot;<br />}</code></pre>",
    timing: {
      start: 14000,
      end: 19000,
    },
    buttonLabel: "tracks",
  },
  {
    html:
      "<h1>Convert video to image</h1><pre><code>$ brew install ffmpeg</code></pre><pre><code>$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg</code></pre><pre><code>getImage: (index) => { const pad = `${index}`.padStart(3, &quot;0&quot;); return `images/image_${pad}.jpg`;</code></pre>",
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
  preload: true,
  nowLoadingMessage: "<div>Now Loading...</div>",
  onTrackEnter: (targetElement) => {
    targetElement.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  },
  onTrackLeave: () => {},
});
```

When using as React component

```tsx
<ScrollMovie
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
        "<h1>Installation</h1>・Vanilla<pre><code>&lt;script src=&quot;https://unpkg.com/scroll-movie@latest/dist/main.js&quot;&gt;&lt;/script&gt;</code></pre><pre><code>ScrollMovie(&quot;#app&quot;,{ getImage: images, imageSize: number, scrollsPerImage: number, tracks: tracks,});</code></pre>・React<pre><code>$ npm install scroll-movie --save</code></pre><pre><code>&lt;ScrollMovie getImage={images} imageSize={number} scrollsPerImage={number} tracks={tracks} /&gt;</code></pre>",
      timing: {
        start: 7000,
        end: 12000,
      },
      buttonLabel: "installation",
    },

    {
      html:
        "<h1>tracks</h1><pre><code>{<br /> html: &lt;h1&gt;ScrollMovie.js&lt;/h1&gt;Hello ScrollMovie.js,<br /> timing: { start: 0,end: 5000 },<br /> buttonLabel: &quot;animation&quot;,<br /> ScrollMovie: {start: &quot;scroll-movie__track-view_start&quot;,end: &quot;scroll-movie__track-view_end&quot;<br />}</code></pre>",
      timing: {
        start: 14000,
        end: 19000,
      },
      buttonLabel: "tracks",
    },
    {
      html:
        "<h1>Convert video to image</h1><pre><code>$ brew install ffmpeg</code></pre><pre><code>$ ffmpeg -i [filename].mp4 -vcodec mjpeg image_%03d.jpg</code></pre><pre><code>getImage: (index) => { const pad = `${index}`.padStart(3, &quot;0&quot;); return `images/image_${pad}.jpg`;</code></pre>",
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
  getImage={(index) => {
    const pad = `${index}`.padStart(3, "0");
    return `images/image_${pad}.jpg`;
  }}
  imageSize={758}
  scrollsPerImage={60}
  sliderBarLength={60}
  preload={true}
  nowLoadingMessage={"<div>Now Loading...</div>"}
  onTrackEnter={(targetElement) => {
    targetElement.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }}
  onTrackLeave={() => {}}
/>
```
