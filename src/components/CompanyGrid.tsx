
import React from 'react';
import CompanyTile from './CompanyTile';

const companies = [
  {
    name: "Apple",
    logo: "/placeholder.svg",
    description: "Innovative technology company known for iPhone, Mac, and other consumer electronics.",
    website: "https://apple.com"
  },
  {
    name: "Google",
    logo: "/placeholder.svg",
    description: "Leading search engine and technology company offering various internet services.",
    website: "https://google.com"
  },
  {
    name: "Microsoft",
    logo: "/placeholder.svg",
    description: "Global technology corporation known for Windows OS and cloud computing.",
    website: "https://microsoft.com"
  },
  {
    name: "Amazon",
    logo: "/placeholder.svg",
    description: "E-commerce and cloud computing leader with diverse technology offerings.",
    website: "https://amazon.com"
  },
  {
    name: "Meta",
    logo: "/placeholder.svg",
    description: "Social media and technology company focused on connecting people globally.",
    website: "https://meta.com"
  },
  {
    name: "Tesla",
    logo: "/placeholder.svg",
    description: "Electric vehicle and clean energy company revolutionizing transportation.",
    website: "https://tesla.com"
  },
  {
    name: "Netflix",
    logo: "/placeholder.svg",
    description: "Leading streaming service offering original content and entertainment.",
    website: "https://netflix.com"
  },
  {
    name: "Adobe",
    logo: "/placeholder.svg",
    description: "Creative software company providing tools for digital content creation.",
    website: "https://adobe.com"
  },
  {
    name: "Intel",
    logo: "/placeholder.svg",
    description: "Semiconductor company pioneering computer processor technology.",
    website: "https://intel.com"
  }
];

const CompanyGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <CompanyTile key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyGrid;
