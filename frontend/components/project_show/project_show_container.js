import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import  ProjectShow from './project_show';

const msp = (state, {match}) => {
    const projectId = parseInt(match.params.projectId);
    const project = selectProject(state.entities, projectId);
    return {
        projectId,
        project
    };
};

const mdp = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id))
});

export default connect(msp, mdp)(ProjectShow);