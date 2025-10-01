import { Bot, Workflow, BarChart3, Shield, Globe, Smartphone, Code, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const aiServices = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Custom intelligent chatbots for websites and apps with natural language processing and context awareness."
    },
    {
      icon: Workflow,
      title: "AI Automation Tools",
      description: "Streamline workflows with intelligent automation that learns and adapts to your business processes."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Smart dashboards powered by machine learning for data-driven insights and forecasting."
    },
    {
      icon: Shield,
      title: "AI Safety & Healthcare",
      description: "Innovative AI solutions for safety monitoring, health diagnostics, and patient care management."
    }
  ];

  const techServices = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with React and cutting-edge web technologies."
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications using Flutter and native Android development."
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements."
    },
    {
      icon: GraduationCap,
      title: "Student Projects",
      description: "Academic project assistance including final year projects, apps, and research implementations."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI and tech solutions tailored to your needs
          </p>
        </div>

        {/* AI Services - 80% */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-3xl font-bold">AI Solutions</h3>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">80% Focus</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-card border-border hover-glow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tech Services - 20% */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-3xl font-bold">Tech Projects</h3>
            <span className="px-3 py-1 rounded-full bg-muted text-foreground text-sm font-semibold">20% Focus</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-card border-border hover-glow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
