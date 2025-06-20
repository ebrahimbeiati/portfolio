import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title = "Ebrahim Beiati-Asl - Full Stack Developer Portfolio",
  description = "Full Stack Developer specializing in React, Node.js, and AWS. View my projects and get in touch for collaboration.",
  keywords = "Full Stack Developer, React Developer, Node.js, AWS, JavaScript, TypeScript, Web Development, Portfolio",
  image = "/logo512.png",
  url = "https://portfolio-ebrahim-beiatiasl.netlify.app/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ebrahim Beiati-Asl Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Ebrahim Beiati-Asl" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 