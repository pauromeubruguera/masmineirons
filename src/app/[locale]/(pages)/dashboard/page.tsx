"use client"

import { useAuthStore } from "@/hooks/auth-store"
import { useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
    const { user, token, isAuthenticated } = useAuthStore()
    const userInfo = JSON.parse(user)
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/change-password`,
                {
                    currentPassword,
                    password: newPassword,
                    passwordConfirmation: confirmPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                setSuccess('Contraseña cambiada con éxito');
                setError('');
                // Redirigir al usuario o limpiar el formulario
            }
        } catch (err) {
            setError('Error al cambiar la contraseña. Verifique su contraseña actual.');
        }
    };

    return (
        <div className="p-10">
            <h2>Dashboard</h2>
            <div className="change-password-form">
                <h5 className="pb-5">Cambiar Contraseña</h5>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="p-1">
                        <label>Contraseña Actual: </label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-1">
                        <label>Nueva Contraseña: </label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-1">
                        <label>Confirmar Nueva Contraseña: </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="p-2 mt-5 bg-[#787c6e] text-black hover:text-white hover:bg-[#474940] transition-colors" type="submit">Cambiar Contraseña</button>
                </form>
            </div>
        </div>
    )
}
