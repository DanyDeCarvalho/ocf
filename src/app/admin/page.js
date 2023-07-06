"use client";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex bg-gradient-to-r from-slate-950 to-slate-700 h-screen justify-center items-center">
        <div className="border border-white h-4/6 w-8/12">
          <p className="text-center pt-5 text-xl">What do you want to do ?</p>
          <div className="flex flex-col gap-32">
            <div className="flex justify-center items-center gap-10 mt-20">
              <div className="w-3/12 border border-white rounded-xl text-center hover:bg-gradient-to-l from-slate-600 to-slate-800">
                <Link href="/admin/groupe">
                  <p className="mt-5 mb-5">Groupes</p>
                </Link>
              </div>
              <div className="w-3/12 border border-white rounded-xl text-center hover:bg-gradient-to-l from-slate-600 to-slate-800">
                <p className="mt-5 mb-5">Roles</p>
              </div>
              <button className="w-3/12 border border-white rounded-xl text-center hover:bg-gradient-to-l from-slate-600 to-slate-800">
                <p className="mt-5 mb-5">Permisions</p>
              </button>
            </div>
            <div className="flex justify-center items-center gap-10">
              <div className="w-3/12 border border-white rounded-xl text-center hover:bg-gradient-to-l from-slate-600 to-slate-800">
                <Link href="/admin/users">
                  <p className="mt-5 mb-5">Users</p>
                </Link>
              </div>
              <div className="w-3/12 border border-white rounded-xl text-center hover:bg-gradient-to-l from-slate-600 to-slate-800">
                <Link href="/admin/cours">
                  <p className="mt-5 mb-5">Cours</p>
                </Link>
              </div>
              <div className="w-3/12 border border-white rounded-xl text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
