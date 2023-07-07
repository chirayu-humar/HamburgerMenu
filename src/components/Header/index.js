// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Header = props => {
  const specialFunction = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="headerOuter">
      <div>
        <Link to="/">
          <img
            alt="website logo"
            className="logoImage"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          />
        </Link>
      </div>
      {/* special button */}
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="trigger-button"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="popupContainer">
            <div className="popupHeader">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
            <div className="popurSecondDiv">
              <p>React is a popular and widely used programming language</p>
              <div className="popupInner">
                <Link to="/">
                  <button onClick={() => close()} type="button">
                    <AiFillHome />
                    Home
                  </button>
                </Link>
                <Link to="/about">
                  <button onClick={() => close()} type="button">
                    <BsInfoCircleFill />
                    About
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Popup>
      {/* special button ended */}
    </div>
  )
}

export default Header
