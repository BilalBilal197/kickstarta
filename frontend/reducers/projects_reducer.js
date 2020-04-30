import {
    RECEIVE_PROJECT,
    RECEIVE_PROJECTS
    } from '../actions/project_actions';

const projectsReducer = ( state = {}, action) => {
    switch(action.type){
        case RECEIVE_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            const newProject = {[action.project.id]: action.project}
            return ({}, state, newProject);
        default:
            return state;
    }

};

export default projectsReducer; 