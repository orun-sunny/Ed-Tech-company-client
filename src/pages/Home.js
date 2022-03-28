import React from "react";
import { ButtonGroup, Carousel, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Flip from 'react-reveal/Flip';

import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";

import Bounce from "react-reveal/Bounce";
import Opinions from "../components/Opinions.js";

const Home = () => {
  const products = useProducts();
  return (
    <div>

      <div>



        <Carousel fade>
          <Carousel.Item>

            <img
            style={{height:'600px'}}
              className="d-block w-100"
              src="https://previews.123rf.com/images/peshkov/peshkov1905/peshkov190500374/128578729-fond-de-codage-de-circuit-rougeoyant-abstrait-concept-de-programmation-et-de-technologie-rendu-3d.jpg"
              alt="First slide"
            />


            <Carousel.Caption>
              <div className="mb-5 p-8 align-item-center">
                <Bounce>

                  <h1>Learn to be creative</h1>
                </Bounce>
                <p></p>
                <Bounce>
                  <button className="main-button">Ed-tech here for You</button>
                </Bounce>
              </div>
              <Bounce right>


                <h3> Always ready to learn</h3>
                <p>Learn exciting technologies from web development, design, game development and more!</p>
              </Bounce>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{height:'600px'}}
              className="d-block w-100"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/10/Coding-Image.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="mb-5 p-8 align-item-center">
                <Bounce>
                  <h1>Ed-tech here for u </h1>
                </Bounce>
                <p></p>
                <button className="main-button">Get your Course</button>
              </div>

              <p>Discover Your Course with Us</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{height:'600px'}}
              className="d-block w-100"
              src="https://insights.dice.com/wp-content/uploads/2020/05/shutterstock_1445888471.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="mb-5 p-8 align-item-center">

                <h1>Discover the  new technology</h1>
                <p></p>
                <button className="main-button">Get your package</button>
              </div>
              <h3>Learn exciting technologies from web development </h3>

            </Carousel.Caption>
          </Carousel.Item>






        </Carousel>

        <section class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb mb-90">
          <div class="overlay"></div>
          <div class="container">
            <div class="row d-md-flex justify-content-center">
              <div class="col-md-12">
                <div class="wrap-appointment d-md-flex">
                  <div class="col-md-8 bg-dark p-5 heading-section heading-section-white">

                    <h2 class="mb-4 bg-white ">Free Consultation</h2>
                    <form action="#" class="appointment">
                      <div class="row justify-content-center d-flex">
                        <div class="col-md-6">
                          <div class="form-group">
                            <Form.Group
                              className="mb-3 text-white"
                              controlId="formBasicText"
                            >
                              <Form.Label>Your Name </Form.Label>
                              <Form.Control

                                type="text"
                                placeholder="Enter Your Name"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 text-white"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Your Email </Form.Label>
                              <Form.Control

                                type="email"
                                placeholder="Enter Your Email"
                              />
                            </Form.Group>

                          </div>
                        </div>

                        <div class="col-md-6 mt-2">
                          <div class="form-group">
                            <div class="form-field">
                              <div class="select-wrap">
                                <div class="icon"><span class="fa fa-chevron-down">choose your course</span></div>

                                <select name="" id="#" class="form-control">
                                  <option value="">Select Course</option>
                                  <option value="">Javascript basic</option>
                                  <option value="">Full stack</option>
                                  <option value="">React js </option>
                                  <option value="">Php </option>

                                </select>


                              </div>
                            </div>
                          </div>

                        </div>
                        <ButtonGroup className="mb-5 px-6 mt-4" variant="light" type="submit">
                          Make a Appointment
                        </ButtonGroup>

                      </div>
                    </form>
                  </div>
                  <div class="col-md-4 bg-white text-center p-5">
                    <div class="desc border-bottom pb-4">
                      <h2>Business Hours</h2>
                      <div class="opening-hours">
                        <h4>Opening Days: </h4>
                        <p class="pl-3">
                          <span><strong>Monday – Friday: </strong> 9am to 20 pm</span>
                          <span><strong>Saturday: </strong> 9am to 17 pm</span>
                        </p>
                        <h4>Vacations: </h4>
                        <p class="pl-3">
                          <span>All Sunday Days</span>
                          <span>All Official Holidays</span>
                        </p>
                      </div>
                    </div>
                    <div class="desc pt-4 ">
                      <h3 class="heading">For Emergency Cases</h3>
                      <span class="phone">(+088) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>


      <Container >

        <Flip left>
          <h2 className="text-center feature mt-5">FEATURED Courses</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-5">
            {" "}
            Here you can find our all latest courses. Choose some of them and try to grow up your skills.
          </p>
        </Flip >
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="primary" animation="grow" role="status">
              <span className="visually-hidden">wait...</span>
            </Spinner>
            <h6>waiting...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              All Course
            </button>
          </Link>
        </div>
      </Container>
      <Opinions />
    </div>
  );
};

export default Home;