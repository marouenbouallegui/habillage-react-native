import * as axios from 'axios';
import GLOBAL_VARIABLES from './const';
import Audit from '../models/Audit';
import TruckList from '../models/TruckList';

var axiosInstance = axios.create({
    baseURL: GLOBAL_VARIABLES.server.internalHost,
    timeout: 3000
});

function ping(callback) {
    axiosInstance.get('/ping.p')
        .then(() => {
            callback(GLOBAL_VARIABLES.server.internalHost);
        })
        .catch(error => {
            console.log(error);
            callback(GLOBAL_VARIABLES.server.externalHost);
        });
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
        /*console.log(data);*/
        new Audit().commit();
        ping(function(hostURL) {
            console.log(hostURL);
            axiosInstance.interceptors.request.use(
                (config) => {
                    config.baseURL = hostURL;
                    return config;
                },
                (error) => {
                    Promise.reject(error);
                }
            );
            axiosInstance.post('/session.p', data)
                .then(response => {
                    console.log(response.data);
                    if (response.data.ProDataSet) {
                        var resp = response.data.ProDataSet;
                        var truckList = new TruckList();
                        if (resp.tt_allcamion) {
                            resp.tt_allcamion.forEach(function(truck) {
                                truckList.add({
                                    id: resp.tt_allcamion[0].im_camion,
                                    type: resp.tt_allcamion[0].type,
                                    brand: resp.tt_allcamion[0].marque,
                                    planned: false
                                }, true);
                            });
                        }
                        if (resp.tt_camion) {
                            resp.tt_camion.forEach(function(truck) {
                                truckList.add({
                                    id: resp.tt_camion[0].im_camion,
                                    type: resp.tt_camion[0].type,
                                    brand: resp.tt_camion[0].marque,
                                    planned: true
                                }, true);
                            });
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        });
    },
};

export default AppService;