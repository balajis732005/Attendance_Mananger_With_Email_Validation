import { createAction, props } from "@ngrx/store";
import { Auth } from "src/app/model/auth.model";

export const authentication = createAction(
    'authentication',
    props<{paylode : Auth}>()
)

export const authenticationSuccess = createAction('authenticationSuccess',props<{name : string}>())

export const authenticationFailure = createAction('authenticationFailure',props<{errormessage : string}>())