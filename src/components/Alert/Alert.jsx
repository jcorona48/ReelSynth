import React from "react";
import "./Alert.css"; // Archivo CSS para estilos

const Alert = ({ text, type }) => {
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
    <div className={`alert ${getClassByType()}`}>
      {text}
    </div>
  );
};

export default Alert;
