# ScrollMovie

## Install

```
$ npm install scroll-movie --save
```

## Usage

```tsx
<ScrollMovie
  getImage={(index) => {
    const pad = `${index}`.padStart(4, "0");
    return `https://ct.st.keio.ac.jp/wordpress/wp-content/themes/ko-campus/assets/movie_images/movie${pad}.jpg`;
  }}
  imageSize={1126}
  tracks={[
    {
      html: "<h1>リアルキャンパスツアーへようこそ！！</h1>",
      timing: { start: 100, end: 1000 },
      buttonLabel: "キャンパスツアートップ",
    },
    {
      html:
        "理工学部では、第3学年から学生生活の拠点が矢上キャンパスへと移ります。学科専門科目の履修が始まるとともに、第4学年からは研究室に所属して教員の指導のもと、研究活動に取り組みます。",
      timing: { start: 10000, end: 3000 },
      buttonLabel: "学習",
    },
    {
      html:
        "<h1>IBM Q Network Hub @ Keio University</h1><br /><small>量子コンピュータは、最適化問題や材料探索などの実社会問題を現行器をはるかに超えるスピードで解けると期待される夢の技術です。慶應義塾大学では、20量子ビットの量子コンピュータIBM Qを利用できるアジア地区唯一の量子コンピューティングネットワークのハブとして、量子コンピューティングの研究を推進しています。</small>",
      timing: {
        start: 30000,
        end: 2000,
      },
      buttonLabel: "研究",
    },
    {
      html: "これでリアルキャンパスツアーは終了です。",
      timing: {
        start: 165000,
        end: 3000,
      },
      buttonLabel: "より詳しく知りたい方は",
    },
  ]}
  scrollsPerImage={scrollsPerImage}
/>
```
