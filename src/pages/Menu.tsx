
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, menuItems } from "@/data/menuData";
import { toast } from "sonner";
import { Plus } from "lucide-react";

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = searchQuery
    ? menuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide variety of delicious meals prepared with fresh ingredients. 
          From appetizers to desserts, we have something for everyone.
        </p>
        
        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setSearchQuery("")}
              >
                <svg className="w-4 h-4 text-gray-500 hover:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 12 12M13 1 1 13"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {!searchQuery && (
        <Tabs defaultValue={categories[0].id} className="mb-8">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Search Results</h2>
          <p className="text-gray-600">
            Showing {filteredItems.length} results for "{searchQuery}"
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden food-menu-item">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="font-bold text-orange-500">₹{item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
                onClick={() => handleAddToCart(item)}
              >
                <Plus size={16} />
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-orange-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No items found</h3>
          <p className="text-gray-600">
            We couldn't find any menu items matching your search.
            <br />Try a different search term or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
