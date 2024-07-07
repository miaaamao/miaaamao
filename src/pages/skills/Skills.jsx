import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../style.css';

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
          <h4>───&nbsp;&nbsp;Page <strong>06</strong></h4>
        </div>
        <div className="skills-section">
          {renderSkills()}
        </div>
        <div className="footer-space"></div>
      </Container>
    </>
  );
}

function renderSkills() {
  const skills = [
    { src: Python, alt: "Python", tooltipId: "python", tooltipContent: "Python" },
    { src: RLang, alt: "R", tooltipId: "r", tooltipContent: "R" },
    { src: SQL, alt: "SQL", tooltipId: "sql", tooltipContent: "SQL" },
    { src: PowerBI, alt: "Power BI", tooltipId: "power-bi", tooltipContent: "Power BI" },
    { src: Tableau, alt: "Tableau", tooltipId: "tableau", tooltipContent: "Tableau" },
    { src: Snowflake, alt: "Snowflake", tooltipId: "snowflake", tooltipContent: "Snowflake" },
    { src: SAS, alt: "SAS", tooltipId: "sas", tooltipContent: "SAS" },
    { src: SPSS, alt: "SPSS", tooltipId: "spss", tooltipContent: "SPSS" },
    { src: LaTex, alt: "LaTex", tooltipId: "latex", tooltipContent: "LaTex" },
    { src: MySQL, alt: "MySQL", tooltipId: "mysql", tooltipContent: "MySQL" },
    { src: SQLServer, alt: "SQL Server", tooltipId: "sql-server", tooltipContent: "SQL Server" },
    { src: MariaDB, alt: "MariaDB", tooltipId: "mariadb", tooltipContent: "MariaDB" },
    { src: AWS_S3, alt: "AWS S3", tooltipId: "aws-s3", tooltipContent: "AWS S3" },
    { src: Excel, alt: "Excel", tooltipId: "excel", tooltipContent: "Excel" }
  ];

  return (
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-entry tech-icons">
          <img src={skill.src} alt={skill.alt} data-tooltip-id={skill.tooltipId} data-tooltip-content={skill.tooltipContent} />
          <Tooltip id={skill.tooltipId} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
