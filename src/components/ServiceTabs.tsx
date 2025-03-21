import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Phone, Globe, Bot, Zap, MessageSquare, Calendar, Mail, BellRing, FileSpreadsheet, Workflow, Users, Building2, ShoppingCart, CreditCard, ChevronRight, CheckCircle2, Star, Clock, Sparkles, Shield, Settings, ArrowRight, PieChart, Repeat, Lightbulb, Rocket, Crown, Gauge, Award, Cpu, Fingerprint, Lock, Layers, Wifi, Palette, LineChart, Headphones, Video, MonitorSmartphone, Scan, Eye, Maximize2, MinusCircle } from 'lucide-react';

interface TabContentProps {
  price: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  automations?: {
    icon: typeof Zap;
    title: string;
    description: string;
    benefits?: string[];
    integrations?: string[];
    metrics?: {
      value: string;
      label: string;
    }[];
  }[];
  stats?: {
    value: string;
    label: string;
    icon?: typeof Zap;
  }[];
  enterprise?: {
    features: string[];
    support: string[];
  };
}

const TabContent: React.FC<TabContentProps> = ({ price, title, description, image, features, automations, stats, enterprise }) => {
  const [selectedAutomation, setSelectedAutomation] = useState<number | null>(null);
  const [showEnterprise, setShowEnterprise] = useState(false);
  const controls = useAnimation();

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/30 p-6 rounded-3xl backdrop-blur-xl border border-black/10 relative overflow-hidden group"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#FDB813]/5 via-transparent to-[#FDB813]/5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Price Tag */}
      <motion.div
        className="absolute top-4 right-4 bg-black text-[#FDB813] px-4 py-2 rounded-full text-sm font-bold z-10 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        animate={pulseAnimation}
      >
        <Crown className="w-4 h-4" />
        <span>{price}/month</span>
      </motion.div>
      
      {/* Main Content */}
      <div className="relative">
        {/* Image Container */}
        <motion.div
          className="relative h-64 mb-6 group"
          whileHover="hover"
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            variants={{
              hover: {
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.5
                }
              }
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FDB813]/20 via-transparent to-[#FDB813]/20"
            variants={{
              hover: {
                opacity: [0, 0.2, 0],
                transition: {
                  duration: 1,
                  repeat: Infinity
                }
              }
            }}
          />
        </motion.div>
        
        {/* Title and Description */}
        <div className="mb-8">
          <motion.h3
            className="text-2xl font-bold mb-3 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {title}
            <motion.div animate={pulseAnimation}>
              <Sparkles className="w-5 h-5 text-[#FDB813]" />
            </motion.div>
          </motion.h3>
          
          <motion.p
            className="text-black/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Stats Grid with Icons */}
        {stats && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon || Gauge;
              return (
                <motion.div
                  key={index}
                  className="bg-black/5 p-4 rounded-xl text-center hover:bg-black/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="flex justify-center mb-2"
                    animate={pulseAnimation}
                  >
                    <Icon className="w-6 h-6 text-[#FDB813]" />
                  </motion.div>
                  <div className="text-xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-black/60">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        )}
        
        {/* Features Grid */}
        {features && (
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-black/70" />
              Enterprise-Grade Features
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm text-black/80 bg-black/5 p-3 rounded-xl hover:bg-black/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Automations Grid */}
        {automations && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Settings className="w-5 h-5 text-black/70" />
              Smart Automations
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {automations.map((automation, index) => {
                const Icon = automation.icon;
                const isSelected = selectedAutomation === index;
                
                return (
                  <motion.div
                    key={index}
                    className={`bg-black/5 p-4 rounded-xl transition-all cursor-pointer group/item ${
                      isSelected ? 'bg-black/10' : 'hover:bg-black/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedAutomation(isSelected ? null : index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 rounded-xl transition-colors ${
                          isSelected ? 'bg-black text-[#FDB813]' : 'bg-black/10 group-hover/item:bg-black/20'
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-grow">
                        <h5 className="font-medium flex items-center gap-2">
                          {automation.title}
                          {isSelected && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-[#FDB813]"
                            >
                              <Star className="w-4 h-4" />
                            </motion.span>
                          )}
                        </h5>
                        <p className="text-sm text-black/60">{automation.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isSelected ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-black/10 space-y-4"
                        >
                          {/* Benefits */}
                          {automation.benefits && (
                            <div className="grid grid-cols-2 gap-3">
                              {automation.benefits.map((benefit, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-black/70 bg-black/5 p-3 rounded-xl"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <Lightbulb className="w-4 h-4 text-[#FDB813]" />
                                  {benefit}
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Metrics */}
                          {automation.metrics && (
                            <div className="grid grid-cols-3 gap-3 mt-4">
                              {automation.metrics.map((metric, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="bg-black/5 p-3 rounded-xl text-center"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <div className="text-lg font-bold text-black">{metric.value}</div>
                                  <div className="text-xs text-black/60">{metric.label}</div>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Integrations */}
                          {automation.integrations && (
                            <div className="mt-4">
                              <h6 className="text-sm font-medium mb-2 flex items-center gap-2">
                                <Layers className="w-4 h-4" />
                                Available Integrations
                              </h6>
                              <div className="flex flex-wrap gap-2">
                                {automation.integrations.map((integration, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-black/5 px-3 py-1 rounded-full text-xs text-black/70"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {integration}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Enterprise Features */}
        {enterprise && (
          <motion.div
            className="mt-8 pt-6 border-t border-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="w-full bg-black/5 p-4 rounded-xl flex items-center justify-between hover:bg-black/10 transition-colors"
              onClick={() => setShowEnterprise(!showEnterprise)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">Enterprise Features</span>
              </div>
              <motion.div
                animate={{ rotate: showEnterprise ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showEnterprise && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-4"
                >
                  {/* Enterprise Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {enterprise.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-sm bg-black/5 p-3 rounded-xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Lock className="w-4 h-4 text-[#FDB813]" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Enterprise Support */}
                  <div className="mt-4">
                    <h6 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Headphones className="w-4 h-4" />
                      Premium Support
                    </h6>
                    <div className="grid grid-cols-2 gap-3">
                      {enterprise.support.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm bg-black/5 p-3 rounded-xl"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Award className="w-4 h-4 text-[#FDB813]" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export const ServiceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    {
      id: 'website',
      label: 'AI Website Agent',
      icon: Globe,
      price: '$2.50',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/ai-robot-assistant-with-headphone-5662753-4719373.png',
      description: 'Intelligent website assistant that handles customer queries 24/7',
      features: [
        'Real-time visitor engagement',
        'Smart lead qualification',
        'Multi-language support',
        'Custom branding options',
        'Analytics dashboard',
        'Integration APIs',
        'Customizable workflows',
        'Advanced reporting'
      ],
      stats: [
        { value: '24/7', label: 'Availability', icon: Clock },
        { value: '99.9%', label: 'Uptime', icon: Gauge },
        { value: '30+', label: 'Languages', icon: Globe }
      ],
      enterprise: {
        features: [
          'Custom AI Training',
          'Dedicated Instance',
          'Advanced Security',
          'Custom Integration'
        ],
        support: [
          '24/7 Priority Support',
          'Dedicated Account Manager',
          'Custom Training',
          'SLA Guarantee'
        ]
      }
    },
    {
      id: 'caller',
      label: 'AI Caller',
      icon: Phone,
      price: '$4.50',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/ai-robot-assistant-with-headphone-5662753-4719373.png',
      description: 'AI-Powered CRM system that handles calls and customer interactions',
      features: [
        'Automated call handling',
        'Voice recognition',
        'Call sentiment analysis',
        'CRM integration',
        'Call scheduling',
        'Voice customization',
        'Call analytics',
        'Multi-line support'
      ],
      stats: [
        { value: '1000+', label: 'Calls/Day', icon: Phone },
        { value: '95%', label: 'Accuracy', icon: CheckCircle2 },
        { value: '60+', label: 'Integrations', icon: Layers }
      ],
      enterprise: {
        features: [
          'Custom Voice Training',
          'Advanced Call Routing',
          'Enterprise Security',
          'Custom Integration'
        ],
        support: [
          '24/7 Priority Support',
          'Dedicated Manager',
          'Custom Scripts',
          'SLA Guarantee'
        ]
      }
    },
    {
      id: 'automations',
      label: 'Automations',
      icon: Zap,
      price: '$3.90',
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-chatting-on-smartphone-5662755-4719375.png',
      description: 'Powerful automation suite for streamlined business operations',
      stats: [
        { value: '100+', label: 'Templates', icon: Layers },
        { value: '50+', label: 'Actions', icon: Zap },
        { value: '1M+', label: 'Tasks/Month', icon: LineChart }
      ],
      automations: [
        {
          icon: MessageSquare,
          title: 'SMS & WhatsApp Automation',
          description: 'Automated messaging campaigns and responses',
          benefits: [
            'Bulk messaging',
            'Smart replies',
            'Campaign tracking',
            'Contact management'
          ],
          metrics: [
            { value: '99.9%', label: 'Delivery Rate' },
            { value: '45s', label: 'Avg Response' },
            { value: '1M+', label: 'Messages/Day' }
          ],
          integrations: [
            'Twilio',
            'MessageBird',
            'Vonage',
            'WhatsApp Business'
          ]
        },
        {
          icon: Calendar,
          title: 'Appointment Scheduling',
          description: 'Smart calendar management and reminders',
          benefits: [
            'Auto-scheduling',
            'SMS reminders',
            'Calendar sync',
            'Booking pages'
          ],
          metrics: [
            { value: '50K+', label: 'Bookings/Day' },
            { value: '95%', label: 'Show Rate' },
            { value: '24/7', label: 'Availability' }
          ],
          integrations: [
            'Google Calendar',
            'Outlook',
            'iCal',
            'Zoom'
          ]
        },
        {
          icon: Mail,
          title: 'Email Marketing',
          description: 'Automated email campaigns and follow-ups',
          benefits: [
            'Campaign builder',
            'A/B testing',
            'Analytics',
            'Template library'
          ],
          metrics: [
            { value: '98%', label: 'Deliverability' },
            { value: '25%', label: 'Avg Open Rate' },
            { value: '5M+', label: 'Emails/Day' }
          ],
          integrations: [
            'Mailchimp',
            'Sendgrid',
            'AWS SES',
            'Mandrill'
          ]
        },
        {
          icon: BellRing,
          title: 'Notification System',
          description: 'Custom alerts and notification workflows',
          benefits: [
            'Multi-channel alerts',
            'Custom triggers',
            'Priority levels',
            'Delivery tracking'
          ],
          metrics: [
            { value: '100ms', label: 'Latency' },
            { value: '99.9%', label: 'Uptime' },
            { value: '10M+', label: 'Alerts/Day' }
          ],
          integrations: [
            'Slack',
            'Discord',
            'Teams',
            'Webhook'
          ]
        },
        {
          icon: FileSpreadsheet,
          title: 'Data Processing',
          description: 'Automated data entry and processing',
          benefits: [
            'OCR technology',
            'Data validation',
            'Format conversion',
            'Batch processing'
          ],
          metrics: [
            { value: '99.9%', label: 'Accuracy' },
            { value: '1M+', label: 'Records/Day' },
            { value: '50+', label: 'Formats' }
          ],
          integrations: [
            'Excel',
            'Google Sheets',
            'Airtable',
            'MongoDB'
          ]
        },
        {
          icon: Workflow,
          title: 'Workflow Automation',
          description: 'Custom business process automation',
          benefits: [
            'Visual builder',
            'Custom logic',
            'Error handling',
            'Version control'
          ],
          metrics: [
            { value: '1000+', label: 'Templates' },
            { value: '99.9%', label: 'Reliability' },
            { value: '24/7', label: 'Monitoring' }
          ],
          integrations: [
            'Zapier',
            'Make',
            'Power Automate',
            'n8n'
          ]
        },
        {
          icon: Users,
          title: 'Lead Management',
          description: 'Automated lead nurturing and scoring',
          benefits: [
            'Lead scoring',
            'Journey mapping',
            'Task automation',
            'Performance tracking'
          ],
          metrics: [
            { value: '50K+', label: 'Leads/Day' },
            { value: '85%', label: 'Conversion' },
            { value: '100+', label: 'Rules' }
          ],
          integrations: [
            'Salesforce',
            'HubSpot',
            'Pipedrive',
            'Zoho'
          ]
        },
        {
          icon: Building2,
          title: 'Business Intelligence',
          description: 'Automated reporting and analytics',
          benefits: [
            'Custom reports',
            'Data visualization',
            'Trend analysis',
            'Export options'
          ],
          metrics: [
            { value: '100+', label: 'Templates' },
            { value: 'Real-time', label: 'Updates' },
            { value: '50+', label: 'Metrics' }
          ],
          integrations: [
            'Tableau',
            'Power BI',
            'Looker',
            'Metabase'
          ]
        },
        {
          icon: ShoppingCart,
          title: 'E-commerce Integration',
          description: 'Automated order processing and fulfillment',
          benefits: [
            'Order tracking',
            'Inventory sync',
            'Shipping labels',
            'Returns handling'
          ],
          metrics: [
            { value: '100K+', label: 'Orders/Day' },
            { value: '99.9%', label: 'Accuracy' },
            { value: '24/7', label: 'Processing' }
          ],
          integrations: [
            'Shopify',
            'WooCommerce',
            'Magento',
            'BigCommerce'
          ]
        },
        {
          icon: CreditCard,
          title: 'Payment Processing',
          description: 'Automated billing and invoicing',
          benefits: [
            'Recurring billing',
            'Payment reminders',
            'Invoice generation',
            'Payment tracking'
          ],
          metrics: [
            { value: '$1M+', label: 'Daily Volume' },
            { value: '99.99%', label: 'Success Rate' },
            { value: '24/7', label: 'Support' }
          ],
          integrations: [
            'Stripe',
            'PayPal',
            'Square',
            'Braintree'
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium mb-4"
        >
          <span className="flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            Next-Gen AI Solutions
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Powerful AI Solutions for Your Business
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-black/70 max-w-2xl mx-auto"
        >
          Choose the perfect plan to automate and scale your operations with our cutting-edge AI technology
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-black text-[#FDB813]'
                  : 'bg-black/5 text-black hover:bg-black/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="grid md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <TabContent
                key={tab.id}
                price={tab.price}
                title={tab.label}
                description={tab.description}
                image={tab.image}
                features={tab.features}
                automations={tab.automations}
                stats={tab.stats}
                enterprise={tab.enterprise}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};