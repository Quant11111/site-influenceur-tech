"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import Link from "next/link";

// Icônes pour les réseaux sociaux
import TwitchIcon from "@mui/icons-material/Tv";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

// Définition des liens de navigation pour le footer
const footerLinks = [
  { title: "Accueil", path: "/" },
  { title: "À propos", path: "/about" },
  { title: "Contenu", path: "/content" },
  { title: "Projets", path: "/projects" },
  { title: "Contact", path: "/contact" },
  { title: "Mentions légales", path: "/legal" },
];

// Définition des liens vers les réseaux sociaux
const socialLinks = [
  { title: "Twitch", path: "https://twitch.tv/quant11111", icon: TwitchIcon },
  {
    title: "YouTube",
    path: "https://youtube.com/@quant11111",
    icon: YouTubeIcon,
  },
  {
    title: "Instagram",
    path: "https://instagram.com/quant11111",
    icon: InstagramIcon,
  },
  {
    title: "TikTok",
    path: "https://tiktok.com/@quant11111",
    icon: VideoLibraryIcon,
  },
  { title: "GitHub", path: "https://github.com/quant11111", icon: GitHubIcon },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #6200EA 30%, #00E5FF 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              Quant11111
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Créateur de contenu tech passionné par les nouvelles technologies,
              le développement web et l&apos;intelligence artificielle.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.title}
                  component="a"
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    mr: 1,
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  aria-label={link.title}
                >
                  {React.createElement(link.icon)}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Liens
            </Typography>
            <Box component="nav">
              <Grid container>
                {footerLinks.map((link) => (
                  <Grid item xs={6} key={link.title}>
                    <MuiLink
                      component={Link}
                      href={link.path}
                      color="text.secondary"
                      sx={{
                        display: "block",
                        mb: 1,
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.title}
                    </MuiLink>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Abonnez-vous à ma newsletter pour recevoir les dernières
              actualités et contenus exclusifs.
            </Typography>
            {/* Formulaire d'inscription à la newsletter à ajouter ultérieurement */}
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Quant11111. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
