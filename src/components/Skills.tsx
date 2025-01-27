import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import { Code as CodeIcon, Psychology as PsychologyIcon, Storage as StorageIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Skill {
  title: string;
  icon: JSX.Element;
  items: string[];
}

const Skills = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const skills: Skill[] = [
    {
      title: t('skills.webDev.title'),
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      items: t('skills.webDev.items', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.machineLearning.title'),
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      items: t('skills.machineLearning.items', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.nlpVision.title'),
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      items: t('skills.nlpVision.items', { returnObjects: true }) as string[],
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
        {t('skills.title')}
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} md={4} key={skill.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    border: `1px solid ${theme.palette.primary.main}`,
                    '& .skill-icon': {
                      color: theme.palette.primary.main,
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.3s ease-in-out',
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {skill.icon}
                </Box>
                
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    mb: 3,
                    color: theme.palette.primary.main
                  }}
                >
                  {skill.title}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {skill.items.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '&:before': {
                          content: '"•"',
                          color: theme.palette.primary.main,
                          mr: 1,
                          fontSize: '1.2em'
                        }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
