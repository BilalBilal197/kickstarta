import React from "react";
import { Link } from "react-router-dom";


function RecommendedCategories() {
    return (
        <div className="three-recommendations">
            <div className="recommend1">
                <div className='rec-picture'>
                    <img src={window.img2URL}/>
                </div>
                <div className="sub-recomment">
                    <div className='rec-title'>
                        <Link to="/">Outstation - Space combat game</Link>
                    </div>
                    <div className='rec-funded'>
                        <p>%funded</p>
                    </div>
                    <div className='rec-author'>
                        <p>by: <Link to="/">Brian Clark</Link></p>
                    </div>
                </div>
            </div>
            <div className="recommend2">
                <div className='rec-picture'>
                    <img src={window.img3URL} />
                </div>
                <div className="sub-recomment">
                    <div className='rec-title'>
                        <Link to="/">Below the Stone</Link>
                    </div>
                    <div className='rec-funded'>
                        <p>%funded</p>
                    </div>
                    <div className='rec-author'>
                        <p>by: <Link to="/">Michael L Carroll</Link></p>
                    </div>
                </div>
            </div>
            <div className="recommend3">
                <div className='rec-picture'>
                    <img src={window.img7URL} />
                </div>
                <div className="sub-recomment">
                    <div className='rec-title'>
                        <Link to="/">Catians - A fantasy Comic</Link>
                    </div>
                    <div className='rec-funded'>
                        <p>%funded</p>
                    </div>
                    <div className='rec-author'>
                        <p>by: <Link to="/">Courtney Cameron</Link></p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default RecommendedCategories;