import { Box, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage) {
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          padding: '4px',
          border: '1px solid rgba(100, 255, 218, 0.1)',
        }}
      >
        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={handleLanguageChange}
          aria-label="language selector"
        >
          <ToggleButton 
            value="en"
            aria-label="english"
            sx={{
              color: 'text.secondary',
              '&.Mui-selected': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
              },
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.05)',
              }
            }}
          >
            {t('language.en')}
          </ToggleButton>
          <ToggleButton
            value="fr"
            aria-label="french"
            sx={{
              color: 'text.secondary',
              '&.Mui-selected': {
                color: theme.palette.primary.main,
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
              },
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.05)',
              }
            }}
          >
            {t('language.fr')}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </motion.div>
  );
};

export default LanguageSwitcher;
