import * as InitialStates from '../../InitialStates';
import {SET_THEME} from '../actions/themeChanger.actions';

const themeChanger = (state = InitialStates.themeChanger, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                activeTheme: action.theme
            };
        default:
            return state
    }
};

export default themeChanger;