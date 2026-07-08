import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="animate-page-enter min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c9956a]/10 mb-6">
          <Search size={40} className="text-[#c9956a]" />
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:shadow-xl hover:shadow-[#c9956a]/40 transition-all duration-300 hover:scale-105"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
