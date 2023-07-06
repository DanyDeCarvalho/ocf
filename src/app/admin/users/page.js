"use client";
import Link from "next/link";
import Navbar from "../../components/navbar";

export default function Users() {
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
      </div>
    </>
  );
}
