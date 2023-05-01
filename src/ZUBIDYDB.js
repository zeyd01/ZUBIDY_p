require('dotenv').config();

const sql = require('mssql');

const config = {

    server: 'DESKTOP-6JLFEJ7',
    database: 'osman',
    port: 51638,
    options: {
        encrypt: false,
        trustedConnection: true
    }
};

async function testConnection() {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT 1 AS value');
        console.log('Database connected successfully');
        console.log('Result:', result.recordset[0].value);
    } catch (err) {
        console.error('Error connecting to database:', err);
    } finally {
        sql.close();
    }
}

testConnection();
