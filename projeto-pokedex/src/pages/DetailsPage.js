import React from 'react';
import Img from '../components/MainDetails/Img';
import PokemonCard from '../components/MainDetails/PokemonCard';
import PokemonAttack from '../components/MainDetails/PokemonAttack';
import PokemonType from '../components/MainDetails/PokemonType';
import {BoxA, BoxB, BoxC, DetailsFlexBox} from '../components/MainDetails/styled';
const DetailsPage = () => {
    return(
        <div>
            
            <DetailsFlexBox>
            <BoxA>
            <Img/>
            <PokemonType/>
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
  