import React from 'react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe('HomePage', () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        window.location.href= 'http://localhost/'
    })
    
    it('should render <HomePage /> by default', () => {
        const homePageImg = screen.getByRole('img', {name:/title/i})
        expect(homePageImg).toBeInTheDocument()
    })

    it('should redirect to records and show loading spinner if "RECORDS" button is pressed', () => {
        const link = screen.getByRole('link', {name: /records/i})
        userEvent.click(link)
        const spinner = screen.getByRole('img', {name: /loading/i})
        expect(spinner).toBeInTheDocument()
    })
    
    it('should redirect to settings if "NEW GAME" button is pressed', () => {
        const link = screen.getByRole('link', {name: /new game/i})
        userEvent.click(link)
        const decreaseBtn = screen.getByRole('img', {name: /decrease quantity/i})
        expect(decreaseBtn).toBeInTheDocument()
    })
})
