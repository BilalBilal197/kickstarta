import React from "react";
import { Link } from "react-router-dom";
import RecommendedCategories from "./recommendedCategories";
import FreshFavorites from "./freshFavorites";


function ProjectCategories() {
    return (
        <div>
         
        <div className="project-showcase">
            <div className="featured-project">
                <h2>FEATURED PROJECT</h2>
                <div className='picture'>
                    <img src={window.img1URL} />
                </div>
                <div className='title'>
                    <Link to="/">Tilt Five: Holographic Tabletop Gaming</Link>
                </div>
                <div className='disc'>
                    <Link to="/">Take game night to another dimension</Link>
                </div>
                <div className='artist'>
                    <p>by: <Link to="/">Tilt Five</Link></p>
                    
                </div>
            </div>
            <div className="recommendation">
                <h2>RECOMMENDED</h2>
                
                <RecommendedCategories />
                
            </div>
            
                

        </div>
           
        <div className="fresh-favorites">
                <div class="border1"></div>
                <h2 className="ff">FRESH FAVORITES</h2>

            <FreshFavorites />

        </div>

        </div>

    )
}

export default ProjectCategories;