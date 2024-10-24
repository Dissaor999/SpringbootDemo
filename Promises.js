const fs = require('fs');
const csv = require('csv-parser');
const MongoClient = require('mongodb').MongoClient;

// URL de conexión a MongoDB
const url = 'mongodb://localhost:27017';
// Nombre de la base de datos
const dbName = 'csvdemo';
// Nombre de la colección
const collectionName = 'myCollect';

/**
 * Lee un archivo CSV, procesa los datos y los guarda en una base de datos MongoDB.
 * @param {string} filePath Ruta al archivo CSV.
 * @returns {Promise<void>} Promesa que se resuelve cuando se completa la operación.
 */
function procesarCSV(filePath) {
    return new Promise((resolve, reject) => {
        const resultados = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => resultados.push(data))
            .on('end', () => {
                MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
                    .then((client) => {
                        const db = client.db(dbName);
                        const collection = db.collection(collectionName);

                        collection.insertMany(resultados)
                            .then(() => {
                                console.log('Datos insertados correctamente en MongoDB');
                                client.close();
                                resolve();
                            })
                            .catch((err) => {
                                console.error('Error al insertar datos en MongoDB:', err);
                                client.close();
                                reject(err);
                            });
                    })
                    .catch((err) => {
                        console.error('Error al conectar a MongoDB:', err);
                        reject(err);
                    });
            });
    });
}