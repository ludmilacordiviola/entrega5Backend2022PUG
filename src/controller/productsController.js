import Contenedor from "../utils/contenedor.js"

const contenedor = new Contenedor("productos.txt")

const getProductController = async (req, res) => {
    try {
        const productos = await contenedor.getAll()

        res.render('main.pug', {productos: productos})
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const postProductController = async (req, res) => {
    let productos = await contenedor.postProduct(req)
    
    let newProducts = await contenedor.getAll()

    res.render('main.pug', {productos: newProducts})
}

export {postProductController, getProductController}