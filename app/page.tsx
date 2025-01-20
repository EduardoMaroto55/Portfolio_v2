"use client";

import Image from "next/image";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { motion } from "framer-motion";
import EmailForm from "./(components)/EmailForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ScrollToTopButton from "./(components)/ScrollToTopButton";
import bussinesSvg from '../public/bussines.svg';

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <motion.section
          id="home"
          className="flex flex-col mt-44 p-10 items-center h-[70vh]  justify-center md:mt-0  md:flex-row md:h-[100vh]  lg:gap-x-40 md:items-center  md:justify-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
        </motion.section>

        <ScrollToTopButton />

        <motion.section
          id="about"
          className="bg-gray-100 h-[850px] md:h-[800px] mt-28 md:mt-0 w-auto flex flex-col justify-center px-10"
        >
          <div className="w-auto flex flex-col justify-center max-w-screen-xl mx-auto  ">
            <h2 className="subTitle md:-mt-16 mb-10  md:mx-0   ">About</h2>

            <div className="flex flex-col-reverse justify-center items-center max-w-6xl mx-auto md:gap-44 md:flex-row">
              <div className="flex-grow ">
                <a href="https://www.ulatina.ac.cr/" target="_blank">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/graduacion.jpeg"
                      width={700}
                      height={700}
                      className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
                      alt="graduacion"
                    />
                  </div>
                </a>
              </div>
              <div className="flex flex-col gap-y-6 mt-10">
                <h3 className="font-bold text-4xl">Quién Soy</h3>
                <p className="text-sm w-96 leading-6 text-gray-700">
                  Soy Eduardo Maroto, un apasionado ingeniero en sistemas recién
                  graduado con una sólida formación académica y un deseo
                  ferviente de contribuir al mundo tecnológico en constante
                  evolución.
                </p>

                <button className="w-fit text-xl border-blue-500 border rounded-xl px-6 py-3 hover:text-white hover:bg-blue-500 mb-12 md:mt-36">
                  <a href="/CV - Eduardo Maroto Molina .docx">Download CV</a>
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className=" h-[900px] md:h-[700px]  w-auto flex flex-col justify-center max-w-screen-xl md:mx-auto  px-10"
        >
          <div className="w-auto flex flex-col justify-center max-w-screen-xl md:mx-auto  ">
            <h2 className="subTitle md:-mt-16 mb-10  mt-16 md:mx-0  ">
              Projects
            </h2>
            <div className="flex flex-col md:flex-row justify-center  items-center max-w-6xl md:mx-auto gap-20 ">
              <div className="flex flex-col gap-y-6 md:px-0 px-7">
                <h3 className="font-bold text-4xl">
                  Crafting an Online Presence: Designing and Developing a
                  Clinic's Website
                </h3>
                <p className="text-sm w-96 leading-6 text-gray-700">
                  I designed and implemented a comprehensive website for an
                  optometry clinic in Heredia, focusing on promoting the brand
                  and showcasing its services and expertise. The project
                  involved creating intuitive user interfaces and optimizing the
                  user experience to ensure seamless navigation.
                </p>
              </div>

              <div className="flex-grow ">
                <a href="https://clearsightclinic.vercel.app/" target="_blank">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/clinic-project.png"
                      width={700}
                      height={700}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                      alt="graduación"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
        <section
          id="contact"
          className="bg-gray-100 h-[1300px] md:h-[900px] mt-28 md:mt-0 w-auto items-center flex flex-col justify-center px-10 "
        >
          <div className="w-auto flex flex-col justify-center max-w-screen-xl mx-auto  ">
            <h2 className="subTitle md:-mt-16 mb-10    ">Contact</h2>
            <div className="flex flex-col-reverse justify-center items-center max-w-6xl mx-auto md:gap-80  md:flex-row">
              <Image
                src={bussinesSvg}
                alt="contact photo"
                width={200}
                height={200}
                className="transition-transform duration-300 ease-in-out hover:scale-110 "
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <EmailForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
