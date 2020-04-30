import React from 'react';
import { Link } from 'react-router';

const ProjectDetail = ({project}) => {
    return(
        <div>
            <ul>
                <img className="index-image" src="project.picture_url" />
                <li>Title: {project.title} </li>
                <li>Description: {project.description} </li>
                <li>PledgeDays: { project.days_remaining } </li>
                <li>AmountPledged: {project.funded} </li>
            </ul>

        </div>

    );

};

export default ProjectDetail; 