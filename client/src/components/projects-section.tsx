import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, description, tags, imageUrl, demoUrl, codeUrl 
}) => {
  return (
    <Card className="hover:translate-y-[-5px] transition-all duration-300 bg-secondary overflow-hidden shadow-lg">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex mb-3 space-x-2 flex-wrap gap-y-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex justify-between">
          {demoUrl && (
            <a href={demoUrl} className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center">
              <Github className="h-4 w-4 mr-1" /> Source Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Twitter Post Sentiment Prediction",
      description: "Engineered an ETL pipeline with PySpark and SQL for sentiment analysis using NLP techniques. Monitored performance through MLFlow on Databricks.",
      tags: ["NLP", "PySpark", "MLFlow"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Text-Text Chat-Bot",
      description: "Advanced Text-Text Chat-Bot using the NVIDIA API with prompt engineering for diverse functionalities including paraphrasing, grammar correction, and more.",
      tags: ["LLM", "Flask", "NVIDIA API"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Hand Gesture Recognition",
      description: "Leveraged Google's MediaPipe framework to detect hand landmarks and gestures with a custom CNN model, developed into a Streamlit application.",
      tags: ["MediaPipe", "CNN", "Streamlit"],
      imageUrl: "https://images.unsplash.com/photo-1591258370814-01609b341790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing my technical capabilities through real-world applications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
