import {Login} from "./signin";
import {TextLoginAndSignUp} from "./text";

import './main.scss'

export function LoginAndSignUp() {

    return(
        <div className="container" id="container">
            <Login />
            <TextLoginAndSignUp />
        </div>
    )
}