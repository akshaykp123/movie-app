import React from 'react'
import {mount} from 'enzyme'
import {BrowserRouter, Route, MemoryRouter} from 'react-router-dom'
import App from './App'
import LoginRoute from './components/LoginRoute'
import HomeSection from './components/HomeSection'
import AccountSection from './components/AccountSection'
import PopularSection from './components/PopularSection'
import SearchRoute from './components/SearchRoute'
import MovieDetailSection from './components/MovieDetailSection'
import NotFound from './components/NotFound'

describe('MoviesApp Diagnostic Suite', () => {
  it('mounts App without crashing', () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(wrapper).toBeDefined()
  })

  it('mounts LoginRoute without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login']}>
        <LoginRoute />
      </MemoryRouter>,
    )
    expect(wrapper.find('form').length).toBeGreaterThan(0)
  })

  it('mounts HomeSection without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <HomeSection />
      </MemoryRouter>,
    )
    expect(wrapper).toBeDefined()
  })

  it('mounts AccountSection without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/account']}>
        <AccountSection />
      </MemoryRouter>,
    )
    expect(wrapper.text()).toContain('Account')
  })

  it('mounts PopularSection without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/popular']}>
        <PopularSection />
      </MemoryRouter>,
    )
    expect(wrapper).toBeDefined()
  })

  it('mounts SearchRoute without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchRoute />
      </MemoryRouter>,
    )
    expect(wrapper).toBeDefined()
  })

  it('mounts MovieDetailSection without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/movies/123']}>
        <Route path="/movies/:id" component={MovieDetailSection} />
      </MemoryRouter>,
    )
    expect(wrapper).toBeDefined()
  })

  it('mounts NotFound without crashing', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/not-found']}>
        <NotFound />
      </MemoryRouter>,
    )
    expect(wrapper.text()).toContain('Lost Your Way')
  })
})
