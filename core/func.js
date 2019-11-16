import * as axios from 'axios';
import GLOBAL_VARIABLES from './const';
import Database from './database';

var instance = axios.create({
    baseURL: GLOBAL_VARIABLES.server.internalHost,
    timeout: 3000
});

var db = new Database();

function ping() {
    /* instance.setBaseURL(GLOBAL_VARIABLES.server.internalHost); */
    var hostURL = GLOBAL_VARIABLES.server.internalHost;
    instance.get('/ping.p')
        .then()
        .catch(error => {
            console.log(error);
            hostURL = GLOBAL_VARIABLES.server.externalHost
        });
    return hostURL;
}

var AppService = {
    login(username, password) {
        var data = {
            ProDataSet: {
                tt_action: [{
                    action: 'login'
                }],
                tt_user: [{
                    id: username,
                    pwd: password
                }]
            }
        };
        console.log(ping());
        console.log(data);
        
        return instance.post('/session.p', data)
            .then(response => {
                console.log(response);

            })
            .catch(error => console.log(error));
    },

};

export default AppService;