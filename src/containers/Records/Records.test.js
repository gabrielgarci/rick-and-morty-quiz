import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'

import Records from './Records'

describe('<Records />', () => {


    beforeEach( () => {
        render(
            <MemoryRouter>
                <Records />
            </MemoryRouter> 
        )
    })

    it('should show the spinner if the data is not loaded', () => {
        const spinner = screen.getByRole('img', {name: /loading/i})
        expect(spinner).toBeInTheDocument()
    })

    it('should show the records if the data is loaded', async () => {
        enableFetchMocks()
        const mock = '{"-M80QcEURa_HWovkC5wr":{"score":500,"user":"Jonay"}}'
        fetch.once(mock)
        expect( await screen.findByText(/Jonay/i) ).toBeInTheDocument()
    })
})