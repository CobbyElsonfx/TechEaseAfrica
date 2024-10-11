// EmailTemplate.js
import { Html, Head, Body, Container, Section, Heading, Text } from '@react-email/components';

const EmailTemplate = ({ courseName }) => (
  <Html>
    <Head />
    <Body style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Section style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
          <Heading style={{ color: '#333' }}>Your Enrollment is Successful!</Heading>
          <Text style={{ color: '#555' }}>
            Thank you for enrolling in the course: <strong>{courseName}</strong>.
          </Text>
          <Text style={{ color: '#555' }}>
            We are excited to have you on board! TechEase will get in touch with you shortly.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
