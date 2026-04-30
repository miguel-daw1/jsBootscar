const producto=[
    {
        id:1,
        nombre:"Margarita",
        imagen:"margarita.jpg",
        precios:{chica:100,mediana:130,grande:200}
    },
    {
        id:2,
        nombre:"pepperoni",
        imagen:"margarita.jpg",
        precios:{chica:100,mediana:130,grande:200}
    },
        {
        id:3,
        nombre:"Carnes frías",
        imagen:"margarita.jpg",
        precios:{chica:130,mediana:160,grande:240}
    },
            {
        id:4,
        nombre:"Carnes poblana",
        imagen:"margarita.jpg",
        precios:{chica:110,mediana:150,grande:230}
    }


]
let carrito=[]


const menu = document.getElementById("menu")

producto.forEach(producto => {
    menu.innerHTML+=`
    <div class="col col-12 col-md-4 col-lg-3">
    <div class="card mb-3">
    <img class="card-img-top imagen" src="${producto.imagen}" alt="producto">
    <div class="card-body">
        <h5>${producto.nombre}</h5>
        <select class="form-select mb-2">
            <option value="chica">chica - ${producto.precios.chica}</option>
            <option value="mediana">mediana - ${producto.precios.mediana}</option>
            <option value="grande">Grande - ${producto.precios.grande}</option>
        </select>
        <button class="btn btn-success w-100 agregar-btn">Agregar</button>
    </div>
    </div>
    </div>
    `
});


const botones = document.querySelectorAll(".agregar-btn")
botones.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        const prod = producto[index]
        const cardBody= btn.closest(".card-body")
        const size = cardBody.querySelector("select").value
        const total= prod.precios[size]
        carrito.push({
            nombre:prod.nombre,
            size,
            total
        })
        console.log(carrito)
        
    })
})

