import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import HeroSection from './components/sections/HeroSection.js';
import AboutMeSection from './components/sections/AboutMeSection.js';
import EducationSection from './components/sections/EducationSection.js';
import ExprerienceSection from './components/sections/ExprerienceSection.js';
import ProjectsSection from './components/sections/ProjectsSection.js';
import ContactFormSection from './components/sections/ContactFormSection.js';
import FooterSection from './components/sections/FooterSection.js';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeroSection />
        <AboutMeSection />
        <EducationSection />
        <ExprerienceSection />
        <ProjectsSection />
        <ContactFormSection />
        <FooterSection />
      </ThemeProvider>
    </>
  );
};

export default App;
