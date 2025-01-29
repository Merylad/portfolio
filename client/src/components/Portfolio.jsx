import React from "react";
import meryl from '../images/meryl.jpg'
import stay from '../images/staycaretaker1.jpg'
import stay2 from '../images/staycaretaker2.jpg'
import event from '../images/eventlyeasy1.png'
import event2 from '../images/eventlyeasy2.png'
import recipes from '../images/recipes1.png'
import recipes2 from '../images/recipes2.png'

import ContactForm from "./ContactForm";

const Portfolio = () => {
    return (
        <div className="font-sans bg-pink-50 min-h-screen">
          {/* Header */}
          <header className="bg-sky-700 text-white shadow-md">
  <nav className="flex flex-wrap justify-between items-center p-4">
    <p className="text-lg font-bold">Meryl ADJEDJ</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#home" className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-white text-sm sm:text-base">Home</a>
      <a href="#about" className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-white text-sm sm:text-base">About</a>
      <a href="#projects" className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-white text-sm sm:text-base">Projects</a>
      <a href="#contact" className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-lg text-white text-sm sm:text-base">Contact</a>
    </div>
  </nav>
</header>

{/* Welcome Section */}
<main className="jumbotron bg-gradient-to-b from-pink-100 to-pink-50 text-center py-12 px-4" id="home">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-left space-y-6 md:space-y-0 md:space-x-8">
    {/* Profile Image */}
    <img src={meryl} alt="Meryl Adjedj" className="h-52 w-52 rounded-full border-4 border-sky-500 shadow-md" />

    {/* Description */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">Hello and Welcome!</h1>
      <p className="text-lg sm:text-xl text-gray-800">
        I am <span className="font-bold text-sky-500">Meryl Adjedj</span> and I'm a Full-Stack Developer.
      </p>
      <div className="links mt-6 flex justify-center md:justify-start space-x-4 sm:space-x-6">
        <a className="text-sky-500 hover:text-pink-500 text-xl sm:text-2xl" href="https://www.facebook.com/meryl.benichou" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className="text-sky-500 hover:text-pink-500 text-xl sm:text-2xl" href="https://fr.linkedin.com/in/meryl-adjedj-208481235" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a className="text-sky-500 hover:text-pink-500 text-xl sm:text-2xl" href="https://github.com/Merylad/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</main>
    
          {/* About Section */}
<main className="aboutme bg-white p-8" id="about">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-sky-600">ABOUT ME</h1>
    <hr className="my-4 border-sky-400 mx-auto w-1/3" />
    
  </div>

  <div className="flex flex-col md:flex-row items-start justify-between">
    {/* Left Column - Description */}
    <div className="knowme md:w-1/2 md:pr-8 mb-8 md:mb-0">
      <h2 className="text-2xl font-bold text-sky-700 mb-4">Get to know me!</h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        After 10 years as a physiotherapist in France, I made Alyah and started
        from scratch learning programming with the amazing bootcamp{" "}
        <strong>
          <a
            href="https://developers.institute/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-sky-500 underline"
          >
            Developers Institute
          </a>
        </strong>
        . In 14 intensive weeks, I learned the basics to be a Full-Stack Developer. I am a fast learner and
        I'm willing to improve myself and continue learning.
      </p>
    </div>

   {/* Right Column - Skills */}
<div className="skills md:w-1/2 bg-pink-50 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-sky-700 mb-4 text-center">My Skills</h2>
  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800 text-lg text-center">
    <li>REACT</li>
    <li>REDUX TOOLKIT</li>
    <li>NODEJS</li>
    <li>TYPESCRIPT</li>
    <li>JAVASCRIPT</li>
    <li>PSQL</li>
    <li>PYTHON</li>
    <li>HTML / CSS</li>
  </ul>
</div>
  </div>
</main>
    
          {/* Projects Section */}
<main id="projects" className="p-8">
  <h1 className="text-3xl font-bold text-center text-sky-600 mb-4">PROJECTS</h1>
  <hr className="my-4 border-sky-400" />
  
  <div className="projectscontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Evently Easy */}
    <div className="project-card bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 hover:shadow-2xl">
      <img src={event} alt="evently easy" className="rounded-lg mb-4" />
      <h2 className="text-sky-700 font-bold text-center text-xl mb-2">
        EventlyEasy - React TS Redux and Node TS
      </h2>
      <div className="img-container bg-white rounded-lg shadow-md p-4 mb-4">
        <img src={event2} alt="evently easy" className="rounded-lg mb-4" />
        <p className="text-center">
          Deployed project:{" "}
          <a
            className="text-pink-500 hover:text-sky-500 underline"
            href="https://eventlyeasy.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EventlyEasy
          </a>
          {" "}GitHub link:{" "}
          <a
            className="text-pink-500 hover:text-sky-500 underline"
            href="https://github.com/Merylad/EventlyEasy"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </p>
      </div>
    </div>

    {/* Stay Caretaker */}
    <div className="project-card bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 hover:shadow-2xl">
      <img src={stay} alt="Stay Caretaker" className="rounded-lg mb-4" />
      <h2 className="text-sky-700 font-bold text-center text-xl mb-2">
        Stay Caretaker - React and NodeJS
      </h2>
      <div className="img-container bg-white rounded-lg shadow-md p-4 mb-4">
        <img src={stay2} alt="Stay Caretaker" className="rounded-lg mb-4" />
        <p className="text-center">
          GitHub link:{" "}
          <a
            className="text-pink-500 hover:text-sky-500 underline"
            href="https://github.com/Merylad/StayCareTaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </p>
      </div>
    </div>

    {/* Recipes Blog */}
    <div className="project-card bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 hover:shadow-2xl">
      <img src={recipes} alt="recipes" className="rounded-lg mb-4" />
      <h2 className="text-sky-700 font-bold text-center text-xl mb-2">
        Recipes Blog - Node JS and Javascript
      </h2>
      <div className="img-container bg-white rounded-lg shadow-md p-4 mb-4">
        <img src={recipes2} alt="recipes" className="rounded-lg mb-4" />
        <p className="text-center">
          GitHub link:{" "}
          <a
            className="text-pink-500 hover:text-sky-500 underline"
            href="https://github.com/Merylad/hackthon2/tree/main/RecipesApi"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </p>
      </div>
    </div>

  </div>
</main>

      <ContactForm />
        </div>
      );
};

export default Portfolio;
