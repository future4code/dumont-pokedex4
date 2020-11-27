import styled from 'styled-components'

// styled do error
export const ErrorContainer = styled.div`
    height: 85.5vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

// styled da home e pokedex
export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2em;
    background-color: black;
    gap: 1em;
    min-height: 76.5vh;
`

export const MainContainer = styled.div`
    background-color: black;
    
`
export const Title = styled.h2`
    color: white;
    text-align: center;
    padding-top: 0.5em;
`

// styled da pokedex
export const NoPokeContainer = styled.div`
    height: 77vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

// styled do details

export const BoxImgType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const BoxStats = styled.div`
    display: flex;
    justify-content: column;
    text-align: center;
`
export const BoxAttacks = styled.div`
    display:flex;
    flex-direction: column;
`
export const DetailsContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    min-height: 77vh;
`

export const PokeImgContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 260px;
    width: 260px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokeTypeContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 60px;
    width: 260px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const PokeStatsContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 430px;
    width: 290px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
export const PokeMovesContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 430px;
    width: 300px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
export const PokeImage = styled.img`
    width: 250px;
    height: 250px;
    padding: 1em;
`