import {SET_THEME} from '../actions/themeChanger.actions';

const themeChanger = (state = [], action) => {
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