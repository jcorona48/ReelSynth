
import { useState } from 'react';

export default function useToken() {

    // este hook trata de recuperar el token del localStorage y si no lo encuentra devuelve null
    
    const getToken = () => {
        const token = localStorage.getItem('x-token');
        
        return token || null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = token => {
        localStorage.setItem('x-token', token);
        setToken(token);
    };

    const deleteToken = () => {
        localStorage.removeItem('x-token');
        setToken(null);
    }

    return {
        setToken: saveToken,
        token,
        deleteToken
    }


}