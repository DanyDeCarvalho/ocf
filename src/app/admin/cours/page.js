"use client";
import { redirect } from "next/dist/server/api-utils";
import Navbar from "../../components/navbar";
import { addCours } from "@/app/action";

export default function course() {
  async function createCourse(data, ) {
    const response = await addCours(
      data,
      localStorage.getItem("refresh_token")
    );
    if (response.ok) {
      redirect("/admin/cours");
    }
  }
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-gradient-to-r from-slate-950 to-slate-700 ">
        <div className="flex justify-center items-center w-full pt-12">
          <form action={createCourse} className="w-full text-center">
            <label className="text-xl mr-4">Lien du répertoire Git : </label>
            <input
              name="url"
              className="w-6/12 border border-white bg-gradient-to-r from-slate-600 to-slate-500 mr-4"
            ></input>
            <button className="bg-gradient-to-r from-slate-600 to-slate-500 hover:bg-gradient-to-l from-slate-900 to-slate-500 rounded-xl p-2 ">
              Create a course
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
