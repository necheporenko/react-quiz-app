import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Water1 from '../Icons/elements/Water1.png';
import ProximaNovaRegular from '../../fonts/ProximaNova/ProximaNova-Regular.ttf';
import ProximaNovaBold from '../../fonts/ProximaNova/ProximaNova-Bold.ttf';

import { DATA } from './config';

Font.register(`${window.location.origin}/${ProximaNovaBold}`, { family: 'ProximaNova-Bold' });
Font.register(`${window.location.origin}/${ProximaNovaRegular}`, { family: 'ProximaNova-Regular' });

// Create Document Component
const PDF = props => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.imageWrapper}>
          <Image src={Water1} style={styles.bigIcon} />
          <Image src={Water1} style={styles.smallIcon} />
          <Text style={styles.abbreviation}>{props.abbreviation}</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <Text style={styles.text}>Ваш ведущий соционический тип — ИЭИ (s = 0.14, k = 0.89):</Text>
        <VerticalGrid config={DATA.socionicType} height="170pt" />

        <Text style={[styles.text, { marginTop: 10 }]}>Профиль ваших соционических признаков:</Text>
        <HorizontalGrid config={DATA.socionicFeatures} />

        <Text style={[styles.text, { marginTop: 10 }]}>Профиль ваших соционических функций:</Text>
        <VerticalGrid config={DATA.socionicFunctions} height="130pt" />

        <Text style={[styles.text]}>
          Сравнение с типным профилем эталонного соционического типа ИЭИ:
        </Text>
        <VerticalGrid config={DATA.compareSocionicType} height="170pt" />

        <Text style={[styles.text, { marginTop: 10 }]}>
          Сравнение с профилем признаков эталонного соционического типа ИЭИ:
        </Text>
        <HorizontalGrid config={DATA.compareSocionicFeatures} />

        <Text style={[styles.text, { marginTop: 10 }]}>
          Сравнение с профилем функций эталонного соционического типа ИЭИ:
        </Text>
        <VerticalGrid config={DATA.comapareSocionicFunctions} height="130pt" />
      </Page>
    </Document>
  );
};

export default PDF;

/*
 * Vertical Grid
 */
