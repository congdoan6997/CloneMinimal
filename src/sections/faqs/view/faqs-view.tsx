import Container from '@mui/material/Container';
import FaqsHero from '../faqs-hero';
import FaqsCategory from '../faqs-category';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FaqsList from '../faqs-list';
import FaqsForm from '../faqs-form';

export default function FaqsView() {
  return (
    <>
      <FaqsHero />

      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 15 },
          position: 'relative',
        }}
      >
        <FaqsCategory />

        <Typography variant="h3" sx={{ my: { xs: 5, md: 10 } }}>
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />
          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
