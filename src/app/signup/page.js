import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-wrap h-screen font-sans">
      <div className="basis-2/3">
        <img className="h-screen w-full" src="/signup.jpg" alt="image" />
      </div>
      <div className="basis-1/3 flex justify-center items-center h-full bg-zinc-950">
        <div className="flex flex-col w-9/12 border-white border rounded-xl justify-center items-center">
          <div className="flex flex-col justify-left items-left w-11/12">
            <h1 className="text-3xl pt-10">Signup</h1>
            <h2 className="mb-4">Just some details to get you in !</h2>
          </div>
          <form className="flex flex-col w-11/12">
            <input
              className="bg-black text-white border-white border-2 h-10 rounded-xl mb-4 pl-2"
              value={"Username"}
            ></input>

            <div className="flex items-center justify-center gap-60">
              <label>
                <input type="radio"></input>
                Teacher
              </label>
              <label>
                <input type="radio"></input>
                Student
              </label>
            </div>
            <input
              className="bg-black text-white border-white border-2 h-10 rounded-xl mb-5 pl-2"
              value={"Email/ Phone"}
            ></input>
            <input
              className="bg-black text-white border-white border-2 h-10 rounded-xl mb-2 pl-2"
              value={"Password"}
            ></input>
            <input
              className="bg-black text-white border-white border-2 h-10 rounded-xl mb-2 pl-2"
              value={"Confirm Password"}
            ></input>
            <button className="bg-gradient-to-l from-blue-950 to-blue-600 pt-3 pb-3 rounded-xl mt-12 mb-1 w-full">
              Signup
            </button>
            <div className=" flex gap-7 items-center justify-center">
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500 w-6/12"></hr>
              <a className="my-5"> Or </a>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-6/12"></hr>
            </div>

            <div className="flex gap-5 justify-center mb-20">
              <Image
                src="/google.png"
                width={50}
                height={10}
                alt="Picture of the author"
              />

              <Image
                src="/facebook.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <Image
                className="bg-white rounded-3xl"
                src="/github.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <Link href="/">
              <p className="text-center mb-1"> Already Registered ? Login</p>
            </Link>

            <div className="gap-10 flex justify-center items-center pb-10">
              <a>Terms & Conditions</a>
              <a>Support</a>
              <a>Customer Care</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
