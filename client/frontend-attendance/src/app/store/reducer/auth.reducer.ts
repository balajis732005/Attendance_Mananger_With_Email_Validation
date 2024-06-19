import { createReducer, on } from "@ngrx/store";
import { nameDetail } from "../state/auth.state";
import { authentication, authenticationFailure, authenticationSuccess } from "../action/auth.action";

const _AuthenticationReducer = createReducer(nameDetail,

    on(authentication, (state,paylode) => {
        return {
            ...state,
            ...paylode,
        };
    }),

    on(authenticationSuccess, (state,name) => {
        return {
            ...state,
            ...name
        };
    }),

    on(authenticationFailure, (state,error) => {
        return {
            ...state,
            ...error,
        };
    })

)

export function authenticationReducer(state : any, action : any) {
    return _AuthenticationReducer(state,action);
}