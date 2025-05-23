import React from 'react';
import { Network, Calendar, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const PillarsSection = () => {
  const pillars = [
    {
      title: "Network",
      description: "Building a collaborative ecosystem of students, universities, and corporate partners across Europe.",
      icon: <Network className="h-12 w-12 text-white" />,
      link: "/partners"
    },
    {
      title: "Events",
      description: "Organizing high-impact conferences, hackathons, and networking opportunities throughout Europe.",
      icon: <Calendar className="h-12 w-12 text-white" />,
      link: "/events"
    },
    {
      title: "Startup Incubator",
      description: "Supporting the next generation of European tech entrepreneurs with resources and mentorship.",
      icon: <Lightbulb className="h-12 w-12 text-white" />,
      link: "/join-us"
    }
  ];

  return (
    <AnimatedSection className="container-section mb-16 md:mb-48">
      <div className="text-center mb-16 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <h2 className="section-title">Our Pillars</h2>
        <p className="text-xl text-left text-gray-600 max-w-3xl">
          EuroTech Federation stands on three foundational pillars that guide our mission to position Europe as a global tech leader.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <Card key={index} className="card-hover bg-eurotech-blue">
            <CardHeader>
              <div className="mb-4">{pillar.icon}</div>
              <CardTitle className="text-2xl font-heading text-white">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-white">{pillar.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <a 
                href={pillar.link} 
                className="text-white font-medium flex items-center hover:underline"
              >
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default PillarsSection;
