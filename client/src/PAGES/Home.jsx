// !!! Below I import all the needed stuff !!! //


import { useState, useEffect } from "react";


// !!! Below I create default function !!! //

export default function Home ({server}) { // START of default function HOME ... //

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetchCategories();
    }, []);


    async function fetchCategories () {
        const endPoint = `${server}/categories`
        const reply = await fetch(`${endPoint}`)
        const data = await reply.json();
        setCategories(data);
      }


return (   // START of RETURNING stuff //
    <section className ="map">

        <h2>HOME:</h2>
        <br></br>
        <p>FEW SHORT WORDS ABOUT US:</p>
        <br></br>
        <p> WE are Horror Atlas, a bunch of nerds and horror fanatics passionate about everything which is scarry!</p>
        <p> On this website You will find informartion about exciting events happening in our county!</p>
        <p> We also write short reviews of films, games, books and other stuff related to horror.</p>
        <p> Check out our reviews in categories we reviewed so far:</p>

      <div >{categories.map((category) => {

        return (
            <div key = {category.id + category.name} >
                <h3 key = {category.id && category.name} >{category.id}. {category.name}</h3>
            
            
            </div>
        )
      })}
       </div>


    </section>
) // END of RETURNING stuff //


}; // ... END of default function HOME //