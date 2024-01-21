// !!! Below I import all the needed stuff !!! //


import { useState, useEffect } from "react";


// !!! Below I create default function !!! //

export default function Films ({server}) { // START of default function Films ... //

    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetchFilms();
    }, []);


    async function fetchFilms () {
        const endPoint = `${server}/films`
        const reply = await fetch(`${endPoint}`)
        const data = await reply.json();
        setFilms(data);
      }


return (   // START of RETURNING stuff //
    <section className ="map">

        <h2>FILMS</h2>
        <br></br>
        
      <div >{films.map((film) => {

        return (
            <div key = {films.id + film.name} >
                <h3 key = {film.id && film.name} >{film.id}. {film.name}</h3>
            
            </div>
        )
      })}
       </div>


    </section>
) // END of RETURNING stuff //


}; // ... END of default function Films //