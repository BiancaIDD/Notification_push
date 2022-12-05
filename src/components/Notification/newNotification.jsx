import React from "react";
import android from "../../assets/android.png";
import ios from "../../assets/ios.png";
import "./css/newNotification.css"

const NewNotification = () => {
  return (
    <div className="newNotificationBody">
      <div className="newNotify">
        <h1>Detalle nueva notificacion push</h1>
        <form className="formNotify">
          <label name="title" className="title actions">
            Detalle de la nueva notificacion{" "}
            <input className="textTile" id="title" type="text" placeholder="ingresa un titulo" />
          </label>

          <label name="text" className="text actions">
            Texto de la notificacion{" "}
            <input
            className="textBody"
              id="text"
              type="textarea"
              placeholder="ingresa un texto de la notificacion"
            />
          </label>

          <label name="filePiker" className="filePiker actions">Imagen de notificacion (Opcional) 
          <label name="filePiker" htmlFor="filePiker" className="butonPiker" 
          style={{ background:"#D1FFD5", padding:"4px 20px", width:"100px", height:"25px", color:"#1D745A" }}>
            cambiar{" "}
            <input
              id={"filePiker"}
              style={{ visibility: "hidden" }}
              type={"file"}
            />
          </label>
          </label>
          <label name="orientacionTitle ">Orientacion</label>
          <button className="orientacion">
            <img className="orientacionimg" src={android} />
          </button>
          <button className="orientacion">
            <img className="orientacionimg" src={ios} />
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default NewNotification;
