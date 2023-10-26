
import React from "react";

export const AlertsContext = React.createContext();

export default function AlertsProvider({children}) {
    // Estado para almacenar las alertas
    const [alerts, setAlerts] = React.useState([]);
    // Funcion para agregar alertas
    const addAlert = (text, type) => {
        const newAlert = {id: new Date().getTime(), text, type };
        // Agregamos la alerta a nuestro estado
        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

        setTimeout(() => {
            // Eliminamos la alerta despues de 3 segundos
            deleteAlert(newAlert.id);
        }, 3000);

    };


    // Funcion para eliminar alertas

    const deleteAlert = (id) => {
        // Eliminamos la alerta del estado
        setAlerts((prevAlerts) => {
            return prevAlerts.filter((alert) => alert.id !== id);
        });
    }

    return (
        <AlertsContext.Provider value={{alerts, addAlert, deleteAlert}}>
            {children}
        </AlertsContext.Provider>
    );
};
