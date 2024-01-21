// !!! BELOW I IMPORT ALL THE NEEDED STUFF !!! ///

// Below I import other js files which will be used for website's pages //

import Home from "./PAGES/Home";
import Films from "./PAGES/Films";
import Books from "./PAGES/Books";
import MakePost from "./PAGES/MakePost";

// Below I import all the necessary ...  //

import { Routes, Route, Link} from "react-router-dom";

// !!! Below I create default function !!! //

export default function App() { // START of default function App //

  let locateServer; 

  if(window.location.hostname === "localhost") {
    locateServer = "http://localhost:8080"
  } else {
    locateServer = "https://NOTSURE";
  }

  return ( // START of RETURNING //

  <div>
    <h1> \m/ HORROR ATLAS \m/ </h1>

    <nav>
      <Link to = "/">HOME</Link>
      <Link to = "/films">FILMS</Link>
      <Link to = "/books">BOOKS</Link>
      <Link to = "/post">USER's POSTS</Link>
      
    </nav>
    <br></br>

    <Routes>
      <Route path = "/" element={<Home server={locateServer} />} />
      <Route path = "/films" element={<Films server={locateServer} />} />
      <Route path = "/books" element={<Books server={locateServer}/>} />
      <Route path = "/post" element={<MakePost />} />
       <Route path = "*" element={<h2>Page NOT found! Error 404 all along :P</h2>} />
    </Routes>

    

    
  </div>
  
  ) // END of RETURNING //

}; // END of default function App //