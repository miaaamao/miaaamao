import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import { Col, Row } from "react-bootstrap";
import Python from '../../assets/img/techstack/python.png';
import RLang from '../../assets/img/techstack/rlang.png';
import SQL from '../../assets/img/techstack/sql.png';
import Tableau from '../../assets/img/techstack/tableau.png';
import PowerBI from '../../assets/img/techstack/powerbi.png';
import Excel from '../../assets/img/techstack/excel.png';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mia's Portfolio - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>06</strong>
          </h4>
        </div>
        <div className="skills-right">
          <Row style={{ justifyContent: "center"}}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} length={150} width={150} title="Python" alt="python"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RLang} length={150} width={150} title="R" alt="r"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} length={150} width={150} title="SQL" alt="sql"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PowerBI} length={150} width={150} title="PowerBI" alt="powerbi"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} length={150} width={150} title="Tableau" alt="tableau"/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Excel} length={150} width={150} title="Excel" alt="excel"/>
            </Col>
          </Row>
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}

export default Skills;
