import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, pdf, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

// Define estilos personalizados para el PDF
const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    width: '50%',
  },
  productQuantity: {
    width: '20%',
    textAlign: 'center',
  },
  productPrice: {
    width: '30%',
    textAlign: 'right',
  },
});

const CampoOrder = ({ orders, updateCampoOrder }) => {
    const [entregado, setEntregado] = useState(false);
    const [cambio, setCambio] = useState(null);

    useEffect(() => {
        setEntregado(orders.estado === 'entregado');
    }, [orders.estado]);

    useEffect(() => {
        if (orders.valor_pagado && orders.valor_total) {
            const cambio = parseInt(orders.valor_pagado) - parseInt(orders.valor_total);
            setCambio(cambio.toFixed(0));
        }
    }, [orders.valor_pagado, orders.valor_total]);

    const handleClick = async () => {
        await updateCampoOrder(orders.pedido_id);
        setEntregado(true);
    };

    const handleFacturar = () => {
        generatePDF();
    };

    const generatePDF = async () => {
        const pdfContent = (
            <Document>
                <Page size="A4" style={styles.container}>
                    <View>
                        <Text style={styles.title}>Detalles de la orden:</Text>
                        <Text style={styles.subtitle}>Pedido: {orders.pedido_id}</Text>
                        <Text style={styles.subtitle}>Mesa: {orders.mesa_descripcion}</Text>
                        <Text style={styles.text}>Fecha: {orders.fecha}</Text>
                        <Text style={styles.text}>Hora: {orders.hora}</Text>
                        <Text style={styles.subtitle}>Productos:</Text>
                        {orders.nombres_productos.split(',').map((nombre, index) => (
                            <View key={index} style={styles.productRow}>
                                <Text style={styles.productName}>{nombre}</Text>
                                <Text style={styles.productQuantity}>Cantidad: {orders.cantidades_productos.split(',')[index]}</Text>
                                <Text style={styles.productPrice}>Precio: ${orders.precios_productos.split(',')[index]}</Text>
                            </View>
                        ))}
                        <Text style={styles.text}>Valor Pagado: ${orders.valor_pagado}</Text>
                        <Text style={styles.text}>Valor Total: ${orders.valor_total}</Text>
                        <Text style={styles.text}>Estado del Pedido: {orders.estado_pedido}</Text>
                        {/* Otros detalles de la orden... */}
                    </View>
                </Page>
            </Document>
        );

        const blob = await pdf(pdfContent).toBlob();
        saveAs(blob, "orden.pdf");
    };

    if (entregado || orders.estado_pedido !== 'pagado') {
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col mt-3">
            <div className="flex justify-between">
                <p className="text-xl font-semibold mb-2">Pedido: {orders.pedido_id}</p>
                <p className="text-xl font-semibold mb-2">{orders.mesa_descripcion}</p>
            </div>
            <p className="text-gray-800 font-medium flex justify-between">Fecha: <span>{orders.fecha}</span></p>
            <p className="text-gray-800 font-medium flex justify-between">Hora: <span>{orders.hora}</span></p>
            <p className="text-gray-800 font-medium mb-3">{orders.mesa_descripcion}</p>
            {orders.nombres_productos.split(',').map((nombre, index) => (
                <div key={index} className="text-gray-800 font-medium flex justify-between">
                    <p>{nombre}</p>
                    <p>*{orders.cantidades_productos.split(',')[index]}</p>
                    <p>${orders.precios_productos.split(',')[index]}</p>
                </div>
            ))}
            <p className="text-gray-800 font-medium flex justify-between mt-3">Valor Pagado: <span>${orders.valor_pagado}</span></p>
            <p className="text-gray-800 font-medium flex justify-between">Valor Total: <span>${orders.valor_total}</span></p>
            {cambio !== null && (
                <p className="text-gray-800 font-medium flex justify-between">Cambio: <span>${cambio}</span></p>
            )}
            <p className="text-gray-800 font-medium flex justify-between">Estado del Pedido: <span>{orders.estado_pedido}</span></p>
            <div className="flex justify-between items-end gap-3 mt-4">
                <button className="bg-green-600 rounded-xl w-36 outline-none h-9 hover:bg-green-700 text-white" onClick={handleClick}>Entregado</button>
                <button className="bg-blue-600 rounded-xl w-36 outline-none h-9 hover:bg-blue-700 text-white" onClick={handleFacturar}>Facturar</button>
            </div>
        </div>
    );
}

export default CampoOrder;



