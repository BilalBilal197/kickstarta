import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const msp = () => {
        
    
    return {
        
    };
};

const mdp = dispatch => ({
    fetchProjects: projects => dispatch(fetchProjects(projects))
});



export default connect(msp, mdp)(ProjectIndex);