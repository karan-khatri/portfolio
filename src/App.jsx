import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import HeroSection from './components/sections/HeroSection';
import AboutMeSection from './components/sections/AboutMeSection';
import EducationSection from './components/sections/EducationSection';
import ExprerienceSection from './components/sections/ExprerienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactFormSection from './components/sections/ContactFormSection';
import FooterSection from './components/sections/FooterSection';

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
