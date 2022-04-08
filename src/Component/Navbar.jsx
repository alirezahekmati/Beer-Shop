import React from 'react'

function Navbar(props) {
    const [show, setShow] = React.useState(false)
    function displayCartItems() {
        setShow(e => !e)
    }
    return (
        <div className='Navbar' id='home'>
            <a href="#home">home</a>
            <a href="#products">products</a>
            <a href="#about">about</a>

            <button onClick={displayCartItems}> Cart items: {(props.cart && props.cart.length) || 0} </button>
            {show && <div className='cart'>
                {props.cart.map(e => (
                    <div className='cart-beers' key={e.id}>
                        <img src={e.img} alt='bear' />
                        <h4>{e.name}</h4>
                    </div>
                ))}
            </div>}

        </div>
    )
}

export default Navbar