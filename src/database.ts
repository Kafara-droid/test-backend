import mysql from 'mysql2/promise';

export async function queryDatabase() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'classicmodels'
    });

    const [rows] = await connection.execute(`
        SELECT customerNumber
        FROM orders
        JOIN orderdetails USING (orderNumber)
        JOIN products USING (productCode)
        WHERE productLine = 'Classic Cars'
        GROUP BY customerNumber
        HAVING COUNT(productLine) > 23
    `);

    await connection.end();
    return rows;
}
