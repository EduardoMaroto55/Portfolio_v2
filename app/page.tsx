import Image from "next/image";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

import EmailForm from "./(components)/EmailForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="home"
          className="flex flex-col mt-44 p-10 items-center h-[70vh]  justify-center md:mt-0  md:flex-row md:h-[100vh] md:gap-x-20 md:items-center  md:justify-center "
        >
          <section className="left-section z-10 ">
            <h1>Ingeniero en sistemas</h1>
            <p className="desciption my-5">
              Hola, soy Eduardo Maroto. Ingeniero en sistemas recién graduado de
              la Universidad Latina de Costa Rica
            </p>
            <a href="https://www.linkedin.com/in/eduardo-maroto/">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </section>
          <section className="right-section ">
            <div className="blob"></div>
            <Image
              src="/boyCap.svg"
              width={450}
              height={450}
              alt="Profile Picture"
              className="text-center on-top w-auto"
              priority={true}
            />
          </section>
        </section>

        <section
  id="about"
  className="bg-gray-100 h-[900px] md:h-[700px] mt-28 md:mt-0 w-auto flex flex-col justify-center"
>
  <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto md:gap-10">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <h2 className="subTitle lg:px-0 px-8 lg:mb-10 md:mb-0 md:w-auto">About</h2>
    </div>
    <div className="flex flex-col-reverse justify-center items-center max-w-6xl mx-auto md:gap-44 md:flex-row">
      <div>
        <a href="https://www.ulatina.ac.cr/" target="_blank">
          <Image
            src="/graduacion.jpeg"
            width={700}
            height={700}
            className="rounded"
            alt="graduacion"
          />
        </a>
      </div>
      <div className="flex flex-col gap-y-6 mt-20">
        <h3 className="font-bold text-4xl">Quién Soy</h3>
        <p className="text-sm w-96 leading-6 text-gray-700">
          Soy Eduardo Maroto, un apasionado ingeniero en sistemas recién
          graduado con una sólida formación académica y un deseo ferviente
          de contribuir al mundo tecnológico en constante evolución.
        </p>

        <button className="w-fit text-xl border-blue-500 border rounded-xl px-6 py-3 hover:text-white hover:bg-blue-500 mb-12 md:mt-36">
          <a href="/CV - Eduardo Maroto Molina .docx">Download CV</a>
        </button>
      </div>
    </div>
  </div>
</section>

        <section
          id="projects"
          className=" h-[900px] md:h-[700px]  w-auto flex flex-col justify-center "
        >
          <h2 className="subTitle md:-mt-16 mb-10  mt-16 xl:w-[70%] 2xl:w-[60%]  mx-auto">
            Projects
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto gap-20 md:gap-44">
            <div className="flex flex-col gap-y-6 md:px-0 px-7">
              <h3 className="font-bold text-4xl">
                Crafting an Online Presence: Designing and Developing a Clinic's
                Website
              </h3>
              <p className="text-sm w-96 leading-6 text-gray-700">
                I did the design and implementation of a comprehensive website
                aimed at promoting the brand of Optiaudio, a small clinic based
                in Heredia. This project involved creating engaging user
                interfaces and ensuring user experience flows. I developed a
                website to effectively showcase Optiaudio's services and
                expertise. The website not only modernized Optiaudio's online
                presence but also contributed to increasing brand visibility and
                attracting new clients.
              </p>
            </div>

            <div className="flex-grow ">
              <a href="https://clearsightclinic.vercel.app/" target="_blank">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/clinic-project.png"
                    width={800}
                    height={800}
                    layout="responsive"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                    alt="graduacion"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-gray-100 h-[800px] mt-8 md:mt-0  w-auto flex flex-col justify-center "
        >
          <h2 className="subTitle md:-mt-16 mb-10 lg:w-[60%]  mx-auto ">
            Contact
          </h2>
          <EmailForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
