class StorageService {
    constructor() {
        this.availableID = 0;
        this.container = new Map();
    }

    add(obj) {
        if (obj != null) {
            this.container.set(this.availableID, obj);
            console.log("added object with ID " + this.availableID);
            this.availableID++;
        } else {
            console.log("null provided, no object was added");
        }
    }

    getByID(ID) {
        if (ID == null) {
            console.log("nothing provided, null returned");
            return null;
        }
        if (this.container.has(Number(ID))) {
            console.log("returned value by ID " + ID);
            return this.container.get(Number(ID))
        } else {
            console.log("object was not found, returned null");
            return null;
        }
    }

    getAll() {
        if (this.container.size === 0) {
            console.log("container is empty, return 0");
            return null;
        } else {
            console.log("returned all objects as array")
            return Array.from(this.container.values());
        }
    }

    deleteByID(ID) {
        if (ID == null) {
            console.log("nothing provided, nothing deleted, returned null");
            return null;
        }
        if (this.container.has(Number(ID))) {
            let removedObject = this.container.get(Number(ID));
            this.container.delete(Number(ID));
            console.log("object with ID "+ID+" was removed")
            return removedObject;
        }
        else {
            console.log("there is no object with ID "+ID+" nothing deleted, returned null");
            return null;
        }
    }
    updateByID(ID,obj){
        if (ID==null || obj == null){
            console.log("expected two arguments (ID, object). Nothing updated");
            return;
        }
        if (this.container.has(Number(ID))) {
                for (let key in Object.keys(obj)){
                    this.container.get(Number(ID))[key] = obj[key];
                }
                console.log("object updated");
            }
        else {
            console.log("there is no object with ID "+ID+", nothing is updated");
        }
    }

    replaceByID(ID,obj){
        if (ID==null || obj == null){
            console.log("expected two arguments (ID, object). Nothing updated");
            return;
        }
        if (this.container.has(Number(ID))) {
            this.container.set(Number(ID),obj)
            console.log("object replaced");
        }
        else {
            console.log("there is no object with ID "+ID+", nothing is updated");
        }
    }
}


module.exports = {StorageService}