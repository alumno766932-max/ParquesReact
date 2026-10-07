import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { parqueService } from "./assets/service/parqueService.js";
import ParqueCard from "./assets/components/ParqueCard.jsx";

function App() {
  const [parques, setParques] = useState([])

  useEffect(() => {
    parqueService()
      .then((data) => {setParques(data);
        console.log(data.parques);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <>
     <header>
        <div class="container">
             <div class="row justify-content-center bg-primary p-3 text-white fs-3">Parques Naturales</div>
        </div>
       
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
               {parques.map((parque) => (
                <div class="col-xl-4 col-md-6 mt-2 ">
                  <ParqueCard nombre={parque.nombre} imagen={parque.imagen} descripcion={parque.descripcion} />
                </div>
                ))}
                
            </div>
        </div>

    </main>
    </>
  )
}

export default App
