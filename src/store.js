import {createStore} from 'redux';

const initialState = {
    highScored: [],
    mediumScored: [],
    lowScored: [],
    noScore: []
}

const reducerArticles = (state = initialState, action) = {
    return (state)
}

export default createStore(reducerArticles)