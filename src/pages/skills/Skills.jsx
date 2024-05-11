import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';
import { Col, Row } from "react-bootstrap";
import { Tooltip } from 'react-tooltip';
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
                <img src={Python} length={150} width={150} alt="python" data-tooltip-id="python" data-tooltip-content="Python"/>
            </Col>
            <Tooltip id="python"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RLang} length={150} width={150} alt="r" data-tooltip-id="r" data-tooltip-content="R"/>
            </Col>
            <Tooltip id="r"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} length={150} width={150} alt="sql" data-tooltip-id="sql" data-tooltip-content="SQL"/>
            </Col>
            <Tooltip id="sql"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PowerBI} length={150} width={150} alt="power-bi" data-tooltip-id="power-bi" data-tooltip-content="Power-Bi"/>
            </Col>
            <Tooltip id="power-bi"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} length={150} width={150} alt="tableau" data-tooltip-id="tableau" data-tooltip-content="Tableau"/>
            </Col>
            <Tooltip id="tableau"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Excel} length={150} width={150} alt="excel" data-tooltip-id="excel" data-tooltip-content="Excel"/>
            </Col>
            <Tooltip id="excel"/>
          </Row>
          <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}

export default Skills;
