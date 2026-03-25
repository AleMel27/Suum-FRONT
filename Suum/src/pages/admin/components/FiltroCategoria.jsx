function FiltroCategoria({ categorias, value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border p-2 rounded-xl mb-4 w-full"
        >
            <option value="">Todas las categorías</option>

            {categorias.map(c => (
                <option key={c.id_categoria} value={c.id_categoria}>
                    {c.nombre}
                </option>
            ))}
        </select>
    )
}

export default FiltroCategoria