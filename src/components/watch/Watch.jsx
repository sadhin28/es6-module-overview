import './Watch.css'

const Watch = ({watch}) => {
    
    const {name,price,img}=watch
   console.log(typeof(img))
    return (
        <div>
            <img src={img} alt="" />
            <h4>Watch : {name} </h4>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;