"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  Camera,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PhotographerPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "portfolio", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const portfolioItems = [
    {
      title: "Golden Hour Vows",
      category: "Events",
      image: "/photo (1).WEBP?height=800&width=1200",
      description: "Warm sunset love captured forever in time",
    },
    {
      title: "Whispers of Forever",
      category: "Events",
      image: "/photo (2).WEBP?height=800&width=1200",
      description: "Candid moments woven into eternal memories",
    },
    {
      title: "Elegance in Every Frame",
      category: "Events",
      image: "/photo (3).WEBP?height=800&width=1200",
      description: "Graceful portraits telling your wedding story",
    },
    {
      title: "Unscripted Promises",
      category: "Landscape",
      image: "/photo (4).WEBP?height=800&width=1200",
      description: "Natural emotions during sacred love vows",
    },
    {
      title: "Hearts Aligned",
      category: "Events",
      image: "/photo (5).WEBP?height=800&width=1200",
      description: "Timeless photos of soul-deep connection",
    },
    {
      title: "Artistic Vision",
      category: "Events",
      image: "/photo (6).WEBP?height=800&width=1200",
      description: "Creative and experimental photography that pushes artistic boundaries.",
    },
    {
      title: "Fashion Forward",
      category: "Events",
      image: "/photo (7).WEBP?height=800&width=1200",
      description: "High-fashion photography that blends style with artistic expression.",
    },
    {
      title: "Candid Moments",
      category: "Events",
      image: "/photo (8).WEBP?height=800&width=1200",
      description: "Spontaneous and natural moments that tell a story without words.",
    },
    {
      title: "Family Connections",
      category: "Events",
      image: "/photo (9).WEBP?height=800&width=1200",
      description: "Heartwarming family portraits that capture the love and connection between family members.",
    },
    {
      title: "Event Highlights",
      category: "Events",
      image: "/photo (10).WEBP?height=800&width=1200",
      description: "Dynamic event photography that captures the energy and excitement of your gatherings.",
    },
    {
      title: "Lace and Laughter",
      category: "Events",
      image: "/photo (11).WEBP?height=800&width=1200",
      description: "Delicate joy on your special day",
    },
    {
      title: "Sacred I Do",
      category: "Events",
      image: "/photo (12).WEBP?height=800&width=1200",
      description: "Timeless black and white photography that emphasizes light, shadow, and emotion.",
    },
    {
      title: "Radiant Union",
      category: "Events",
      image: "/photo (13).WEBP?height=800&width=1200",
      description: "Two souls glowing in pure harmony",
    },
    {
      title: "Ceremony of Light",
      category: "Events",
      image: "/photo (14).WEBP?height=800&width=1200",
      description: "Capturing the unique personalities of your furry friends.",
    },
    {
      title: "Nightscapes",
      category: "Events",
      image: "/photo (15).WEBP?height=800&width=1200",
      description: "Stunning night photography that reveals the beauty of the world after dark.",
    },
    {
      title: "Veil & Vision",
      category: "Events",
      image: "/photo (16).WEBP?height=800&width=1200",
      description: "Modern romance through an artistic lens",
    },
    {
      title: "Wonders",
      category: "Events",
      image: "/photo (17).WEBP?height=800&width=1200",
      description: "Exploring the underwater world through vibrant and captivating photography.",
    },  
    {
      title: "Street Photography",
      category: "Events",
      image: "/photo (18).WEBP?height=800&width=1200",
      description: "Documenting everyday life and the unique stories found in urban environments.",
    },
    {
      title: "Astrophotography",
      category: "Events",
      image: "/photo (19).WEBP?height=800&width=1200",
      description: "Capturing the beauty of the night sky and celestial events.",
    },
    {
      title: "Macro Photography",
      category: "Events",
      image: "/photo (20).WEBP?height=800&width=1200",
      description: "Exploring the intricate details of small subjects through macro photography.",
    },
    
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowRight":
          nextImage()
          break
        case "ArrowLeft":
          prevImage()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold tracking-wider text-amber-400">Srini Photography</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "portfolio", label: "Portfolio" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-400 ${
                    activeSection === item.id ? "text-amber-400" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "portfolio", label: "Portfolio" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-amber-400 ${
                    activeSection === item.id ? "text-amber-400" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Cinematic photography background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              SRINI
            </span>
            <br />
            <span className="text-amber-400">PHOTOGRAPHY</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light tracking-wide">
            Capturing Moments Digitally
          </p>
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Portfolio</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A curated collection of my finest work, capturing the essence of each moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => openLightbox(index)}
              >
           <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-110"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-amber-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400/20 to-slate-700/20 p-1">
                <Image
                  src="/logo.jpg?height=500&width=500"
                  alt="Srini Photography Portrait"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">About Me</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
               I'm Srini, a professional photographer specializing in monochrome imagery that captures the raw
                  essence of human emotion and architectural beauty.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With over 3 years of experience, I've developed a unique vision that transforms ordinary moments into
                  extraordinary visual narratives.

                  Based in India, I work with clients worldwide, bringing a digital-first approach to
                  traditional photography techniques.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Award className="h-5 w-5" />
                  <span>Award-Winning</span>
                </div>
                <div className="flex items-center space-x-2 text-amber-400">
                  <Users className="h-5 w-5" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2 text-amber-400">
                  <Camera className="h-5 w-5" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100 animate-fade-in-up">Client Reviews</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
              What my clients say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael Johnson",
                role: "Wedding Clients",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "Srini captured our wedding day perfectly. Every moment, every emotion - it's all there in the most beautiful way. Her cinematic style made our photos look like scenes from a movie.",
                project: "Napa Valley Wedding",
              },
              {
                name: "David Chen",
                role: "Corporate Executive",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "Professional, creative, and incredibly talented. Srini's corporate headshots elevated our entire team's professional image. The attention to detail is remarkable.",
                project: "Executive Portraits",
              },
              {
                name: "Emma Rodriguez",
                role: "Fashion Designer",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "Working with Srini was an absolute dream. She understood my vision immediately and brought it to life in ways I never imagined. Her artistic eye is unmatched.",
                project: "Fashion Portfolio",
              },
              {
                name: "James & Lisa Park",
                role: "Family Clients",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "Srini made our family feel so comfortable during the shoot. The photos are stunning and capture our personalities perfectly. We'll treasure these forever.",
                project: "Family Portraits",
              },
              {
                name: "Tech Innovations Inc.",
                role: "Corporate Client",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "Our product launch event was captured beautifully. Srini's ability to document both the big moments and subtle details made our marketing materials exceptional.",
                project: "Corporate Event",
              },
              {
                name: "Maria Gonzalez",
                role: "Entrepreneur",
                image: "/placeholder.svg?height=80&width=80",
                rating: 5,
                review:
                  "The personal branding photos Srini took transformed my business presence. Her creative direction and technical expertise are simply outstanding.",
                project: "Personal Branding",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="group bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-400/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-amber-400/30 group-hover:border-amber-400 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-slate-900 text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-100 group-hover:text-amber-400 transition-colors duration-300">
                      {review.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{review.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="relative overflow-hidden"
                      style={{ animationDelay: `${index * 150 + starIndex * 100}ms` }}
                    >
                      <svg className="w-5 h-5 text-amber-400 animate-star-fill" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                  <span className="ml-2 text-slate-400 text-sm font-medium">5.0</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-slate-300 leading-relaxed mb-6 italic relative">
                  <span className="text-amber-400 text-4xl absolute -top-2 -left-2 opacity-30">"</span>
                  <p className="relative z-10">{review.review}</p>
                </blockquote>

                {/* Project Tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors duration-300">
                  <span className="text-amber-400 text-sm font-medium">{review.project}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up delay-1000">
            <p className="text-slate-300 mb-6 text-lg">Ready to create your own story?</p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/25"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Let's Create Together</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to capture your story? Get in touch and let's discuss your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">Email</h3>
                  <p className="text-slate-300">sriniphotography@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">Phone</h3>
                  <p className="text-slate-300">+91 9849026604</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">Location</h3>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div> */}
            </div>

            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:ring-amber-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:ring-amber-400 resize-none"
                />
              </div>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-2xl font-bold text-amber-400 mb-2">Srini Photography</div>
              <p className="text-slate-400">Professional Photographer</p>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-amber-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Srini Photography Photography. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main Content */}
          <div className="w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto p-4">
            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center mb-4 lg:mb-0 lg:mr-8">
              <div className="relative w-full h-full max-h-[70vh] lg:max-h-[80vh]">
                <Image
                  src={portfolioItems[currentImageIndex].image || "/placeholder.svg"}
                  alt={portfolioItems[currentImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:w-80 flex flex-col justify-center space-y-4 bg-slate-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                {portfolioItems[currentImageIndex].category}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">{portfolioItems[currentImageIndex].title}</h3>
              <p className="text-slate-300 leading-relaxed">{portfolioItems[currentImageIndex].description}</p>

              {/* Image Counter */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <span className="text-slate-400 text-sm">
                  {currentImageIndex + 1} of {portfolioItems.length}
                </span>
                <div className="flex space-x-2">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? "bg-amber-400" : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 lg:hidden">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentImageIndex ? "bg-amber-400" : "bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes star-fill {
          from {
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-star-fill {
          animation: star-fill 0.6s ease-out forwards;
          transform: scale(0);
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}
