var kanji = [
  {
    "#": 1,
    Kanji: "一",
    Meaning: "one",
    "Japanese Reading": "ichi, itsu",
  },
  {
    "#": 2,
    Kanji: "二",
    Meaning: "two",
    "Japanese Reading": "ni, ji",
  },
  {
    "#": 3,
    Kanji: "三",
    Meaning: "three",
    "Japanese Reading": "san",
  },
  {
    "#": 4,
    Kanji: "四",
    Meaning: "four",
    "Japanese Reading": "shi",
  },
  {
    "#": 5,
    Kanji: "五",
    Meaning: "five",
    "Japanese Reading": "go",
  },
  {
    "#": 6,
    Kanji: "六",
    Meaning: "six",
    "Japanese Reading": "roku",
  },
  {
    "#": 7,
    Kanji: "七",
    Meaning: "seven",
    "Japanese Reading": "shichi",
  },
  {
    "#": 8,
    Kanji: "八",
    Meaning: "eight",
    "Japanese Reading": "hachi",
  },
  {
    "#": 9,
    Kanji: "九",
    Meaning: "nine",
    "Japanese Reading": "ku, kyū",
  },
  {
    "#": 10,
    Kanji: "十",
    Meaning: "ten",
    "Japanese Reading": "jū",
  },
  {
    "#": 11,
    Kanji: "百",
    Meaning: "hundred",
    "Japanese Reading": "hyaku",
  },
  {
    "#": 12,
    Kanji: "千",
    Meaning: "thousand",
    "Japanese Reading": "sen",
  },
  {
    "#": 13,
    Kanji: "上",
    Meaning: "top, above",
    "Japanese Reading": "jō",
  },
  {
    "#": 14,
    Kanji: "下",
    Meaning: "bottom, below",
    "Japanese Reading": "ka, ge",
  },
  {
    "#": 15,
    Kanji: "左",
    Meaning: "left",
    "Japanese Reading": "sa",
  },
  {
    "#": 16,
    Kanji: "右",
    Meaning: "right",
    "Japanese Reading": "u, yū",
  },
  {
    "#": 17,
    Kanji: "中",
    Meaning: "inside, middle",
    "Japanese Reading": "chū, jū",
  },
  {
    "#": 18,
    Kanji: "大",
    Meaning: "large",
    "Japanese Reading": "dai, tai",
  },
  {
    "#": 19,
    Kanji: "小",
    Meaning: "small",
    "Japanese Reading": "shō",
  },
  {
    "#": 20,
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