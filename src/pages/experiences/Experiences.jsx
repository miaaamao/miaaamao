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
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Analysis Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">McKinsey & Company</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={McKinsey} width={140} height={140} alt="McKinsey"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
                        <p>
                            Analyzed client group segments using Salesforce CRM and Excel, identifying barriers in Citi's services. Recommendations from this analysis led to a 25% improvement in customer satisfaction.
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
                        <h3 className="vertical-timeline-element-title">Business Analysis Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">Versailles Group</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={Versailles} width={140} height={140} alt="Versailles"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Conducted a comprehensive instability analysis of a leading lead-acid battery manufacturer, leveraging advanced Excel models and Python for data analysis, which helped identify critical financial trends and investment opportunities.
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
                        icon={<MdWorkOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Analysis Intern</h3>
                        <a href="https://www.tencent.com/" style={{textDecoration: 'none'}}> <h4 className="vertical-timeline-element-subtitle">PricewaterhouseCoopers</h4> </a>
                        <a href="https://www.tencent.com/"> <img className="vertical-timeline-element-image" src={PWC} width={140} height={140} alt="PWC"/></a>
                        <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                        <p>
                            Utilized SAP and Tableau to enhance data visualization and analysis to enrich understanding of the bank's financial market division.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </Container>
        </>
    );
}
export default Experiences;
