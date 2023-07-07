import './index.css'
import Popup from 'reactjs-popup'

const SpecialPopUp = () => (
  <div>
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
    >
      {close => (
        <>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)

export default SpecialPopUp
