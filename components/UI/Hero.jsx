import React from 'react';
import SectionSubtitle from './SectionSubtitle';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/hero.jpg';
import classes from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Mojtaba Shafiee</h2>
              <h5 className="mb-4">Backend Developer</h5>
              <p>
                Recently, I have been working as a backend developer (nodejs)
                and some system admin for one year and 3 months in Akaf Web
                software company.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://jobinja.ir/user/Mojtaba-Shafiee">
                    <a target="_blank">Hire me</a>
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://jobinja.ir/user/Mojtaba-Shafiee/download">
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              {/* <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div> */}

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">3 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
