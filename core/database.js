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
        GLOBAL_VARIABLES.database.instance = this.db;
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
        });
        */
        console.log("Checking tables exists...");
        this.db.transaction(tx => {
            console.log("Checking Audit table exists...");
            tx.executeSql(
                'SELECT 1 FROM Audit LIMIT 1', [],
                (result) => {
                    console.log("Audit table exist!");
                },
                (error) => {
                    console.log("Audit table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Audit (' +
                        'id INTEGER PRIMARY KEY,' +
                        'model INTEGER,' +
                        'truck TEXT,' +
                        'effecticeDate TEXT,' +
                        'auditor TEXT,' +
                        'status INTEGER)', [],
                        (result) => {
                            console.log("Table Audit created successfully");
                        },
                        (error) => {
                            console.log("Can't create Audit table ... " + error);
                        }
                    );
                }
            );
            console.log("Checking AuditDet table exists...");
            tx.executeSql(
                'SELECT 1 FROM AuditDet LIMIT 1', [],
                (result) => {
                    console.log("AuditDet table exist!");
                },
                (error) => {
                    console.log("AuditDet table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS AuditDet (' +
                        'id INTEGER PRIMARY KEY,' +
                        'audit INTEGER,' +
                        'criteria INTEGER,' +
                        'cvalue TEXT,' +
                        'comment TEXT)', [],
                        (result) => {
                            console.log("Table AuditDet created successfully");
                        },
                        (error) => {
                            console.log("Can't create AuditDet table ... " + error);
                        }
                    );
                }
            );
            console.log("Checking Truck table exists...");
            tx.executeSql(
                'SELECT 1 FROM Truck LIMIT 1', [],
                (result) => {
                    console.log("Truck table exist!");
                },
                (error) => {
                    console.log("Truck table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Truck (' +
                        'id TEXT PRIMARY KEY,' +
                        'type TEXT,' +
                        'brand TEXT,' +
                        'planned INTEGER)', [],
                        (result) => {
                            console.log("Table Truck created successfully");
                        },
                        (error) => {
                            console.log("Can't create Truck table ... " + error);
                        }
                    );
                }
            );
            console.log("Checking Model table exists...");
            tx.executeSql(
                'SELECT 1 FROM Model LIMIT 1', [],
                (result) => {
                    console.log("Model table exist!");
                },
                (error) => {
                    console.log("Model table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Model (' +
                        'id INTEGER PRIMARY KEY,' +
                        'name TEXT,' +
                        'enterDate TEXT,' +
                        'enterUser TEXT)', [],
                        (result) => {
                            console.log("Table Model created successfully");
                        },
                        (error) => {
                            console.log("Can't create Model table ... " + error);
                        }
                    );
                }
            );
            console.log("Checking Criteria table exists...");
            tx.executeSql(
                'SELECT 1 FROM Criteria LIMIT 1', [],
                (result) => {
                    console.log("Criteria table exist!");
                },
                (error) => {
                    console.log("Criteria table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Criteria (' +
                        'id INTEGER PRIMARY KEY,' +
                        'name TEXT,' +
                        'level TEXT,' +
                        'parent INTEGER,' +
                        'enterDate TEXT,' +
                        'enterUser TEXT,' +
                        'coeff DECIMAL,' +
                        'model INTEGER,' +
                        'measure INTEGER)', [],
                        (result) => {
                            console.log("Table Criteria created successfully");
                        }
                    );
                },
                (error) => {
                    console.log("Can't create Criteria table ... " + error);
                }
            );
            console.log("Checking Measure table exists...");
            tx.executeSql(
                'SELECT 1 FROM Measure LIMIT 1', [],
                (result) => {
                    console.log("Measure table exist!");
                },
                (error) => {
                    console.log("Measure table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Measure (' +
                        'id INTEGER PRIMARY KEY,' +
                        'code TEXT,' +
                        'description TEXT,' +
                        'rate TEXT,' +
                        'class TEXT,' +
                        'measureColor TEXT,' +
                        'model INTEGER)', [],
                        (result) => {
                            console.log("Table Measure created successfully");
                        },
                        (error) => {
                            console.log("Can't create Measure table ... " + error);
                        }
                    );
                }
            );
            console.log("Checking Photo table exists...");
            tx.executeSql(
                'SELECT 1 FROM Photo LIMIT 1', [],
                (result) => {
                    console.log("Photo table exist!");
                },
                (error) => {
                    console.log("Photo table not exist!");
                    console.log("Trying to create...");
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS Photo (' +
                        'id INTEGER PRIMARY KEY,' +
                        'name TEXT,' +
                        'description TEXT,' +
                        'content TEXT,' +
                        'audit INTEGER,' +
                        'criteria INTEGER)', [],
                        (result) => {
                            console.log("Table Photo created successfully");
                        },
                        (error) => {
                            console.log("Can't create Photo table ... " + error);
                        }
                    );
                }
            );
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