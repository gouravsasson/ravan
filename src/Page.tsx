import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  Phone,
  MessageSquare,
  Smile,
  DollarSign,
  Check,
  PlayCircle,
  Flag,
  Headphones,
  BrainCircuit,
  Globe2,
  Users,
  Zap,
  Building2,
  BarChart3,
  PhoneForwarded,
  Clock,
  Settings,
  Link,
  Menu,
  Laptop,
  Blocks,
  Webhook,
  FileCode,
  Braces,
  Puzzle,
  Repeat,
  ShieldCheck,
  Workflow,
  Sparkles,
  Wand2,
  Notebook as Robot,
  Network,
  Lock,
  LineChart,
  Crown,
  Camera,
  MessageCircle,
  Video,
  MonitorSmartphone,
  X,
  Send,
  Mic,
  Upload,
  Image as ImageIcon,
  Scan,
  Eye,
  Maximize2,
  MinusCircle,
  Shield,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
// import { AIVoiceBuilder } from "./components/AIVoiceBuilder";
import { UseCaseCard } from "./components/UseCaseCard";
import { FeatureCard } from "./components/FeatureCard";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { ScrollProgress } from "./components/ScrollProgress";
import { ServiceTabs } from "./components/ServiceTabs";
import { Circle } from "./Circel";

