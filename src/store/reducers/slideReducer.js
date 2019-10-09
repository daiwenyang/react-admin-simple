import { CHANGE_SLIDE,FOLD_SLIDE } from '../actionTypes'

export default function slidecollapsedFn(state = { slidecollapsed: false },action){
    switch (action.type) {
        case CHANGE_SLIDE:
            return { slidecollapsed: !state.slidecollapsed};
        case FOLD_SLIDE:
            return { slidecollapsed: action.value};
        default:
            return state;
    }
}