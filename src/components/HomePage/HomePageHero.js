const HomePageHero = () => {
    return ( 
        <div className="container mx-auto bg-white dark:bg-gray-800 overflow-hidden relative">
        <div className="text-start w-full lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to be millionaire?</span>
            <span className="block text-red-500">
              It&#x27;s today or never.
            </span>
          </h2>
          <p className="text-xl mt-4 text-gray-400">
            I had noticed that both in the very poor and very rich extremes of
            society the mad were often allowed to mingle freely
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                disabled
                type="button"
                className="opacity-50 cursor-not-allowed py-4 px-6 bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2621&q=80"
            className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" alt=''
        />
      </div>
     );
}
 
export default HomePageHero;