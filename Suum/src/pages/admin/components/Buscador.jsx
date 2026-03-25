function Buscador({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Buscar producto..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-[#ffd6e2] p-2 rounded-xl mb-6 w-full"
        />
    )
}

export default Buscador