"use client";

import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "auto", md: "100vh" },
        maxHeight: "900px",
        minHeight: { xs: "500px", md: "700px" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(18,18,18,1) 0%, rgba(32,32,32,1) 100%)",
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Effet de particules/grille en arrière-plan */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage:
            "radial-gradient(#6200EA 1px, transparent 1px), radial-gradient(#00E5FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      {/* Cercle lumineux en arrière-plan */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          width: { xs: "300px", md: "600px" },
          height: { xs: "300px", md: "600px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(98,0,234,0.2) 0%, rgba(0,229,255,0.1) 50%, rgba(18,18,18,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(45deg, #6200EA 30%, #00E5FF 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Quant11111
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 600,
                mb: 3,
                color: "text.primary",
              }}
            >
              Créateur de contenu tech
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                mb: 4,
                color: "text.secondary",
                maxWidth: "600px",
              }}
            >
              Passionné par les nouvelles technologies, le développement web et
              l&apos;intelligence artificielle. Je partage mes connaissances et
              expériences à travers différentes plateformes.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/content"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Découvrir mon contenu
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Me contacter
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Placeholder pour une image ou une illustration */}
            <Box
              sx={{
                width: "100%",
                height: "400px",
                maxWidth: "400px",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Remplacer par une vraie image */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(45deg, rgba(98,0,234,0.7) 0%, rgba(0,229,255,0.7) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "white", fontWeight: 700 }}
                >
                  Q11
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
