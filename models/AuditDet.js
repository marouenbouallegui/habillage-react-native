export default class AuditDet {

    constructor(_id, _audit, _criteria, _cvalue, _comment) {
        this.id = _id; /* primary */
        this.audit = _audit;
        this.criteria = _criteria;
        this.cvalue = _cvalue;
        this.comment = _comment;
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

    setAudit(_audit) {
        this.audit = _audit;
    }

    getAudit() {
        return this.audit;
    }

    setCriteria(_criteria) {
        this.criteria = _criteria;
    }

    getCriteria() {
        return this.criteria;
    }

    setCvalue(_cvalue) {
        this.cvalue = _cvalue;
    }

    getCvalue() {
        return this.cvalue;
    }

    setComment(_comment) {
        this.comment = _comment;
    }

    getComment() {
        return this.comment;
    }
}