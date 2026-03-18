import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth(); // 🔥 aquí está la magia

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("https://localhost:7159/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo,
                    password
                })
            });

            const data = await res.json();

            if (res.ok) {

                // 🔥 GUARDAR USUARIO EN CONTEXTO
                login({
                    correo: correo,
                    rol: data.rol
                });

                alert("Inicio de sesión exitoso 🎉");

                if (data.rol === "admin") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }

            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Error conectando con el servidor");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#ffe2e7]">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
            >

                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Iniciar sesión
                </h2>

                <input
                    type="email"
                    placeholder="Correo"
                    className="w-full border p-2 mb-4"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border p-2 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded"
                >
                    Iniciar sesión
                </button>

            </form>

        </div>
    );
}

export default Login;