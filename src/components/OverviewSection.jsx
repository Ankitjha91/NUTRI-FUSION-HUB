import React from 'react';

const overviewCards = [
  {
    title: "Your One-Stop Fitness Partner",
    description: `Welcome to your all-in-one destination for health, fitness, and well-being. Whether you’re aiming to lose fat, gain muscle, or simply stay fit, our platform is designed to support your journey every step of the way. With personalized tools and human-centered design, we ensure that your fitness goals are within reach—no matter your background or budget.`
  },
  {
    title: "Diet Plans That Don’t Burn a Hole in Your Pocket",
    description: `Staying healthy doesn’t have to be expensive. Our budget-friendly diet plan feature crafts accurate and nutritious meal suggestions that align with your goals and your wallet. Whether you're a college student or a working professional, our diet solutions are completely free and personalized just for you. No hidden fees, no fine print—just clean, honest support.`
  },
  {
    title: "Guidance That Fits Your Schedule",
    description: `Life can be busy, but that shouldn’t stop your progress. With our smart scheduling tools, you can plan workouts and fitness activities around your daily routine with ease. Plus, our interactive query section lets you connect directly with our team for fast, thoughtful responses to your health and fitness questions.`
  },
  {
    title: "Fitness With a Purpose",
    description: `When you get stronger, someone else gets support. We proudly donate a portion of our profits to orphanages and provide meaningful employment opportunities to senior citizens and specially-abled individuals. Many of our fitness products—like gym wear, gear, and accessories—are handcrafted by these talented individuals. Every purchase you make helps uplift a life in need.`
  },
  {
    title: "Helping Hands, Helping Hearts",
    description: `Our initiative goes beyond fitness. When you make a purchase, you'll receive a special message: "Your helping hands help to feed a needy." It’s our way of showing that your journey toward better health is also a journey of kindness and community support.`
  },
  {
    title: "Unisex. Inclusive. For Everyone.",
    description: `Fitness belongs to all. That’s why our platform is 100% unisex, inclusive, and easy to use. Whether you’re a beginner or a seasoned fitness enthusiast, you’ll find valuable tips, updates, and features tailored just for you. We strive to make fitness simple, accessible, and enjoyable for everyone.`
  },
  {
    title: "Your Voice Matters",
    description: `We believe that communication is key to improvement. That’s why we’ve built a feedback system that creates a strong connection between users and developers. Share your experience, suggestions, or queries—and if your question is valuable, expect a fast and direct reply from our team. You’re not just a user here; you’re part of our fitness family.`
  },
  {
    title: "Stay Updated. Stay Motivated.",
    description: `Our platform is regularly updated with expert tips, motivational content, and smart tools to keep you moving forward. From workout routines to wellness advice, you’ll always have something new to explore. We're not just a website—we’re your daily dose of motivation, guidance, and care.`
  }
];

const OverviewSection = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Overview of Our Website</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {overviewCards.map((card, index) => (
          <div
            key={index}
            className="relative group p-6 rounded-2xl shadow-md bg-gradient-to-br from-white to-gray-50 transition-all duration-300 overflow-hidden border border-transparent hover:border-4 hover:border-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl z-0" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{card.title}</h2>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
