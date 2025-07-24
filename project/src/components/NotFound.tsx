// src/components/NotFound.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animation404 from '../assesets/animations/Error404.json';
export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Lottie animation from public folder */}
        <Lottie
          animationData={animation404}
          loop
          className="w-72 sm:w-96 mx-auto mb-8"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-slate-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-slate-800 text-white font-medium rounded-xl hover:bg-slate-700 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};
