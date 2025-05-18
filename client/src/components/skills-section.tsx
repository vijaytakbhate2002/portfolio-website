import React, { useEffect, useRef } from 'react';
import { 
  Code, Laptop, Brain, 
  Database, Github, Server, 
  Activity, BarChart, Cloud 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FaPython, FaDocker } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full" ref={barRef}>
        <div 
          className={cn(
            "h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000",
            isVisible ? "" : "w-0"
          )}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-secondary rounded-xl">
      <div className="text-4xl text-primary mb-3">{icon}</div>
      <span>{name}</span>
    </div>
  );
};

interface AISkillCardProps {
  title: string;
  description: string;
  colorClass: string;
}

const AISkillCard: React.FC<AISkillCardProps> = ({ title, description, colorClass }) => {
  return (
    <div className="bg-secondary p-4 rounded-xl text-center">
      <div className={`w-full h-1 ${colorClass} mb-3`}></div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const programmingSkills = [
    { name: "Python", percentage: 90 },
    { name: "SQL", percentage: 85 },
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 75 }
  ];

  const technologies = [
    { icon: <FaPython />, name: "Streamlit" },
    { icon: <FaPython />, name: "Flask" },
    { icon: <Github />, name: "GitHub" },
    { icon: <Database />, name: "MySQL" },
    { icon: <Activity />, name: "MLflow" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <BarChart />, name: "PySpark" },
    { icon: <Server />, name: "Databricks" },
    { icon: <Cloud />, name: "GCP" }
  ];

  const aiSkills = [
    { 
      title: "Natural Language Processing", 
      description: "Text analysis, sentiment analysis, and language models",
      colorClass: "bg-primary"
    },
    { 
      title: "Computer Vision", 
      description: "Image recognition, object detection with MediaPipe",
      colorClass: "bg-purple-600"
    },
    { 
      title: "Data Engineering", 
      description: "ETL pipelines, data processing, and transformation",
      colorClass: "bg-primary"
    },
    { 
      title: "MLOps", 
      description: "Model deployment, monitoring, and lifecycle management",
      colorClass: "bg-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and proficiency in various technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-3" />
              Programming Languages
            </h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          {/* Technologies & Frameworks */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center">
              <Laptop className="text-primary mr-3" />
              Technologies & Frameworks
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <TechIcon key={index} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
        
        {/* AI & ML Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center flex items-center justify-center">
            <Brain className="text-primary mr-3" />
            AI & Machine Learning Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiSkills.map((skill, index) => (
              <AISkillCard 
                key={index} 
                title={skill.title} 
                description={skill.description} 
                colorClass={skill.colorClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
