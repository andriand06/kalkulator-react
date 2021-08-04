import { Wrapper }  from './Button.styles'
const Button = (props) => {
    return (
        <Wrapper onClick={props.onClick} type="button" id={props.id} value={props.value} style={props.style} className={props.className}>{props.children}</Wrapper>
    );
}

export default Button;