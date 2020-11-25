import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { goToDetails } from '../../router/coordinator'

function Buttons() {
    const history = useHistory()
    return (
        <div>
            <Button variant="warning" onClick={() => goToDetails(history)}>detalhes</Button>
            <Button variant="warning">add pokedex</Button>
        </div>
    );
}

export default Buttons;