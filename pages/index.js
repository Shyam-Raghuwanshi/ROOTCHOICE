import Head from "next/head";
// import Image from 'next/image'
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ImageScrollBar from "../components/ImageScrollbar";

export default function Home({ setSideCart }) {
  const router = useRouter();
  useEffect(() => {
    setSideCart(false);
  }, [router.query, setSideCart]);

  const images = [
    "./static/images/backgrounds/1.jpg",
    "./static/images/backgrounds/2.jpg",
    "./static/images/backgrounds/3.jpg",
    "./static/images/backgrounds/4.jpg",
    "./static/images/backgrounds/5.jpg",
    "./static/images/backgrounds/6.jpg",
    "./static/images/backgrounds/7.jpg",
  ];

  const showHTML = () => {
    return (
      <div className="p-8">
        <h1 className="text-white text-[2.6rem] sm:text-6xl  md:text-7xl lg:text-8xl xl:text-9xl font-semibold mix-blend-exclusion underline">
          ROOTCHOICE...
        </h1>
        <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-white text-center font-extrabold  mix-blend-exclusion underline underline-offset-1 mt-4">
          ROOTCHOICE! Your choice here:)
        </h4>
        <div className="flex justify-center items-center pt-20">
          <Link passHref href={"/tshirts"}>
            <div className="relative cursor-pointer px-6 py-3 font-bold text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gray-900 rounded-xl ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-900 ease rounded-xl opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span className="relative font-serif">View Offers...</span>
            </div>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>ROOTCHOICE</title>
        <meta name="description" content="ROOTCHOICE.com wear the code" />
      </Head>
      
      {/* <div className="text-center"> */}
      <ImageScrollBar images={images} fun={showHTML} />
      {/* </div> */}
      {/* <Image className='-z-50'backg src={'/home.jpg'} height={830} width={1700} ></Image> */}
      <section className="text-gray-300 overflow-hidden body-font bg-gray-900 -mt-1 border-slate-100 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">
              ROOTCHOICE your choice hear :)
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">
              Whatever you want is here. All things in our ROOTCHOICE is cheaper
              then Flipkart, Amazon, Mantra etc.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-300 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
