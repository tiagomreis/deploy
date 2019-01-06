import '../bootstrap';

export default class ProjectServerConnection {
    get(project_id, server_id) {
        return axios.request({
            method: 'GET',
            url: '/api/projects/' + project_id + '/servers/' + server_id + '/test-connection',
            responseType: 'json'
        });
    }
}