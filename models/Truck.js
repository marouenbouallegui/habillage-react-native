export default class Truck {

    constructor(_id, _type, _brand, _planned) {
        this.id = _id; /* primary */
        this.type = _type;
        this.brand = _brand;
        this.planned = _planned;
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

    setType(_type) {
        this.type = _type;
    }

    getType() {
        return this.type;
    }

    setBrand(_brand) {
        this.brand = _brand;
    }

    getBrand() {
        return this.brand;
    }

    setPlanned(_planned) {
        this.planned = _planned;
    }

    getPlanned() {
        return this.planned;
    }
}