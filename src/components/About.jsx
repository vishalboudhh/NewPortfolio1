import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-900 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-blue-500 text-4xl md:text-6xl font-bold text-center md:text-left">About</h1>
          <p className="text-white mt-4 text-lg md:text-2xl text-center md:text-justify">
            Hi, I'm Vishal Meshram, a passionate MERN Stack Developer with a strong foundation in web development. I specialize in building dynamic and responsive applications using MongoDB, Express.js, React, and Node.js. In addition to MERN, I have hands-on experience with MySQL, JavaScript, and C++, and a solid grasp of Python basics. I also have a keen interest in Data Structures and Algorithms (DSA) with C++, which helps me write efficient and scalable code. I'm always eager to learn new technologies and enhance my skills to develop innovative solutions.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center p-4">
          <img 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover" 
            src="https://media.licdn.com/dms/image/v2/D4D03AQGRKx624qt0nA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693910085890?e=1746057600&v=beta&t=0mo7oQoMFnQJo5qqt6hsDETg_KhVYUvnYPTL5reDS2U" 
            alt="Vishal Meshram" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
