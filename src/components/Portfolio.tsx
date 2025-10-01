import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI Healthcare Chatbot",
      category: "AI Solution",
      description: "Intelligent medical assistant providing 24/7 patient support and preliminary diagnostics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
    },
    {
      title: "CuraCode Platform",
      category: "Healthcare Tech",
      description: "Comprehensive healthcare management system with AI-powered analytics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
    },
    {
      title: "Predictive Analytics Dashboard",
      category: "AI Analytics",
      description: "Real-time business intelligence dashboard with machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Smart Safety App",
      category: "AI Safety",
      description: "AI-powered safety monitoring system for emergency detection and response.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      title: "E-Commerce Automation",
      category: "AI Automation",
      description: "Intelligent workflow automation for inventory and customer management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop"
    },
    {
      title: "Medify App",
      category: "Mobile App",
      description: "Cross-platform healthcare application with AI symptom checker.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing AI-powered solutions that drive real impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover-glow cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center text-primary font-medium">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
