import GLOBAL_VARIABLES from '../core/const';
export default class Audit {

    constructor(_id, _effectiveDate, _auditor, _model, _truck, _status) {
        this.id = _id; /* primary */
        this.effectiveDate = _effectiveDate;
        this.auditor = _auditor;
        this.model = _model;
        this.truck = _truck;
        this.status = _status;
    }

    find(audit) {
        if (!audit) {
            return [];
        } else {
            audit = {
                id: (audit.id !== undefined && typeof(audit.id) === 'number') ? audit.id : '',
                effectiveDate: (audit.effectiveDate !== undefined && typeof(audit.effectiveDate) === 'string') ? audit.effectiveDate : '',
                auditor: (audit.auditor !== undefined && typeof(audit.auditor) === 'string') ? audit.auditor : '',
                model: (audit.model !== undefined && typeof(audit.model) === 'number') ? audit.model : '',
                truck: (audit.truck !== undefined && typeof(audit.truck) === 'string') ? audit.truck : '',
                status: (audit.status !== undefined && typeof(audit.status) === 'number') ? audit.status : '',
            };
            GLOBAL_VARIABLES.database.instance.transaction(tx => {
                console.log('SELECT * FROM Audit ' + ((!isNaN(audit.id) || audit.effectiveDate != '' || audit.auditor != '' || !isNaN(audit.model) || audit.truck != '' || !isNaN(audit.status)) ? 'WHERE ' : '') +
                    ((audit.id == '') ? '' : 'id = ' + audit.id) +
                    ((audit.effectiveDate == '') ? '' : ' and effectiveDate = "' + audit.effectiveDate + '"') +
                    ((audit.auditor == '') ? '' : ' and auditor = "' + audit.auditor + '"') +
                    ((audit.model == '') ? '' : ' and model = ' + audit.model) +
                    ((audit.truck == '') ? '' : ' and truck = "' + audit.truck + '"') +
                    ((audit.status == '') ? '' : ' and status = ' + audit.status));
                tx.executeSql(
                    'SELECT * FROM Audit ' + ((!isNaN(audit.id) || audit.effectiveDate != '' || audit.auditor != '' || !isNaN(audit.model) || audit.truck != '' || !isNaN(audit.status)) ? 'WHERE ' : '') +
                    ((audit.id == '') ? '' : 'id = ' + audit.id) +
                    ((audit.effectiveDate == '') ? '' : ' and effectiveDate = "' + audit.effectiveDate + '"') +
                    ((audit.auditor == '') ? '' : ' and auditor = "' + audit.auditor + '"') +
                    ((audit.model == '') ? '' : ' and model = ' + audit.model) +
                    ((audit.truck == '') ? '' : ' and truck = "' + audit.truck + '"') +
                    ((audit.status == '') ? '' : ' and status = ' + audit.status), [],
                    (result) => {
                        console.log("Audit table exist!");
                    },
                    (error) => {
                        console.log("not exist!");
                    }
                );
            });
        }
    }

    commit() {
        this.find({
            id: 2,
            effectiveDate: '1532645',
            status: 1
        });
    }

    setId(_id) {
        this.id = _id;
    }

    getId() {
        return this.id;
    }

    setEffectiveDate(_effectiveDate) {
        this.effectiveDate = _effectiveDate;
    }

    getEffectiveDate() {
        return this.effectiveDate;
    }

    setAuditor(_auditor) {
        this.auditor = _auditor;
    }

    getAuditor() {
        return this.auditor;
    }

    setModel(_model) {
        this.model = _model;
    }

    getModel() {
        return this.model;
    }

    setTruck(_truck) {
        this.truck = _truck;
    }

    getTruck() {
        return this.truck;
    }
}