import React from 'react';
import {PokeStatsContainer} from './styled';
const PokemonAttack = () => {
    return(
        <PokeStatsContainer>
            <h3>Stats</h3>
            <div>
                <p><strong>hp:</strong>45</p>
                <p><strong>attack:</strong>49</p>
                <p><stong>defense:</stong>49</p>
                <p><strong>special-attack:</strong>65</p>
                <p><strong>special-defense:</strong>65</p>
                <p><strong>speed:</strong>45</p>
            </div>
        </PokeStatsContainer>
    )
}
export default PokemonAttack;