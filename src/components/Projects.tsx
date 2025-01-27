import { Container, Typography, Grid, Card, CardContent, Box, Chip, IconButton, useTheme } from '@mui/material';
import { GitHub, Launch, Psychology as AIIcon, LocalFireDepartment as FireIcon, 
         Face as FaceIcon, Chat as ChatIcon, Newspaper as NewsIcon, 
         BugReport as CrawlerIcon, Science as ScienceIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI Helper",
    description: "A multipurpose AI tool for productivity, education, and writing support, integrating NLP, speech processing, and symbolic AI.",
    features: [
      "Text Summarization",
      "Advanced Calculator",
      "Quiz Generation",
      "Project Planning",
      "Flashcards",
      "Time Management",
      "Citation Generation",
      "Grammar & Plagiarism Checking",
      "Diagram Generation",
      "Study Timetable",
      "Equation Solver",
      "Creative Writing Assistant",
      "Voice Help",
      "Scholarship Essay Assistant"
    ],
    icon: <AIIcon />,
    technologies: ["Python", "NLP", "TensorFlow", "Flask", "React"],
    githubUrl: "https://github.com/yourusername/ai-helper",
    demoUrl: "https://ai-helper-demo.com"
  },
  {
    title: "Real-Time Fire Detection",
    description: "Computer vision system detecting fires in real-time and triggering email alerts for emergency response.",
    features: [
      "YOLOv11 model",
      "Real-time video processing",
      "Gmail integration"
    ],
    icon: <FireIcon />,
    technologies: ["Python", "YOLOv11", "OpenCV", "SMTP"],
    githubUrl: "https://github.com/yourusername/fire-detection"
  },
  {
    title: "Multimodal Analysis System",
    description: "Integrates vision, speech, and NLP for context-aware interactions (e.g., emotion + tone + text analysis).",
    features: [
      "Facial analysis",
      "Audio processing",
      "Text understanding"
    ],
    icon: <FaceIcon />,
    technologies: ["Python", "TensorFlow", "OpenCV", "Transformers"],
    githubUrl: "https://github.com/yourusername/multimodal-system"
  },
  {
    title: "Customer Support Chatbot",
    description: "NLP-driven chatbot for handling user queries, tracking orders, and resolving issues via backend integration.",
    features: [
      "Intent recognition",
      "Entity extraction",
      "Dialogue management",
      "API integration"
    ],
    icon: <ChatIcon />,
    technologies: ["Python", "BERT", "FastAPI", "Redis"],
    githubUrl: "https://github.com/yourusername/support-chatbot",
    demoUrl: "https://chatbot-demo.com"
  },
  {
    title: "Fake News Detection App",
    description: "Classifies misinformation using NLP and deploys results via a user-friendly interface.",
    features: [
      "Transformer models (BERT/GPT)",
      "Web app deployment"
    ],
    icon: <NewsIcon />,
    technologies: ["Python", "Transformers", "Flask", "React"],
    githubUrl: "https://github.com/yourusername/fake-news-detection"
  },
  {
    title: "FireCrawl",
    description: "Collects and structures web data for AI/ML pipelines using crawlers and language models.",
    features: [
      "Large-scale data scraping",
      "Preprocessing",
      "LLM-driven cleaning"
    ],
    icon: <CrawlerIcon />,
    technologies: ["Python", "Scrapy", "LangChain", "MongoDB"],
    githubUrl: "https://github.com/yourusername/firecrawl"
  },
  {
    title: "Drug Classification",
    description: "Predicts drug categories and explains model decisions for healthcare applications.",
    features: [
      "ML classification",
      "SHAP/LIME explainability"
    ],
    icon: <ScienceIcon />,
    technologies: ["Python", "Scikit-learn", "SHAP", "Streamlit"],
    githubUrl: "https://github.com/yourusername/drug-classification",
    demoUrl: "https://drug-classification-demo.com"
  }
];

const Projects = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
        {t('projects.title')}
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    transition: 'transform 0.3s ease-in-out',
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.background.paper,
                  }}
                >
                  {project.icon}
                </Box>

                <CardContent sx={{ pt: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" component="h3" color="primary">
                      {project.title}
                    </Typography>
                    <Box>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        size="small"
                        aria-label={t('projects.viewGithub')}
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                      >
                        <GitHub />
                      </IconButton>
                      {project.demoUrl && (
                        <IconButton
                          href={project.demoUrl}
                          target="_blank"
                          size="small"
                          aria-label={t('projects.viewDemo')}
                          sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {project.features.map((feature, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          '&:before': {
                            content: '"•"',
                            color: theme.palette.primary.main,
                            mr: 1
                          }
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: 'rgba(100, 255, 218, 0.2)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
