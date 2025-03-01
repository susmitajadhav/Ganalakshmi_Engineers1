import React from "react";
import "../styles/BlogPage.css";
import Footer from "../pages/Footer";
import Header from '../pages/Header';

const blogData = [
  {
    id: 1,
    title: "The Future of Electrical Engineering",
    image: "https://source.unsplash.com/800x500/?technology",
    description: "Exploring the latest advancements in electrical engineering and their impact on industries.",
    date: "February 25, 2025",
  },
  {
    id: 2,
    title: "How Solar Energy is Revolutionizing Power Generation",
    image: "https://source.unsplash.com/800x500/?solar",
    description: "A deep dive into the benefits and future of solar energy solutions.",
    date: "February 20, 2025",
  },
  {
    id: 3,
    title: "Smart Panels: The Future of Industrial Automation",
    image: "https://source.unsplash.com/800x500/?industry",
    description: "How smart panels are reshaping automation and efficiency in the industrial sector.",
    date: "February 15, 2025",
  }
];

const BlogPage = () => {
  return (
    <div>
            <Header />
    <div className="blog-container">
      <h1 className="blog-title">Our Latest Blogs</h1>
      <p className="blog-subtitle">Stay updated with the latest industry trends and insights.</p>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p>{blog.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default BlogPage;