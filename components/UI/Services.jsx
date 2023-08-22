import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Artificial Intelligence" icon="ri-code-s-slash-line" />
              </div>
              <div>
                <ServicesItem title="Blockchain programming" icon="ri-code-s-slash-line" />
            </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Architecture,</h3>
            <h3 className="mb-4">Better Performance</h3>
            <p>
              Server implementation using monolithic and macroservice
              architectures using the Nodejs platform. Technical advice related
              to the architecture and how to implement the applications server.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
