import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

function GridLayout(props) {
  console.log('Rows: '+ Math.ceil(props.children.length / props.col));
  console.log(props.children);
  let structureDataRows = [];
  let childPosition = 0;
  for (let i_row = 0; i_row < Math.ceil(props.children.length / props.col); i_row++, childPosition++) {
    let rowData = [];
    for (let i_col = 0; i_col < props.col && childPosition<props.children.length; i_col++, childPosition++) {
      rowData.push(props.children[childPosition]);
    }
    structureDataRows.push(rowData);
  }
  console.log(JSON.stringify(structureDataRows));
  return (
    <View>
      <Grid>
        {
          structureDataRows.map((e, i) => <Row key={'tr-'+i}>
            {
              e.map((ee,ii) => <Col key={'td-'+ii}>{ee}</Col>)
            }
            </Row>)
        }
      </Grid>
    </View>
  );
}

GridLayout.propTypes = {
  children: PropTypes.array.isRequired,
  col: PropTypes.number.isRequired,
};

GridLayout.defaultProps = {
  col: 2
};

export default GridLayout;
