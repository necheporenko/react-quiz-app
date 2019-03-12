import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from '../../components/PDF';

class Develop extends Component {
  render() {
    return (
      <PDFViewer style={{ height: '100%', width: '100%' }}>
        <PDF title="Hello PDF" abbreviation={'ENJF'} icon="water" iconXs="xsFire" />
      </PDFViewer>
    );
  }
}

export default Develop;
