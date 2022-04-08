import React from 'react'
import './App.css';
import Bear from './Component/Bear'
import Hero from './Component/Hero.jsx'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import About from './Component/About'

function App() {
  const [dataa, setData] = React.useState([])
  const [cart, setCart] = React.useState([])
  const [dataa2, setData2] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  async function getApi() {
    setLoading(true)
    const respone = await fetch('https://api.punkapi.com/v2/beers/')
    const data = await respone.json()
    setData(data)
    setData2(data)
    setLoading(false)
  }
  
  React.useEffect(() => {
    if (localStorage.getItem("cart") !== "undefined") {
      let cartStore = JSON.parse(localStorage.getItem("cart"))
      setCart(cartStore)

    }
    getApi()
  }, [])
  const [formData, setFormData] = React.useState(
    {
      searchInput: "",
    }
  )
  if (cart && cart.length) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
    setData2(dataa.filter(e => e.name.toLowerCase().includes(formData.searchInput.toLowerCase() || " ")))
  }

  return (
    <div className="App">
      <a id='Up' href='#home'>go to Up</a>
      <Navbar cart={cart} />
      <Hero />
      <About />
      <div className='search-bear'>
        <h2>find the Beer you want !</h2>
        <input
          type="text"
          placeholder="Beer Name"
          onChange={handleChange}
          name="searchInput"
          value={formData.searchInput}
        />
      </div>

      <div className='App-bear-container' id='products'>
        {loading ? <h1>Loading ...</h1> : dataa2.map(e => <Bear obj={e} key={e.id} cartState={setCart} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
