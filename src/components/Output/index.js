import { Wrapper } from './Output.styles';


const Output = (props) => {
    return (
        <Wrapper id="display">
            {props.currentValue}
        </Wrapper>
    );
}

export default Output;