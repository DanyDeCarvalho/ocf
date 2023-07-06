import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap h-screen font-sans text-white">
      <div className="basis-2/3">
        <img className="h-screen w-full" src="/note.jpg" alt="image" />
      </div>
      <div className="basis-1/3 flex justify-center items-center h-full bg-zinc-950 text-white">
        <div className="flex flex-col w-9/12 border-white border rounded-xl justify-center items-center">
          <div className="flex flex-col justify-left items-left w-11/12">
            <h1 className="text-3xl pt-10">Forgot Password ?</h1>
            <h2 className="mb-4">Please enter you're email</h2>
          </div>
          <form className="flex flex-col w-11/12">
            <input
              className="bg-black text-white border-white border-2 h-10 rounded-xl mb-4 pl-2"
              value={"example@mail.com"}
            ></input>
            <button className="bg-gradient-to-l from-pink-800 to-pink-400 pt-3 pb-3 rounded-xl mb-80 w-full">
              Reset Password
            </button>
            <Link href="/signup">
              <p className="text-center mb-1">Don't have an account ? Signup</p>
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
}
