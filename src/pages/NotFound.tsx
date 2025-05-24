
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-orange-500 mb-6">
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        We couldn't find the page you're looking for.<br />
        The path "{location.pathname}" does not exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Go Home
          </Button>
        </Link>
        <Link to="/menu">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
            Browse Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
