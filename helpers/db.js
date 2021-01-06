import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('donwloadmaster.db');

export const dropDatabase = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE lists',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        })
    })
    return promise;
}

export const initDb = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY NOT NULL, content TEXT NOT NULL, format TEXT NOT NULL, quality TEXT NOT NULL, thumbnail TEXT NOT NULL, url TEXT NOT NULL, title TEXT NOT NULL  );',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        })
    })
    return promise;
}

export const insertList = data => {
    let { id, format, quality, thumbnail, url, title } = data;

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO lists (content, format, quality, thumbnail, url, title) VALUES (?, ?, ?, ?, ?, ?);',
                [id, format, quality, thumbnail, url, title],
                (_, res) => {
                    resolve(res);
                },
                (_, err) => {
                    reject(err);
                }
            );
        })
    })
    return promise;
}

export const fetchList = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM lists',
                [],
                (_, res) => {
                    resolve(res);
                },
                (_, err) => {
                    reject(err);
                }
            );
        })
    })
    return promise;
}