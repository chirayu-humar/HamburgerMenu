// Write your code here
import './index.css'

const NotFound = () => (
  <div className="outerNotFound">
    <div className="imgContainer">
      <img
        alt="not found"
        className="notFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
    </div>
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
