import { Brain, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Velora</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An AI-driven freelance agency transforming ideas into intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-8 hover-glow">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-First Approach</h3>
            <p className="text-muted-foreground">
              We prioritize AI in everything we build. 80% of our work focuses on intelligent automation, 
              chatbots, and predictive analytics that drive real results.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover-glow">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Precision & Quality</h3>
            <p className="text-muted-foreground">
              Every project is crafted with attention to detail and delivered with excellence. 
              We don't just build; we engineer solutions that scale.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover-glow">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast & Agile</h3>
            <p className="text-muted-foreground">
              From startups to enterprises, we move fast without compromising quality. 
              Your AI solution, delivered efficiently and reliably.
            </p>
          </div>
        </div>

        <div className="bg-gradient-primary border border-border rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Velora, we believe AI isn't just the future—it's the present. We're here to help businesses, 
            startups, and students harness the power of artificial intelligence to solve real-world problems, 
            automate workflows, and unlock new opportunities. Whether it's a custom chatbot, a predictive 
            analytics dashboard, or a full-stack AI application, we're your partners in innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
