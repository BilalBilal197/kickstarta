import React from "react";
import { Link } from "react-router-dom";


function FreshFavorites() {
    return (
        <div className="five-favorites">
            
            <div className="fav1">
                <div className='fav-picture'>
                    <img src={window.img4URL} />
                </div>
                <div className="fav-recomment">
                    <div className='fav-title'>
                        <Link to="/">A creative person's guide to feeling healthy</Link>
                    </div>
                    <div className='fav-desc'>
                        <p>Tips to nourish your physical and mental wellbeing while you try to do it all, written by wellbeing coach Franziska Eichler with illustrations by Molly Grund.</p>
                    </div>
                    <div className='fav-author'>
                        <p>by: <Link to="/">Martina Ibeh</Link></p>
                    </div>
                </div>
            </div>
            <div className="fav1">
                <div className='fav-picture'>
                    <img src={window.img5URL} />
                </div>
                <div className="fav-recomment">
                    <div className='fav-title'>
                        <Link to="/">How to get press for your creative work</Link>
                    </div>
                    <div className='fav-desc'>
                        <p>A guide to creating a PR strategy, refining your story, and pitching writers, written by Kate Bernyk with illustrations by Qiong Li.</p>
                    </div>
                    <div className='fav-author'>
                        <p>by: <Link to="/">Mustapha Khalil</Link></p>
                    </div>
                </div>
            </div>
            <div className="fav1">
                <div className='fav-picture'>
                    <img src={window.img6URL} />
                </div>
                <div className="fav-recomment">
                    <div className='fav-title'>
                        <Link to="/">NORTH STAR</Link>
                    </div>
                    <div className='fav-desc'>
                        <p>help me re-contextualize black bodies in weightless space-liberated from the gravity of oppression and white supremacy</p>
                    </div>
                    <div className='fav-author'>
                        <p>by: <Link to="/">Li Yuan</Link></p>
                    </div>
                </div>
            </div>
            <div className="fav1">
                <div className='fav-picture'>
                    <img src={window.img8URL} />
                </div>
                <div className="fav-recomment">
                    <div className='fav-title'>
                        <Link to="/">PAROXYSM: An Independent Horror Anthology</Link>
                    </div>
                    <div className='fav-desc'>
                        <p>An anthology featuring original horror-themed works of prose, poetry, illustration and comics by independent artists and writers</p>
                    </div>
                    <div className='fav-author'>
                        <p>by: <Link to="/">Harambay</Link></p>
                    </div>
                </div>
            </div>
            <div className="fav1">
                <div className='fav-picture'>
                    <img src={window.img9URL} />
                </div>
                <div className="fav-recomment">
                    <div className='fav-title'>
                        <Link to="/">Garfield in the Goblin Forest</Link>
                    </div>
                    <div className='fav-desc'>
                        <p>A comedy cartoon featuring garfield dealing with the spirits and goblins of the black forest</p>
                    </div>
                    <div className='fav-author'>
                        <p>by: <Link to="/">Michael Turing</Link></p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default FreshFavorites;