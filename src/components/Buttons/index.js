import React from 'react'
import Button from '../Button';
import { Wrapper } from './Buttons.style'
const clearStyle = { background: '#ac3939' },
operatorStyle = { background: '#666666' },
equalsStyle = {
  background: '#004466',
  position: 'absolute',
  height: 130,
  bottom: 5
};
const Buttons = (props) => {
    return (
        <Wrapper >
        <Button value="AC" id="clear" onClick={props.initialize} className="jumbo" style={clearStyle}>AC</Button>
       <Button value="/" id="divide" onClick={props.operators} style={operatorStyle}>/</Button>
       <Button value="x" id="multiply" onClick={props.operators} style={operatorStyle}>x</Button>
        <Button value="7" id="seven" onClick={props.numbers}>7</Button>
       <Button value="8" id="eight" onClick={props.numbers}>8</Button>
       <Button value="9" id="nine" onClick={props.numbers}>9</Button>
       <Button value="-" id="substract" onClick={props.operators} style={operatorStyle}>-</Button>
       <Button value="4" id="four" onClick={props.numbers}>4</Button>
       <Button value="5" id="five" onClick={props.numbers}>5</Button>
       <Button value="6" id="six" onClick={props.numbers}>6</Button>
       <Button value="+" id="add" onClick={props.operators} style={operatorStyle}>+</Button>
       <Button value="1" id="one" onClick={props.numbers}>1</Button>
       <Button value="2" id="two" onClick={props.numbers}>2</Button>
       <Button value="3" id="three" onClick={props.numbers}>3</Button>
       <Button value="0" id="zero" onClick={props.numbers} className="jumbo">0</Button>
       <Button value="." id="decimal" onClick={props.decimal}>.</Button>
       <Button value="=" id="equals" onClick={props.evaluate} style={equalsStyle}>=</Button>
       </Wrapper>
    );
}

export default Buttons;