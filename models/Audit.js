export default class Audit {

    constructor(_id, _effectiveDate, _auditor, _model, _camion, _status) {
        this.id = _id;
        this.effectiveDate = _effectiveDate;
        this.auditor = _auditor;
        this.model = _model;
        this.camion = _camion;
        this.status = _status;
    }

    find(audit) {
        if (!audit) {
            return [];
        }
    }

    commit() {

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

    setCamion(_camion) {
        this.camion = _camion;
    }

    getCamion() {
        return this.camion;
    }
}