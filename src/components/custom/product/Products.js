'use client'
import { useState, useEffect } from "react"
import FormNewProduct from "../form/products/FormNewProduct";
import TableProducts from "../dataTable/products/TableProducts";
import CamposTable from "../dataTable/products/camposTable";

const Products = () =>{

    const [product, setProduct] = useState([])
    const [url, setUrl]= useState('/api/products')
    const recibirDatos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data.result)
}

useEffect(()=>{
    recibirDatos();
},[url])

const [mostrarFormulario, setMostrarFormulario] = useState(false);

const abrirFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
};

return ( 
    <div className="w-full rounded-md shadow-sm px-16">
    <button type="button" onClick={abrirFormulario} className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700">
        Nuevo Producto
    </button>

    {mostrarFormulario ? (
        <div className="flex flex-row justify-center">
            <FormNewProduct onClose={() => setMostrarFormulario(false)} />
        </div>
    ) : (
        <div>
            <div className="mt-11">
                <CamposTable />
            </div>
            <div className="flex flex-col">
                {product.map((products) => (
                    <TableProducts products={products} />
                ))}
            </div>
        </div>
    )}
</div>
)

}

export default Products