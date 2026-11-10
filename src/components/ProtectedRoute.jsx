import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { FiRefreshCw } from 'react-icons/fi';

export const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {
        // 1. obtengo la sesion activa al montar el componente
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // 2. escucho cambios de autenticacion en tiempo real (login / logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-700 gap-3 font-body">
                <FiRefreshCw className="animate-spin h-6 w-6 text-secondary" />
                <span className="text-sm font-medium">Verificando credenciales...</span>
            </div>
        );
    }

    // si no esta autenticado rebota al login
    if (!session) {
        return <Navigate to="/login" replace />;
    }

    // si esta autenticado renderiza el componente envuelto
    return children;
};