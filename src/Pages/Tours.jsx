import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import TourCard from "./../Shared/TourCard";
import SearchBar from "../Shared/SearchBar";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tours`);
        // Check if response.data.data exists (common API structure) otherwise use response.data
        setTours(response.data.data || response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
        setError(error.message || "Error loading tour details. Check your network");
        setLoading(false);
      }
    };

    fetchTours();
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

  if (!tours || tours.length === 0) {
    return <div className="error__msg">No tours found.</div>;
  }

  return (
    <div>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tours.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id || tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Tours;
