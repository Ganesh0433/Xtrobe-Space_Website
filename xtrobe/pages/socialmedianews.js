import React, { useEffect } from "react";

export default function SocialMediaNews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-8">
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold text-white">Latest from Space Agencies</h2>
        <p className="text-gray-400 mt-2">
          Stay updated with the latest news and discoveries from space agencies around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[
          { name: "NASA", url: "https://twitter.com/NASA?ref_src=twsrc%5Etfw" },
          { name: "ESA", url: "https://twitter.com/ESA?ref_src=twsrc%5Etfw" },
          { name: "ISRO", url: "https://twitter.com/ISRO?ref_src=twsrc%5Etfw" },
          { name: "JAXA", url: "https://twitter.com/JAXA_en?ref_src=twsrc%5Etfw" },
          { name: "SpaceX", url: "https://twitter.com/SpaceX?ref_src=twsrc%5Etfw" },
          { name: "Roscosmos", url: "https://twitter.com/Roscosmos?ref_src=twsrc%5Etfw" },
        ].map((agency) => (
          <div key={agency.name} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">{agency.name}</h3>
            <a
              className="twitter-timeline"
              href={agency.url}
              data-height="400"
           
              data-chrome="noheader nofooter noborders"
            >
              <p className="text-white"> Tweets by {agency.name}</p>

             
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
