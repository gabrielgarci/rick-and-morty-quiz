import React from 'react'

import { configure, shallow } from 'enzyme'
import Adaptader from 'enzyme-adapter-react-16'


import Records from './Records'
import Spinner from '../../shared/Spinner/Spinner'


configure({adapter: new Adaptader()})


describe('<Records />', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallow(<Records />)
    })

    it('should create the component', () =>{
        expect(wrapper).toBeTruthy()
    })

    it('should show the spinner if the data is not loaded', () => {
        expect(wrapper.contains(<Spinner />)).toBeTruthy()
    })
})