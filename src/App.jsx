import React from 'react';
import './App.css';
import Form from './components/Form/Form';

function App() {
    const [formState, setFormState] = React.useState({
        naam: '',
        leeftijd: 0,
        opmerkingen: '',
        'Ik schrijf me in voor de nieuwsbrief': false,
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    return (
        <Form
            naam={formState.naam}
            leeftijd={formState.leeftijd}
            opmerkingen={formState.opmerkingen}
            nieuwsbrief={formState['Ik schrijf me in voor de nieuwsbrief']}
            handleChange={handleChange}
        />
    );
}

export default App;