export const fetchProjects = data => (
    $.ajax({
        method: 'GET',
        url: 'api/projects',
        data
    })
);

export const fetchProject = id => (
    $.ajax({
        method: 'GET',
        url:`api/projects/${id}`
    })
);

export const createProject = project => (
    $.ajax({
        method: 'POST',
        url: 'api/projects',
        data: { project }
    })
);