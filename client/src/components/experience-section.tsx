import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  isRight?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date, title, company, description, tags, isRight = false
}) => {
  return (
    <div className={cn(
      "relative flex flex-col md:items-center mb-16",
      isRight 
        ? "md:flex-row-reverse md:justify-between" 
        : "md:flex-row md:justify-between"
    )}>
      {/* Date & Role */}
      <div className={cn(
        "md:w-5/12 mb-6 md:mb-0",
        isRight ? "md:text-left md:pl-8" : "md:text-right md:pr-8"
      )}>
        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
          {date}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-primary">{company}</p>
      </div>
      
      {/* Content */}
      <div className={cn(
        "relative md:w-5/12 bg-secondary p-6 rounded-xl shadow-lg",
        isRight ? "md:pr-8" : "md:pl-8",
        "before:content-[''] before:absolute before:w-3.5 before:h-3.5 before:rounded-full before:bg-primary",
        isRight ? "before:left-[-28px] before:top-8" : "before:right-[-28px] before:top-8",
        "before:hidden md:before:block"
      )}>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-purple-600/20 text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      date: "Dec 2024 - Present",
      title: "Risk Analyst",
      company: "Incred Financial Services",
      description: "Working as a Risk Analyst since December 4th, 2024, analyzing financial data and identifying potential risks. Utilizing data-driven approaches to support decision-making processes and implementing risk mitigation strategies.",
      tags: ["Risk Analysis", "Data Analytics", "Financial Services"]
    },
    {
      date: "Jun 2024 – Oct 2024",
      title: "Automation Engineer",
      company: "Fox Solutions Pvt. Ltd.",
      description: "Worked with PLC and SCADA systems, focusing on automating processes and optimizing operational efficiency. Collaborated with cross-functional teams to implement automation solutions for industrial applications.",
      tags: ["PLC", "SCADA", "Automation"]
    },
    {
      date: "Aug 2024 – Sept 2024",
      title: "Python Developer Intern",
      company: "Cei Design Consultancy Pvt. Ltd.",
      description: "As a Python developer, specialized in data processing by utilizing Python and Excel for data tasks and OpenCV for image processing. Applied programming skills to solve complex data challenges.",
      tags: ["Python", "OpenCV", "Data Processing"]
    },
    {
      date: "Aug 2023 – Oct 2023",
      title: "Subject Matter Expert Intern",
      company: "Ujucode",
      description: "Contributed as a Python developer for a ChatBot project. Handled backend development tasks while concurrently researching Python modules to enhance functionality and performance.",
      tags: ["ChatBot", "Backend", "Research"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My career path and professional experiences.</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:translate-x-px hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              {...exp} 
              isRight={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
