# ScrollMovie

## Install

```
$ npm install scroll-movie --save
```

## Usage

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
              "<U><h1>Scroll-movie Description</h1></U><br /><small>If you scroll, the background and display characters will change.</small>",
            timing: { start: 0, end: 2000 },
            buttonLabel: "TOP",
            animation: {
              start: "notFadeInStart",
              end: "scroll-movie__track-view_end",
            },
          },
          {
            html:
              "<font color='red'><h1>html</h1></font><br/><b>It can be expressed freely in html.</b><br /><br /><U>It can be expressed freely in html.</U><br /><br /><S>It can be expressed freely in html.</S>",
            timing: { start: 10000, end: 3000 },
            buttonLabel: "html",
          },
          {
            html: "You can also leave out the label.",
            timing: {
              start: 20000,
              end: 3000,
            },
          },
          {
            html:
              "<h1>animation</h1><br />The start and end strings for animation are className, so you can freely specify css in that string.<br />Here we have no fade-in and no fade-out.",
            timing: {
              start: 30000,
              end: 3000,
            },
            buttonLabel: "animation",
            animation: { start: "notFadeInStart", end: "notFadeInEnd" },
          },
          {
            html: "That's it. Please try it.",
            timing: {
              start: 45000,
              end: 1000,
            },
            buttonLabel: "END",
          },
        ]}
```
