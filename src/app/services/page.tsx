"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("architectural")
  const [mobileAccordionValue, setMobileAccordionValue] = useState<string>("architectural")
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const services = [
    {
      id: "architectural",
      title: "Architectural Planning",
      icon: "/img/ic_1.png",
      image: "/img/Architecture_1.jpg",
      description:
        "At Aarambh Urban, we bring dreams to life with innovative architectural designs that unite creativity, functionality, and inspiration. Our architectural planning services focus on creating spaces that not only meet your functional requirements but also inspire and elevate the human experience.",
      features: [
        "Custom architectural designs tailored to your needs",
        "Sustainable and eco-friendly building solutions",
        "Comprehensive planning and documentation",
        "3D visualization and modeling",
        "Building code compliance and permit assistance",
        "Site analysis and feasibility studies",
      ],
      process: [
        {
          title: "Initial Consultation",
          description: "We begin by understanding your vision, requirements, and budget constraints.",
        },
        {
          title: "Concept Development",
          description: "Our team creates preliminary designs and concepts based on your input.",
        },
        {
          title: "Design Refinement",
          description: "We refine the designs based on your feedback and make necessary adjustments.",
        },
        { title: "Documentation", description: "Detailed plans and specifications are prepared for construction." },
        {
          title: "Implementation",
          description: "We assist during the construction phase to ensure the design is executed properly.",
        },
      ],
    },
    {
      id: "urban",
      title: "Urban Planning",
      icon: "/img/ic_2.png",
      image: "/img/urban_service.jpeg",
      description:
        "Our urban planning services focus on creating sustainable, livable, and vibrant communities. We develop comprehensive plans that address the complex challenges of urban development while promoting social equity, economic vitality, and environmental sustainability.",
      features: [
        "Master planning for new developments",
        "Urban revitalization strategies",
        "Transit-oriented development planning",
        "Public space and streetscape design",
        "Zoning and land use planning",
        "Community engagement and participatory planning",
      ],
      process: [
        {
          title: "Site Analysis",
          description: "We analyze the existing conditions, constraints, and opportunities of the site.",
        },
        {
          title: "Stakeholder Engagement",
          description: "We engage with community members and stakeholders to understand their needs.",
        },
        {
          title: "Plan Development",
          description: "Based on our analysis and engagement, we develop comprehensive urban plans.",
        },
        { title: "Implementation Strategy", description: "We create strategies for implementing the plan in phases." },
        {
          title: "Monitoring and Evaluation",
          description: "We establish metrics to evaluate the success of the plan over time.",
        },
      ],
    },
    {
      id: "interior",
      title: "Interior Designing",
      icon: "/img/ic_3.png",
      image: "/img/Interior_1.jpg",
      description:
        "Our interior design services transform spaces into functional, beautiful environments that reflect your personality and meet your needs. We combine aesthetics with practicality to create interiors that inspire and delight.",
      features: [
        "Space planning and layout optimization",
        "Custom furniture design and selection",
        "Material and finish selection",
        "Lighting design and specification",
        "Color scheme development",
        "Art and accessory curation",
      ],
      process: [
        {
          title: "Design Brief",
          description: "We gather information about your preferences, lifestyle, and requirements.",
        },
        {
          title: "Concept Development",
          description: "We create mood boards and conceptual designs for your approval.",
        },
        {
          title: "Design Development",
          description: "We refine the design and select specific materials, furnishings, and finishes.",
        },
        { title: "Documentation", description: "We prepare detailed drawings and specifications for implementation." },
        {
          title: "Installation and Styling",
          description: "We oversee the installation and add final styling touches.",
        },
      ],
    },
    {
      id: "landscaping",
      title: "Landscaping",
      icon: "/img/ic_4.png",
      image: "/img/landscaping.webp",
      description:
        "Our landscaping services create outdoor spaces that harmonize with nature while meeting your functional needs. We design sustainable landscapes that enhance the beauty of your property and provide spaces for relaxation and recreation.",
      features: [
        "Garden and planting design",
        "Hardscape design (patios, walkways, etc.)",
        "Water feature design",
        "Outdoor lighting design",
        "Sustainable landscaping solutions",
        "Irrigation system planning",
      ],
      process: [
        {
          title: "Site Assessment",
          description: "We analyze the existing landscape, soil conditions, and microclimates.",
        },
        {
          title: "Conceptual Design",
          description: "We create preliminary designs based on your preferences and site conditions.",
        },
        { title: "Design Development", description: "We refine the design and select specific plants and materials." },
        {
          title: "Implementation Planning",
          description: "We prepare detailed plans and specifications for installation.",
        },
        {
          title: "Maintenance Guidelines",
          description: "We provide guidance on how to maintain your landscape over time.",
        },
      ],
    },
    {
      id: "planning",
      title: "Project Planning",
      icon: "/img/ic_5.png",
      image: "/img/project_plaing.jpeg",
      description:
        "Our project planning and development services ensure that your project is executed efficiently from concept to completion. We provide comprehensive planning, coordination, and management to deliver successful outcomes.",
      features: [
        "Feasibility studies and site analysis",
        "Project scheduling and milestone planning",
        "Budget development and cost control",
        "Risk assessment and mitigation",
        "Stakeholder coordination",
        "Quality assurance and control",
      ],
      process: [
        { title: "Project Initiation", description: "We define the project scope, objectives, and deliverables." },
        { title: "Planning", description: "We develop detailed plans for time, cost, quality, and resources." },
        { title: "Execution", description: "We implement the plan and coordinate all project activities." },
        { title: "Monitoring and Control", description: "We track progress and make adjustments as needed." },
        { title: "Closure", description: "We finalize all activities and conduct a project review." },
      ],
    },
    {
      id: "renovation",
      title: "Renovation",
      icon: "/img/ic_6.png",
      image: "/img/renovation.webp",
      description:
        "Our renovation and restoration services breathe new life into existing structures while preserving their character and history. We combine modern functionality with respect for architectural heritage.",
      features: [
        "Historic building restoration",
        "Adaptive reuse of existing structures",
        "Energy efficiency upgrades",
        "Structural repairs and reinforcement",
        "Modern amenity integration",
        "Code compliance updates",
      ],
      process: [
        {
          title: "Assessment",
          description: "We evaluate the existing condition and identify areas needing attention.",
        },
        { title: "Design Development", description: "We create plans that balance preservation with modern needs." },
        {
          title: "Material Selection",
          description: "We select appropriate materials that complement the existing structure.",
        },
        { title: "Implementation", description: "We carefully execute the renovation with attention to detail." },
        {
          title: "Final Review",
          description: "We ensure all work meets quality standards and preserves the building's integrity.",
        },
      ],
    },
    {
      id: "furnishing",
      title: "Furnishing",
      icon: "/img/ic_7.png",
      image: "/img/furnishing.jpeg",
      description:
        "Our furnishing services provide a seamless fusion of design and comfort. We select and arrange furniture that complements your space and enhances its functionality and aesthetic appeal.",
      features: [
        "Custom furniture design and procurement",
        "Furniture layout planning",
        "Upholstery selection",
        "Accessory and art curation",
        "Window treatment design",
        "Lighting fixture selection",
      ],
      process: [
        { title: "Needs Assessment", description: "We identify your functional requirements and style preferences." },
        { title: "Concept Development", description: "We create furniture layouts and select key pieces." },
        { title: "Selection", description: "We finalize furniture selections and place orders." },
        { title: "Installation", description: "We coordinate delivery and placement of all items." },
        { title: "Styling", description: "We add finishing touches with accessories and art." },
      ],
    },
    {
      id: "construction",
      title: "Construction",
      icon: "/img/ic_8.png",
      image: "/img/construction.jpeg",
      description:
        "Our construction management services ensure that your project is built according to plan, on time, and within budget. We provide comprehensive oversight of the construction process to deliver quality results.",
      features: [
        "Contractor selection and management",
        "Construction scheduling and coordination",
        "Quality control and inspection",
        "Budget monitoring and cost control",
        "Change order management",
        "Safety compliance oversight",
      ],
      process: [
        {
          title: "Pre-construction Planning",
          description: "We prepare for construction with detailed planning and coordination.",
        },
        { title: "Bidding and Procurement", description: "We assist in selecting qualified contractors and vendors." },
        {
          title: "Construction Oversight",
          description: "We monitor construction activities and ensure compliance with plans.",
        },
        { title: "Quality Control", description: "We conduct regular inspections to maintain quality standards." },
        { title: "Project Closeout", description: "We ensure proper completion and documentation of all work." },
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    // Function to handle hash changes and custom events
    const handleServiceChange = (serviceId: string) => {
      if (serviceId && services.some((service) => service.id === serviceId)) {
        setActiveTab(serviceId)
        setMobileAccordionValue(serviceId) // Add this line to sync mobile accordion
        // Scroll to services section with a slight delay to ensure proper positioning
        setTimeout(() => {
          const servicesSection = document.getElementById("services")
          if (servicesSection) {
            const headerOffset = 100 // Adjust based on your header height
            const elementPosition = servicesSection.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      handleServiceChange(hash)
    }

    // Handle custom event from header
    const handleServiceSelected = (event: CustomEvent) => {
      handleServiceChange(event.detail)
    }

    // Handle initial load
    handleHashChange()

    // Add event listeners
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("serviceSelected", handleServiceSelected as EventListener)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("serviceSelected", handleServiceSelected as EventListener)
    }
  }, []) // Updated dependency array

  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated to match portfolio style */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        </div>
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 pt-40 pb-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              From architectural planning to construction management, we offer comprehensive services to bring your
              vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                <Link href="#services">
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center"
                  >
                    Explore Our Services
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Design & Planning Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to meet all your architectural and design needs. Each service is
              tailored to your specific requirements and delivered with the highest standards of quality.
            </p>
          </motion.div>

          {/* Rest of the services content remains unchanged */}
          {/* Desktop Tabs - Hidden on Mobile */}
          <div className="hidden md:block mb-12">
            <Tabs defaultValue="architectural" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                    onClick={() => {
                      setActiveTab(service.id)
                      window.history.pushState(null, "", `#${service.id}`)
                    }}
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="focus-visible:outline-none focus-visible:ring-0"
                >
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="relative w-12 h-12 mr-4">
                          <Image
                            src={service.icon || "/placeholder.svg?height=48&width=48"}
                            alt={service.title}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex items-center"
                          >
                            Request a Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        </Link>
                      </Button>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                          <p className="text-gray-200">Excellence in every detail</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Process Section */}
                  <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-8 text-center">Our Process</h3>
                    <div className="relative">
                      {/* Process Timeline Line */}
                      <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

                      <div className="space-y-12">
                        {service.process.map((step, index) => (
                          <div
                            key={index}
                            className={`flex flex-col md:flex-row ${
                              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } items-center`}
                          >
                            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                              <p className="text-gray-600">{step.description}</p>
                            </div>

                            <div className="flex-shrink-0 my-4 md:my-0 z-10">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                                {index + 1}
                              </div>
                            </div>

                            <div className="md:w-1/2"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile Accordion - Visible only on Mobile */}
          <div className="md:hidden">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={mobileAccordionValue}
              onValueChange={setMobileAccordionValue}
            >
              {services.map((service, serviceIndex) => (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 mr-3">
                        <Image
                          src={service.icon || "/placeholder.svg?height=32&width=32"}
                          alt={service.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-lg font-semibold">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-2">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4">
                            <h3 className="text-white text-xl font-bold">{service.title}</h3>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600">{service.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Our Process</h4>
                        <div className="space-y-4">
                          {service.process.map((step, index) => (
                            <div key={index} className="border-l-2 border-primary pl-4">
                              <h5 className="text-base font-medium">
                                {index + 1}. {step.title}
                              </h5>
                              <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                          <span className="flex items-center justify-center">
                            Request a Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Rest of the services page content remains unchanged */}
      {/* Services Grid Section - Mobile Friendly */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to meet all your architectural and design needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                custom={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <div className="bg-primary/90 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                        <div className="relative w-6 h-6">
                          <Image
                            src={service.icon || "/placeholder.svg?height=24&width=24"}
                            alt=""
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-white text-lg font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{service.description.split(".")[0]}.</p>
                  <Link
                    href={`#${service.id}`}
                    className="text-primary font-medium text-sm flex items-center hover:underline"
                    onClick={() => setActiveTab(service.id)}
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
            </div>
            <motion.div
              className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-base md:text-lg text-gray-300">
                  Contact us today to schedule a consultation and discover how our services can bring your vision to
                  life.
                </p>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="w-full md:w-auto rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex items-center"
                    >
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

