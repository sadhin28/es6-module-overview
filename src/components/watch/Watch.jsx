import './Watch.css'

const Watch = ({watch,handelAddToCart}) => {
    
    const {name,price,img}=watch

    return (
        <div className='watchContent'>
            <img src={img} alt="" />
            <h4>{name} </h4>
            <p>Price: {price}</p>
            <button onClick={()=>handelAddToCart(watch)}>Purchase</button>
        </div>
        
    );
};

export default Watch;