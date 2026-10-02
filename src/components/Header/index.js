/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdMenuOpen} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showMenu: false, currentPath: ''}

  componentDidMount() {
    const {location} = this.props
    const path = location ? location.pathname : window.location.pathname
    this.setState({currentPath: path})
  }

  showSearchInput = () => {
    const {currentPath} = this.state
    const {getSearchApiData, changeSearchInput, match} = this.props
    return (
      currentPath === '/search' ||
      match?.path === '/search' ||
      Boolean(getSearchApiData || changeSearchInput)
    )
  }

  onShowSearchInput = () => {
    const {getSearchApiData} = this.props
    const showInput = this.showSearchInput()
    if (showInput && getSearchApiData) {
      getSearchApiData()
    }
  }

  toggleMenuItems = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  onChangeSearchInput = event => {
    const {changeSearchInput} = this.props
    if (changeSearchInput) {
      changeSearchInput(event.target.value)
    }
  }

  onKeyDownEnter = event => {
    const {getSearchApiData} = this.props
    if (event.key === 'Enter' && getSearchApiData) {
      getSearchApiData()
    }
  }

  render() {
    const {showMenu, currentPath} = this.state
    const showInput = this.showSearchInput()
    const homeClassName = currentPath === '/' ? 'selected' : null
    const popularClassName = currentPath === '/popular' ? 'selected' : null
    const accountClassName = currentPath === '/account' ? 'selected' : null

    return (
      <nav>
        <div className="navbar">
          <div className="navbar-logo-link-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1669787785/Movies%20App/Movies_Logo_nu3gsl.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>

            <ul className="header-link-container">
              <Link to="/" className="route-link">
                <li className={`header-link ${homeClassName}`}>Home</li>
              </Link>
              <Link to="/popular" className="route-link">
                <li className={`header-link ${popularClassName}`}>Popular</li>
              </Link>
            </ul>
          </div>
          <div className="search-and-avatar">
            <div className="search-container">
              {showInput ? (
                <>
                  <input
                    type="search"
                    className="search-input"
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onKeyDownEnter}
                  />
                  <button
                    type="button"
                    className="search-button"
                    onClick={this.onShowSearchInput}
                    id="searchButton"
                    testid="searchButton"
                    data-testid="searchButton"
                  >
                    <HiOutlineSearch size={18} color="#ffffff" />
                  </button>
                </>
              ) : (
                <Link to="/search">
                  <button
                    type="button"
                    className="search-button"
                    onClick={this.onShowSearchInput}
                    id="searchButton"
                    testid="searchButton"
                    data-testid="searchButton"
                  >
                    <HiOutlineSearch size={18} color="#ffffff" />
                  </button>
                </Link>
              )}
            </div>
            <Link to="/account">
              <img
                src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1669785109/Movies%20App/Vector_Avatar1_hiwft7.png"
                alt="profile"
                className="avatar-image"
              />
            </Link>
            <button
              type="button"
              className="menu-button"
              onClick={this.toggleMenuItems}
            >
              <MdMenuOpen />
            </button>
          </div>
        </div>

        {showMenu && (
          <ul className="menu-link-container">
            <Link to="/" className="route-link">
              <li className={`menu-link ${homeClassName}`}>Home</li>
            </Link>
            <Link to="/popular" className="route-link">
              <li className={`menu-link ${popularClassName}`}>Popular</li>
            </Link>
            <Link to="/account" className="route-link">
              <li className={`menu-link ${accountClassName}`}>Account</li>
            </Link>
            <li>
              <button
                type="button"
                className="close-button"
                onClick={this.toggleMenuItems}
              >
                <AiFillCloseCircle />
              </button>
            </li>
          </ul>
        )}
      </nav>
    )
  }
}

export default withRouter(Header)
