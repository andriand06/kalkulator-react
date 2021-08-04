import React,{ useState } from 'react'
import Buttons from './components/Buttons';
import Output from './components/Output';
import Formula from './components/Formula';
import './app.css';
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/;
  

const App = (props) => {
      const [ currentValue, setCurrentValue] = useState('0');
      const [ prevValue, setprevValue] = useState('0');
      const [ formula, setformula] = useState('');
      const [ currentSign, setcurrentSign] = useState('pos');
      const [ lastClicked, setlastClicked] = useState('');
      const [ evaluated, setEvaluate] =  useState(false);
      const maxDigitWarning = () => {
        setCurrentValue('Digit Limit Met');
        setprevValue(currentValue);
        setTimeout(() => setCurrentValue(prevValue),1000);
      }

      const handleEvaluate = () => {
        if(!currentValue.includes('Limit')) {
          let expression = formula;
          while (endsWithOperator.test(expression)) {
            expression = expression.slice(0,-1);
          }
          expression = expression.replace(/x/g,'*').replace(/-/g,'-').replace('--','+0+0+0+0+0+0+');

          let answer = Math.round(10000000000000 * eval(expression)) / 10000000000000;
          setCurrentValue(answer.toString());
          setformula(expression.replace(/\*/g,'.').replace(/-/g,'-').replace('+0+0+0+0+0+0','--').replace(/(x|\/|\+)-/,'$1-').replace(/^-/,'-') + '=' + answer)
          setprevValue(answer);
          setEvaluate(true);  
        }
      }

      const handleOperators = (e) => {
        if(!currentValue.includes("Limit")){
          const value = e.target.value;
          setCurrentValue(value);
          setEvaluate(false)
          if(evaluated){
            setformula(prevValue + value);
          } else if (!endsWithOperator.test(formula)){
            setformula(formula + value);
            setprevValue(formula);
          } else if (!endsWithNegativeSign.test(formula)){
            setformula((endsWithNegativeSign.test(formula + value) ? formula : prevValue) + value);
          } else if (value !== '-') {
            setformula(prevValue + value);
          }
        }
      }

      const handleNumbers = e => {
        if(!currentValue.includes('Limit')){
          const value = e.target.value;
          setEvaluate(false);
        
        if(currentValue.length > 21) {
          maxDigitWarning();
        } else if (evaluated) {
          setCurrentValue(value);
          setformula(value  !== '0' ? value : '');
        } else {
            setCurrentValue(currentValue === "0" || isOperator.test(currentValue) ? value :  currentValue+value);
            setformula(currentValue === "0" && value === "0" ? formula === '' ? value : formula : /([^.0-9]0|^0)$/.test(formula)
            ? formula.slice(0, -1) + value
            : formula + value)
        }
      }
    }

      const handleDecimals = () =>  {
        if(evaluated) {
          setCurrentValue('0.');
          setformula('0.');
          setEvaluate(false);
        } else if(!currentValue.includes('.') && !currentValue.includes("Limit")){
          setEvaluate(false);
        
        if(currentValue.length > 21) {
          maxDigitWarning();
        } else if (
          endsWithOperator.test(formula) || (currentValue === "0" && formula === ''))  {
            setCurrentValue('0.');
            setformula(formula + '0.')
        } else {
          setCurrentValue(formula.match(/(-?\d+\.?\d*)$/)[0] + '.',setformula(formula + '.'))
        }
      }
      }

      const initialize = () => {
        setCurrentValue('0');
        setprevValue('0');
        setformula('');
        setcurrentSign('pos');
        setlastClicked('')
        setEvaluate(false)
      }
  return (
    <div className="calculator">
     <Formula formula={formula} />
     <Output currentValue={currentValue} />
     <Buttons initialize={initialize} evaluate={handleEvaluate} decimal={handleDecimals} operators={handleOperators} numbers={handleNumbers} />
    </div>
  );
}


export default App;
