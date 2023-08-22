import React from 'react';
import SectionSubtitle from './SectionSubtitle';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/photo_5992578344543175576_y.jpg';
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


Recently, I have been working as a backend service developer at ArshCo software company for one year. During my time there, I have been involved in various projects, including social networking platforms, online stores, and more. My role has allowed me to contribute to the development and enhancement of backend services, ensuring their functionality and performance meet the highest standards.

In this capacity, I have gained valuable experience in designing and implementing backend solutions that cater to the specific needs of different projects. This has required me to collaborate closely with cross-functional teams to understand project requirements, architect efficient solutions, and deliver high-quality code.

My work at ArshCo has not only honed my technical skills but also improved my ability to work within a dynamic and fast-paced environment. I have developed a strong aptitude for problem-solving, optimizing processes, and staying up-to-date with the latest industry trends and technologies.

I am proud of my contributions to the successful development of various projects at ArshCo, and I am excited to continue leveraging my expertise to create impactful and innovative backend solutions in the future.

Thank you for considering my experience and qualifications. I look forward to discussing how my skills align with your organization's goals.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://cvbuilder.me/Resume/fa/f38d18d0-683f-480d-b9ee-b9d67021dea5?template=PreviewDefault">
                    <a target="_blank">Hire me</a>
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://cvbuilder.me/Builder/Pdf/fa/PreviewDefault/f38d18d0-683f-480d-b9ee-b9d67021dea5/MyResume-540[www.cvbuilder.me]112.pdf">
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="370" height="400" />

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
