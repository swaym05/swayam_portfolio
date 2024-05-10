import React,{useState} from 'react'
// #ff5e62
const Home = () => {
  const [hover, setHover] = useState(false);
  const arrowStyle   = {
    marginLeft: hover ? "10px" : "0px",
    transition: "margin-left 0.3s ease",
  };
  return (
    <>
      <section name="home" className=" bg-bg-custom h-screen w-full">
        <div className="max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full ">
          <p className="text-text-custom font-semibold text-xl mt-10 md:mt-12">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#dde3f7] ">
            Swayam Gajbhiye
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
            I'm Java & React Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] lg:text-xl ">
            I'm an aspiring full-stack developer specializing in designing and
            building user-friendly web applications.
            <span className="hidden sm:inline">
              &nbsp; Currently, I'm learning ReactJS and Spring Boot to level up
              my skills one step higher.
            </span>
          </p>
          <div>
            <button
              style={{ position: "relative", overflow: "hidden" }}
              className="hidden mr-2 text-white font-semibold rounded-lg border-2 px-4 py-3 my-2 hover:bg-[#ff5e62] hover:text-white hover:border-[#ff5e62] "
            >
              View Projects
              <span className="hover:ml-6 duration-300">
                <i className="fa-solid fa-arrow-right ml-3"></i>
              </span>
            </button>
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ position: "stick", overflow: "hidden" }}
              className=" text-white bg-bg-custom font-semibold rounded-lg border-2 px-5 py-3 my-2 hover:bg-[#ff5e62] hover:text-white hover:border-[#ff5e62] "
            >
              Download CV
              <span style={arrowStyle}>
                <i className="fa-solid fa-arrow-right ml-3 "></i>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home