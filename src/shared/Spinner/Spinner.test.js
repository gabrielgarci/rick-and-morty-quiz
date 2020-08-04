import React from 'react'

import { configure, shallow } from 'enzyme'
import Adaptader from 'enzyme-adapter-react-16'

import Spinner from './Spinner'

configure({adapter: new Adaptader()})

describe('<Spinner />', () => {
    
    it('should create the component', () =>{
        const wrapper = shallow(<Spinner />)
        expect(wrapper).toBeTruthy()
    })
})