import React from 'react'

function Bear(props) {
  function addToCart(){
console.log(props.obj.id)
props.cartState(e=>([...e,props.obj.id]))
  }
  return (
    <div className='bears'>
         <img src={props.obj.image_url} alt='bear '/>
        <div className='bears-text'>
      <h3>{props.obj.name}</h3>
        <p>{props.obj.description}</p>
        <button onClick={addToCart}> add to cart </button>
        </div>
     
      
    </div>
  )
}

export default Bear