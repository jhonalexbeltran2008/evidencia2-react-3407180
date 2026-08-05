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
        borderColor: "blue",
        borderWidth: "3px",
        borderStyle: "solid",
    },
    encabezado:{
        backgroundColor: "blue",
        color: "white"
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
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Moneda</th>
                    <th>Cuidades</th>
                    <th>Densidad Población</th>
                    <th>Población</th>
                    <th>Ingreso Per Capita</th>
                    <th>Gini</th>
                    <th>PIB</th>
                </tr>
            </thead>
            <tbody>
                {
                //recorrer el arreglo de paises
                    datosPaises.map(function(p: pais){
                        return (
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.capital}</td>
                                <td>{p.moneda}</td>
                                <td>{p.ciudades}</td>
                                <td>{p.datosDemograficos.densidadPoblacion}</td>
                                <td>{p.datosDemograficos.poblacion}</td>
                                <td>{p.datosEconomicos.ingresoPerCapita}</td>
                                <td>{p.datosEconomicos.gini}</td>
                                <td>{p.datosEconomicos.pib}</td>
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

