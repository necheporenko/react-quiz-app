export const getAnswerLabel = smile => {
  switch (smile) {
    case "smile1":
      return "Definitely YES!";
    case "smile2":
      return "Maybe";
    case "smile3":
      return "Don't know";
    case "smile4":
      return "Most likely no";
    case "smile5":
      return "Definitely NO!";

    default:
      return null;
  }
};
