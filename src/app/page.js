import Image from "next/image";

export default function Home() {
  return (
    <section className="w-[90%] mx-auto px-6">
      <div
        className="w-full bg-center bg-cover min-h-screen rounded-[20px] mt-10"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")'
        }}
      >
        <div className="flex items-center  min-h-screen justify-center w-full h-full bg-gray-900/40 rounded-[20px]">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Build your new <span className="text-blue-400">Saas</span> Project
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
