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
import MySQL from '../../assets/img/techstack/mysql.png';
import MariaDB from '../../assets/img/techstack/mariadb.png';
import SPSS from '../../assets/img/techstack/spss.png';
import SAS from '../../assets/img/techstack/sas.png';
import Snowflake from '../../assets/img/techstack/snowflake.png';
import LaTex from '../../assets/img/techstack/latex.png';
import SQLServer from '../../assets/img/techstack/sqlserver.png';
import AWS_S3 from '../../assets/img/techstack/aws-s3.png';

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
          <Row style={{ justifyContent: "center" }}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} length={150} width={150} alt="python" data-tooltip-id="python" data-tooltip-content="Python"/>
            </Col>
            <Tooltip id="python" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RLang} length={150} width={150} alt="r" data-tooltip-id="r" data-tooltip-content="R"/>
            </Col>
            <Tooltip id="r" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} length={150} width={150} alt="sql" data-tooltip-id="sql" data-tooltip-content="SQL"/>
            </Col>
            <Tooltip id="sql" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PowerBI} length={150} width={150} alt="power-bi" data-tooltip-id="power-bi" data-tooltip-content="Power-Bi"/>
            </Col>
            <Tooltip id="power-bi" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} length={150} width={150} alt="tableau" data-tooltip-id="tableau" data-tooltip-content="Tableau"/>
            </Col>
            <Tooltip id="tableau" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Snowflake} length={150} width={150} alt="snowflake" data-tooltip-id="snowflake" data-tooltip-content="Snowflake"/>
            </Col>
            <Tooltip id="snowflake" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SAS} length={150} width={150} alt="sas" data-tooltip-id="sas" data-tooltip-content="SAS"/>
            </Col>
            <Tooltip id="sas" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SPSS} length={150} width={150} alt="spss" data-tooltip-id="spss" data-tooltip-content="SPSS"/>
            </Col>
            <Tooltip id="spss" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={LaTex} length={150} width={150} alt="latex" data-tooltip-id="latex" data-tooltip-content="LaTex"/>
            </Col>
            <Tooltip id="latex" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={MySQL} length={150} width={150} alt="mysql" data-tooltip-id="mysql" data-tooltip-content="MySQL"/>
            </Col>
            <Tooltip id="mysql" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQLServer} length={150} width={150} alt="sql server" data-tooltip-id="sql_server" data-tooltip-content="SQL Server"/>
            </Col>
            <Tooltip id="sql_server" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={MariaDB} length={150} width={150} alt="mariadb" data-tooltip-id="mariadb" data-tooltip-content="MariaDB"/>
            </Col>
            <Tooltip id="mariadb" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AWS_S3} length={150} width={150} alt="aws s3" data-tooltip-id="aws s3" data-tooltip-content="AWS S3"/>
            </Col>
            <Tooltip id="aws s3" place="left"/>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Excel} length={150} width={150} alt="excel" data-tooltip-id="excel" data-tooltip-content="Excel"/>
            </Col>
            <Tooltip id="excel" place="left"/>
          </Row>
          <br /> <br /> <br /> <br /> <br /> 
        </div>
      </Container>
    </>
  );
}

export default Skills;