var kanji = [
  {
    Kanji: "一",
    Meaning: "one",
    "Japanese Reading": "ichi, itsu",
  },
  {
    Kanji: "二",
    Meaning: "two",
    "Japanese Reading": "ni, ji",
  },
  {
    Kanji: "三",
    Meaning: "three",
    "Japanese Reading": "san",
  },
  {
    Kanji: "四",
    Meaning: "four",
    "Japanese Reading": "shi",
  },
  {
    Kanji: "五",
    Meaning: "five",
    "Japanese Reading": "go",
  },
  {
    Kanji: "六",
    Meaning: "six",
    "Japanese Reading": "roku",
  },
  {
    Kanji: "七",
    Meaning: "seven",
    "Japanese Reading": "shichi",
  },
  {
    Kanji: "八",
    Meaning: "eight",
    "Japanese Reading": "hachi",
  },
  {
    Kanji: "九",
    Meaning: "nine",
    "Japanese Reading": "ku, kyū",
  },
  {
    Kanji: "十",
    Meaning: "ten",
    "Japanese Reading": "jū",
  },
  {
    Kanji: "百",
    Meaning: "hundred",
    "Japanese Reading": "hyaku",
  },
  {
    Kanji: "千",
    Meaning: "thousand",
    "Japanese Reading": "sen",
  },
  {
    Kanji: "上",
    Meaning: "top, above",
    "Japanese Reading": "jō",
  },
  {
    Kanji: "下",
    Meaning: "bottom, below",
    "Japanese Reading": "ka, ge",
  },
  {
    Kanji: "左",
    Meaning: "left",
    "Japanese Reading": "sa",
  },
  {
    Kanji: "右",
    Meaning: "right",
    "Japanese Reading": "u, yū",
  },
  {
    Kanji: "中",
    Meaning: "inside, middle",
    "Japanese Reading": "chū, jū",
  },
  {
    Kanji: "大",
    Meaning: "large",
    "Japanese Reading": "dai, tai",
  },
  {
    Kanji: "小",
    Meaning: "small",
    "Japanese Reading": "shō",
  },
  {
    Kanji: "月",
    Meaning: "month, moon",
    "Japanese Reading": "gatsu, getsu",
  },
];
// Calling function for table (link to reference: https://stackoverflow.com/questions/37814493/how-to-load-json-data-into-bootstrap-table)
$(function () {
  $("#table").bootstrapTable({
    data: mydata,
  });
});
