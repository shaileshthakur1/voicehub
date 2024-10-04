'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "./component/ui/button/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./component/ui/card/card";
import { MessageSquare, FileText, Clock, Shield, Menu } from 'lucide-react'; // Menu for hamburger icon
import ComplaintForm from './complaintForm/page';
import ComplaintTracker from './TrackComplaint/page';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700 mb-12">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">Complaint Portal</h1>
          <nav className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none hover:text-purple-400"
            >
              <Menu className="w-8 h-8" />
            </button>
          </nav>

          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              <li><Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="#submit" className="text-gray-300 hover:text-purple-400 transition-colors">Submit Complaint</Link></li>
              <li><Link href="#TrackComplaint" className="text-gray-300 hover:text-purple-400 transition-colors">Track Complaint</Link></li>
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="#submit" className="text-gray-300 hover:text-purple-400 transition-colors">Submit Complaint</Link></li>
              <li><Link href="#TrackComplaint" className="text-gray-300 hover:text-purple-400 transition-colors">Track Complaint</Link></li>
            </ul>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mt-12 mb-6">Welcome to Our Complaint Portal</h2>
          <p className="text-base md:text-xl text-gray-300 mb-8">We are here to listen and help resolve your concerns.</p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white md:text-lg mb-10">
            <Link href="#submit">Submit a Complaint</Link>
          </Button>
        </section>

        <section id="about" className="mb-24 mt-11">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-600 text-lg md:text-xl">About Our Portal</CardTitle>
              <CardDescription className="text-gray-500 mb-5">Dedicated to addressing your concerns efficiently</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm md:text-base">
                Our complaint portal is designed to provide a seamless experience for users to voice their concerns. 
                We take every complaint seriously and strive to resolve issues in a timely and satisfactory manner. 
                Your feedback helps us improve our services and ensure customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="features" className="mb-24 mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-lg mb-6">
            {[
              { icon: MessageSquare, title: "Easy Submission", description: "Simple and intuitive complaint submission process", color: "text-green-400" },
              { icon: FileText, title: "File Attachments", description: "Ability to attach images or videos to support your complaint", color: "text-blue-400" },
              { icon: Clock, title: "Quick Response", description: "Timely acknowledgment and updates on your complaint", color: "text-yellow-400" },
              { icon: Shield, title: "Secure & Confidential", description: "Your information is protected and treated with utmost confidentiality", color: "text-red-400" }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 transition-transform hover:scale-105">
                <CardHeader>
                  <feature.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.color} mb-2`} />
                  <CardTitle className="text-gray-100 text-base md:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="submit" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">Submit Your Complaint</h2>
          <ComplaintForm />
        </section>

        <section id="TrackComplaint" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">Track Your Complaint</h2>
          <ComplaintTracker />
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Complaint Portal. All rights reserved.</p>
          <p className="mt-2">For urgent matters, please contact our support line: <span className="text-purple-400">1-800-123-4567</span></p>
        </div>
      </footer>
    </div>
  );
}
