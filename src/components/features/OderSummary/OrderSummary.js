import React from 'react';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderSummary.scss';

class OrderSummary extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.any,
  }
  render(){
    const {tripCost, options} = this.props;
    return (
      <h2 className={styles.component}>
        <strong>{calculateTotal(formatPrice(tripCost), options)}</strong>
      </h2>
    );
  }
}
export default OrderSummary;
