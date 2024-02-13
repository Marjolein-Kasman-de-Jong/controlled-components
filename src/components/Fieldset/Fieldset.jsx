import './Fieldset.css';
import UserInput from "../UserInput/UserInput";

function Fieldset({ legendText, inputFields }) {
    return (
        <fieldset>
            <legend>
                {legendText}
            </legend>
            {inputFields.map((inputField) => {
                return <UserInput key={inputField[1]} inputField={inputField} />
            })}
        </fieldset>
    );
}

export default Fieldset;