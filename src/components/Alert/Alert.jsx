import React, { useEffect } from "react";
import "./Alert.css"; // Archivo CSS para estilos
import { AlertsContext } from "../../Context/alertContext";
import { useContext } from "react";


export const addAlert = (text, type) => {
  
  useEffect(() =>{
    addAlertContext(text, type)
  },[])
  
}


export const Alert = ({ text, type, id = crypto.randomUUID() }) => {
  const {deleteAlert} = useContext(AlertsContext)

  const handleClick = (e) => {
    e.preventDefault()
    deleteAlert(id)
  }
  // Función para obtener la clase CSS según el tipo de alerta
  const getClassByType = () => {
    switch (type) {
      case "error":
        return "alert-error";
      case "success":
        return "alert-success";
      case "warning":
        return "alert-warning";
      case "info":
        return "alert-info";
      default:
        return "alert-default";
    }
  };
  return (
    <div className={`alert ${getClassByType()}`} onClick={handleClick} >
      {text}
    </div>
  );
};

export default Alert;
