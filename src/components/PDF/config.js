var temp = 0;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFixedNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const getRandomData = isRef => {
  if (isRef) {
    if (99 > temp > 70 || -70 > temp > -90) {
      temp = +temp + +getRandomNumber(-5, 5);
    } else {
      temp = +temp + +getRandomNumber(-29, 29);
    }

    if (temp === 0) {
      temp = temp + 1;
    }

    return temp;
  }
  temp = getRandomNumber(-90, 90);

  return temp;
};

const socionicFeatures = {
  leftLabel: [
    'интроверт',
    'динамик',
    'рационал',
    'сенсорик',
    'предусмотрительный',
    'центральный',
    'стратег',
    'этик',
    'упрямый',
    'нисходящий',
    'эмотивист',
    'элитарист',
    'негативист',
    'деклатим',
    'левый'
  ],
  rightLabel: [
    'экстраверт',
    'статик',
    'иррационал',
    'интуит',
    'беспечный',
    'периферийный',
    'тактик',
    'логик',
    'уступчивый',
    'восходящий',
    'конструктивист',
    'эгалитарист',
    'позитивист',
    'квестим',
    'правый'
  ]
};

export const DATA = {
  isGot: true,
  socionicType: {
    axisY: [2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5],
    axisX: [
      'ИЛЭ',
      'ЛИИ',
      'СЭИ',
      'ЭСЭ',
      'СЛЭ',
      'ЛСИ',
      'ИЭИ',
      'ЭИЭ',
      'СЭЭ',
      'ЭСИ',
      'ИЛИ',
      'ЛИЭ',
      'ИЭЭ',
      'ЭИИ',
      'СЛИ',
      'ЛСЭ'
    ],
    data: [
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null }
    ]
  },
  socionicFeatures: {
    axisX: [1, 0, -1],
    data: [
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null }
    ],
    leftLabel: socionicFeatures.leftLabel,
    rightLabel: socionicFeatures.rightLabel
  },
  socionicFunctions: {
    axisY: [3, 2, 1, 0, -1, -2, -3],
    axisX: ['БИ', 'ЧИ', 'БС', 'ЧС', 'БЛ', 'ЧЛ', 'БЭ', 'ЧЭ', 'БК', 'ЧК', 'БД', 'ЧД'],
    data: [
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null },
      { real: getRandomData(), ref: null }
    ]
  },
  compareSocionicType: {
    axisY: [2.5, 2, 1.5, 1, 0.5, 0, -0.5, -1, -1.5, -2, -2.5],
    axisX: [
      'ИЛЭ',
      'ЛИИ',
      'СЭИ',
      'ЭСЭ',
      'СЛЭ',
      'ЛСИ',
      'ИЭИ',
      'ЭИЭ',
      'СЭЭ',
      'ЭСИ',
      'ИЛИ',
      'ЛИЭ',
      'ИЭЭ',
      'ЭИИ',
      'СЛИ',
      'ЛСЭ'
    ],
    data: [
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) }
    ]
  },
  compareSocionicFeatures: {
    axisX: [1, 0, -1],
    data: [
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) }
    ],
    leftLabel: socionicFeatures.leftLabel,
    rightLabel: socionicFeatures.rightLabel
  },
  comapareSocionicFunctions: {
    axisY: [3, 2, 1, 0, -1, -2, -3],
    axisX: ['БИ', 'ЧИ', 'БС', 'ЧС', 'БЛ', 'ЧЛ', 'БЭ', 'ЧЭ', 'БК', 'ЧК', 'БД', 'ЧД'],
    data: [
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) },
      { real: getRandomData(), ref: getRandomData(true) }
    ]
  },
  koef: {
    a: getRandomFixedNumber(-1, 1),
    b: getRandomFixedNumber(-1, 1),
    c: getRandomFixedNumber(-1, 1),
    d: getRandomFixedNumber(-1, 1),
    e: getRandomFixedNumber(-1, 1),
    f: getRandomFixedNumber(-1, 1),
    g: getRandomFixedNumber(-1, 1),
    h: getRandomFixedNumber(-1, 1),
    i: getRandomFixedNumber(-1, 1),
    j: getRandomFixedNumber(-1, 1),
    k: getRandomFixedNumber(-1, 1),
    l: getRandomFixedNumber(-1, 1),
    m: getRandomFixedNumber(-1, 1),
    n: getRandomFixedNumber(-1, 1),
    o: getRandomFixedNumber(-1, 1),
    p: getRandomFixedNumber(-1, 1),
    q: getRandomFixedNumber(-1, 1),
    r: getRandomFixedNumber(-1, 1),
    s: getRandomFixedNumber(-1, 1),
    t: getRandomFixedNumber(-1, 1),
    u: getRandomFixedNumber(-1, 1),
    v: getRandomFixedNumber(-1, 1),
    w: getRandomFixedNumber(-1, 1),
    x: getRandomFixedNumber(-1, 1),
    y: getRandomFixedNumber(-1, 1),
    z: getRandomFixedNumber(-1, 1)
  }
};
