import pkg from 'pg';
const { Pool } = pkg;

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tch',
    password: '12345',
    port: 5432,
});

export const excuteQuery = async (sqlQuery) => {
    const response = client.query(sqlQuery)
    if (response)
        return response;
    return " Error"
}

// import pkg from 'pg';
// const { Pool } = pkg;

// async function main() {
//     const client = new Pool({
//         user: "postgres",
//         host: "localhost",
//         database: "tch",
//         password: "12345",
//         port: 5432,
//     });

//     try {
//         // Query to select all rows from the student table
//         const selectQuery = 'SELECT * FROM student';
//         const selectResult = await client.query(selectQuery);
//         console.log("Selected rows:", selectResult.rows);

//         // Query to insert a new row into the student table
//         const insertQuery = `
//             INSERT INTO student (name, phone, email, password)
//             VALUES ('isha', '987454512', '1@gmail.com', 'i123')
//             RETURNING *;`;
//         const insertResult = await client.query(insertQuery);
//         console.log("Inserted row:", insertResult.rows[0]);
//     } catch (err) {
//         console.error("Error:", err);
//     } finally {
//         await client.end(); // Close the client
//     }
// }

// main();
