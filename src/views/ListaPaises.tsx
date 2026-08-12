import React from 'react'
import pais from '../interfaces/pais.interface'

//Configuración de props utilizando una interfaz
interface Props{
    datoNombre: string,
    datoTitulo: string,
    datosPaises: pais[]
}

// Estilos del componente / Se definen como un record

const estilos: Record<string, React.CSSProperties> ={
    tabla:{
        borderColor: "gray",
        borderWidth: "3px",
        borderStyle: "solid",
        textAlign: "center",
    },
    encabezado:{
        backgroundColor: "gray",
        color: "white"
    },
    celda:{
        padding: "15px",
        fontSize: "15px",
        fontWeight: "bold",
        border: "1px solid gray",
        whiteSpace: "pre-wrap",
    }
    }

//Props

export function ListaPaises({datoNombre, datoTitulo, datosPaises}: Props){
    return (       
        //Fragmento de React:
        //Etiqueta que permite agrupar elementos de un componente UI 
    <>
        <h1>{datoTitulo}</h1>
        <p>Presentado por: {datoNombre}</p>
        <table style={estilos.tabla}>
            <thead style={estilos.encabezado}>
                <tr>
                    <th style={estilos.celda}>Nombre</th>
                    <th style={estilos.celda}>Capital</th>
                    <th style={estilos.celda}>Moneda</th>
                    <th style={estilos.celda}>Cuidades</th>
                    <th style={estilos.celda}>Densidad Población</th>
                    <th style={estilos.celda}>Población</th>
                    <th style={estilos.celda}>Ingreso Per Capita</th>
                    <th style={estilos.celda}>Gini</th>
                    <th style={estilos.celda}>PIB</th>
                </tr>
            </thead>
            <tbody>
                {
                //recorrer el arreglo de paises
                    datosPaises.map(function(p: pais){
                        return (
                            <tr>
                                <td style={estilos.celda}>{p.nombre}</td>
                                <td style={estilos.celda}>{p.capital}</td>
                                <td style={estilos.celda}>{p.moneda}</td>
                                <td style={estilos.celda}>{p.ciudades.join(",   ")}</td>
                                <td style={estilos.celda}>{p.datosDemograficos.densidadPoblacion}</td>
                                <td style={estilos.celda}>{p.datosDemograficos.poblacion}</td>
                                <td style={estilos.celda}>{p.datosEconomicos.ingresoPerCapita}</td>
                                <td style={estilos.celda}>{p.datosEconomicos.gini}</td>
                                <td style={estilos.celda}>{p.datosEconomicos.pib}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>

    </>
)}

