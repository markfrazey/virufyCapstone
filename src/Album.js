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
import BlobsImage from './img/Blobs.png';
import SampleDetailsImage from './img/Sample Details.png';
import Grid from '@mui/material/Unstable_Grid2';
import StakeholderImage1 from './img/stakeholder1.png';
import StakeholderImage2 from './img/stakeholder2.png';

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
    fontFamily: '"Montserrat", sans-serif'
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Box sx={{ background: `url(${BlobsImage})`, backgroundPositionX: "center", backgroundSize: "cover", pt: 12, pb: 4}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="white" fontWeight="bold" gutterBottom>
              Virufy Cough Annotator
            </Typography>
            <Typography variant="h4" align="center" color="white" paragraph>
              Team COVID-67
            </Typography>
            <Typography variant="p" align="center" color="white" paragraph>
              Abiy Abahoy, Augene Pak, Carson Essabhoy, Mark Frazey, Nora Casey
            </Typography>
          </Container>
        </Box>
        <Box sx={{ pt: 4 }} id="overview">
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Virufy is a <Box display="inline" sx={{ fontWeight: 'bold' }}>non-profit research organization</Box> developing AI technology to rapidly screen for COVID-19 from cough patterns through the use of a smartphone application at <Box display="inline" sx={{ fontWeight: 'bold' }}>no cost</Box>.
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Virufy aims to offer <Box display="inline" sx={{ fontWeight: 'bold' }}>COVID-19 pre-screening</Box> for patients, clinicians, and governments, especially in low-income countries. Virufy aspires to be the leading non-profit organization for technology-enabled disease identification, transforming global healthcare, and inspiring others to support and invest in this mission.
            </Typography>
            <Typography variant="body1" gutterBottom paragraph>
              Our project is an annotation tool used for the cough sample dataset utilized for the AI model. The project is a React application that largely utilizes <Link href="https://labelstud.io/" target="_blank">Label Studio</Link>.
            </Typography>
          </Container>
        </Box>
        <Box sx={{ pt: 4 }} id="features">
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Features
            </Typography>
            <Card sx={{ mb: 4 }}>
              <CardMedia component="video" image={TimelineVideo} title="timeline" muted loop autoPlay/>
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
                  Timeline
                </Typography>
                <Typography variant="p">
                  The timeline enables users to easily select and isolate relevant cough segments by dragging and dropping markers within the waveform display.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ mb: 4, display: 'flex' }}>
              <CardContent sx={{ flex: '0 2 auto' }}>
                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
                  Sample Details
                </Typography>
                <Typography variant="p" component="div" >
                  The Sample Issues box provides options for properly labeling flawed samples. Many samples either have background noise, poor mic quality, or other isses, which can be selected by clicking each checkbox. The Sample Quality box provides details about the sample, like the clipping ratio and amount of background noise, while also allowing the user to select whether or not the sample meets quality expectations.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ maxWidth: 480 }}
                image={SampleDetailsImage}
                alt="Sample issues box with options: No cough, Background noise, Talking, Poor mic quality, Too quiet. Sample quality box with options: Good, Bad."
              />
            </Card>
          </Container>

        </Box>
        <Box sx={{ pt: 4 }} id="stakeholders">
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Stakeholders
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={StakeholderImage1}
                    alt="John Johnson"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      John Johnson
                    </Typography>
                    <ul>
                      <li>22 year old college graduate</li>
                      <li>Trouble annotating large quantities of audio samples</li>
                      <li>Finds that annotating data takes too much time</li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={StakeholderImage2}
                    alt="Will Williams"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Will Williams
                    </Typography>
                    <ul>
                      <li>30 year old Data Analyst</li>
                      <li>Finds that it takes too long to receive annotated data</li>
                      <li>Wants a way for the process to be sped up</li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
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
