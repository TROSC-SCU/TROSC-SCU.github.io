import React from 'react';

interface Track {
  imageUrl: string;
  title: string;
  description: string;
}

const tracksData: Track[] = [
  {
    imageUrl: 'https://placehold.co/600x400/1a0e0e/ffffff?text=Cyber+Security&font=raleway',
    title: 'Cyber security',
    description: 'Focuses on protecting systems, networks, and data from threats and attacks to ensure safety and privacy.',
  },
  {
    imageUrl: 'https://placehold.co/600x400/1a0e0e/ffffff?text=Mobile&font=raleway',
    title: 'Mobile',
    description: 'Involves creating user-friendly mobile apps for Android and iOS platforms.',
  },
  {
    imageUrl: 'https://placehold.co/600x400/1a0e0e/ffffff?text=Backend&font=raleway',
    title: 'Backend',
    description: 'Deals with servers, databases, and logic that power applications behind the scenes.',
  },
];

const TrackCard: React.FC<{ track: Track }> = ({ track }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_15px_0px_rgba(239,68,68,0.2)] hover:border-white/40 hover:-translate-y-1">
      <img 
        src={track.imageUrl} 
        alt={track.title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/600x400/1a0e0e/ffffff?text=Image+Not+Found';
        }}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
        <p className="text-gray-300 text-sm flex-grow mb-4">{track.description}</p>
        <button className="mt-auto w-full py-2 px-4 bg-transparent border border-gray-500 rounded-lg text-white font-medium hover:bg-red-800 hover:border-red-800 transition-colors duration-300">
          View track
        </button>
      </div>
    </div>
  );
};

const Tracks: React.FC = () => {
  return (
    <div id='tracks' className="px-6 py-16 w-full flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Tracks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracksData.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="py-3 px-8 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300 shadow-md">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
