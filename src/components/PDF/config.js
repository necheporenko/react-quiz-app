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
      { real: 40, ref: null },
      { real: -80, ref: null },
      { real: 80, ref: null },
      { real: 20, ref: null },
      { real: 30, ref: null },
      { real: -60, ref: null },
      { real: -40, ref: null },
      { real: -80, ref: null },
      { real: 80, ref: null },
      { real: 20, ref: null },
      { real: 35, ref: null },
      { real: -65, ref: null },
      { real: 45, ref: null },
      { real: -85, ref: null },
      { real: 85, ref: null },
      { real: 25, ref: null }
    ]
  },
  socionicFeatures: {
    axisX: [1, 0, -1],
    data: [
      { real: 80, ref: null },
      { real: 20, ref: null },
      { real: -50, ref: null },
      { real: 60, ref: null },
      { real: 70, ref: null },
      { real: -10, ref: null },
      { real: -20, ref: null },
      { real: 45, ref: null },
      { real: 70, ref: null },
      { real: -80, ref: null },
      { real: 35, ref: null },
      { real: -25, ref: null },
      { real: 65, ref: null },
      { real: 75, ref: null },
      { real: -25, ref: null }
    ],
    leftLabel: socionicFeatures.leftLabel,
    rightLabel: socionicFeatures.rightLabel
  },
  socionicFunctions: {
    axisY: [3, 2, 1, 0, -1, -2, -3],
    axisX: ['БИ', 'ЧИ', 'БС', 'ЧС', 'БЛ', 'ЧЛ', 'БЭ', 'ЧЭ', 'БК', 'ЧК', 'БД', 'ЧД'],
    data: [
      { real: -60, ref: null },
      { real: -10, ref: null },
      { real: 40, ref: null },
      { real: -20, ref: null },
      { real: -80, ref: null },
      { real: -50, ref: null },
      { real: 70, ref: null },
      { real: 65, ref: null },
      { real: -15, ref: null },
      { real: 95, ref: null },
      { real: -20, ref: null },
      { real: -80, ref: null }
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
      { real: 40, ref: 50 },
      { real: -80, ref: -70 },
      { real: 80, ref: 85 },
      { real: 20, ref: 35 },
      { real: 30, ref: 10 },
      { real: -60, ref: -45 },
      { real: -40, ref: -50 },
      { real: -80, ref: -40 },
      { real: 80, ref: 60 },
      { real: 20, ref: 40 },
      { real: 35, ref: 45 },
      { real: -65, ref: -40 },
      { real: 45, ref: 55 },
      { real: -85, ref: -75 },
      { real: 85, ref: 80 },
      { real: 25, ref: 40 }
    ]
  },
  compareSocionicFeatures: {
    axisX: [1, 0, -1],
    data: [
      { real: 80, ref: 90 },
      { real: 20, ref: 30 },
      { real: -50, ref: -40 },
      { real: 60, ref: 50 },
      { real: 70, ref: 60 },
      { real: -10, ref: -20 },
      { real: -20, ref: 30 },
      { real: 45, ref: 40 },
      { real: 70, ref: 60 },
      { real: -80, ref: -65 },
      { real: 35, ref: 45 },
      { real: -25, ref: -35 },
      { real: 65, ref: 80 },
      { real: 75, ref: 60 },
      { real: -25, ref: -35 }
    ],
    leftLabel: socionicFeatures.leftLabel,
    rightLabel: socionicFeatures.rightLabel
  },
  comapareSocionicFunctions: {
    axisY: [3, 2, 1, 0, -1, -2, -3],
    axisX: ['БИ', 'ЧИ', 'БС', 'ЧС', 'БЛ', 'ЧЛ', 'БЭ', 'ЧЭ', 'БК', 'ЧК', 'БД', 'ЧД'],
    data: [
      { real: -60, ref: -70 },
      { real: -10, ref: -20 },
      { real: 40, ref: 45 },
      { real: -20, ref: -25 },
      { real: -80, ref: -20 },
      { real: -50, ref: -45 },
      { real: 70, ref: 75 },
      { real: 65, ref: 60 },
      { real: -15, ref: -30 },
      { real: 95, ref: 75 },
      { real: -20, ref: -24 },
      { real: -80, ref: -65 }
    ]
  }
};
