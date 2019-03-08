export const getAnswerLabel = smile => {
  switch (smile) {
    case 'smile1':
      return 'Definitely YES!';
    case 'smile2':
      return 'Maybe';
    case 'smile3':
      return "Don't know";
    case 'smile4':
      return 'Most likely no';
    case 'smile5':
      return 'Definitely NO!';

    default:
      return null;
  }
};

export const ANSWER_ARRAY = [
  {
    icon: 'wind',
    iconXs: 'xsWind',
    abbreviation: 'INTJ',
    title: 'Introverted Intuitive Thinking Judging',
    type: 'Architect'
  },
  {
    icon: 'wind',
    iconXs: 'xsFire',
    abbreviation: 'ESFJ',
    title: 'Extraverted Sensing Feeling Judging',
    type: 'Consul'
  },
  {
    icon: 'wind',
    iconXs: 'xsWater',
    abbreviation: 'ENTP',
    title: 'Extraverted Intuitive Thinking Perceiving',
    type: 'Logician'
  },
  {
    icon: 'wind',
    iconXs: 'xsEarth',
    abbreviation: 'ISFP',
    title: 'Introverted Sensing Feeling Perceiving',
    type: 'Adventurer'
  },

  {
    icon: 'fire',
    iconXs: 'xsWind',
    abbreviation: 'INFP',
    title: 'Introverted Intuitive Feeling Perceiving',
    type: 'Mediator'
  },
  {
    icon: 'fire',
    iconXs: 'xsFire',
    abbreviation: 'ISTJ',
    title: 'Extraverted Sensing Thinking Perceiving',
    type: 'Entrepreneur'
  },
  {
    icon: 'fire',
    iconXs: 'xsWater',
    abbreviation: 'ENFJ',
    title: 'Extraverted Intuitive Feeling Judging',
    type: 'Protagonist'
  },
  {
    icon: 'fire',
    iconXs: 'xsEarth',
    abbreviation: 'ISTJ',
    title: 'Introverted Sensing Thinking Judging',
    type: 'Logistician'
  },

  {
    icon: 'water',
    iconXs: 'xsWind',
    abbreviation: 'INTP',
    title: 'Introverted Intuitive Thinking Perceiving',
    type: 'Logician'
  },
  {
    icon: 'water',
    iconXs: 'xsFire',
    abbreviation: 'ESFP',
    title: 'Extraverted Sensing Feeling Perceiving',
    type: 'Entertainer'
  },
  {
    icon: 'water',
    iconXs: 'xsWater',
    abbreviation: 'ENTJ',
    title: 'Extraverted Intuitive Thinking Judging',
    type: 'Commander'
  },
  {
    icon: 'water',
    iconXs: 'xsEarth',
    abbreviation: 'ISFJ',
    title: 'Introverted Sensing Feeling Judging',
    type: 'Defender'
  },

  {
    icon: 'earth',
    iconXs: 'xsWind',
    abbreviation: 'INFJ',
    title: 'Introverted Intuitive Feeling Judging',
    type: 'Advocate'
  },
  {
    icon: 'earth',
    iconXs: 'xsFire',
    abbreviation: 'ESTJ',
    title: 'Extraverted Sensing Thinking Judging',
    type: 'Executive'
  },
  {
    icon: 'earth',
    iconXs: 'xsWater',
    abbreviation: 'ENFP',
    title: 'Extraverted Intuitive Feeling Perceiving',
    type: 'Campaigner'
  },
  {
    icon: 'earth',
    iconXs: 'xsEarth',
    abbreviation: 'ISTP',
    title: 'Introverted Sensing Thinking Perceiving',
    type: 'Virtuoso'
  }
];
