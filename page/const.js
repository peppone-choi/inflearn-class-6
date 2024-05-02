export const ranges = [
  [48, 57], // 숫자 0-9
  [97, 122], // 소문자 a-z
  [65, 90], // 대문자 A-Z
  ["@", "!", "$", "&", "%"], // 특수 문자
];

export const types = [
  {
    id: "number",
    name: "숫자",
    range: ranges[0],
  },
  {
    id: "lowercase",
    name: "소문자",
    range: ranges[1],
  },
  {
    id: "uppercase",
    name: "대문자",
    range: ranges[2],
  },
  {
    id: "special",
    name: "특수 문자",
    range: ranges[3],
  },
];
