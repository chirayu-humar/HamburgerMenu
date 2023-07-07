// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import Header from '../Header'

const Home = () => (
  <div className="outerHome">
    <Header />
    <div className="outerHomeInnerDiv">
      <img
        className="homeImage"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
    </div>
  </div>
)

export default Home
