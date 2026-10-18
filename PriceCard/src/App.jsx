 
 
import logo from './assets/logo.jpeg'
import './App.css'

function App() {
  

  return (
    <>
      <div id="box">
        <div id="pricelabel">
          <div id="price">
            <img src={logo} />
           <div id='content'> 

            <h1>12 Month</h1>
            <p>Subscription for 12 month</p>
            </div>
            <button id="btn">$50</button>
          </div>
          <div id="price">
            <img src={logo} />
            <div id='content'> 

            <h1>12 Month</h1>
            <p>Subscription for 12 month</p>
            </div>
            <button id="btn">$300</button>
          </div>
          <div id="price">
            <img src={logo} />
            <div id='content'> 

            <h1>12 Month</h1>
            <p>Subscription for 12 month</p>
            </div>
            <button id="btn">$500</button>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default App
