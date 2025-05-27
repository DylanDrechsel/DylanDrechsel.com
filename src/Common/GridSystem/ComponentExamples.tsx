import React from 'react';
import { Container, Row, Col } from './Components';

const ComponentTest: React.FC = () => {
  return (
    <div className="App">
      {/* Basic Grid Example */}
      <Container>
        <Row>
          <Col md={4}>
            <div style={{ background: '#f8f9fa', padding: '1rem', marginBottom: '1rem' }}>
              Column 1 (md-4)
            </div>
          </Col>
          <Col md={4}>
            <div style={{ background: '#e9ecef', padding: '1rem', marginBottom: '1rem' }}>
              Column 2 (md-4)
            </div>
          </Col>
          <Col md={4}>
            <div style={{ background: '#dee2e6', padding: '1rem', marginBottom: '1rem' }}>
              Column 3 (md-4)
            </div>
          </Col>
        </Row>
      </Container>

      {/* Responsive Grid Example */}
      <Container>
        <Row>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={3} xxl={4}>
            <div style={{ background: '#cfe2ff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 3) (xxl = 4)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={2} xxl={4}>
            <div style={{ background: '#b3d9ff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 2) (xxl = 4)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={4} md={3} lg={3} xl={5} xxl={1}>
            <div style={{ background: '#99ccff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 5) (xxl = 1)
            </div>
          </Col>
          <Col xxs={12} xs={6} sm={12} md={3} lg={3} xl={2} xxl={3}>
            <div style={{ background: '#80bfff', padding: '1rem', marginBottom: '1rem' }}>
              Responsive Column (xl = 2) (xxl = 3)
            </div>
          </Col>
        </Row>
      </Container>

      {/* Auto-width and Offset Example */}
      <Container>
        <Row>
          <Col md={'auto'}>
            <div style={{ background: '#fff3cd', padding: '1rem', marginBottom: '1rem' }}>
              Auto-width column
            </div>
          </Col>
          <Col md={6}>
            <div style={{ background: '#ffeaa7', padding: '1rem', marginBottom: '1rem' }}>
              Fixed width column
            </div>
          </Col>
          <Col md={'auto'}>
            <div style={{ background: '#fdcb6e', padding: '1rem', marginBottom: '1rem' }}>
              Auto-width column
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={6} offsetMd={4}>
            <div style={{ background: '#d1ecf1', padding: '1rem', marginBottom: '1rem' }}>
              Centered with offset
            </div>
          </Col>
        </Row>
      </Container>

      {/* Fluid Container Example */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ background: '#f8d7da', padding: '1rem', marginBottom: '1rem' }}>
              Full-width fluid container
            </div>
          </Col>
        </Row>
      </Container>

      {/* No Gutters Example */}
      <Container>
        <Row noGutters>
          <Col md={6}>
            <div style={{ background: '#d4edda', padding: '1rem' }}>
              No gutter column 1
            </div>
          </Col>
          <Col md={6}>
            <div style={{ background: '#c3e6cb', padding: '1rem' }}>
              No gutter column 2
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComponentTest;