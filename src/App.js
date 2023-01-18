import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuDefault from "./assets/images/Menu.jpeg"

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://site--backend-deliveroo--smpkycl6vrfx.code.run/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
     <div><Header /></div>
    <section className="InfoResto">
    <div className="InforestoText">
      <h1> {data.restaurant.name}</h1>
      <p> {data.restaurant.description} </p>
    </div>
    <div>
      <img className="Menuheader" src={data.restaurant.picture} alt="menu-header"/>
    </div>
    </section>
    <section className="Container">
      {data.categories.map((element, index) => {
        return (
          <div key={index}>
            <h2> {element.name}</h2>
            <div className="Meals">
            {element.meals.map((element2) => {
              // console.log("meal => ", meal);
              return (
                <div className="Content" key={element2.id}>
                  <div className="Object">
                    <h3> {element2.title}</h3>
                    <p>{element2.description.slice(0, 60)}</p>
                    <div className="Pricestar">
                      <h4>{element2.price} €</h4>{element2.popular && (
                      <span className="icon-STAR_FILL">Populaire</span>
                    )}
                    </div>
                  </div>
                <div>
                    <img src={element2.picture ? element2.picture : MenuDefault} alt="Menu" />
                  </div>
                </div>
               );
             })}
         </div>
       </div>
       );
     })}
   </section>
   <Footer />
  </div>
  ); 
 }

   
export default App;