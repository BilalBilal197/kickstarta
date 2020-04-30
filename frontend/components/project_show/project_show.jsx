import React from 'react';
import { Link } from 'react-router-dom';

import ProjectDetail from './project_detail';

const ProjectShow = ({project}) => {

    return (
        <div className="single-project">
            <Link to="/"> Back to project Index</Link>    
        </div>,
        <div className="project-details">
            <ProjectDetail project={project}/>
        </div>


    );
};

export default ProjectShow;