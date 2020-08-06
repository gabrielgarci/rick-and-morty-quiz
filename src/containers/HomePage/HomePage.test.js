import React from 'react'

import { configure, shallow } from 'enzyme'
import Adaptader from 'enzyme-adapter-react-16'

import HomePage from './HomePage'

configure({adapter: new Adaptader()})


describe('<HomePage />', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallow(<HomePage />)
    })

    it('should create the component', () =>{
        expect(wrapper).toBeTruthy()
    })

    it('should have a Link to records', () =>{
        expect(wrapper.find('Link').at(0).prop('to')).toEqual('./records')
    })
    
    it('should have a Link to settings', () =>{
        expect(wrapper.find('Link').at(1).prop('to')).toEqual('./game/settings')
    })
})