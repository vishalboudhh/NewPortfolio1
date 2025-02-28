import React from 'react';

const Skills = () => {
    return (
        <section id='skills' className="h-screen flex items-start flex-col  justify-center pl-10 bg-[#222834] overflow-hidden mb-28">
            {/* Description Section */}
            <div className="flex flex-col items-start justify-items-stretch text-center mb-8 w-[700px] ml-40" >
                <h1 className="text-cyan-500 text-6xl font-bold mt-14 m-2">
                    Skills
                </h1>
                <p className="text-white  text-justify text-2xl">
                    I design responsive websites using HTML, CSS, and JavaScript.  
                    I build dynamic applications with MongoDB, Express, React, and Node.js.  
                    I leverage C++ and Python to solve complex challenges efficiently.  
                    Together, these skills empower me to create engaging digital experiences.
                </p>
            </div>
            {/* Scrolling Images Section */}
            <div className="w-full overflow-hidden">
                <div className="flex gap-6 items-center animate-scroll whitespace-nowrap h-96">
                    <img
                        src="https://astconsulting.in/wp-content/uploads/2023/08/MongoDB-sm-logo-500x400-1-1.gif"
                        alt="MongoDB Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://external-preview.redd.it/learn-express-js-a-beginner-friendly-step-by-step-guide-v0-hE7Pn4a6ZRCe82cUQnRhXPmvzcp12NG5m8qnWsOpsGI.jpg?auto=webp&s=ac7405a8046d97bae600b10cf191279e612984e7"
                        alt="Express.js Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                        alt="React Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://i.pinimg.com/564x/79/c5/1d/79c51d0e3a3f60b504da6bcc20ab1afc.jpg"
                        alt="Node.js Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://i.pinimg.com/736x/99/f8/87/99f887833c475448723d3c9ac16c179b.jpg"
                        alt="C++ Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://i.pinimg.com/736x/95/91/ed/9591ed82caa8d20c30db96cb7298d3a9.jpg"
                        alt="Python Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://i.pinimg.com/280x280_RS/c0/5f/86/c05f86bf91897a9e17b3393dff3cc99e.jpg"
                        alt="JavaScript Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://i.pinimg.com/736x/44/59/32/4459321c4e61adc58c584aa00788d148.jpg"
                        alt="HTML Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://www.coywolf.news/wp-content/uploads/2024/11/official-css-logo.webp"
                        alt="CSS Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                    <img
                        src="https://seekvectors.com/files/download/2f011e704ba684c76c525947800754c4.jpg"
                        alt="MySql Logo"
                        className="w-40 h-38 rounded-2xl"
                    />
                </div>
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Skills;
