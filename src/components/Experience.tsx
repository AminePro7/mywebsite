import { Container, Typography, Box, useTheme, Paper } from '@mui/material';
import { Work, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  title: string;
  organization: string;
  date: string;
  location: string;
  type: 'work' | 'education';
  description: string[];
}

const Experience = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      title: t('experience.internshipInfraway2024.title'),
      organization: "Infraway",
      date: "Juin 2024 - Août 2024",
      location: "Tunis, Tunisie",
      type: "work",
      description: t('experience.internshipInfraway2024.description', { returnObjects: true }) as string[]
    },
    {
      title: t('experience.internshipInfraway2023.title'),
      organization: "Infraway",
      date: "Juin 2023 - Août 2023",
      location: "Tunis, Tunisie",
      type: "work",
      description: t('experience.internshipInfraway2023.description', { returnObjects: true }) as string[]
    },
    {
      title: t('experience.engineering.title'),
      organization: "Faculté des sciences de Bizerte",
      date: "2022 - 2025",
      location: "Bizerte, Tunisie",
      type: "education",
      description: t('experience.engineering.description', { returnObjects: true }) as string[]
    },
    {
      title: t('experience.preparatory.title'),
      organization: "Faculté des sciences de Bizerte",
      date: "2020 - 2022",
      location: "Bizerte, Tunisie",
      type: "education",
      description: t('experience.preparatory.description', { returnObjects: true }) as string[]
    },
    {
      title: t('experience.bac.title'),
      organization: "Lycée Ibnou Rached Gafsa",
      date: "2020",
      location: "Gafsa, Tunisie",
      type: "education",
      description: t('experience.bac.description', { returnObjects: true }) as string[]
    }
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
        {t('experience.title')}
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                background: 'rgba(17, 34, 64, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateX(10px)',
                  border: `1px solid ${theme.palette.primary.main}`,
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {experience.type === 'work' ? (
                  <Work sx={{ color: theme.palette.primary.main, mr: 2 }} />
                ) : (
                  <School sx={{ color: theme.palette.primary.main, mr: 2 }} />
                )}
                <Box>
                  <Typography variant="h6" color="primary" sx={{ mb: 0.5 }}>
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {experience.organization} • {experience.location}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {experience.date}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pl: 5 }}>
                {experience.description.map((desc, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      '&:before': {
                        content: '"•"',
                        color: theme.palette.primary.main,
                        mr: 1
                      }
                    }}
                  >
                    {desc}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Experience;
