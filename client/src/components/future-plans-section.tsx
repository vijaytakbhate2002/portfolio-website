import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Lightbulb, CheckCircle } from 'lucide-react';

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({ icon, title, items }) => {
  return (
    <Card className="bg-secondary/80 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <ul className="space-y-3 text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const FuturePlansSection: React.FC = () => {
  const careerGoals = [
    "Transition to a full-time AI Engineer role within 6 months",
    "Contribute to open-source ML/AI projects to build credibility",
    "Lead an AI implementation project within 1 year"
  ];

  const learningRoadmap = [
    "Complete advanced certifications in Deep Learning and LLMs",
    "Master MLOps practices and tools (Kubernetes, CI/CD for ML)",
    "Develop expertise in one specialized area (NLP, Computer Vision)"
  ];

  const projectIdeas = [
    "Experiment with hardware technologies and integrate AI with robotics",
    "Contribute to AI-driven robotics projects with like-minded people",
    "Build AI solutions that solve real-world problems through hardware integration"
  ];

  return (
    <section id="future" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Plans</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My vision and roadmap for future growth as an AI Engineer.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600" 
              alt="Future tech concept" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/80"></div>
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Career Goals */}
              <PlanCard 
                icon={<Briefcase className="text-primary text-2xl" />}
                title="Career Goals"
                items={careerGoals}
              />
              
              {/* Learning Roadmap */}
              <PlanCard 
                icon={<GraduationCap className="text-primary text-2xl" />}
                title="Learning Roadmap"
                items={learningRoadmap}
              />
              
              {/* Project Ideas */}
              <PlanCard 
                icon={<Lightbulb className="text-primary text-2xl" />}
                title="Project Ideas"
                items={projectIdeas}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlansSection;
