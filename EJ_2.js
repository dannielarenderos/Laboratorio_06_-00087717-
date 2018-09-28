


var promedio = (listNumbers) => {
    let acum = 0;
    listNumbers.forEach(element => {
        acum += element;
    });

    let prom = acum / listNumbers.length;
    console.log("EL PROMEDIO ES " + prom)
};




