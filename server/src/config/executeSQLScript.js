import {pool} from "../database/db.js";
import fs from "fs";

function readSQLScript(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

async function executeSQL(filePath) {
    try {
        const sqlScript = await readSQLScript(filePath);

        // Divide el script SQL en consultas individuales y agrega un punto y coma al final de cada consulta
        const sqlStatements = sqlScript.split(/\s*;;\s*/).map(statement => statement.trim() + ';');

        // Ejecuta cada consulta SQL utilizando el pool de conexiones
        console.log("Ejecutando las consultas SQL…");
        for (let i = 0; i < sqlStatements.length; i++) {
            const sqlStatement = sqlStatements[i];
            if (sqlStatement.trim()) {
                console.log(`Ejecutando consulta ${i + 1}: ${sqlStatement}`);
                try {
                    // Obtiene una conexión del pool
                    const connection = await pool.getConnection();

                    // Ejecuta la consulta SQL utilizando la conexión
                    if (sqlStatement.trim() !== ';') { // Verifica si la consulta no está vacía
                        await connection.query(sqlStatement);
                        console.log(`Consulta ${i + 1} ejecutada correctamente.`);
                    } else {
                        console.log(`Consulta ${i + 1} está vacía y se omite.`);
                    }

                    // Libera la conexión de vuelta al pool
                    connection.release();
                } catch (error) {
                    console.error(`Error ejecutando consulta ${i + 1}:`, error);
                }
            }
        }

        console.log("SQL script executed successfully.");
    } catch (error) {
        console.error("Error executing SQL script:", error);
    }
}


const executeSQLScript = (filesToExecute) => {
    filesToExecute.forEach(async filePath => {
        try {
            const result = await executeSQL(filePath);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    });
};

export {executeSQLScript};