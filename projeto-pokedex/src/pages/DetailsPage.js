import React from 'react';
import Img from '../components/MainDetails/Img';
import PokemonCard from '../components/MainDetails/PokemonCard';
import PokemonAttack from '../components/MainDetails/PokemonAttack';
import {BoxA, BoxB, BoxC, DetailsFlexBox} from '../components/MainDetails/styled';
const DetailsPage = () => {
    return(
        <div>
            <h1>Pokemons Details</h1>
            <DetailsFlexBox>
            <BoxA>
            <Img/>
            <Img/>
            </BoxA>
            <BoxB>
            <PokemonAttack/>           
            </BoxB>
            <BoxC>            
            <PokemonCard/>
            </BoxC>
            </DetailsFlexBox>
        </div>
    )
}
export default DetailsPage;
  