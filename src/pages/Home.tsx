
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories, menuItems } from "@/data/menuData";

const Home = () => {
  // Get featured items (one from each category)
  const featuredItems = categories.slice(0, 3).map(category => {
    return menuItems.find(item => item.category === category.id);
  }).filter(Boolean);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Delicious Food, <span className="text-orange-500">Delivered Fast</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Order your favorite meals from our curated menu and enjoy a tasty delivery to your doorstep.
              </p>
              <Link to="/menu">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg">
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000"
                alt="Delicious food spread"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="text-orange-500 font-bold text-xl mr-2">4.9</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Browse Menu",
                description: "Explore our diverse menu with a wide range of delicious options",
                icon: (
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Place Order",
                description: "Select your favorite items and place your order in just a few clicks",
                icon: (
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                )
              },
              {
                title: "Enjoy Food",
                description: "We prepare and deliver your order to your doorstep in no time",
                icon: (
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                )
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Menu</h2>
          <p className="text-center text-gray-600 mb-12">Try our most popular dishes loved by customers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => item && (
              <div key={item.id} className="food-menu-item bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-orange-500 font-bold">₹{item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link to="/menu">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      View Full Menu
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Saurabh Tiwari",
                comment: "The food is always fresh and delicious. Delivery is prompt and the app is so easy to use!",
                rating: 5
              },
              {
                name: "Ankit Singh",
                comment: "I order from TastyBites at least twice a week. Their burgers are the best in town!",
                rating: 5
              },
              {
                name: "Anjali Sharma",
                comment: "Great variety of menu options and excellent customer service. Highly recommended!",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">Delicious food is just a few clicks away!</p>
          <Link to="/menu">
            <Button className="bg-white hover:bg-gray-100 text-orange-500 font-bold px-8 py-3 rounded-md text-lg">
              Order Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
