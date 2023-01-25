import React from "react";
import {Link} from "react-router-dom";


const Button: React.FC = () => {
    return (
            <Link to="/">
                <button>Back</button>
            </Link>
    )
}

export default Button