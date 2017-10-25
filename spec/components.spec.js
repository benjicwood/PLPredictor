/* global describe it */

import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Main from '../dev/components/Main';
import League from '../dev/components/League';
import Fixtures from '../dev/components/Fixtures';

describe('components', () => {
  describe('<Main />', () => {
    it('should render the League Table component', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.find(League)).to.have.length(1);
    });
    it('should render the Fixtures container', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.find(Fixtures)).to.have.length(1);
    });
  });
});
