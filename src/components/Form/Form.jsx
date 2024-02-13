import './Form.css';
import handleSubmit from '../../helpers/handleSubmit';
import Fieldset from '../Fieldset/Fieldset';
import Button from '../Button/Button';

function Form({ naam, leeftijd, opmerkingen, nieuwsbrief, handleChange }) {
    return (
        <form onSubmit={(e) => handleSubmit(e, naam, leeftijd, opmerkingen, nieuwsbrief)}>
            <Fieldset
                legendText="Gegevens"
                inputFields={[
                    ["text", "naam", naam, handleChange],
                    ["number", "leeftijd", leeftijd, handleChange]
                ]}
            />
            <Fieldset
                legendText="Jouw review"
                inputFields={[
                    ["textarea", "opmerkingen", opmerkingen, handleChange],
                    ["checkbox", "Ik schrijf me in voor de nieuwsbrief", nieuwsbrief, handleChange]
                ]}
            />
            <Button
                buttonType='submit'
                buttonText='versturen'
            />
        </form>
    );
}

export default Form;