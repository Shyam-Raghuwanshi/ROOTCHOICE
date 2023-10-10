import Link from "next/link";
const about = () => {
  return (
    <>
      <section className="w-full py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
             
              <div className="flex flex-col items-center pt-8">
                <img
                  className="mb-3 w-56 h-56 rounded-full shadow-lg"
                  src="/static/images/logos/shyam.jpg"
                  alt="shyam image"
                />
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Shyam Raghuwanshi
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full-Stack Web-developer
                </span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                 
                    <a href="https://twitter.com/ShyamRa36109329" target="_blank" className="ml-3 cursor-pointer text-gray-200">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a  href="http://instagram.com/shyam_raghuonec" target="_blank"  className="ml-3 cursor-pointer text-gray-200">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/shyam-raghuwanshi-b67489220/" target="_blank" className="ml-3 cursor-pointer text-gray-200">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-mono p-4">
                "Hey, I'm who you are looking for!"Experienced web developer
                with a strong background in full-stack development. Proficient
                in HTML, CSS, JavaScript, and various front-end frameworks.
                Skilled in designing responsive and user-friendly interfaces.
                Adept at backend technologies like Node.js and Express. Seeking
                to leverage expertise in web development to create innovative
                and seamless digital experiences for your company.
                <Link
                  href="https://shyamraghu.github.io/shyamportfolio.github.io/"
                  target="_blank"
                >
                  <span className="text-blue-600 hover:underline">
                    My portfolio website
                  </span>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
