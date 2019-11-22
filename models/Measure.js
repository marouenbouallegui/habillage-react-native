export default class Measure {

    constructor(_id, _code, _description, _rate, _class, _measureColor, _model) {
        this.id = _id; /* primary */
        this.code = _code;
        this.description = _description;
        this.rate = _rate;
        this.class = _class;
        this.measureColor = _measureColor;
        this.model = _model;
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

    setCode(_code) {
        this.code = _code;
    }

    getCode() {
        return this.code;
    }

    setDescription(_description) {
        this.description = _description;
    }

    getDescription() {
        return this.description;
    }

    setRate(_rate) {
        this.rate = _rate;
    }

    getRate() {
        return this.rate;
    }

    setMeasureColor(_measureColor) {
        this.measureColor = _measureColor;
    }

    getMeasureColor() {
        return this.measureColor;
    }

    setModel(_model) {
        this.model = _model;
    }

    getModel() {
        return this.model;
    }
}