
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CompanyTileProps {
  company: {
    name: string;
    logo: string;
    description: string;
    website: string;
  };
}

const CompanyTile = ({ company }: CompanyTileProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative transform-style-3d transition-transform duration-500 w-full h-full ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex items-center justify-center p-6 border border-gray-100">
          <img
            src={company.logo}
            alt={company.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 rotate-y-180 border border-gray-100">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
            <p className="text-gray-600 flex-grow text-sm">{company.description}</p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-4 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Website
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTile;
