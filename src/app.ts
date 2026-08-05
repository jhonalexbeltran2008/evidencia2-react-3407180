import express from 'express'
import { Request, 
         Response 
        } from 'express'

import react from 'react'
import { renderToStaticMarkup } from "react-dom/server"

//importar el comp
//UI creado

import{ListaPaises} from './views/ListaPaises'

// Importar lista de paises

import Paises from './data/listaPaises'

//Crear objeto express
const app = express()

//Endpoint

app.get("/paises", function(req: Request, res: Response){

    //Crear informacion para agregar ingresar en el comp UI

    const nombre = "Jhon Alex Beltran"

     //1. Crear componente con React

     const componente = react.createElement(ListaPaises, {
          datoNombre: nombre,
          datoTitulo: "Listado de paises",
          datosPaises: Paises
     })

     //2 . Renderizar el componente a HTML
     
     const vista = renderToStaticMarkup(componente)

     //3. Enviar el HTML al cliente

     res.send(`${ vista }`)
})

//Prender servidor

app.listen(4000, function(){
    console.log("Servidor prendido")
})