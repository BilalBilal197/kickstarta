import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="main-header">
            <div className="left-cont">
                <Link to="/">Explore</Link>
                <br/>
                <Link to="/">Start a project</Link>
            </div>
            <div className="main-logo">
                <Link to="/">KickStarta</Link>
            </div>
            <div className="right-cont">
                <br/>
                <Link to="/">Search</Link>
                <br/>
                <Link to="/login">Login</Link>
            </div>
        </nav>
        
        

        
    );
    const greeting = () => (
        <hgroup className="gheader">
            
            <div className="top-gheader">
                <h2 className="gheader-title"> Find projects you love, faster. </h2>
                <h2 className="gheader-description"> Fine-tune your recommendations by answering a few quck questions </h2>
                <Link to="/">Let's get started</Link>
            </div>
            <nav className="main-header">
                <div className="left-cont">
                    <Link to="/">Explore</Link>
                    <br />
                    <Link to="/">Start a project</Link>
                </div>
                <div className="main-logo">
                    <Link to="/">KickStarta</Link>
                </div>
                <div className="right-cont">
                    <br />
                    <Link to="/">Search </Link>
                    <br />
                    <div className="logout-blue">
                        <button className="button" onClick={logout}> <img src={window.avatarURL}/></button>
                    </div>
                </div>
            </nav>
            
            
        </hgroup>
        

        
    );

    return currentUser ? greeting() : sessionLinks();
};


export default Greeting;