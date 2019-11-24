import GLOBAL_VARIABLES from '../core/const';
import Truck from './Truck';

export default class TruckList {

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

    add(truck, commit) {
        if ('id' in truck && 'type' in truck && 'brand' in truck) {
            if (!'planned' in truck) {
                truck.planned = false;
            }
            var truckObject = new Truck(truck.id, truck.type, truck.brand, truck.planned);
            if (commit) {
                truckObject.commit();
            }
            this.list.push(truckObject);
        }
    }

    remove(index, commit) {
        if (index >= 0 && index < this.list.length) {
            /*return this.list[index];*/
        }
        if (commit) {

        }
    }
}