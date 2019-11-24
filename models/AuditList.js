import GLOBAL_VARIABLES from './const';

export default class Audit {

    constructor(_list) {
        this.list = (_list) ? _list : [];
    }

    findAll() {
        console.log(GLOBAL_VARIABLES.database.instance);
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }

    add(audit, commit) {
        if (commit) {

        }
        this.list.push(audit);
    }

    remove(index, commit) {
        if (index >= 0 && index < this.list.length) {
            /*return this.list[index];*/
        }
        if (commit) {

        }
    }
}