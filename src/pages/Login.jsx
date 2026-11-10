import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { FiLock, FiMail } from 'react-icons/fi';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrorMsg('')
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password.trim()
        })

        if (error) {
            setErrorMsg('Credenciales inválidas. Verificá tu correo y contraseña.')
            setLoading(false)
        } else {
            navigate('/admin')
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-body">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold font-heading text-secondary">
                        Panel Administrativo
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Ingresá tus credenciales para continuar
                    </p>
                </div>

                {errorMsg && (
                    <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold text-center">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4 text-sm">
                    <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                            Correo electrónico
                        </label>
                        <div className="relative">
                            <FiMail className="absolute left-3.5 top-3.5 text-slate-400" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@estudio.com"
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl outline-none focus:border-secondary transition text-slate-800"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                            Contraseña
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3.5 top-3.5 text-slate-400" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl outline-none focus:border-secondary transition text-slate-800"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full font-semibold cursor-pointer bg-primary hover:bg-secondary text-slate-900 transition-all duration-300 rounded-xl py-3 text-sm disabled:opacity-50 mt-2"
                    >
                        {loading ? 'Iniciando sesión...' : 'Ingresar al panel'}
                    </button>
                </form>
            </div>
        </div>
    );
};