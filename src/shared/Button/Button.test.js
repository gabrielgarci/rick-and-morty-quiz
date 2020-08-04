import React from 'react'

import { configure, shallow } from 'enzyme'
import Adaptader from 'enzyme-adapter-react-16'

import Button from './Button'

configure({adapter: new Adaptader()})

describe('<Button />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Button />)
    })

    it('should create the component', () =>{
        expect(wrapper).toBeTruthy()
    })

    it('should trigger the props.clicked', () => {
        let isTriggered = false
        wrapper.setProps({clicked: () => isTriggered = true})
        wrapper.simulate('click')
        expect(isTriggered).toBeTruthy()
    })
})