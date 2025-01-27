import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { Verified } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  organization: string;
  date: string;
}

const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    organization: 'Microsoft',
    date: '2023'
  },
  {
    title: 'edX Verified Certificate for Data Visualization and Building Dashboards with Excel and Cognos',
    organization: 'edX',
    date: '2023'
  },
  {
    title: 'Microsoft Office Specialist: Excel Associate (Office 2019)',
    organization: 'Microsoft',
    date: '2023'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    date: '2023'
  },
  {
    title: 'edX Verified Certificate for Big Data Fundamentals',
    organization: 'edX',
    date: '2023'
  },
];

const Certifications = () => {
  const theme = useTheme();

  return (
    <Container component="section" maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        Certifications
      </Typography>

      <Grid container spacing={3}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} key={cert.title}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  '&:hover': {
                    transform: 'translateX(10px)',
                    border: `1px solid ${theme.palette.primary.main}`,
                    '& .cert-icon': {
                      color: theme.palette.primary.main,
                      transform: 'scale(1.1) rotate(360deg)',
                    }
                  }
                }}
              >
                <Verified 
                  className="cert-icon"
                  sx={{
                    fontSize: 40,
                    color: 'text.secondary',
                    transition: 'all 0.6s ease-in-out',
                    mt: 1
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.1rem',
                      mb: 1,
                      color: theme.palette.primary.main
                    }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.date}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certifications;
