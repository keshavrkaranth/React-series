import React from "react";

import "./styles.css"

import Button from "./Button";

const Helloworld = () => {
    return (
        <div>
            <h1>Hello world..</h1>
            <Button title={"App store"}/>
            <Button title={"Play store"}/>
        </div>
    )
}
export default Helloworld;