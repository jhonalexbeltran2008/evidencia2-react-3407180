//Interfaces:
//Definen la estructura base
//De un objeto(atributos, metodos)

interface pais{
    nombre: string,
    capital: string,
    moneda: string,
    ciudades: string[],
    datosDemograficos:{
        poblacion: number,
        densidadPoblacion:number
    },
    datosEconomicos:{
        pib: string,
        ingresoPerCapita: string,
        gini:number
    }
}

export default pais