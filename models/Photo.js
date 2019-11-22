export default class Photo {

    constructor(_id, _name, _description, _content, _audit, _criteria) {
        this.id = _id; /* primary */
        this.name = _name;
        this.description = _description;
        this.content = _content;
        this.audit = _audit;
        this.criteria = _criteria;
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

    setDescription(_description) {
        this.description = _description;
    }

    getDescription() {
        return this.description;
    }

    setContent(_content) {
        this.content = _content;
    }

    getContent() {
        return this.content;
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
}