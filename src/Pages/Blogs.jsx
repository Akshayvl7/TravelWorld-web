import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../Shared/BlogCard";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        // Check if response.data.data exists (common API structure) otherwise use response.data
        setBlogs(response.data.data || response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message || "Error loading blog details. Check your network");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div className="error__msg">{error}</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="error__msg">No blogs found.</div>;
  }

  return (
    <div>
      <CommonSection title={"All Blogs"} />
      <section className="mt-4">
        <Container>
          <Row>
            {blogs.map((blog) => (
              <Col lg="4" md="6" sm="6" className="mb-4" key={blog._id || blog.id}>
                <BlogCard blog={blog} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Blogs;
