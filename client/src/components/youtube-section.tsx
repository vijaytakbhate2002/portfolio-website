import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { YoutubeIcon, PlayCircle, ThumbsUp, MessageSquare } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

interface VideoCardProps {
  title: string;
  views: string;
  timestamp: string;
  likes: string;
  comments: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, views, timestamp, likes, comments }) => {
  return (
    <Card className="bg-secondary rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <div className="w-full h-0 pb-[56.25%] relative bg-secondary">
          <div className="absolute inset-0 flex items-center justify-center">
            <FaYoutube className="text-red-600 text-5xl" />
            <span className="font-mono absolute bottom-4 left-4 text-muted-foreground">// YouTube Video Embed</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h4 className="font-medium mb-2">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">{views} • {timestamp}</span>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <ThumbsUp className="text-primary h-4 w-4 mr-1" />
              <span className="text-sm">{likes}</span>
            </span>
            <span className="flex items-center">
              <MessageSquare className="text-primary h-4 w-4 mr-1" />
              <span className="text-sm">{comments}</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface PlaylistCardProps {
  title: string;
  description: string;
  videos: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, videos }) => {
  return (
    <Card className="bg-secondary rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <div className="w-full h-0 pb-[56.25%] relative bg-secondary">
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="text-primary text-5xl" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-secondary/80 px-2 py-1 rounded text-xs">
          {videos} videos
        </div>
      </div>
      <CardContent className="p-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

const YouTubeSection: React.FC = () => {
  const videos = [
    {
      title: "Building Your First ML Pipeline with MLflow",
      views: "15K views",
      timestamp: "2 weeks ago",
      likes: "632",
      comments: "48"
    },
    {
      title: "Docker for Data Scientists - Complete Guide",
      views: "23K views",
      timestamp: "1 month ago",
      likes: "1.2K",
      comments: "87"
    }
  ];

  const playlists = [
    {
      title: "Python for ML Beginners",
      description: "Complete guide to Python basics for ML",
      videos: "5"
    },
    {
      title: "NLP Projects from Scratch",
      description: "Build real NLP applications step by step",
      videos: "8"
    },
    {
      title: "MLOps Essentials",
      description: "Deploy and manage ML models in production",
      videos: "6"
    },
    {
      title: "Deep Learning with TensorFlow",
      description: "Building neural networks for various tasks",
      videos: "4"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">YouTube Channel</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights through video content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Channel Info */}
          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <YoutubeIcon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Deep Neural</h3>
                  <p className="text-muted-foreground">AI & ML Educational Content</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Sharing practical knowledge about AI, Machine Learning, and programming through tutorials and project walkthroughs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 h-4 w-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>1.2K Subscribers</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 h-4 w-4"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    <span>24 Videos</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                <a href="https://www.youtube.com/@VijayTakbhate" target="_blank" rel="noopener noreferrer">
                  <YoutubeIcon className="mr-2 h-4 w-4" /> Subscribe to Channel
                </a>
              </Button>
            </CardContent>
          </Card>
          
          {/* Featured Videos */}
          <div className="lg:col-span-2 space-y-6">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </div>
        
        {/* Playlist Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Popular Playlists</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <PlaylistCard key={index} {...playlist} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
