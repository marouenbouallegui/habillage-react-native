import GLOBAL_VARIABLES from '../core/const';

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
        this.id = (this.id !== undefined && typeof(this.id) === 'string') ? this.id : '';
        this.type = (this.type !== undefined && typeof(this.type) === 'string') ? this.type : '';
        this.brand = (this.brand !== undefined && typeof(this.brand) === 'string') ? this.brand : '';
        this.planned = (this.planned !== undefined && typeof(this.planned) === 'boolean') ? this.planned : false;
        if (this.id !== '' && this.type !== '' && this.brand !== '') {
            GLOBAL_VARIABLES.database.instance.transaction(tx => {
                //INSERT  OR REPLACE INTO tt_audit_det (id , audit_id , criteria_id, comment,cvalue)   VALUES(?, ?,  ?, ?,?) ', [rand, parseInt(auditid), parseInt(critid), comment, $("#mesure").val()]
                console.log('INSERT OR REPLACE INTO Truck (id, type, brand, planned) VALUES (' +
                    '"' + this.id + '", ' +
                    '"' + this.type + '", ' +
                    '"' + this.brand + '", ' +
                    ((this.planned) ? '1' : '0') +
                    ')'
                );
                tx.executeSql(
                    'INSERT OR REPLACE INTO Truck (id, type, brand, planned) VALUES (' +
                    '"' + this.id + '", ' +
                    '"' + this.type + '", ' +
                    '"' + this.brand + '", ' +
                    ((this.planned) ? '1' : '0') +
                    ')', [],
                    (tx, result) => {
                        console.log(result);
                    },
                    (error) => {
                        console.log('ERROR INSERT IN Truck!');
                        console.log(error);
                    }
                );
            });
        }
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