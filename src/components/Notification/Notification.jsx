import React from "react";
import "./Notification.css";
import plus from "../../assets/plus.png";

const Notification = () => {
  return (
    <div className="Notification__page_body">
      <div>
        <div className="Notification__add_button_bar">
          <div className="Notification__box_text">
            <h2 className="Notification__text_bar">Notificaciones Push</h2>
          </div>
          <button className="button__new_notification">
            <img src={plus} className="Notification__image_plus" /> Nueva
            Notificacion
          </button>
        </div>
      </div>
      <div className="Notification__action_bar">
        <p>Campaña</p>
        <p>Inicio</p>
        <p>Estado</p>
        <p>Orientacion</p>
        <p>Envios</p>
        <p>Abiertos</p>
        <p>% de apertura</p>
      </div>
    </div>
  );
};

export default Notification;
