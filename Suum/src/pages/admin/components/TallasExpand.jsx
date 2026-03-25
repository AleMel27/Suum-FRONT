function TallasExpand({ producto }) {
    return (
        <tr className="bg-[#fff0f5]">
            <td colSpan="6" className="p-4">

                <div className="flex gap-4 flex-wrap">

                    {producto.producto_tallas?.map(t => (
                        <div
                            key={`${t.id_producto}-${t.id_talla}`}
                            className="bg-white border rounded-xl px-4 py-2"
                        >
                            <p className="font-semibold">
                                Talla: {t.talla.talla}
                            </p>

                            <p className={t.stock === 0 ? "text-red-500" : "text-green-600"}>
                                Stock: {t.stock}
                            </p>
                        </div>
                    ))}

                </div>

            </td>
        </tr>
    )
}

export default TallasExpand