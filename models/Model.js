export default class Model {

    constructor(_id, _name, _enterDate, _enterUser) {
        this.id = _id; /* primary */
        this.name = _name;
        this.enterDate = _enterDate;
        this.enterUser = _enterUser;
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
}