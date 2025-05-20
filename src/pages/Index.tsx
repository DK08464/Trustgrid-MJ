
import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharityCard, { CharityProps } from "@/components/CharityCard";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Mock data for charities
  const charities: CharityProps[] = [
    {
      id: '1',
      name: 'Clean Water Initiative',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1581375279679-e9c13fd45e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      description: 'Providing clean water solutions to communities facing water scarcity and contamination issues worldwide.',
      goal: 5,
      raised: 3.2,
      donorsCount: 128
    },
    {
      id: '2',
      name: 'Global Education Fund',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80',
      description: 'Supporting education initiatives and providing resources to underprivileged children around the world.',
      goal: 8,
      raised: 6.7,
      donorsCount: 342
    },
    {
      id: '3',
      name: 'Medical Relief Foundation',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
      description: 'Delivering essential medical supplies and healthcare services to regions affected by crisis.',
      goal: 10,
      raised: 4.3,
      donorsCount: 213
    },
    {
      id: '4',
      name: 'Refugee Support Network',
      category: 'Humanitarian',
      image: 'https://images.unsplash.com/photo-1541104486370-474034a4f6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      description: 'Providing shelter, food, and essential services to refugees and displaced persons.',
      goal: 7,
      raised: 2.8,
      donorsCount: 176
    },
    {
      id: '5',
      name: 'Climate Action Coalition',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1611273426858-450e7620370f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      description: 'Fighting climate change through community-based initiatives and sustainable practices.',
      goal: 12,
      raised: 8.6,
      donorsCount: 291
    },
    {
      id: '6',
      name: 'Animal Welfare Society',
      category: 'Animals',
      image: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      description: 'Protecting animals from cruelty and providing care for abandoned and injured wildlife.',
      goal: 6,
      raised: 5.1,
      donorsCount: 248
    }
  ];

  const steps = [
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-charity-light-purple flex items-center justify-center text-charity-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
          </svg>
        </div>
      ),
      title: 'Connect Your Wallet',
      description: 'Link your Ethereum wallet securely to enable donations. We support MetaMask, Coinbase Wallet, and other providers.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-charity-light-purple flex items-center justify-center text-charity-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      ),
      title: 'Choose a Cause',
      description: 'Browse our verified charity communities and select a cause that resonates with your values and priorities.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-charity-light-purple flex items-center justify-center text-charity-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      ),
      title: 'Make a Donation',
      description: 'Donate ETH directly to the cause of your choice. Every transaction is recorded on the blockchain for full transparency.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-charity-light-purple flex items-center justify-center text-charity-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-check">
            <path d="m3 17 2 2 4-4" />
            <path d="m3 7 2 2 4-4" />
            <path d="M13 6h8" />
            <path d="M13 12h8" />
            <path d="M13 18h8" />
          </svg>
        </div>
      ),
      title: 'Track Impact',
      description: 'Follow the progress of your donation and see the real-world impact of your contribution through regular updates.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Featured Causes */}
        <section id="causes" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Causes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                Support these verified charity communities making a real difference. All donations are tracked on the Ethereum blockchain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {charities.map((charity) => (
                <CharityCard key={charity.id} {...charity} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border-2 border-charity-purple text-charity-purple dark:text-charity-purple rounded-lg font-medium hover:bg-charity-light-purple transition-colors dark:hover:bg-gray-800">
                View All Causes
              </button>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
                Making donations with cryptocurrency is simple, secure, and transparent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {step.icon}
                    <h3 className="text-xl font-semibold mt-6 mb-3 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Our Mission</h2>
                <p className="text-gray-700 mb-6 dark:text-gray-300">
                  TrustGrid bridges the gap between cryptocurrency and charitable giving. We believe in the power of blockchain technology to create a more transparent, efficient, and impactful philanthropy ecosystem.
                </p>
                <p className="text-gray-700 mb-6 dark:text-gray-300">
                  Our platform ensures that 100% of your donation reaches the intended cause, with every transaction verifiable on the Ethereum blockchain. We carefully vet all charity communities to ensure legitimacy and impact.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                    <h4 className="font-bold text-charity-purple mb-1">Transparency</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">All donations are trackable on the blockchain.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                    <h4 className="font-bold text-charity-purple mb-1">Efficiency</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Low overhead costs means more of your donation makes an impact.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                    <h4 className="font-bold text-charity-purple mb-1">Security</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade security for all blockchain transactions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                    <h4 className="font-bold text-charity-purple mb-1">Impact</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Real-world outcomes trackable through our platform.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="People volunteering" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden border-8 border-white shadow-xl dark:border-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1560252829-804f1aeaf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                    alt="Ethereum donation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-charity-purple to-charity-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Join thousands of donors who are using cryptocurrency to support important causes around the world.
            </p>
            <button className="px-8 py-4 bg-white text-charity-purple rounded-xl font-semibold hover:bg-opacity-90 transition-colors shadow-lg">
              Start Donating Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
