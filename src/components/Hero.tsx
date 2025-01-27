import { Box, Container, Typography, useTheme } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" component="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
              textShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
            }}
          >
            Amine Mabrouk
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
            }}
          >
            {t('hero.title')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mb: 4,
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            {t('hero.description')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              justifyContent: 'center',
              '&:hover': {
                color: theme.palette.primary.main,
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              <LocationOn sx={{ color: theme.palette.primary.main }} />
              <Typography color="text.secondary">
                Gafsa Gare, Tunisie
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              justifyContent: 'center',
              '&:hover': {
                color: theme.palette.primary.main,
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              <Phone sx={{ color: theme.palette.primary.main }} />
              <Typography color="text.secondary">
                +216 90285342
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              justifyContent: 'center',
              '&:hover': {
                color: theme.palette.primary.main,
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              <Email sx={{ color: theme.palette.primary.main }} />
              <Typography color="text.secondary">
                amine.mabrouk0007@gmail.com
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
