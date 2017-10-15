/* global describe it */

import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Main from '../dev/components/Main';

describe('components', () => {
  describe('<Main />', () => {
    it('should render the title', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.contains(<h1>PL Predictor!</h1>)).to.be.true;
    });
  });
});
