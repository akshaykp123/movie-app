import React from 'react'
import {mount} from 'enzyme'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

describe('MoviesApp Debug Test', () => {
  it('renders App without crashing', () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(wrapper).toBeDefined()
  })
})
