"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

async function getData() {
  const res = await fetch("localhost:8000/api/v1/login", { method: "post" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex bg-gradient-to-r from-yellow-500 to-yellow-300 h-screen justify-center items-center">
        <div className="h-4/6 w-9/12 bg-zinc-600">
          <h1 className="text-center pt-12 text-2xl"> Welcome teacher</h1>
          <div className="text-xl pl-14 pt-6 pb-6">
            <h2 className=" bg-blue-900 w-3/12 rounded-xl">
              Is that your first time on GlobalTutor ?
            </h2>
          </div>
          <div className=" flex flex-row gap-6 justify-between w-11/12 m-auto items-center mt-8">
            <div className="h-2/6 w-5/12 ">
              <p className="text-center text-lg">What to do</p>
              <div className="bg-slate-100 text-black">
                <ul className="text-2xl">
                  <Link href="">
                    <li className="mb-4 pt-4">1- List your lessons</li>
                  </Link>
                  <li className="mb-4">2- Update your course</li>
                  <li className="pb-5">3- Create lessons</li>
                  <li className="pb-5">3- Delete lessons</li>
                  <li className="pb-5">3- Student management</li>
                </ul>
              </div>
            </div>
            <div className="h-2/6 w-5/12 ">
              <p className="text-center text-lg">Update</p>
              <div className="bg-slate-100 text-black">
                <p className="text-2xl">Here our next issue</p>
                <ul className="text-2xl">
                  <li className="mb-4 pt-4">1- 10 days maj for the chat box</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
