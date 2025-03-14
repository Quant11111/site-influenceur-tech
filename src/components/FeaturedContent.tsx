"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Stack,
} from "@mui/material";

// Types pour les contenus mis en avant
interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  platform: "youtube" | "twitch" | "tiktok" | "instagram" | "github";
  url: string;
  date: string;
}

// Données de démonstration
const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    title: "Comment créer un site web moderne avec Next.js et MUI",
    description:
      "Dans cette vidéo, je vous montre comment créer un site web moderne et responsive avec Next.js et Material UI.",
    image: "/placeholder-youtube.jpg",
    platform: "youtube",
    url: "https://youtube.com/watch?v=example1",
    date: "2023-06-15",
  },
  {
    id: "2",
    title: "Live coding: Développement d'une application React",
    description:
      "Rejoignez-moi pour une session de live coding où nous développons une application React complète.",
    image: "/placeholder-twitch.jpg",
    platform: "twitch",
    url: "https://twitch.tv/quant11111/video/example2",
    date: "2023-07-22",
  },
  {
    id: "3",
    title: "Astuces pour optimiser votre workflow de développement",
    description:
      "Découvrez mes astuces pour améliorer votre productivité et optimiser votre workflow de développement.",
    image: "/placeholder-tiktok.jpg",
    platform: "tiktok",
    url: "https://tiktok.com/@quant11111/video/example3",
    date: "2023-08-10",
  },
];

// Couleurs pour les plateformes
const platformColors = {
  youtube: "#FF0000",
  twitch: "#9146FF",
  tiktok: "#000000",
  instagram: "#E1306C",
  github: "#333333",
};

// Noms des plateformes
const platformNames = {
  youtube: "YouTube",
  twitch: "Twitch",
  tiktok: "TikTok",
  instagram: "Instagram",
  github: "GitHub",
};

export default function FeaturedContent() {
  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(30,30,30,1) 100%)",
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
            Contenu à la une
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Découvrez mes dernières créations et publications sur différentes
            plateformes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(30, 30, 30, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 0,
                        paddingTop: "56.25%", // 16:9
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                      }}
                      image={item.image}
                      title={item.title}
                    />
                    <Chip
                      label={platformNames[item.platform]}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: platformColors[item.platform],
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mt: "auto" }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {new Date(item.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
