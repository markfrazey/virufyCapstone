import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TimelineVideo from './videos/Timeline Selection Animation.mp4'
import Navbar from './components/Navbar';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Abiy Abahoy, Augene Pak, Carson Essabhoy, Mark Frazey, Nora Casey 2023'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#30da74',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Virufy Cough Annotator
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
              Team COVID-67
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
              Abiy Abahoy, Augene Pak, Carson Essabhoy, Mark Frazey, Nora Casey
            </Typography>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Background
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Virufy is a <Box display="inline" sx={{ fontWeight: 'bold' }}>non-profit research organization</Box> developing AI technology to rapidly screen for COVID-19 from cough patterns through the use of a smartphone application at <Box display="inline" sx={{ fontWeight: 'bold' }}>no cost</Box>.
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Virufy aims to offer <Box display="inline" sx={{ fontWeight: 'bold' }}>COVID-19 pre-screening</Box> for patients, clinicians, and governments, especially in low-income countries. Virufy aspires to be the leading non-profit organization for technology-enabled disease identification, transforming global healthcare, and inspiring others to support and invest in this mission.
            </Typography>
          </Container>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Project Description
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Our project is an annotation tool used for the cough sample dataset utilized for the AI model. The project is a React application that largely utilizes <Link href="https://labelstud.io/" target="_blank">Label Studio</Link>.
            </Typography>
          </Container>
        </Box>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} align="center" id="features">
          <Card sx={{ maxWidth: 860 }}>
            <CardMedia component="video" image={TimelineVideo} title="timeline" muted loop autoPlay/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Timeline
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
