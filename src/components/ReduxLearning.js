import React from 'react';
import store from '../store/'

import Button from '@tds/core-button'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'

import update_game from '../actions/gameActions';
import update_person from '../actions/personActions';
import buyCake from '../actions/cakeActions';
import buyIcecream from '../actions/icecreamActions'
function ReduxLearning() {
    function updateGame() {
        // console.log('change game clicked')
        store.dispatch(update_game)
    }
    function updatePerson() {
        // console.log('change person clicked')
        store.dispatch(update_person)
    }
    function buyCakes() {
        // console.log('buy cake clicked')
        store.dispatch(buyCake)
    }
    function buyIcecreams() {
        // console.log('buy icecream clicked')
        store.dispatch(buyIcecream)
    }
    return (
        <div className="App">
            <div style={{ textAlign: 'center' }}>
                <Heading level='h2'>Learning Redux</Heading>
            </div>
            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <Heading level='h2'>Game: {store.getState().game.name}</Heading>
                        <Button onClick={updateGame}>Change Game</Button>
                    </FlexGrid.Col>
                    <FlexGrid.Col>
                        <Heading level='h2'>Person: {store.getState().person.name}</Heading>
                        <Button onClick={updatePerson}>Change Person</Button>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <Heading level='h2'>Ice Creams: {store.getState().cakeAndIcecreamReducer.numberOfIcecrems}</Heading>
                        <Button onClick={buyIcecreams}>Buy Icecream</Button>
                    </FlexGrid.Col>
                    <FlexGrid.Col>
                        <Heading level='h2'>Cakes: {store.getState().cakeAndIcecreamReducer.numberOfCakes}</Heading>
                        <Button onClick={buyCakes}>Buy Cake</Button>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </div>
    );
}

export default ReduxLearning;
