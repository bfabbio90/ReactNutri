import { useEffect } from "react";
import { useState } from "react";
import './App.css';


function App() {
  
  const [nutri, setNutri] = useState([]);

  useEffect(()=> {

    function loadApi(){

      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      })
    }
    loadApi();

  },[]);

  return(
    <div className="container">
      <header>
        <strong>ReactNutri</strong>
      </header>

    {nutri.map((item)=>{
      return(
        <article key={item.id} className="post">
          <strong className="titulo">{item.titulo}</strong>
          <img src={item.capa} alt={item.titulo} />
          <p>
            {item.subtitulo}
            <a className="botao">Acessar</a>
          </p>
        </article>
      )
    })}

    </div>
  )
}

export default App

