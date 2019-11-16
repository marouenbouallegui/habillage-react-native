import * as SQLite from 'expo-sqlite';
import GLOBAL_VARIABLES from './const';
/*SQLite.DEBUG(true);
SQLite.enablePromise(true);*/

export default class Database {

    constructor() {
        this.db = this.openDB();
        console.log("Database not yet ready ... populating data");
        console.log(this.db);
        this.initDB();
    }

    openDB() {
        return SQLite.openDatabase(
            GLOBAL_VARIABLES.database.name,
            GLOBAL_VARIABLES.database.version,
            GLOBAL_VARIABLES.database.displayname,
            GLOBAL_VARIABLES.database.size);
    }

    initDB() {
        /*this.db.executeSql('SELECT 1 FROM Audit LIMIT 1').then(() => {
            console.log("Database is ready ... executing query ...");
        }).catch((error) => {
            console.log("Received error: ", error);
            console.log("Database not yet ready ... populating data");
            this.db.transaction((tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Audit (' +
                    'id INTEGER PRIMARY KEY, ' +
                    'effectiveDate TEXT, ' +
                    'auditor TEXT, ' +
                    'model_id INTEGER, ' +
                    'camion TEXT, ' +
                    'status INTEGER)');
                /*
                status :
                    0: saved not synchronized
                    1: saved and synchronized
                * /
            }).then(() => {
                console.log("Table created successfully");
            }).catch(error => {
                console.log(error);
            });
        });*/
        this.db.transaction(tx => {
            tx.executeSql(
                'SELECT 1 FROM Audit LIMIT 1',
                (error) => {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Audit (' +
                    'id INTEGER PRIMARY KEY, ' +
                    'effectiveDate TEXT, ' +
                    'auditor TEXT, ' +
                    'model_id INTEGER, ' +
                    'camion TEXT, ' +
                    'status INTEGER)', [], 
                    () => console.log("Table created successfully"));
                },
                (success) => {
                    console.log("Table created successfully");
                });
        });
    }

    query(sql) {
        this.db.executeSql(sql)
            .then(() => {
                console.log('Executing query ... : ' + sql);
            }).catch((error) => {
                console.log("Received error: ", error);
            });
    }

    closeDatabase() {
        if (this.db) {
            console.log("Closing DB");
            this.db.close()
                .then(status => {
                    console.log("Database CLOSED");
                })
                .catch(error => {
                    this.errorCB(error);
                });
        } else {
            console.log("Database was not OPENED");
        }
    }
}