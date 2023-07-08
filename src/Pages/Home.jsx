import React from 'react'
import "../styles/Home.css"
import {Container,Row, Col} from 'reactstrap'
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg2 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import Subtitle from '../Shared/Subtitle'
import worldImg from "../assets/images/world.png"
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../Services/ServiceList'
import FeaturedToursList from '../FeaturedTours/FeaturedToursList'

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Traveling Opens The Door To Creating{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies.
              Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris. 
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" autoPlay controls loop muted />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h5 className="services__subtitle">What We Serve</h5>
            <h2 className="services__title">We Offer Our Best Services</h2>
          </Col>
          </Row>
          <ServiceList/>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Home