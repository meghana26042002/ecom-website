import express, { response } from "express"
import { excuteQuery } from "./database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));
const port = 3000;

app.get('/', async (req, res) => {
    res.send("Hello, Server is Up and running")
})


app.get("/getdata", async (req, res) => {
    const response = await excuteQuery('select * from users')
    // const response = await excuteQuery(`select * from users where deleted='true'`)
    console.log(response);
    res.send(response.rows)
})
//using query params
app.get("/get-user-detail", async (req, res) => {
    const { id } = req.query;
    const response = await excuteQuery(`select * from users where id='${id}'`)
    res.send(response.rows[0]);
})
//using path variable 

app.get("/get-user/:id", async (req, res) => {
    const id = req.params.id;
    const response = await excuteQuery(`select * from product where id='${id}'`)
    res.send(response.rows[0]);
})
//using path variable 
app.get("/get-single-user/:name", async (req, res) => {
    const name = req.params.name;
    const response = await excuteQuery(`select * from users where name='${name}'`)
    res.send({ pathVariablesData: response.rows[0] });
})
app.put("/update-user", async (req, res) => {
    const { id, data } = req.body;
    const response = await excuteQuery(`update users set ${data[0]}='${data[1]}' where id='${id}'returning *`);
    res.send({ msg: "user updated", data: response.rows[0] });
})
app.post("/create-user", async (req, res) => {
    const { name, email, phone, age, password } = req.body;
    //const hashedPassword = await bcrypt.hash(password, 10);
    const response = await excuteQuery(`insert into users (name, email, phone, age,password) values ('${name}', '${email}', '${phone}','${age}', '${password}') returning * `)
    res.send({ msg: "user created", data: response.rows[0] });
})

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    //console.log(email, password)
    const response = await excuteQuery(`select * from users where email='${email}' and password='${password}'`);
    if (response.rows[0])
        res.send({ msg: "user exists", data: response.rows[0] })
    else
        res.send({ msg: "user does not exists", error: "error with email or password" })
})
app.delete("/delete-user/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const response = await excuteQuery(`DELETE FROM users WHERE id='${id}'`);
        if (response.rowCount > 0) {
            res.send({ msg: "User deleted" });
        } else {
            res.status(404).send({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
});



// app.delete("/delete-user", async (req, res) => {
//     const { id } = req.query;
//     try {
//         const response = await excuteQuery(`DELETE FROM users WHERE id='${id}'`);
//         if (response.rowCount > 0) {
//             res.send({ msg: "User deleted" });
//         } else {
//             res.status(404).send({ error: "User not found" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: "Internal server error" });
//     }
// });

// app.delete("/delete-user", async (req, res) => {
//     const { name, data } = req.body;
//     const response = await excuteQuery(`update users set ${data[0]}='${data[1]}' where name='${name}'`);
//     res.send({ msg: "user deleted" })
// })


// app.get("/insertdata", async (req, res) => {
//     const response = await excuteQuery(`insert into users (name,phone,email,age,password) values ('ashwini','9845781256','a@gmail.com','32','a1234') `)
//     console.log(response);
//     res.send(response.rows)
// })
// app.get("/updatedata", async (req, res) => {
//     const response = await excuteQuery(`update users set name='vasudha',phone='9874561235',email='V@gmail.com',age='30',password='v789' where id='ee874e82-4b1b-462b-aaa9-b2f7b04f4c26' `)
//     console.log(response);
//     res.send(response.rows)
// })
// app.get("/deletedata", async (req, res) => {
//     const { id } = req.query;
//     const response = await excuteQuery(`delete from users where id='${id}' `)
//     console.log(response);
//     res.send({ msg: "usere deleted", data: response.rows[0] })
// })
app.listen(port, () => {
    console.log(`Server is listening  check at http://localhost:${port}`);
});