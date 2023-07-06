"use client";
import React, { useState } from "react";
import { updateUser } from "../action";

export default function Modal({ param1, param2 }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  async function update(data) {
    const res = await updateUser(
      data,
      param2,
      localStorage.getItem("refresh_token")
    );
    console.log(res)
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Update
      </button>
      {modal && (
        <div className="modal flex justify-center items-center">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content w-6/12 bg-gradient-to-r from-slate-950 to-slate-700">
            <h2>Modifier les informations de {param1}</h2>
            <form action={update}>
              <label>Nom</label>
              <input name="firstname"></input>
              <label>Prenom</label>
              <input name="lastname"></input>
              <label>Email</label>
              <input name="email"></input>
              <button type="submit">Modifier</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
