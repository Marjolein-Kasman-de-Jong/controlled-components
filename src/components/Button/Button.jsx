import './Button.css';
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

function Button({ buttonType, buttonText }) {
    return (
        <button
            type={buttonType}
        >
            {firstLetterToUpperCase(buttonText)}
        </button>
    );
}

export default Button;