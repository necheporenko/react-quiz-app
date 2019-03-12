import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Water1 from '../Icons/elements/Water1.png';
import ProximaNovaRegular from '../../fonts/ProximaNova/ProximaNova-Regular.ttf';
import ProximaNovaBold from '../../fonts/ProximaNova/ProximaNova-Bold.ttf';

Font.register(`${window.location.origin}/${ProximaNovaBold}`, { family: 'ProximaNova-Bold' });
Font.register(`${window.location.origin}/${ProximaNovaRegular}`, { family: 'ProximaNova-Regular' });

// Create Document Component
const PDF = props => {
  return (
    <Document>
      {/* <Page size="A4" style={styles.page}>
        <View style={styles.imageWrapper}>
          <Image src={Water1} style={styles.bigIcon} />
          <Image src={Water1} style={styles.smallIcon} />
          <Text style={styles.abbreviation}>{props.abbreviation}</Text>
        </View>
      </Page> */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.text}>Ваш ведущий соционический тип — ИЭИ (s = 0.14, k = 0.89):</Text>
        <VerticalGrid />
        <Text style={styles.text}>Профиль ваших соционических признаков:</Text>
        <HorizontalGrid />
      </Page>
    </Document>
  );
};

export default PDF;

const DATA = {
  socialType: [40, -80, 80, 20, 30, -60, 40, -80, 80, 20, 30, -60, 40, -80, 80, 20]
};

const VerticalGrid = () => (
  <View>
    <View style={[styles.gridVertical, { height: '250pt' }]}>
      <View style={styles.gridVerticalY}>
        <Text>2.5</Text>
        <Text>2</Text>
        <Text>1.5</Text>
        <Text>1</Text>
        <Text>0.5</Text>
        <Text>0</Text>
        <Text>-0.5</Text>
        <Text>-1</Text>
        <Text>-1.5</Text>
        <Text>-2</Text>
        <Text>-2.5</Text>
      </View>
      {DATA.socialType.map(item => (
        <View style={styles.gridVerticalCol}>
          <View style={styles.gridVerticalColWrap}>
            <View
              style={[
                styles.gridVerticalColItem,
                styles.gridVerticalColItemTop,
                { height: item > 0 ? `${item}%` : 0 }
              ]}
            />
            {/* <View style={styles.gridVerticalColItemTopBorder} /> */}
          </View>
          <View style={styles.gridVerticalColWrap}>
            <View
              style={[
                styles.gridVerticalColItem,
                styles.gridVerticalColItemBottom,
                { height: item < 0 ? `${Math.abs(item)}%` : 0 }
              ]}
            />
            {/* <View style={styles.gridVerticalColItemBottomBorder} /> */}
          </View>
        </View>
      ))}
    </View>
    <View style={styles.gridVerticalX}>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
      <Text>ИЛЭ</Text>
    </View>
  </View>
);

const HorizontalGrid = () => (
  <View>
    <View style={[styles.gridHorizontal, { height: 104 }]}>
      <View style={styles.gridHorizontalCol}>
        <View style={styles.gridHorizontalColRow}>
          <Text style={styles.gridHorizontalColRowText}>title</Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={styles.gridHorizontalColRowText}>title</Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={styles.gridHorizontalColRowText}>title</Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={styles.gridHorizontalColRowText}>title</Text>
        </View>
      </View>

      <View style={styles.gridHorizontalCol}>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemLeft,
              { width: '90%' }
            ]}
          />
          <View style={[styles.gridHorizontalColRowItemLeftBorder, { width: '50%' }]} />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemLeft,
              { width: '0%' }
            ]}
          />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemLeft,
              { width: '30%' }
            ]}
          />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemLeft,
              { width: '0%' }
            ]}
          />
        </View>
      </View>

      <View style={styles.gridHorizontalCol}>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemRight,
              { width: '0%' }
            ]}
          />
          <View style={[styles.gridHorizontalColRowItemRightBorder, { width: '50%' }]} />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemRight,
              { width: '70%' }
            ]}
          />
          <View style={{}} />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemRight,
              { width: '0%' }
            ]}
          />
        </View>
        <View style={styles.gridHorizontalColRow}>
          <View
            style={[
              styles.gridHorizontalColRowItem,
              styles.gridHorizontalColRowItemRight,
              { width: '40%' }
            ]}
          />
        </View>
      </View>

      <View style={styles.gridHorizontalCol}>
        <View style={styles.gridHorizontalColRow}>
          <Text style={[styles.gridHorizontalColRowText, styles.gridHorizontalColRowTextRight]}>
            title
          </Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={[styles.gridHorizontalColRowText, styles.gridHorizontalColRowTextRight]}>
            title
          </Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={[styles.gridHorizontalColRowText, styles.gridHorizontalColRowTextRight]}>
            title
          </Text>
        </View>
        <View style={styles.gridHorizontalColRow}>
          <Text style={[styles.gridHorizontalColRowText, styles.gridHorizontalColRowTextRight]}>
            title
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.gridHorizontalX}>
      <Text>1</Text>
      <Text>0</Text>
      <Text>-1</Text>
    </View>
  </View>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    fontFamily: 'ProximaNova-Regular'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
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
    fontSize: '12',
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
    height: 26,
    borderBottom: '1 solid #dde5ea',
    position: 'relative',
    justifyContent: 'center'
  },
  gridHorizontalColRowItem: {
    height: 18,
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
