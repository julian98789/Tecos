import React from 'react';

const LiberarMesa = ({ liberar }) => {
    const liberarMesaAPI = async (mesaId) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ estado: 'disponible' })
        };

        await fetch(`/api/table/${mesaId}`, options);
    };

    if (!liberar) {
        return null; // Si no hay orden asociada a la mesa, no renderizar nada
    }

    return (
        <div>
            
                <button
                    type="button"
                    className="w-32 h-11 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-red-700 mr-2"
                    onClick={() => liberarMesaAPI(liberar.mesa_id)}>
                    {liberar.mesa_descripcion}
                </button>
            
        </div>
    );
};

export default LiberarMesa;