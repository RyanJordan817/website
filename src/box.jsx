import React from "react";

function Box({ name }) {
    return (
        <div className="box">
            {name}
            <img src="./guy.jpg" className="guy" alt="guy" />
        </div>
        
    );
}

export default Box;