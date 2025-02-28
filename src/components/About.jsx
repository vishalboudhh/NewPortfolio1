import React from 'react'

const About = () => {
    return (

        <>
            <section className='h-screen' id='about'>
                <div className='flex justify-between p-48'>

                    <div className=''>
                        <h1 className='text-blue-500 text-6xl font-bold'>About</h1>

                        <p className='text-white mt-4 pr-28 text-justify text-2xl'>Hi, I'm Vishal Meshram, a passionate MERN Stack Developer with a strong foundation in web development. I specialize in building dynamic and responsive applications using MongoDB, Express.js, React, and Node.js. In addition to MERN, I have hands-on experience with MySQL, JavaScript, and C++, and a solid grasp of Python basics. I also have a keen interest in Data Structures and Algorithms (DSA) with C++, which helps me write efficient and scalable code. I'm always eager to learn new technologies and enhance my skills to develop innovative solutions.</p>
                    </div>

                    <div className='w-full'>
                        <img className='rounded-full ' src="https://media.licdn.com/dms/image/v2/D4D03AQGRKx624qt0nA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693910085890?e=1746057600&v=beta&t=0mo7oQoMFnQJo5qqt6hsDETg_KhVYUvnYPTL5reDS2U" alt="vishal" />
                    </div>

                </div>
            </section>

        </>

    )
}

export default About