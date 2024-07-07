import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import '../../style.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWorkOutline } from "react-icons/md";
import McKinsey from '../../assets/img/experience/mckinsey.png';
import Versailles from '../../assets/img/experience/versailles.png';
import PWC from '../../assets/img/experience/pwc.png';

function Experiences() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Mia's Portfolio - Experiences</title>
                </Helmet>
            </HelmetProvider>
            <Container fluid className="skills-wrapper">
                <div className="skills-left animate__animated animate__zoomIn">
                    <h3>Experiences</h3>
                    <h4>
                        ───&nbsp;&nbsp;Page <strong>03</strong>
                    </h4>
                </div>
                <br /> 
                <VerticalTimeline lineColor="#F5F5F5"> 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2022 - November 2022"
                        contentStyle={{ border: '#accce6', boxShadow: '4px 5px 4px 3px #a7cbe8' }}
                        contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
                        iconStyle={{ background: '#75aadb', color: '#fff' }}
                        position='left'
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">McKinsey & Company</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={McKinsey} width={140} height={140} alt="McKinsey"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
                        <p>
                            Developed merge pipeline from Snowflake Stages to Prod tables and automated tasks in Snowflake Tasks functions and Alteryx to refresh data sources by 10% and aligned with daily ingestion data from customers' transactions.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <VerticalTimeline lineColor="#F5F5F5"> 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2022 - July 2022"
                        contentStyle={{ border: '#accce6', boxShadow: '4px 5px 4px 3px #a7cbe8' }}
                        contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
                        iconStyle={{ background: '#75aadb', color: '#fff' }}
                        position='right'
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Portfolio Analyst Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Versailles Group</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={Versailles} width={140} height={140} alt="Versailles"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Performed investment judgement by calculating the return on investments and applied Monte Carlo Simulations and Probability theory using Python to evaluate the relationship between each variable and measure expected results of independent events.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <VerticalTimeline lineColor="#F5F5F5"> 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2021 - September 2021"
                        contentStyle={{ border: '#accce6', boxShadow: '4px 5px 4px 3px #a7cbe8' }}
                        contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
                        iconStyle={{ background: '#75aadb', color: '#fff' }}
                        position='left'
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Risk Assurance Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">PricewaterhouseCoopers</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={PWC} width={140} height={140} alt="PWC"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                        <p>
                            Created financial valuation models in Python to analyze 5M+ historical data to track firm's productivity, market sizing, and potential growth, with goal to evaluate business values and financial worth in investment portfolio.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </Container>
        </>
    );
}
export default Experiences;
