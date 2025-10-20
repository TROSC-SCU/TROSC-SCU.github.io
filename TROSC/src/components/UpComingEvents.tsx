import React, { useState, useEffect } from 'react';

interface UpcomingEvent {
  title: string;
  location: string;
  date: string;
}

interface TimeLeft {
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const upcomingEventsData: UpcomingEvent[] = [
  {
    title: 'Sandbox Festival',
    location: 'El Gouna, Egypt',
    date: '2026-06-15T12:00:00Z',
  },
  {
    title: 'Cairo International Book Fair',
    location: 'Cairo, Egypt',
    date: '2027-01-22T10:00:00Z',
  },
];

// --- Countdown COMPONENT ---
// A reusable hook-based component to handle the countdown logic.
const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft = {
        months: Math.floor(totalDays / 30),
        days: totalDays % 30,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents: string[] = [];

  if (timeLeft.months && timeLeft.months > 0) timerComponents.push(`${timeLeft.months} month${timeLeft.months > 1 ? 's' : ''}`);
  if (timeLeft.days && timeLeft.days > 0) timerComponents.push(`${timeLeft.days} day${timeLeft.days > 1 ? 's' : ''}`);
  if (timeLeft.hours && timeLeft.hours > 0) timerComponents.push(`${timeLeft.hours} hour${timeLeft.hours > 1 ? 's' : ''}`);
  if (timeLeft.minutes && timeLeft.minutes > 0) timerComponents.push(`${timeLeft.minutes} minute${timeLeft.minutes > 1 ? 's' : ''}`);
  
  // Format the countdown string
  let countdownString = 'only ';
  if(timerComponents.length > 1) {
    countdownString += timerComponents.slice(0, -1).join(', ') + ', and ' + timerComponents.slice(-1);
  } else {
    countdownString += timerComponents[0];
  }
  countdownString += ' to go..';


  return (
    <span className="text-sm text-gray-800">
      {timerComponents.length ? countdownString : "Time's up!"}
    </span>
  );
};


// --- UpcomingEventCard COMPONENT ---
const UpcomingEventCard: React.FC<{ event: UpcomingEvent }> = ({ event }) => {
  return (
    <div className="bg-red-300/80 rounded-2xl p-6 flex justify-between items-center transition-transform hover:scale-[1.03] duration-300">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{event.title} – {event.location}</h3>
        <Countdown targetDate={event.date} />
      </div>
      <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-colors shadow-lg">
        Enroll Now
      </button>
    </div>
  );
};


// --- MAIN App COMPONENT ---
const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-full font-sans py-16 px-8">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Upcoming Events</h2>
        <p className="text-lg text-gray-300 mb-12 italic">"We're preparing something awesome for you!"</p>
        
        <div className="space-y-6">
          {upcomingEventsData.map((event, index) => (
            <UpcomingEventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
