import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';

// Component
import {Footer} from '../app/components/Footer';

describe('Footer component', () => {
    it('should render "footer now"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).to.equal('footer now');
    });
});