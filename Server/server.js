// !!! Below I import all needed suff !!! //

import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// !!! Running dotenv below, which allow me to use environment's variables !!! //

dotenv.config()

// !!! Declaring my PORT below !!! //

const PORT = 8080;


// !!! Declaring app below. Attributing its functionality with express and cors below !!! //

const app = express()
app.use(cors());

// !!! Below I connect my database !!! //

const dbConnect = process.env.DATABASE_URL
export const db = new pg.Pool({connectionString: dbConnect});



// !!! Creating ENDPOINTS (checks) below !!! //

// Making firstly a CHECK of the endpoint "/" below: //

app.get("/", (request, response) => {    // Beginning of a function checking it by notifying a response //

    response.json("Check done. It works without errors.")

}); // End of a function checking it by consoling response //


// Bellow - connecting to my API for real //

app.get("/categories", async (request, response) => { // Beggining of a call1 to my API and a specific content of my database // This time I have to make it async funtion because it will wait for a response from external source //

    const outcome = await db.query("SELECT * FROM categories");  // This calls for all data contained in "films" from my database //
    response.json(outcome.rows); 

});  // End of a call1 to my API and async function //



app.get("/films", async (request, response) => {    // Beginning of a CALL2 to my API //

    const outcome = await db.query("SELECT * FROM films");
    response.json(outcome.rows);
    
    
}

); // END of a CALL2 to my API //



app.get("/books", async (request, response) => {  // Beginning of a CALL3 to my API //

    const outcome = await db.query("SELECT * FROM books");
    response.json(outcome.rows);

}); // END of a CALL3 to my API //




// !!! SERVER STARTING below - making it listen on a specific PORT declared above !!! //

// Message for Tim :P : "I am not cool so I will use ordinary function :P" //

app.listen(PORT, function () {
    console.log(`SERVER is running on PORT ${PORT}`)
});