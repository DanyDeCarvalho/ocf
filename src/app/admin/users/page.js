"use client";
import Link from "next/link";
import Navbar from "../../components/navbar";
import { getUsers } from "@/app/action";
import React, { useEffect, useState } from "react";
import Modal from "@/app/components/modal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const myParameter = "Valeur du paramètre";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers(localStorage.getItem("refresh_token"));
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-gradient-to-r from-slate-950 to-slate-700 ">
        <div className="flex justify-center items-center w-full pt-12">
          <Link href="../signup">
            <button className="bg-gradient-to-r from-slate-600 to-slate-500 hover:bg-gradient-to-l from-slate-900 to-slate-500 rounded-xl p-2 ">
              Create a user
            </button>
          </Link>
        </div>
        <div className="w-full">
          <h1>Liste des utilisateurs</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td>
                    {user.firstname} {user.lastname}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <Modal param1={user.firstname} param2={user.id} />
                    <button>Suppresion</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
