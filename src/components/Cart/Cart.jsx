import './Cart.css'

const Cart = ({cart,handelRemoveFromCart}) => {
   
    return (
        <div>
             <div>
             <h4>Cart: {cart.length}</h4>
             </div>
             <div className='cartsContainer' >
                {
                    cart.map(bottle=>
                        
                    <div key={bottle.id}  className="cartImgContainer">
                        <div>
                        <img  src={bottle.img}></img>
                        </div>
                        <div>
                        <button onClick={()=>handelRemoveFromCart(bottle.id)}>Remove Cart</button>
                        </div>
                    </div>)
                  
                    
                  
                }
             </div>
        </div>
    );
};

export default Cart;