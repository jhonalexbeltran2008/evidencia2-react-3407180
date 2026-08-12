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
        poblacion:69226000, 
        densidadPoblacion:283
    },
    
    datosEconomicos:{
        ingresoPerCapita:"57.602 USD",
        gini: 32.4,
        pib: "4.00B USD"
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
        poblacion:48800000,
        densidadPoblacion:97
    },

    datosEconomicos:{
        ingresoPerCapita:"38.627 USD",
        gini: 33.0,
        pib: "1.89B USD"
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
        poblacion:45696159,
        densidadPoblacion:17
    },

    datosEconomicos:{
        ingresoPerCapita:"14.898 USD",
        gini:42.4,
        pib: "0.64B USD"
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
        poblacion:212000000,
        densidadPoblacion:25
    },

    datosEconomicos:{
        ingresoPerCapita:"10.713 USD",
        gini:50.3,
        pib: "2.28B USD"
    }
}

]
export default Paises;