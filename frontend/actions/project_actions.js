import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

export const fetchProject = id => dispatch => (
    APIUtil.fetchProject(id).then(payload => (
        dispatch(receiveProject(payload))
    ))
);

export const fetchProjects = () => dispatch => (
    APIUtil.fetchProjects().then(payload => (
        dispatch(receiveProjects(payload))
    ))
);

export const creatProject = project => dispatch => (
    APIUtil.fetchProject(project).then(payload => (
        dispatch(receiveProjects(payload))
    ))
);




