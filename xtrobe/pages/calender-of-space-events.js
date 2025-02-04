import { useEffect, useState } from "react";

export default function LaunchEvents() {
  const [events, setEvents] = useState([]);

  // Fallback image URL for when the image is not available
  const fallbackImage = "https://via.placeholder.com/150"; // Or you can use a local image path

  // Fetch the event data from the API when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://127.0.0.1:5000/calenderevents');
      const data = await response.json();
      setEvents(data.events);  // Assuming the data contains an array of events
    };

    fetchEvents();
  }, []);

  // Helper function to format launch time correctly
  const formatLaunchTime = (launch_time) => {
    if (launch_time) {
      const formattedTime = launch_time.replace("UTC", " UTC");
      return formattedTime;
    }
    return "Launch time not available";
  };

  // Check if the image URL is valid
  const isValidImageUrl = (url) => {
    return url && (url.startsWith('http') || url.startsWith('https'));
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Upcoming Launch Events</h1>

      {/* Display each event only if it has a valid image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => {
          // Only render the event if the image is valid
          if (!isValidImageUrl(event.image_url)) {
            return null;
          }

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
            >
              {/* Image Section */}
              <div className="w-full mb-6">
                <img
                  src={isValidImageUrl(event.image_url) ? event.image_url : fallbackImage}
                  alt={event.title}
                  className="w-40 h-40 object-cover rounded-lg mx-auto border-4 border-gray-200"
                />
              </div>

              {/* Event Details */}
              <div className="w-full text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
                <p className="text-md text-gray-600 mt-2">{event.launch_info}</p>
                <p className="text-sm text-gray-500 mt-2">{event.location}</p>
                <p className="text-sm text-gray-500 mt-2">{formatLaunchTime(event.launch_time)}</p>
                <div className="mt-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">{event.go_for_launch_content}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
