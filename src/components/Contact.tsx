import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12">
          Have a project in mind? Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:paarththapa2000@gmail.com" className="bg-slate-700 hover:bg-purple-600 p-4 rounded-full transition transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/Paarth11" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-purple-600 p-4 rounded-full transition transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/paarth-jung-thapa-830b45256/" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-purple-600 p-4 rounded-full transition transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;