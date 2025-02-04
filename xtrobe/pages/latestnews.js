import { useEffect, useState } from "react";

export default function LatestNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch('http://127.0.0.1:5000/scrape')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setArticles(data.data);
          const uniqueCategories = ["All", ...new Set(data.data.map(article => article.category))];
          setCategories(uniqueCategories);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

 

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });



  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search, Filters, and Dark Mode Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`p-2 rounded-lg border bg-white border-gray-200`}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`p-2 rounded-lg border bg-white border-gray-200`}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
    
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`animate-pulse rounded-xl shadow-lg overflow-hidden`}>
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* First Article (Featured) */}
            {filteredArticles.length > 0 && (
              <div className="mb-16">
                <div className={` rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 group`}>
                  <a href={filteredArticles[0].link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative w-full h-[500px] overflow-hidden">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={filteredArticles[0].webp_set}
                          sizes={filteredArticles[0].sizes}
                        />
                        <img
                          src={filteredArticles[0].image}
                          srcSet={filteredArticles[0].src_set}
                          sizes={filteredArticles[0].sizes}
                          alt={filteredArticles[0].title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                         
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-4xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
                          {filteredArticles[0].title}
                        </h3>
                        <p className="text-lg text-gray-200">{filteredArticles[0].description}</p>
                     
                        <div className="mt-4">
                          <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors duration-300">
                            Read More
                            <svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}

            {/* Remaining Articles (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article, index) => (
                <div
                  key={index}
                  className={` rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group`}
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative w-full h-48 overflow-hidden">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={article.webp_set}
                          sizes={article.sizes}
                        />
                        <img
                          src={article.image}
                          srcSet={article.src_set}
                          sizes={article.sizes}
                          alt={article.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = '/fallback-image.jpg'; // Fallback image
                          }}
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.description}</p>
                      <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300">
                        <span className="text-sm font-medium">Read More</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                  
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Load More Button */}
           
          </>
        )}

        {/* Floating "Back to Top" Button */}
    
      </div>
    </div>
  );
}