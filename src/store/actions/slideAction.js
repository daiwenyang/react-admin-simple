import { CHANGE_SLIDE,FOLD_SLIDE } from '../actionTypes'
 
export function changeSlide() {
    return {
        type: CHANGE_SLIDE
    }
}
export function foldSlide(bool) {
    return {
        type: FOLD_SLIDE,
        value:bool
    }
}