import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSending(true);

    try {
      await emailjs.send(
        'service_aano85p',
        'template_527pkck',
        formData,
        'kN2zNc9Bks6H8-A7f'
      );
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message', error);
      toast.error('Failed to send message');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="h-screen py-12 px-6 bg-gray-900 text-white">



      <h2 className="text-center text-4xl font-bold mt-10 mb-8 text-cyan-400">Let's Connect</h2>
      <div className="max-w-lg mx-auto p-8 bg-gray-800 shadow-lg rounded-2xl">
        <Toaster />
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
            ></textarea>
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <p className='mt-2 text-center'>To contact me send me mail</p>
        <p className="mt-2 text-center">Email:- vishalmeshram2111@gmail.com</p>
      </div>

      <ul className="flex justify-center space-x-6 mt-12">
        <li>
          <a
            href="https://www.linkedin.com/in/vishal-meshram-67a99b227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-cyan-500 transition-colors" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vishalboudhh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-cyan-500 transition-colors" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/vishalmeshram298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-3xl hover:text-cyan-500 transition-colors" />
          </a>
        </li>
        <li>
          <a
            href="https://www.geeksforgeeks.org/user/vishalmesj08n/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks className="text-4xl hover:text-cyan-500 transition-colors" />
          </a>
        </li>
      </ul>

    </section>
  );
};

export default Contact;
