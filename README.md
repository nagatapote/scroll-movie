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
        "<U><h1>ScrollMovie.js</h1></U><br /><small>If you scroll, the background and display characters will change.</small>",
      timing: {
        start: 0,
        end: 2000,
      },
      buttonLabel: "TOP",
    },
    {
      html:
        "<font color='red'><h1>html</h1></font><br/><b>It can be expressed freely in html.</b><br /><br /><U>It can be expressed freely in html.</U><br /><br /><S>It can be expressed freely in html.</S>",
      timing: {
        start: 10000,
        end: 13000,
      },
      buttonLabel: "html",
    },
    {
      html: "You can also leave out the label.",
      timing: {
        start: 20000,
        end: 23000,
      },
    },
    {
      html:
        "<h1>animation</h1><br />The start and end strings for animation are className, so you can freely specify css in that string.<br />Here we have no fade-in and no fade-out.",
      timing: {
        start: 30000,
        end: 33000,
      },
      buttonLabel: "animation",
      animation: {
        start: "originalCssStart",
        end: "originalCssEnd",
      },
    },
    {
      html: "That's it. Please try it.",
      timing: {
        start: 44480,
        end: 45480,
      },
      buttonLabel: "END",
    },
  ]}
/>
```

When using as vanilla.js

```tsx
const tracks = [
  {
    html:
      "<U><h1>ScrollMovie.js</h1></U><br /><small>If you scroll, the background and display characters will change.</small>",
    timing: {
      start: 0,
      end: 2000,
    },
    buttonLabel: "TOP",
  },
  {
    html:
      "<font color='red'><h1>html</h1></font><br/><b>It can be expressed freely in html.</b><br /><br /><U>It can be expressed freely in html.</U><br /><br /><S>It can be expressed freely in html.</S>",
    timing: {
      start: 10000,
      end: 13000,
    },
    buttonLabel: "html",
  },
  {
    html: "You can also leave out the label.",
    timing: {
      start: 20000,
      end: 23000,
    },
  },
  {
    html:
      "<h1>animation</h1><br />The start and end strings for animation are className, so you can freely specify css in that string.<br />Here we have no fade-in and no fade-out.",
    timing: {
      start: 30000,
      end: 33000,
    },
    buttonLabel: "animation",
    animation: {
      start: "originalCssStart",
      end: "originalCssEnd",
    },
  },
  {
    html: "That's it. Please try it.",
    timing: {
      start: 44480,
      end: 45480,
    },
    buttonLabel: "END",
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
