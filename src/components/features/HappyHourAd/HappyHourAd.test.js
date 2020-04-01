import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};
const mockProps = {
  title: 'SomeTitile',
};

describe('Component HappyHourAd', () => {
  it('should render without bugs', () =>{
    const component = shallow(<HappyHourAd />);

    expect(component).toBeTruthy();
  });
  it('should render header and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should have correct title props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    console.log(component.debug());
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});
describe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2020-03-07T11:57:58.135Z';
  const trueDate = Date;

  const mockDate = class extends Date {
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };
  const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should show correct at ${time}`, () => {
      global.Date = mockDate(`2020-03-07T${time}.135Z`);

      const component = shallow(<HappyHourAd {...mockProps} />);
      const renderTime = component.fins(select.descr).text();
      expect(renderTime).toEqual(expectedDescription);

      global.Date = trueDate;
    });
  };

  describe('Component HappyHourAd with mocked Date', () => {
    checkDescriptionAtTime('11:57:58', '122');
    checkDescriptionAtTime('11:59:59', '1');
    checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
  });

});
