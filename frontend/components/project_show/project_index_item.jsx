import React from 'react';
import { ProjectShowContainer } from '../project_show/project_show_container';

class IndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const ProjectId = this.props.project.id;
        
    }

    render(){
        const { title, description, picture_url} = this.props.project;
        return(
            <div>
                <span>Title: </span>
                <span>{title}</span>
                <span>description: </span>
                <span>{description}</span>
                <img src={picture_url}/>

            </div>


        );
    }
}

export default IndexItem;