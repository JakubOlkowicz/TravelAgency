import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='myImg' name='myName' cost='123' days={123} tags={[]}/>);
    
    expect(component).toBeTruthy();
  });
  it('should <img> have correct src and alt', () => {
    const expectedSrc = 'img.jpg';
    const expectedAlt = 'imgName';
    
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt}/>);
    
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should correct id',() => {
    const expectedId = 'abc';
    
    const component = shallow(<TripSummary id={expectedId} />);
    
    expect(component.find('.link').prop('to')).toEqual('/trip/${expectedId}');
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render correct props name, cost, day', () => {
    const expectedDays = 7;
    const expectedName = 'expectName';
    const expectedCost = '10,689';

    const component = shallow(<TripSummary days={expectedDays} name={expectedName} cost={expectedCost} />);

    const renderDays = component.find('span').first().text();
    const renderName = component.find('.title').text();
    const renderCost = component.find('span').at(1).text();

    expect(renderDays).toEqual('${expectedDays} days');
    expect(renderName).toEqual(expectedName);
    expect(renderCost).toEqual('from ${expectedCost}');
  });
  it('should render correct <span>', () => {
    const tags = ['first', 'second', 'third'];

    const component = shallow(<TripSummary tags={[...tags]} />);

    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });
  it('should correct tags',() => {
    const component = shallow(<TripSummary tags={[]} />);
    
    expect(component.find('.tags')).toBeTruthy();
  });
});