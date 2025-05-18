import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, GraduationCap, Briefcase, Award, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional background, education, and qualifications.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center">
                <GraduationCap className="text-primary text-2xl mr-4" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Bachelor of Technology</h4>
                  <p className="text-primary">Electronics and Telecommunication</p>
                  <p className="text-sm text-muted-foreground">SVERI's College Of Engineering</p>
                  <p className="text-sm text-muted-foreground">Graduated May 2024 • Score: 81.71</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Diploma</h4>
                  <p className="text-primary">Electronics and Telecommunication</p>
                  <p className="text-sm text-muted-foreground">SVERI's College Of Engineering</p>
                  <p className="text-sm text-muted-foreground">Graduated May 2021 • Score: 91.73</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Experience */}
          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <div className="mb-6 flex items-center">
                <Briefcase className="text-primary text-2xl mr-4" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Risk Analyst</h4>
                  <p className="text-primary">Incred Financial Services</p>
                  <p className="text-sm text-muted-foreground">Dec 2024 – Present</p>
                  <p className="text-sm text-muted-foreground mt-2">Analyzing financial data and identifying potential risks. Utilizing data-driven approaches to support decision-making processes.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Automation Engineer</h4>
                  <p className="text-primary">Fox Solutions Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">Jun 2024 – Oct 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">Worked with PLC and SCADA systems, focusing on automating processes and optimizing operational efficiency.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Python Developer Intern</h4>
                  <p className="text-primary">Cei Design Consultancy Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">Aug 2024 – Sept 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">Specialized in data processing using Python and Excel for data tasks and OpenCV for image processing.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Subject Matter Expert Intern</h4>
                  <p className="text-primary">Ujucode</p>
                  <p className="text-sm text-muted-foreground">Aug 2023 – Oct 2023</p>
                  <p className="text-sm text-muted-foreground mt-2">Contributed as a Python developer for a ChatBot project. Handled backend development tasks while researching Python modules.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications & Languages */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="bg-secondary">
              <CardContent className="pt-6">
                <div className="mb-6 flex items-center">
                  <Award className="text-primary text-2xl mr-4" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">MLOps Bootcamp</h4>
                  <p className="text-primary">Mastering AI Operations for Success - AIOps</p>
                  <p className="text-sm text-muted-foreground">Udemy Course • Jun 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">Comprehensive knowledge of the Machine Learning Operations (MLOps) lifecycle and modular programming.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Languages & Soft Skills */}
            <Card className="bg-secondary">
              <CardContent className="pt-6">
                <div className="mb-6 flex items-center">
                  <MessageSquare className="text-primary text-2xl mr-4" />
                  <h3 className="text-xl font-semibold">Languages & Soft Skills</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/20 text-primary hover:bg-primary/30">English</Badge>
                    <Badge variant="outline" className="bg-primary/20 text-primary hover:bg-primary/30">Marathi</Badge>
                    <Badge variant="outline" className="bg-primary/20 text-primary hover:bg-primary/30">Hindi</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-600/20 text-primary hover:bg-purple-600/30">Critical Thinking</Badge>
                    <Badge variant="outline" className="bg-purple-600/20 text-primary hover:bg-purple-600/30">Intellectual Rigor</Badge>
                    <Badge variant="outline" className="bg-purple-600/20 text-primary hover:bg-purple-600/30">Problem Solving</Badge>
                    <Badge variant="outline" className="bg-purple-600/20 text-primary hover:bg-purple-600/30">Business Understanding</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <Button className="shadow-lg shadow-primary/20 inline-flex items-center" asChild>
            <a href="@assets/Vijay_Takbhate_Resume (2).pdf" download="Vijay_Takbhate_Resume.pdf">
              <FileDown className="mr-2 h-4 w-4" /> Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
