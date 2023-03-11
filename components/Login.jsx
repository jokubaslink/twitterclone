import { signIn } from "next-auth/react";
import React, {useState, useEffect} from "react"

function Login({ providers }) {
  const [mode, setMode] = useState();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches === false) {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, []);

  return (
    <div className="dark:bg-black bg-white flex flex-col items-center space-y-20 pt-48 h-screen">
        {mode === "dark" ? (
          <img
            src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg"
            width={150}
            height={150}
            objectFit="contain"
          />
        ) : (
          <img
            src="https://icon-library.com/images/twitter-svg-icon/twitter-svg-icon-28.jpg"
            width={150}
            height={150}
            objectFit="contain"
          />
        )}
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
