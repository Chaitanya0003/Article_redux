import React from "react";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <header>
            <div>
                
                    <Link to="/"><h2>News Redux</h2></Link>
            
            </div>
        </header>
    )
}

export default Header;