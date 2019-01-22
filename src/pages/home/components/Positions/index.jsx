import React from 'react';
import { connect } from 'react-redux';

import { getRealEstimateOfferings } from '../../actions';
import ReactEstateOfferings from './components/ReactEstateOfferings';
import FundriseIPO from './components/FundriseIPO';

import './positions.less';

class PositionsTable extends React.PureComponent {
  componentDidMount() {
    const { props } = this;
    props.getRealEstimateOfferings();
  }

  render() {
    const { props } = this;

    if (!props.realEstateOfferings) return null;

    return (
      <div className="positions-content">
        <div className="positions-content__title-block container">
          <h3>
            Positions
          </h3>
        </div>
        <div className="real-estate-offerings__title container">
          <div className="real-estate-offerings__title-item">
            Name
          </div>
          <div className="real-estate-offerings__title-item">
            % of portfolio
          </div>
          <div className="real-estate-offerings__title-item">
            Est.values of shares
          </div>
          <div className="real-estate-offerings__title-item">
            Position total
          </div>
        </div>
        <ReactEstateOfferings realEstateOfferings={props.realEstateOfferings} />
        <FundriseIPO realEstateOfferings={props.realEstateOfferings} />
      </div>

    );
  }
}
const mapStateToProps = state => ({
  realEstateOfferings: state.home.realEstateOfferings,
});

const mapDispatchToProps = {
  getRealEstimateOfferings,
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsTable);
