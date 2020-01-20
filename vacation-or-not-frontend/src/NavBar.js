import React from 'react';
import  { Link } from 'react-router-dom';

function NavBar(){
return(
<nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <Link class="navbar-brand" to="/">Vacation or Not</Link>
            </div>
            <ul class="nav navbar-nav">
                <li>Welcome, !</li>
                <li class=""><Link to="/logout">Logout</Link></li>
                <li>
                    <Link to="/new-location">
                        <button class="btn btn-success">Upload new location</button>
                    </Link>
                </li>


                <li class="reg-link"><Link to="/register">Register</Link></li>
                <li class="login-link"><Link to="/login">Login</Link></li>
                <li><Link to="/standings">Standings</Link></li>
            </ul>
        </div>
    </nav>    
)
}

export default NavBar;