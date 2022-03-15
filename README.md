# ScrollMovie

## Install

When using as vanilla.js

```
<script src="https://unpkg.com/scroll-movie@latest/dist/main.js"></script>
```

When using as React component

```
$ npm install scroll-movie --save

$ yarn add -D scroll-movie
```

## Usage

When using as vanilla.js

```tsx
const tracks = [
  {
    html: "<div style='margin-top: 300px;'><h1>ScrollMovie.js</h1><br />If you scroll, the background image will move.<br /><br />I'll show you how to install this library.<br /><div id='loading' style='opacity: 0; margin-top: 50px; text-align: center;'><div style='margin-bottom: 8px; color: #fc0;'>Scroll</div><img src='./img/bottom_scroll.svg' width=64px height=64px; /></div></div>",
    timing: {
      start: 0,
      end: 3000,
    },
    buttonLabel: "Top",
  },
  {
    html: "<div style='margin-top: 200px;'><h1>Installation</h1><h2>Vanilla</h2><pre><code>&lt;script src=&quot;https://unpkg.com/scroll-movie@latest/dist/main.js&quot;&gt;&lt;/script&gt;</code></pre><pre><code>ScrollMovie(&quot;#app&quot;, { tracks: tracks, getImage: images, imageSize: number, scrollsPerImage: number });</code></pre><h2>React</h2><pre><code class='shell'>$ npm install scroll-movie --save</code></pre><pre><code class='shell'>$ yarn add -D scroll-movie</code></pre><pre><code>&lt;ScrollMovie tracks={tracks} getImage={images} imageSize={number} scrollsPerImage={number} /&gt;</code></pre></div>",
    timing: {
      start: 4000,
      end: 7000,
    },
    buttonLabel: "Installation",
  },
  {
    html: "<div><h1>Props</h1><table><tr><th>Props name</th><th>Type</th><th>Explanation</th></tr><tr><td>tracks</td><td>Track[]</td><td>Display content.</td></tr><tr><td>getImage</td><td>(index: number) => string<td>Moving background.</td></tr><tr><td>imageSize</td><td>number</td><td>Number of images.</td></tr><tr><td>scrollsPerImage</td><td>number</td><td>Scroll value per image.</td></tr><tr><td>preload</td><td>boolean (default: false)</td><td>Preload images.(option)</td></tr><tr><td>preloadTimes</td><td>number (default: 0)</td><td>Set preload images time.Unit is ms.(option)</td></tr><tr><td>navigationDisplayTiming</td><td>number (default: 0)</td><td>When to display the navigation bar and label.(option)</td></tr><tr><td>navigationDisabledBrowserSize</td><td>{ height: number; width: number }</td><td>If the browser size is less than or equal to the specified number, the navigation bar and label will not be displayed.(option)</td></tr><tr><td>nowLoadingMessage</td><td>string (default: '&lt;div&gt;NowLoading&lt;/div&gt;')</td><td>Display until preload is completed.(option)</td></tr><tr><td>onTrackEnter</td><td>(target: HTMLElement) => void</td><td>Function to be executed at Start of trackView.(option)</td></tr><tr><td>onTrackLeave</td><td>(target: HTMLElement) => void</td><td>Function to be executed at the end of trackView.(option)</td></tr><tr><td>classes</td><td>ClassNames</td><td>Change the default class name.(option)</td></tr></table></div>",
    timing: {
      start: 8000,
      end: 11000,
    },
    buttonLabel: "Props",
  },
  {
    html: "<div style='margin-top: 100px;'><h1>Tracks</h1><pre><code>const tracks = [<br/>   {<br />      html: &quot;&lt;h1&gt;ScrollMovie.js&lt;/h1&gt;Hello ScrollMovie.js&quot;,<br />      timing: {<br/>         start: 0,<br />         end: 5000<br />      },<br />      buttonLabel: &quot;start&quot;,<br />      animation: {<br />         start: &quot;scroll-movie__track-view_start&quot;,<br />         end: &quot;scroll-movie__track-view_end&quot;<br />      }<br />   },<br/>   {<br />      html: &quot;&lt;h1&gt;Thank You.&lt;/h1&gt;ScrollMovie.js is Great.&quot;,<br />      timing: {<br/>         start: 7000,<br />         end: 12000<br />      },<br />      buttonLabel: &quot;end&quot;,<br />   }<br />]</code></pre></div>",
    timing: {
      start: 12000,
      end: 15000,
    },
    buttonLabel: "Tracks",
  },
  {
    html: "<div style='margin-top: 350px;'><h1>Internal link</h1>Label can be implemented as follows.<br /><br /><a href='#20000' style='color: #fff;' >Click Here. Go to Not Label #20000</a><br /><h2>How</h2><pre><code>&lt;a href='#20000' style='color: #fff;' &gt;Click Here. Go to Not Label #20000&lt;/a&gt;</code></pre></div>",
    timing: {
      start: 16000,
      end: 19000,
    },
    buttonLabel: "Internal link",
  },
  {
    html: "<div style='margin-top: 350px;'><h1>Not Label</h1>You can do it without a label.<br /><br />If you do not write a Button Label in tracks, the label will not be displayed.</div>",
    timing: {
      start: 20000,
      end: 22000,
    },
  },
  {
    html: "<div style='margin-top: 100px;'><h1>Animation</h1>Animation can be customized freely in css.<br /><br />I'm using css that fades out to the right.<h2>Sample CSS</h2><pre><code class='css'>.originalCssStart {<br />   position: absolute;<br />   top: 50%;<br />   left: 50%;<br />   transform: translate(-50%, -50%);<br />   opacity: 1;<br />}<br /><br />.originalCssEnd {<br />   position: absolute;<br />   top: 50%;<br />   left: 50%;<br />   transform: translate(100%, -50%);<br />   opacity: 0;<br />}</code></pre></div>",
    timing: {
      start: 23000,
      end: 26000,
    },
    buttonLabel: "Animation",
    animation: {
      start: "originalCssStart",
      end: "originalCssEnd",
    },
  },
  {
    html: "<div style='margin-top: 300px;'><h1>Convert video to image（Bonus）</h1><pre><code class='shell'>$ brew install ffmpeg</code></pre><pre><code class='shell'>$ ffmpeg -i {filename}.mp4 -vcodec mjpeg image_%03d.jpg</code></pre><pre><code>getImage: (index) => { const pad = `${index}`.padStart(3, &quot;1&quot;); return `images/image_${pad}.jpg`;</code></pre></div>",
    timing: {
      start: 27000,
      end: 30000,
    },
    buttonLabel: "Images",
  },
  {
    html: "<div style='margin-top: 350px;'><h1>Thank you</h1>That's it. Please try it.<h2>Note</h2>Last end value is imageSize * scrollsPerImage.<br /><br />Responsive support is also possible.</div>",
    timing: {
      start: 31000,
      end: 31440,
    },
    buttonLabel: "End",
  },
];
ScrollMovie("#app", {
  classes: {},
  tracks: tracks,
  getImage: (index) => {
    const pad = `${index}`.padStart(3, "1");
    return `images/image_${pad}.jpg`;
  },
  imageSize: 524,
  scrollsPerImage: 60,
  preload: true,
  preloadTimes: 1000,
  navigationDisplayTiming: 0,
  navigationDisabledBrowserSize: { height: 0, width: 0 },
  nowLoadingMessage: "<div>Now Loading...</div>",
  onTrackEnter: (targetElement) => {
    setTimeout(() => {
      document.getElementById("loading").style.transition = "all 1s";
      document.getElementById("loading").style.opacity = "1";
    }, 1000);
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
  tracks={tracks}
  getImage={(index) => {
    const pad = `${index}`.padStart(3, "1");
    return `images/image_${pad}.jpg`;
  }}
  imageSize={524}
  scrollsPerImage={60}
  preload={true}
  preloadTimes={1000}
  navigationDisplayTiming={0}
  navigationDisabledBrowserSize={height: 0, width: 0}
  nowLoadingMessage={"<div>Now Loading...</div>"}
  onTrackEnter={(targetElement) => {
    setTimeout(() => {
      document.getElementById("loading").style.transition = "all 1s";
      document.getElementById("loading").style.opacity = "1";
    }, 1000);
    targetElement.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }}
  onTrackLeave={() => {}}
/>
```

## Note

Last end value is imageSize \* scrollsPerImage
