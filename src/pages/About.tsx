import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Flag, Network, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerGrid from '@/components/PartnerGrid';
import { universities } from '@/data/partnersData';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  const goals = [
    {
      title: "Build an Active European Tech Network",
      description: "Create a vibrant community of students, professionals, and institutions across Europe to foster collaboration and innovation.",
      icon: <Network className="h-12 w-12 text-white" />,
    },
    {
      title: "Organize Flagship Events",
      description: "Host high-impact conferences, hackathons, and networking events across European cities to showcase talent and ideas.",
      icon: <Flag className="h-12 w-12 text-white" />,
    },
    {
      title: "Launch a Pan-European Startup Accelerator",
      description: "Support emerging tech entrepreneurs with resources, mentorship, and funding opportunities to create the next generation of European tech leaders.",
      icon: <Briefcase className="h-12 w-12 text-white" />,
    },
  ];

  // Updated leadership team with correct information
  const team = [
    {
      name: "Clément Sporrer",
      role: "Vice President @EuroTech",
      university: "ESSEC Business School",
      linkedin: "https://www.linkedin.com/in/clementsporrer/",
      image: "/lovable-uploads/b48a4ca7-0621-46f8-990b-809affd8341d.png"
    },
    {
      name: "Stanislas Michel",
      role: "President @EuroTech",
      university: "ESSEC Business School & Fundação Getulio Vargas",
      linkedin: "https://www.linkedin.com/in/stanislas-michel-675b18224/",
      image: "/lovable-uploads/05f48d13-7ec0-4300-8d2f-fb18a60ad628.png"
    },
    {
      name: "Louise Maunoir",
      role: "Head of Community @EuroTech",
      university: "",
      linkedin: "https://www.linkedin.com/in/louise-scarlette-maunoir/",
      image: "/1743672427395.jpeg"
    },
    {
      name: "Fawzi Elghazoui",
      role: "Research Lead Defense @EuroTech",
      university: "ESILV",
      linkedin: "https://www.linkedin.com/in/favsidv/",
      image: "/lovable-uploads/1744305940400.jpeg"
    },
    {
      name: "Nicolas Bigeard",
      role: "Head of Summit @EuroTech",
      university: "ESILV",
      linkedin: "https://www.linkedin.com/in/nicolas-bigeard-b12687272/",
      image: "/lovable-uploads/cbe74abd-6016-4e3a-87f4-b60934900860.png"
    },
    {
      name: "Laurenz Sommerlad",
      role: "Head of Incubator @EuroTech",
      university: "TUM",
      linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
      image: "/lovable-uploads/1682378092540.jpeg"
    },
    {
      name: "Alessia Antonielli",
      role: "Community Manager @EuroTech",
      university: "ESSEC Business School",
      linkedin: "https://www.linkedin.com/in/alessia-antonielli/",
      image: "/lovable-uploads/1722526280418.jpeg"
    },
    {
      name: "Enguerrand Perrine",
      role: "Head of switzerland @EuroTech",
      university: "",
      linkedin: "https://www.linkedin.com/in/enguerrand-perrine-459178224/",
      image: "/1706383800501.jpeg"
    }, // 1743672427395.jpeg
    {
      name: "Salim Boujaddi",
      role: "Head of IT @EuroTech",
      university: "",
      linkedin: "https://www.linkedin.com/in/salim-boujaddi/",
      image: "/1742235768480.jpeg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-eurotech-blue text-white pt-16">
          <div className="container-section py-4">
            <div className="max-w-3xl min-h-96 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-eurotech-gray">About EuroTech Federation</h1>
              <p className="text-xl mb-6">
                EuroTech Federation is the largest student-led tech network in Europe, 
                bringing together top universities, student associations, and corporate partners.
              </p>
              <Link to="/join-us">
                <ActionButton variant="secondary">
                  Join Our Mission
                </ActionButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <AnimatedSection className="container-section pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-eurotech-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                EuroTech Federation aims to position Europe as a global leader in technology 
                innovation through a united and collaborative network of students, startups, 
                and institutions.
              </p>
              <p className="text-lg text-gray-700">
                We believe in the power of connection and collaboration across borders, 
                institutions, and disciplines to drive technological advancement and 
                create opportunities for Europe's brightest minds.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left text-eurotech-blue mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                A connected Europe where talent, ideas, and resources flow seamlessly 
                across borders to create world-leading technology innovations and 
                solutions.
              </p>
              <p className="text-lg text-gray-700">
                We envision a future where European tech talent has access to the 
                networks, knowledge, and opportunities needed to thrive on the global stage.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Goals */}
        <AnimatedSection className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center md:text-left">Our Goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {goals.map((goal, index) => (
                <Card key={index} className="card-hover bg-eurotech-blue h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4">{goal.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                    <p className="text-white">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Universities represented */}
        <AnimatedSection className="container-section py-16 md:py-24">
          <PartnerGrid 
            title="Universities represented" 
            partners={universities} 
            buttonLink="/partners"
            showTitle={true}
          />
        </AnimatedSection>

        {/* Our Team */}
        <AnimatedSection className="bg-eurotech-gray py-16 md:py-24">
          <div className="container-section">
            <h2 className="text-3xl md:text-4xl font-bold text-eurotech-blue mb-12 text-center md:text-left">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-eurotech-blue">{member.name}</h3>
                    <p className="text-eurotech-blue font-medium">{member.role}</p>
                    <p className="text-eurotech-blue mb-3">{member.university}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-eurotech-blue hover:underline flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default About;
