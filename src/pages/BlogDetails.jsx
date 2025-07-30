import React from 'react';
import { FiSearch, FiChevronLeft, FiChevronRight, FiMessageSquare, FiUser } from 'react-icons/fi';

const BlogDetails = () => {
  const comments = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "March 15, 2025",
      content: "This article perfectly captures the essence of modern restaurant innovation. The focus on artisanal foods is particularly inspiring!",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "March 10, 2025",
      content: "I've noticed these trends in my own restaurant. The adaptation to dietary changes has been crucial for our business.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      date: "March 5, 2025",
      content: "Would love to see more coverage on sustainable practices in future articles. Great read nonetheless!",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Full-width Gray Header */}
      <div className="w-full bg-[#2f2f2f] text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-wider mb-2 text-white">Blog Details</h2>
          <h1 className="text-[6rem] font-bold text-white/10 tracking-wide -mt-6 select-none">
            
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* POORTS Header */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">POORTS</h1>
              <div className="text-gray-500">
                <span>30 July, 2025</span> • <span>by admin</span>
              </div>
            </div>

            {/* Main Article */}
            <article className="mb-10">
              <h2 className="text-2xl font-bold mb-4">ICONIC ESTABLISHMENTS ARE REINVENTING</h2>
              <p className="text-gray-700 mb-6">
                Efficiently reinvent installed base opportunities after team driven quality vectors. 
                Dramatically for value added partnerships. Holistically uninemendate client based materials...
              </p>
              <button className="text-red-500 font-bold flex items-center">
                READ DETAILS <span className="ml-1">❤️</span>
              </button>
              <br /><br /><br />
              
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">FOODIES</h1>
                <div className="text-gray-500">
                  <span>24 Feb, 2024</span> • <span>by admin</span>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">EXPLORING THE WORLD OF FOOD AND WINE</h2>
              <p className="text-gray-700 mb-6">
                Efficiently reinvent installed base opportunities after team driven quality vectors. 
                Dramatically for value added partnerships. Holistically reinforceable client based materials...
              </p>

              <button className="text-red-500 font-bold flex items-center mb-8">
                READ DETAILS <span className="ml-1">❤</span>
              </button>

              <hr className="border-gray-300 my-6" />
            </article>

            {/* Previous/Next Post Navigation */}
            <div className="flex justify-between mt-12 border-t border-b border-gray-200 py-6">
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <FiChevronLeft className="mr-2" />
                <div className="text-left">
                  <span className="text-sm block text-gray-500">Previous Post</span>
                  <span className="font-medium">Craftsmanship of Artisanal Foods</span>
                </div>
              </button>
              
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <div className="text-right">
                  <span className="text-sm block text-gray-500">Next Post</span>
                  <span className="font-medium">Changing Dietary Trends</span>
                </div>
                <FiChevronRight className="ml-2" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <div className="flex items-center mb-8">
                <FiMessageSquare className="text-red-500 mr-2" />
                <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>
              </div>

              {/* Comments List */}
              <div className="space-y-8">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={comment.avatar} 
                        alt={comment.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{comment.name}</h4>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6">Leave a Comment</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                    <textarea 
                      id="comment" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Write your comment here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Search Input */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter Keyword"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 pr-12"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 p-2 rounded text-white">
                  <FiSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-6 text-lg">RECENT POSTS</h3>
              <div className="space-y-6">
                {[
                  {
                    author: "by David Smith",
                    title: "Craftsmanship of Artisanal Foods in Restaurants"
                  },
                  {
                    author: "by David Smith",
                    title: "Restaurants Are Adopting to Changing Dietary Trends"
                  },
                  {
                    author: "by David Smith",
                    title: "Passion and Perseverance from Renowned Chefs"
                  }
                ].map((post, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <p className="text-gray-500 text-sm mb-1">{post.author}</p>
                    <h4 className="font-medium hover:text-gray-600 cursor-pointer">{post.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">CATEGORIES</h3>
              <ul className="space-y-3">
                {[
                  "Soups and Salads",
                  "Pants and Noodles",
                  "Vegetarian and Vegan",
                  "Pizza and Fidrounds"
                ].map((category, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-2">
                    <span>{category}</span>
                    <span>→</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">POPULAR TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {['ADVICE', 'AUTHOR', 'CONSULTING', 'DECENT', 'FAMERA', 'HEALTH', 'TIP', 'JUDGE', 'SOLUTION'].map((tag) => (
                  <span key={tag} className="bg-white px-3 py-1 text-sm rounded border hover:bg-gray-100 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;