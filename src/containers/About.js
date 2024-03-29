import React from "react";
//this is about page
export default function About() {
   return (
      <section id="about">
         <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi, I'm Akash Verma.
                  <br className="hidden lg:inline-block" />I love to build amazing
                  apps.
               </h1>
               <p className="mb-8 leading-relaxed">
                  Corona has confined us to our home. Work from home is the new normal.
                  ‘Exam-time’ is a web application that works with a centralized network of
                  Schools/Institutes. It helps teachers to build their assignments easily and
                  effortlessly. Teachers can post their test/quiz in the application which will be
                  stored in the database.Student can submit the test and view their result in real
                  time.
                  In frontend our application used the REACT which is the most used
                  javascript library. Apart from it HTML, CSS and JAVASCRIPT was also used in
                  frontend. In the backend we have used DJANGO, the python backend
                  framework. Thus making our site secure and easy to maintain.
               </p>
               <div className="flex justify-center">
                  <a
                     href="https://github.com/akashverma911/ExamTime"
                     className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                     Link to my Project
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
