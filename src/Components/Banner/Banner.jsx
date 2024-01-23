const Banner = () => {
  return (
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
            Elevate Your Living, Take Your Next Level Home.
          </h1>
          <p className="lg:text-lg sm:text-base text-sm text-gray-600">
            Seamless Rentals, Skyrocketing Success: Track, Improve, and Attract
            with Our Powerful Tool.
          </p>
          <div className="flex space-x-4">
            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-yellow-300 text-black">
              Get Started
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent">
              Learn More
            </button>
          </div>
          <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/broker-giving-keys_1098-19812.jpg?w=1800&t=st=1705998891~exp=1705999491~hmac=cc242cc7a3e7843485edadaabba344ca4dc30e7e1227685160e499d4bc0c258b"
            className=" mt-9 relative md:h-[600px]  sm:h-[500px] h-[300px]   w-[500px] bg-gray-400 rounded-b-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
