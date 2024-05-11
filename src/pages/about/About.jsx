import React, { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Modal, Button } from 'react-bootstrap';
import '../../style.css';
import DukeDiploma from "../../assets/diploma/UW-Madison Diploma.pdf";
import UCSBDiploma from "../../assets/diploma/UW-Madison Diploma.pdf";
import DukeDiplomaPreviewImage from "../../assets/diploma/UW-Madison Diploma Preview.png";
import UCSBDiplomaPreviewImage from "../../assets/diploma/UW-Madison Diploma Preview.png";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Document, Page } from 'react-pdf';

function About() {
  const [showDukeModal, setShowDukeModal] = useState(false);
  const [dukeNumPages, setDukeNumPages] = useState(null);
  const [dukeCurrentPage, setDukeCurrentPage] = useState(1);
  const [dukeIsDiplomaPreviewVisible, setDukeIsDiplomaPreviewVisible] = useState(false);

  const showDukeDiplomaPreview = () => setDukeIsDiplomaPreviewVisible(true);
  const hideDukeDiplomaPreview = () => setDukeIsDiplomaPreviewVisible(false);

  const [showUCSBModal, setShowUCSBModal] = useState(false);
  const [ucsbNumPages, setUCSBNumPages] = useState(null);
  const [ucsbCurrentPage, setUCSBCurrentPage] = useState(1);
  const [ucsbIsDiplomaPreviewVisible, setUCSBIsDiplomaPreviewVisible] = useState(false);

  const showUCSBDiplomaPreview = () => setUCSBIsDiplomaPreviewVisible(true);
  const hideUCSBDiplomaPreview = () => setUCSBIsDiplomaPreviewVisible(false);
  
  const onDukeDocumentLoadSuccess = ({ numPages }) => setDukeNumPages(numPages);
  const onUCSBDocumentLoadSuccess = ({ numPages }) => setUCSBNumPages(numPages);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Mia's Portfolio - About</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>───&nbsp;&nbsp;Page <strong>02</strong></h4>
        </div>
        <div className="about-right">
          <p className="home-about-body">
            Hi, I'm Mia Mao, I recently graduated from <span onMouseEnter={showDukeDiplomaPreview} onMouseLeave={hideDukeDiplomaPreview} onClick={showDukeDiplomaPreview} style={{ cursor: 'pointer', color: '#00539c' }}>Duke University</span>
            {dukeIsDiplomaPreviewVisible && (
              <div className="duke-img-preview">
                <img src={DukeDiplomaPreviewImage} alt="Duke Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
              </div>
            )} with a MS in Quantitative Management in Business Analytics, Finance Track, and from <span onMouseEnter={showUCSBDiplomaPreview} onMouseLeave={hideUCSBDiplomaPreview} onClick={showUCSBDiplomaPreview} style={{ cursor: 'pointer', color: '#003660' }}>University of California, Santa Barbara</span>
            {ucsbIsDiplomaPreviewVisible && (
              <div className="ucsb-img-preview">
                <img src={UCSBDiplomaPreviewImage} alt="UCSB Diploma Preview" style={{ width: '100px', height: 'auto' }}/>
              </div>
            )} with a BS in Financial Mathematics and Statistics and a BA in Theater in 2023.
            <strong> I am currently seeking full-time opportunities as a business analyst, financial analyst, data analyst, or data scientist position.</strong>
          </p>
        </div>

        <Modal show={showDukeModal} onHide={() => setShowDukeModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Duke University Diploma</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Document file={DukeDiploma} onLoadSuccess={onDukeDocumentLoadSuccess}>
              <Page pageNumber={dukeCurrentPage} />
              <div className="pdf-navigation">
                {dukeCurrentPage > 1 && (
                  <AiOutlineLeft onClick={() => setDukeCurrentPage(dukeCurrentPage - 1)} />
                )}
                {dukeCurrentPage < dukeNumPages && (
                  <AiOutlineRight onClick={() => setDukeCurrentPage(dukeCurrentPage + 1)} />
                )}
              </div>
            </Document>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDukeModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showUCSBModal} onHide={() => setShowUCSBModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>UCSB Diploma</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Document file={UCSBDiploma} onLoadSuccess={onUCSBDocumentLoadSuccess}>
              <Page pageNumber={ucsbCurrentPage} />
              <div className="pdf-navigation">
                {ucsbCurrentPage > 1 && (
                  <AiOutlineLeft onClick={() => setUCSBCurrentPage(ucsbCurrentPage - 1)} />
                )}
                {ucsbCurrentPage < ucsbNumPages && (
                  <AiOutlineRight onClick={() => setUCSBCurrentPage(ucsbCurrentPage + 1)} />
                )}
              </div>
            </Document>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUCSBModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default About;
