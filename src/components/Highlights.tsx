import { Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import { School, Code, DataObject, Psychology } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Highlights = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: t('highlights.education.title'),
      description: t('highlights.education.description'),
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t('highlights.technicalSkills.title'),
      description: t('highlights.technicalSkills.description'),
    },
    {
      icon: <DataObject sx={{ fontSize: 40 }} />,
      title: t('highlights.dataAnalysis.title'),
      description: t('highlights.dataAnalysis.description'),
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: t('highlights.problemSolving.title'),
      description: t('highlights.problemSolving.description'),
    },
  ];

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
        {t('highlights.title')}
      </Typography>

      <Grid container spacing={4}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} sm={6} md={3} key={highlight.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    border: `1px solid ${theme.palette.primary.main}`,
                    '& .icon': {
                      color: theme.palette.primary.main,
                    }
                  }
                }}
              >
                <div className="icon" style={{ 
                  color: theme.palette.text.secondary,
                  transition: 'color 0.3s ease-in-out',
                  marginBottom: '1rem'
                }}>
                  {highlight.icon}
                </div>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mb: 2, color: theme.palette.primary.main }}
                >
                  {highlight.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {highlight.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Highlights;
