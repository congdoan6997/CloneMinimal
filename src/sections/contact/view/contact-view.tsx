import Container from '@mui/material/Container';
import ContactHero from '../contact-hero';
import Box from '@mui/material/Box';
import ContactForm from '../contact-form';
import ContactMap from '../contact-map';

export default function ContactView() {
  return (
    <>
      <ContactHero />

      <Container sx={{ py: 10 }}>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />

          <ContactMap />
        </Box>
      </Container>
    </>
  );
}
