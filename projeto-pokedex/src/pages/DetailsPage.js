import React from 'react'
import Img from '../components/MainDetails/Img'
import PokemonCard from '../components/MainDetails/PokemonCard'
import PokemonAttack from '../components/MainDetails/PokemonAttack'
import PokemonType from '../components/MainDetails/PokemonType'
import {BoxA, BoxB, BoxC, DetailsFlexBox} from '../components/MainDetails/styled'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import { useParams } from 'react-router-dom'

function DetailsPage() {
    const pathParams = useParams();
    const name = pathParams.name

    const pokeDetails = useRequestData(`${baseUrl}/${name}`, {})

    console.log(pokeDetails)

    return(
        <div>

            oi
            
        </div>
    )
}
export default DetailsPage;
  

{/* <DetailsFlexBox>
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
            </DetailsFlexBox> */}