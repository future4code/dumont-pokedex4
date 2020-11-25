import React from 'react'
import {Button} from 'react-bootstrap'


function Buttons() {
    const history = useHistory()
    return (
        <div>
            <Button variant="warning" type="button" onClick={() => goToDetails(history)}>detalhes</Button>{' '}
            <Button variant="warning" type="button">add pokedex</Button>{' '}
        </div>
    );
}

export default Buttons;