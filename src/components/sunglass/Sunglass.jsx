import './Sunglass.css'
import Watch from '../watch/Watch';
import { add, multiply } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';
const Sunglass = () => {
   const first = 55;
   const second = 199;
   const sum = add(first,second)
   const mul= multiply(first,second) 
  
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;