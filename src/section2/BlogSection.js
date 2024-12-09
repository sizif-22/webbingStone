import React from "react";
import BlogCard from "./blogCard";
import Button from "../components/Button";
import placeHoder from "../assets/elementor-placeholder-image.webp";

const BlogSection = () => {
  const blogs = [
    {
      image:
        "https://webbingstone.com/wp-content/uploads/2024/08/digital-marketing-trends-2024-640x480.webp",
      day: "08",
      month: "Aug",
      title: "Top Digital Marketing Trends Worldwide in 2024",
      author: "WS_ADMIN",
      content:
        "As we enter 2024, the digital marketing landscape is profoundly transforming...",
      readMoreLink: "#",
    },
    {
      // image: "https://via.placeholder.com/300x200",
      image: placeHoder,
      day: "24",
      month: "May",
      title: "How To Perform An SEO Competitor Analysis, Simplified",
      author: "WS_ADMIN",
      content:
        "SEO competitor analysis is not rocket science, but it usually gets complicated...",
      readMoreLink: "#",
    },
    {
      // image: "https://via.placeholder.com/300x200",
      image: placeHoder,
      day: "29",
      month: "Apr",
      title: "Block-Chain Technology: Digital Marketing Revolution",
      author: "WS_ADMIN",
      content:
        "In the fast-paced digital landscape, innovation is the key to staying ahead...",
      readMoreLink: "#",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] py-10">
      <h1 className="text-center mb-12 text-3xl text-secondary">
        Recent Blog Posts{" "}
      </h1>
      <div className="container mx-auto md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              day={blog.day}
              month={blog.month}
              title={blog.title}
              author={blog.author}
              content={blog.content}
              readMoreLink={blog.readMoreLink}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button name={"View More"} link={"https://webbingstone.com/blog"} />
      </div>
    </div>
  );
};

export default BlogSection;
