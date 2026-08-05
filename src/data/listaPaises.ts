import pais from "../interfaces/pais.interface"

//Lista de paises a mostrar

const Paises: pais[] = [
{
    nombre:"Inglaterra",
    capital:"Londres",
    moneda:"GBP",
    ciudades:[
        "Liverpool",
        "Manchester",
        "Wolverhampton",
    ],

    datosDemograficos:{
        poblacion:56489800, 
        densidadPoblacion:432
    },
    
    datosEconomicos:{
        ingresoPerCapita:"£34690",
        gini: 0.35,
        pib: "£1961238"
    }
},
{
    nombre: "España",
    capital: "Madrid",
    moneda: "EUR",
    ciudades:[
        "Barcelona",
        "Sevilla",
        "Madrid"
],
    datosDemograficos:{
        poblacion:49687120,
        densidadPoblacion:98.2
    },

    datosEconomicos:{
        ingresoPerCapita:"59190USD",
        gini: 30.8,
        pib: "2.04B USD"
    }
},
{
    nombre: "Argentina",
    capital: "Buenos Aires",
    moneda: "ARS",
    ciudades:[
        "Rosario",
        "Mendoza",
        "La plata"
],
    datosDemograficos:{
        poblacion:46735004,
        densidadPoblacion:16.81
    },

    datosEconomicos:{
        ingresoPerCapita:"14357 USD",
        gini: 0.424,
        pib: "688380M USD"
    }
},
{
    nombre: "Brasil",
    capital: "Brasilia",
    moneda: "BRL",
    ciudades:[
        "Rio de Janeiro",
        "Fortaleza",
        "Natal"
],
    datosDemograficos:{
        poblacion:213562666,
        densidadPoblacion:23.8
    },

    datosEconomicos:{
        ingresoPerCapita:"12313 USD",
        gini:48.9,
        pib: "2.64B USD"
    }
}

]
export default Paises;