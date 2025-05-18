import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypedText } from '@/hooks/use-typed-text';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const { typedText, cursor } = useTypedText([
    "AI Engineer",
    "ML Enthusiast",
    "Python Developer",
    "Data Specialist"
  ], 100, 2000);

  return (
    <section id="home" className="pt-20 md:pt-0">
      <div className="relative min-h-screen flex items-center justify-center bg-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{backgroundImage: "url('https://pixabay.com/get/g29a17bd712862acbf6e6bf193a88c05ad3b2f211b4cd3acd4e1ace36b9ad503120e0b432c1f634b1acda68d42b2a7fa52d53ff2bb980025dc428f26df3d3788d_1280.jpg')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-primary-light"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Profile Image with Shadow */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary shadow-2xl shadow-primary/20">
                <img 
                  src="@assets/profile-pic (1).png" 
                  alt="Vijay Takbhate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="font-mono text-primary mb-2">// Hello World</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                I'm <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">Vijay Takbhate</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-6">
                <span>{typedText}</span>
                <span className={`text-primary ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Currently working as a Risk Analyst at Incred Financial Services with a passion for AI and Machine Learning. 
                Transforming complex data into impactful solutions.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild className="shadow-lg shadow-primary/20">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#resume">View Resume</a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/vijaytakbhate2002" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://linkedin.com/in/vijay-takbhate" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://kaggle.com/vijaytakbhate" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <FaKaggle className="text-2xl" />
                </a>
                <a href="mailto:vijaytakbhate20@gmail.com" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <FaEnvelope className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#resume" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