function Page() {
  const widgetRef = useRef(null);
  const widgetRef2 = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("sales");
  const [showChat, setShowChat] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoMessage, setDemoMessage] = useState("");
  const [selectedDemo, setSelectedDemo] = useState<"voice" | "vision">("voice");
  const [showVisionUpload, setShowVisionUpload] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const features = [
    {
      title: "No-Code Platform",
      icon: Blocks,
      description: "Build complex workflows without coding",
    },
    {
      title: "AI Voice Agents",
      icon: Robot,
      description: "Natural language processing powered by AI",
    },
    {
      title: "Enterprise Ready",
      icon: Building2,
      description: "Secure, scalable, and reliable platform",
    },
  ];

  const integrationLogos = [
    "https://cdn.worldvectorlogo.com/logos/zapier-2.svg",
    "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
    "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    "https://cdn.worldvectorlogo.com/logos/zendesk-2.svg",
    "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg",
    "https://cdn.worldvectorlogo.com/logos/gohighlevel.svg",
    "https://cdn.worldvectorlogo.com/logos/zoho-2.svg",
  ];

  const services = [
    {
      title: "Visual Flow Builder",
      icon: Workflow,
      description:
        "Create complex call flows with our intuitive drag-and-drop builder",
    },
    {
      title: "Voice Cloning Studio",
      icon: BrainCircuit,
      description: "Clone any voice in minutes with our AI technology",
    },
    {
      title: "White Label Solution",
      icon: Laptop,
      description: "Fully customizable platform with your branding",
    },
    {
      title: "Advanced API",
      icon: Webhook,
      description: "Robust API for seamless integration with any system",
    },
    {
      title: "Multilingual Support",
      icon: Globe2,
      description: "Support for 30+ languages with real-time translation",
    },
    {
      title: "Enterprise Security",
      icon: ShieldCheck,
      description: "SOC 2 Type II compliant with end-to-end encryption",
    },
  ];

  const useCases = [
    {
      title: "Sales Automation",
      icon: Phone,
      description: "Automate lead qualification and follow-ups at scale",
      benefits: [
        "24/7 lead qualification",
        "Instant follow-up calls",
        "Smart lead scoring",
        "CRM integration",
      ],
    },
    {
      title: "Smart Scheduling",
      icon: Calendar,
      description:
        "AI-powered appointment setting with smart conflict resolution",
      benefits: [
        "Automated scheduling",
        "Calendar sync",
        "Reminder calls",
        "Rescheduling handling",
      ],
    },
    {
      title: "24/7 Support",
      icon: Headphones,
      description: "Round-the-clock customer support in multiple languages",
      benefits: [
        "Instant response",
        "Multi-language support",
        "Issue escalation",
        "Customer satisfaction tracking",
      ],
    },
    {
      title: "Voice Surveys",
      icon: MessageSquare,
      description: "Collect feedback with interactive voice surveys",
      benefits: [
        "Dynamic questioning",
        "Real-time analysis",
        "Sentiment detection",
        "Automated reporting",
      ],
    },
    {
      title: "Payment Recovery",
      icon: DollarSign,
      description: "Automated payment collection and reminder system",
      benefits: [
        "Payment reminders",
        "Collection calls",
        "Payment processing",
        "Recovery analytics",
      ],
    },
    {
      title: "Lead Generation",
      icon: Users,
      description: "Generate and qualify leads automatically",
      benefits: [
        "Outbound campaigns",
        "Lead qualification",
        "Data enrichment",
        "Integration with CRM",
      ],
    },
  ];

  const stats = [
    { value: 99.9, suffix: "%", title: "Uptime" },
    { value: 50, suffix: "M+", title: "Calls Handled" },
    { value: 30, suffix: "+", title: "Languages" },
    { value: 5000, suffix: "+", title: "Active Users" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleVoiceBuilderSubmit = (data: any) => {
    console.log("Voice builder data:", data);
  };

  return (
    <div className="min-h-screen bg-[#FDB813]">
      <ScrollProgress />

      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-6 z-50 w-full flex justify-between items-center bg-[#FDB813]/90 backdrop-blur-lg border-b border-black/10">
        <div className="text-2xl font-black text-black flex items-center gap-2 brand-shine">
          <Robot className="w-8 h-8 brand-pulse" />
          <span className="brand-text">RAVAN.AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-black/80 hover:text-black transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="text-black/80 hover:text-black transition-colors font-medium"
          >
            Use Cases
          </a>
          <a
            href="#integrations"
            className="text-black/80 hover:text-black transition-colors font-medium"
          >
            Integrations
          </a>
          <button className="bg-black text-[#FDB813] px-6 py-2 rounded-lg font-bold hover:bg-black/80 transition-colors brand-glow">
            Get Started
          </button>
        </div>
        <button className="md:hidden bg-black text-[#FDB813] px-4 py-2 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium mb-6 brand-shine">
            ✨ Next Generation AI Voice Technology
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-black mb-8">
            Welcome to <span className="brand-text">RAVAN.AI</span>
            <br />
            Your AI Voice Assistant
          </h1>

          <p className="text-xl text-black/80 mb-12 max-w-3xl mx-auto font-medium">
            Create intelligent voice agents that handle calls, qualify leads,
            and provide 24/7 support - all powered by RAVAN.AI's advanced
            technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
              />
            ))}
            {/* <div className="w-screen h-screen overflow-hidden scrollbar-hidden"> */}
            <Circle />
            {/* </div> */}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.value}
                suffix={stat.suffix}
                title={stat.title}
              />
            ))}
          </div> */}

          {/* Service Tabs */}
          <ServiceTabs />

          {/* Demo Form */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDB813] to-[#FF9500] opacity-20 blur-xl"></div>
            {/* <AIVoiceBuilder onSubmit={handleVoiceBuilderSubmit} /> */}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Voice AI Demo */}
            <div className="flex flex-col justify-between bg-black/5 p-8 rounded-3xl ">
              <div>
                <h3 className="text-3xl font-bold mb-4">Voice AI Demo</h3>
                <p className="text-black/70 mb-6">
                  Meet Realtime Voice AI, the ultimate conversation catalyst.
                  This tool chats naturally, delivering instant, human-like
                  dialogue that builds trust and drives engagement.
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl hover:bg-black/20 transition-colors">
                    <Eye className="w-5 h-5" />
                    Vision AI
                  </button>
                  <button className="flex items-center gap-2 bg-black text-[#FDB813] px-6 py-3 rounded-xl hover:bg-black/80 transition-colors">
                    <Crown className="w-5 h-5" />
                    Realtime Voice AI
                  </button>
                </div>
              </div>
              <div className="mt-8 bg-black/10 p-6 rounded-2xl">
                <div ref={widgetRef2}></div>
              </div>
            </div>

            {/* Vision AI Demo */}
            <div className="bg-black/5 p-8 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">Vision AI Demo</h3>
              <p className="text-black/70 mb-6">
                Experience our Vision AI in action. Upload an image or use your
                camera to see how our AI analyzes and understands visual content
                in real-time.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-black text-[#FDB813] px-6 py-3 rounded-xl hover:bg-black/80 transition-colors">
                  <Camera className="w-5 h-5" />
                  Vision AI
                </button>
                <button className="flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl hover:bg-black/20 transition-colors">
                  <Crown className="w-5 h-5" />
                  King Of AIs
                </button>
              </div>
              <div className="mt-8  bg-black/10 p-10 rounded-2xl h-[470px]">
                <div ref={widgetRef}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Power Your Business with{" "}
            <span className="brand-text">RAVAN.AI</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                benefits={useCase.benefits}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Seamless <span className="brand-text">Integrations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {integrationLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/30 p-6 rounded-xl hover:bg-white/40 transition-colors"
              >
                <img
                  src={logo}
                  alt="Integration"
                  className="w-full h-12 object-contain filter brightness-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Transform Your{" "}
            <span className="brand-text">Business?</span>
          </h2>
          <p className="text-xl text-black/80 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses already using RAVAN.AI to automate
            their communications and enhance customer experience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-[#FDB813] px-8 py-4 rounded-xl font-bold hover:bg-black/80 transition-colors brand-glow flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get Started Now
            </button>
            <button className="bg-black/10 text-black px-8 py-4 rounded-xl font-bold hover:bg-black/20 transition-colors flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Robot className="w-8 h-8" />
                <span className="text-2xl font-black brand-text">RAVAN.AI</span>
              </div>
              <p className="text-black/70 mb-6">
                Next-generation AI voice technology for modern businesses.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <p className="text-black/70 mb-4">
                Get the latest updates and news.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/50 rounded-lg pl-12 pr-4 py-3 text-black border border-black/10 focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-[#FDB813] py-3 rounded-lg font-bold hover:bg-black/80 transition-colors brand-glow"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-green-600 mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-black/60">
                © 2025 RAVAN.AI. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
