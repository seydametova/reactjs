import { SIGN_IN, SIGN_OUT, TOGGLE_CHECKBOX } from "./actions"

const initialState = {
    checkbox: false,
    name: '',
    authed: false
}

export const profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            };
        case SIGN_IN:
            return {
                ...state,
                authed: true,
                name: payload.name
            };
        case SIGN_OUT:
            return {
                ...state,
                authed: false,
                name: ''
            };
        default:
            return state;
    }
}