import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Painquotidien from "./components/Painquotidien";


function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);

    useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get("https://site--backend-deliveroo--r85cyr9v9nmw.code.run/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  
    fetchData();
  }, []);

  return (
    <div className="App">
     <Header />
    <main>
     {isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
    <Painquotidien data={data}/>
    <Menu data={data} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
    </>  
     )}
    </main>
   <Footer />
  </div>
  ); 
 }

   
export default App;