import './UserInput.css';
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

function UserInput({ inputField }) {
    return (
        <div className={`user-input ${inputField[0]}`}>
            <label
                htmlFor={inputField[1].value}
            >
                {
                    inputField[0] === 'checkbox' ?
                        `${firstLetterToUpperCase(inputField[1])}`
                        :
                        `${firstLetterToUpperCase(inputField[1])}:`
                }
            </label>

            {
                inputField[0] === 'checkbox' &&
                <input
                    type={inputField[0]}
                    id={inputField[1]}
                    name={inputField[1]}
                    checked={inputField[2]}
                    onChange={inputField[3]}
                />
            }
            {
                inputField[0] === 'textarea' &&
                <textarea
                    type={inputField[0]}
                    id={inputField[1]}
                    name={inputField[1]}
                    value={inputField[2]}
                    onChange={inputField[3]}
                    rows={10}
                />
            }
            {
                (inputField[0] != 'checkbox' && inputField[0] != 'textarea') &&
                <input
                    type={inputField[0]}
                    id={inputField[1]}
                    name={inputField[1]}
                    value={inputField[2]}
                    onChange={inputField[3]}
                />
            }
        </div>
    );
}

export default UserInput;