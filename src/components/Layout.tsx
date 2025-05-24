
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Layout = () => {
  const { totalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Order History", path: "/order-history", protected: true }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-orange-500">Tasty<span className="text-green-500">Bites</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                (!link.protected || isAuthenticated) && (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "font-medium transition-colors hover:text-orange-500",
                      location.pathname === link.path ? "text-orange-500" : "text-gray-700"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* Auth navigation */}
              {isAuthenticated ? (
                <div className="relative group">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <User size={20} />
                    <span className="hidden lg:inline">{user?.name}</span>
                  </Button>
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="p-2">
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Login
                  </Button>
                </Link>
              )}

              {/* Cart Button */}
              <Link to="/cart" className="relative">
                <Button variant="ghost" className="text-gray-700 hover:text-orange-500">
                  <ShoppingCart size={24} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </nav>

            {/* Mobile Navigation Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <Link to="/cart" className="relative">
                <Button variant="ghost" className="text-gray-700">
                  <ShoppingCart size={24} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Menu">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  (!link.protected || isAuthenticated) && (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "font-medium py-2 transition-colors",
                        location.pathname === link.path ? "text-orange-500" : "text-gray-700"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                
                {/* Auth navigation for mobile */}
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700 py-2">
                      {user?.name}
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-2 text-gray-700 hover:text-orange-500"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="block py-2 font-medium text-gray-700 hover:text-orange-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">TastyBites</h3>
              <p className="text-gray-300">
                Delicious food delivered to your doorstep. Order now and enjoy a fantastic meal!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Track Order
                  </Link>
                </li>
                {isAuthenticated && (
                  <li>
                    <Link to="/order-history" className="text-gray-300 hover:text-orange-400 transition-colors">
                      Order History
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: contactus@tastybites.com</p>
              <p className="text-gray-300">Phone: +91-6355629167</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/abhishek.Champ7.in/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-gray-400 hover:text-blue-500"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://instagram.com/abhishek.yadav_7"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-gray-400 hover:text-pink-500"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://twitter.com/AKYADAVJI_10"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-gray-400 hover:text-blue-400"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TastyBites. All rights reserved.</p>
            <p className="mt-1 text-sm">Created for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
