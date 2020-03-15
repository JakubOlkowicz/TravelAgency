import OptionDropdown from './OptionDropdown';
import OptionCheckbox from './OptionCheckbox';
import OptionIcons from './OptionIcons';
import OptionNumber from './OptionNumber';
import OptionText from './OptionText';
import OptionDate from './OptionDate';

import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const optionTypes = {
  dropdown: OptionDropdown,
  icons: OptionIcons,
  checkboxes: OptionCheckbox,
  number: OptionNumber,
  text: OptionText,
  date: OptionDate,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};
  
export default OrderOption; 