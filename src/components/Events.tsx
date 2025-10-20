import React from 'react';

interface Event {
  title: string;
  description: string;
  imageUrl: string;
}

const eventsData: Event[] = [
  {
    title: 'Trosc - lama cat event 2024',
    description: 'an exciting gathering for tech enthusiasts and creative minds! Join inspiring workshops, hands-on sessions, and interactive talks across multiple tracks. Connect with experts, level up your skills, and explore innovative projects.',
    imageUrl: 'https://placehold.co/200x120/1a0e0e/ffffff?text=Event+1&font=raleway',
  },
  {
    title: 'Somabay Endurance Festival - Somabay, Egypt',
    description: 'With endurance challenges like running and cycling, this festival represents persistence and pushing boundaries. Trosc members would have related this energy to mastering difficult tracks and staying committed to learning.',
    imageUrl: 'https://placehold.co/200x120/1a0e0e/ffffff?text=Event+2&font=raleway',
  },
  {
    title: 'Cairo International Trade and Export Finance Conference - Cairo, Egypt',
    description: 'Networking and learning from global experts in trade and finance would have expanded our team\'s vision, helping Trosc approach projects with strategic thinking and a broader perspective.',
    imageUrl: 'https://placehold.co/200x120/1a0e0e/ffffff?text=Event+3&font=raleway',
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_15px_0px_rgba(239,68,68,0.2)] hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{event.description}</p>
        <a href="#" className="text-white font-semibold underline hover:text-red-400 transition-colors">
          See More
        </a>
      </div>
      <div className="flex-shrink-0 w-full md:w-48">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-auto object-cover rounded-xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/200x120/1a0e0e/ffffff?text=Image+Missing';
          }}
        />
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <div id='events' className="w-full font-sans px-6 py-16">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Events</h2>

        <div className="space-y-8">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