const VerticalGrid = ({ config, height }) => (
  <View>
    <View style={[styles.gridVertical, { height: height }]}>
      <View style={styles.gridVerticalY}>
        {config.axisY.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
      {config.data.map((item, index) => (
        <View style={styles.gridVerticalCol} key={index}>
          <View style={styles.gridVerticalColWrap}>
            <View
              style={[
                styles.gridVerticalColItem,
                styles.gridVerticalColItemTop,
                { height: item.real > 0 ? `${item.real}%` : 0 }
              ]}
            />
            {item.ref && item.ref > 0 && (
              <View style={[styles.gridVerticalColItemTopBorder, { height: `${item.ref}%` }]} />
            )}
          </View>
          <View style={styles.gridVerticalColWrap}>
            <View
              style={[
                styles.gridVerticalColItem,
                styles.gridVerticalColItemBottom,
                { height: item.real < 0 ? `${Math.abs(item.real)}%` : 0 }
              ]}
            />
            {item.ref && item.ref < 0 && (
              <View
                style={[
                  styles.gridVerticalColItemBottomBorder,
                  { height: `${Math.abs(item.ref)}%` }
                ]}
              />
            )}
          </View>
        </View>
      ))}
    </View>
    <View style={styles.gridVerticalX}>
      {config.axisX.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  </View>
);

/*
 * Horizontal Grid
 */
const HorizontalGrid = ({ config }) => (
  <View>
    <View style={[styles.gridHorizontal, { height: config.data.length * 24 }]}>
      <View style={styles.gridHorizontalCol}>
        {config.leftLabel.map((item, index) => (
          <View key={index} style={styles.gridHorizontalColRow}>
            <Text style={styles.gridHorizontalColRowText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.gridHorizontalCol}>
        {config.data.map((item, index) => (
          <View key={index} style={styles.gridHorizontalColRow}>
            <View
              style={[
                styles.gridHorizontalColRowItem,
                styles.gridHorizontalColRowItemLeft,
                { width: item.real > 0 ? `${item.real}%` : '0%' }
              ]}
            />
            {item.ref && item.ref > 0 && (
              <View
                style={[styles.gridHorizontalColRowItemLeftBorder, { width: `${item.ref}%` }]}
              />
            )}
          </View>
        ))}
      </View>

      <View style={styles.gridHorizontalCol}>
        {config.data.map((item, index) => (
          <View key={index} style={styles.gridHorizontalColRow}>
            <View
              style={[
                styles.gridHorizontalColRowItem,
                styles.gridHorizontalColRowItemRight,
                { width: item.real < 0 ? `${Math.abs(item.real)}%` : '0%' }
              ]}
            />
            {item.ref && item.ref < 0 && (
              <View
                style={[
                  styles.gridHorizontalColRowItemRightBorder,
                  { width: `${Math.abs(item.ref)}%` }
                ]}
              />
            )}
          </View>
        ))}
      </View>

      <View style={styles.gridHorizontalCol}>
        {config.rightLabel.map((item, index) => (
          <View key={index} style={styles.gridHorizontalColRow}>
            <Text style={[styles.gridHorizontalColRowText, styles.gridHorizontalColRowTextRight]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
    <View style={styles.gridHorizontalX}>
      {config.axisX.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  </View>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
    padding: '15 20',
    fontFamily: 'ProximaNova-Regular'
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  bigIcon: {
    width: 59,
    height: 59
  },
  smallIcon: {
    width: 20,
    height: 20,
    bottom: 15,
    left: 20,
    border: '2 solid #fff',
    borderRadius: 50
  },
  abbreviation: {
    color: '#2c2e38',
    fontSize: '60pt',
    fontFamily: 'ProximaNova-Bold'
  },
  text: {
    fontSize: 12,
    color: '#333',
    padding: '5 0'
  },

  // Grid Horizontal
  gridHorizontal: {
    backgroundColor: '#ecf5fc',
    border: '1 solid #dde5ea',
    borderBottomWidth: 0,
    color: '#424242',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '11',
    width: '100%'
  },
  gridHorizontalX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '9',
    color: '#424242',
    margin: '0 25%',
    marginTop: 5
  },
  gridHorizontalCol: {
    flexDirection: 'column',
    flexGrow: 1,
    borderRight: '1 solid #dde5ea',
    width: '25%'
  },
  gridHorizontalColRow: {
    height: 24,
    borderBottom: '1 solid #dde5ea',
    position: 'relative',
    justifyContent: 'center'
  },
  gridHorizontalColRowItem: {
    height: 16,
    backgroundColor: '#00aff9'
  },
  gridHorizontalColRowItemLeft: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    position: 'absolute',
    right: 0
  },
  gridHorizontalColRowItemRight: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  gridHorizontalColRowItemLeftBorder: {
    border: '1 solid #78909c',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    position: 'absolute',
    right: 0,
    height: 22
  },
  gridHorizontalColRowItemRightBorder: {
    border: '1 solid #78909c',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    position: 'absolute',
    height: 22
  },
  gridHorizontalColRowText: {
    padding: 5
  },
  gridHorizontalColRowTextRight: {
    position: 'absolute',
    right: 0
  },

  // Grid Vertical
  gridVertical: {
    backgroundColor: '#ecf5fc',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 10',
    width: '100%'
  },
  gridVerticalX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '8',
    color: '#424242',
    marginLeft: 50,
    marginRight: 20,
    marginTop: 5
  },
  gridVerticalY: {
    justifyContent: 'space-between',
    fontSize: '8',
    alignItems: 'right',
    color: '#424242',
    paddingRight: 5,
    marginRight: 15,
    borderRight: '1 solid #dde5ea'
  },
  gridVerticalCol: {
    backgroundColor: '#ecf5fc',
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 1
  },
  gridVerticalColWrap: {
    height: '50%',
    position: 'relative',
    width: '80%',
    backgroundColor: '#e5eef5',
    alignItems: 'center'
  },
  gridVerticalColItem: {
    width: '100%',
    backgroundColor: '#00aff9',
    position: 'absolute'
  },
  gridVerticalColItemTop: {
    bottom: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  gridVerticalColItemBottom: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  gridVerticalColItemTopBorder: {
    width: '100%',
    position: 'absolute',
    border: '1 solid #78909c',
    bottom: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  gridVerticalColItemBottomBorder: {
    width: '100%',
    position: 'absolute',
    border: '1 solid #78909c',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});
