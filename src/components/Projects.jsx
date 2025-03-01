import React from 'react';

const Projects = () => {
  return (
    <section className="min-h-screen py-10 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-center text-blue-500 text-4xl md:text-6xl mt-10 mb-12">
          Projects
        </h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <img
              onClick={() => window.open('https://vishalmeshram-todolist.netlify.app/', '_blank')}
              src="https://media.istockphoto.com/id/1384700413/vector/to-do-list-with-clipboard.jpg?s=612x612&w=0&k=20&c=naH67PLQVD5JuC9Z96DFTw8gZT3waRNOgOL23UyHRFw="
              alt="Todo List"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Todo List</h3>
              <p>Todo list using React.js</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <img
              onClick={() => window.open('https://doctorappointmentsystem-lq6g.onrender.com/login', '_blank')}
              src="https://gloriumtech.com/wp-content/uploads/2021/12/Doctor-Appointment-Scheduling-App-Development_-Features-Solutions.png"
              alt="Doctor Appointment Booking System"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Doctor Appointment Booking System
              </h3>
              <p>Doctor appointment booking system built using MERN.</p>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-600 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <img
              onClick={() => window.open('https://github.com/vishalboudhh/bookManagementsystem', '_blank')}
              src="https://edusuitepk.b-cdn.net/wp-content/uploads/2021/12/Distinctive-Features-of-a-Library-Management-System.jpg"
              alt="Book Management System"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Book Management System
              </h3>
              <p>Book management system built using MERN.</p>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-gray-600 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <img
              onClick={() => window.open('https://chat-app-node-react-63le.vercel.app/', '_blank')}
              src="https://cdn.vectorstock.com/i/500p/38/05/chat-talk-communication-logo-vector-19963805.jpg"
              alt="Chat App"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Chat App
              </h3>
              <p>Chat app built using React and Node.js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
