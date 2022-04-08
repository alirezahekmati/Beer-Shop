import React from 'react'

function Bear(props) {

    function addToCart(event) {
        

        if (event.currentTarget.textContent === "Remove from Cart") {
            event.currentTarget.textContent = "Add To Cart"
            props.cartState(e => e.filter(e => e.id !== props.obj.id))

        }
        else {
            event.currentTarget.textContent = "Remove from Cart"
            props.cartState(e =>{
                console.log(!!e)
                if (e===null){
                    return [{
                        id: props.obj.id,
                        name: props.obj.name,
                        img: props.obj.image_url,
                        description: props.obj.description
                    }]
                }
                else{
                    return [...e, {
                        id: props.obj.id,
                        name: props.obj.name,
                        img: props.obj.image_url,
                        description: props.obj.description
                    }]
                }
               
            } )
                

        }

    }

    return (
        <div className='bears'>
            <img src={props.obj.image_url} alt='bear ' />
            <div className='bears-text'>
                <h3>{props.obj.name}</h3>
                <p>{props.obj.description}</p>
                <button onClick={(event) => addToCart(event)}> Add To Cart </button>
            </div>


        </div>
    )
}

export default Bear