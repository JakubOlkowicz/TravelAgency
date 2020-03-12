import React from 'react';
import OrderSummary from 'OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';

// eslint-disable-next-line no-empty-pattern
const OrderForm = ({}) =>{
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>;
};
export default OrderForm;
