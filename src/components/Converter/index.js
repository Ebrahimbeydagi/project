import React from "react";

import "./style.css";
import Form from "./Form";

function BtnApp() {
    const data = {
        firstName: "",
        lastName: ""
    };

    return (
        <div style={{width:'100%',height:'50vh'}}>
            <img src={"./img/converter-img.png"} id={"headerImg"}/>

            <div id={"div"} className="App">
                <Form data={data}/>
            </div>
        </div>
    );
}

export default BtnApp;
