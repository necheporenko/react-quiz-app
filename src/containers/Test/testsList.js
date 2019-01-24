const QUESTIONS = [
  { question: "Do you like pineapple juice?", answer: "" },
  { question: "Do you like green tea?", answer: "" },
  { question: "Do you like black tea?", answer: "" },
  { question: "Do you like orange juice?", answer: "" },
  { question: "Do you like apple juice?", answer: "" }
];

const TESTS_LIST = [
  {
    id: 1,
    icon: "wind",
    iconXs: "xsWind",
    status: "active",
    questions: [
      { question: "Do you like pineapple juice?", answer: "", training: true },
      { question: "Do you like green tea?", answer: "", training: true },
      { question: "Do you like black tea?", answer: "" },
      { question: "Do you like orange juice?", answer: "" },
      { question: "Do you like apple juice?", answer: "" }
    ]
  },
  {
    id: 2,
    icon: "fire",
    iconXs: "xsWind",
    status: "active",
    questions: QUESTIONS
  },
  {
    id: 3,
    icon: "water",
    iconXs: "xsWind",
    status: "active",
    questions: QUESTIONS
  },
  {
    id: 4,
    icon: "earth",
    iconXs: "xsWind",
    status: "active",
    questions: QUESTIONS
  },

  {
    id: 5,
    icon: "wind",
    iconXs: "xsFire",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 6,
    icon: "fire",
    iconXs: "xsFire",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 7,
    icon: "water",
    iconXs: "xsFire",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 8,
    icon: "earth",
    iconXs: "xsFire",
    status: "disabled",
    questions: QUESTIONS
  },

  {
    id: 9,
    icon: "wind",
    iconXs: "xsWater",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 10,
    icon: "fire",
    iconXs: "xsWater",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 11,
    icon: "water",
    iconXs: "xsWater",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 12,
    icon: "earth",
    iconXs: "xsWater",
    status: "disabled",
    questions: QUESTIONS
  },

  {
    id: 13,
    icon: "wind",
    iconXs: "xsEarth",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 14,
    icon: "fire",
    iconXs: "xsEarth",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 15,
    icon: "water",
    iconXs: "xsEarth",
    status: "disabled",
    questions: QUESTIONS
  },
  {
    id: 16,
    icon: "earth",
    iconXs: "xsEarth",
    status: "disabled",
    questions: QUESTIONS
  }
];

export default TESTS_LIST;
