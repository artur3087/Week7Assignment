// !!! Below I import all the needed stuff !!! //


import { useState, useEffect } from "react";


// !!! Below I create default function !!! //

export default function Books ({server}) { // START of default function Books ... //

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks();
    }, []);


    async function fetchBooks () {
        const endPoint = `${server}/books`
        const reply = await fetch(`${endPoint}`)
        const data = await reply.json();
        setBooks(data);
      }


return (   // START of RETURNING stuff //
    <section className ="map">

        <h2>BOOKS:</h2>
        <br></br>
        

      <div >{books.map((book) => {

        return (
            <div key = {book.id + book.name} >
                <h3 key = {book.id && book.name} >{book.id}. {book.name}</h3>
            
            
            </div>
        )
      })}
       </div>


    </section>
) // END of RETURNING stuff //


}; // ... END of default function Books //