"use client";

import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";

// Définition des plateformes
interface Platform {
  id: string;
  name: string;
  description: string;
  color: string;
  url: string;
  followers: string;
  content: string;
}

const platforms: Platform[] = [
  {
    id: "twitch",
    name: "Twitch",
    description:
      "Streams en direct de développement, gaming et discussions tech.",
    color: "#9146FF",
    url: "https://twitch.tv/quant11111",
    followers: "5.2K",
    content: "Live coding, gaming, discussions tech",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Tutoriels, analyses et revues de technologies et produits.",
    color: "#FF0000",
    url: "https://youtube.com/@quant11111",
    followers: "12K",
    content: "Tutoriels, analyses, revues",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Astuces rapides, démos et actualités tech en format court.",
    color: "#000000",
    url: "https://tiktok.com/@quant11111",
    followers: "25K",
    content: "Astuces, démos, actualités",
  },
  {
    id: "instagram",
    name: "Instagram",
    description:
      "Photos, stories et reels sur mon quotidien tech et mes projets.",
    color: "#E1306C",
    url: "https://instagram.com/quant11111",
    followers: "8.7K",
    content: "Photos, stories, reels",
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "Projets open source, contributions et code des démos présentées.",
    color: "#333333",
    url: "https://github.com/quant11111",
    followers: "1.3K",
    content: "Projets, contributions, démos",
  },
];

export default function Platforms() {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg, rgba(30,30,30,1) 0%, rgba(18,18,18,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Retrouvez-moi sur
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Je crée du contenu sur différentes plateformes. Suivez-moi pour ne
            rien manquer !
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {platforms.map((platform) => (
            <Grid item xs={12} sm={6} md={4} key={platform.id}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  background: "rgba(30, 30, 30, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    backgroundColor: platform.color,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: platform.color,
                  }}
                >
                  {platform.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {platform.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Abonnés
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {platform.followers}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Contenu
                    </Typography>
                    <Typography variant="body2">{platform.content}</Typography>
                  </Box>
                </Box>

                <Button
                  variant="outlined"
                  fullWidth
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: "auto",
                    borderColor: platform.color,
                    color: platform.color,
                    "&:hover": {
                      borderColor: platform.color,
                      backgroundColor: `${platform.color}10`,
                    },
                  }}
                >
                  Suivre
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
