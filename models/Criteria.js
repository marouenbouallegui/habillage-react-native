export default class Criteria {

    constructor(_id, _name, _level, _parent, _enterDate, _enterUser, _coeff, _model, _measure) {
        this.id = _id; /* primary */
        this.name = _name;
        this.level = _level;
        this.parent = _parent;
        this.enterDate = _enterDate;
        this.enterUser = _enterUser;
        this.coeff = _coeff;
        this.model = _model;
        this.measure = _measure;
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

    setName(_name) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }

    setLevel(_level) {
        this.level = _level;
    }

    getLevel() {
        return this.level;
    }

    setParent(_parent) {
        this.parent = _parent;
    }

    getParent() {
        return this.parent;
    }

    setEnterDate(_enterDate) {
        this.enterDate = _enterDate;
    }

    getEnterDate() {
        return this.enterDate;
    }

    setEnterUser(_enterUser) {
        this.enterUser = _enterUser;
    }

    getEnterUser() {
        return this.enterUser;
    }

    setCoeff(_coeff) {
        this.coeff = _coeff;
    }

    getCoeff() {
        return this.coeff;
    }

    setModel(_model) {
        this.model = _model;
    }

    getModel() {
        return this.model;
    }

    setMeasure(_measure) {
        this.measure = _measure;
    }

    getMeasure() {
        return this.measure;
    }
}