import React from 'react';
import { Mail,Twitter, Linkedin, Instagram, MessageCircle, Copyright, Github } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail size={24} />,
      href: 'malaykhant.official@gmail.com',
      displayText: 'malaykhant.official@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/malay-khant-a011182b5',
      displayText: 'Malay Khant',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      href: 'https://x.com/M0RTAL_10?t=sg13EtWoYJREq8O3WrfrZw&s=09',
      displayText: '@M0RTAL_10',
      color: 'from-gray-700 to-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/malay_khant?igsh=MXhqbDZwNHFoZXpsMA==',
      displayText: '@malay_khant',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Discord',
      icon: <MessageCircle size={24} />,
      href: 'https://discord.com/users/mortal.10',
      displayText: '@mortal.10',
      color: 'from-blue-900 to-blue-900'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/M0RTALx',
      displayText: 'M0RTALx',
      color: 'from-purple-700 to-black-500'
    },

  

  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300">
            Get in touch with me through any of these platforms
          </p>
        </div>

        <div className="relative">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                <div className="flex items-center gap-4 p-6">
                  {/* Icon Container */}
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30`}>
                    {link.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white/90 transition-colors duration-300">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {link.displayText}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Copyright Notice */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mt-12 pt-8 border-t border-white/10">
            <Copyright size={16} />
            <p>2025 Malay Khant. All rights reserved.</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Contact;