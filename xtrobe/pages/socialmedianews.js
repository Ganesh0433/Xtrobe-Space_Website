import React from "react";

export default function SocialMediaNews() {
  return (
    <>
      {/* Section Title */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold text-gray-800">Latest from Space Agencies</h2>
        <p className="text-gray-600 mt-2">Stay updated with the latest news and discoveries from space agencies around the world.</p>
      </div>

      {/* Grid for Twitter Timelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* NASA */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">NASA</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by NASA
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* ESA */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ESA</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/ESA?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by ESA
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* ISRO */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ISRO</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/ISRO?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by ISRO
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* JAXA */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">JAXA</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/JAXA_en?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by JAXA
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* SpaceX */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">SpaceX</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/SpaceX?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by SpaceX
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        {/* Roscosmos */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Roscosmos</h3>
          <a
            className="twitter-timeline"
            href="https://twitter.com/Roscosmos?ref_src=twsrc%5Etfw"
            data-height="400"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Tweets by Roscosmos
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </>
  );
}