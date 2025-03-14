"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple de l'email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSnackbarMessage("Veuillez entrer une adresse email valide.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Simuler l'envoi du formulaire
    setIsSubmitting(true);

    // Simulation d'une requête API
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setSnackbarMessage("Merci pour votre inscription à la newsletter !");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(135deg, rgba(98,0,234,0.1) 0%, rgba(0,229,255,0.1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Effet de particules en arrière-plan */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(#6200EA 1px, transparent 1px), radial-gradient(#00E5FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Restez informé
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Abonnez-vous à ma newsletter pour recevoir les dernières
              actualités, tutoriels et contenus exclusifs directement dans votre
              boîte mail.
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 1 },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Votre adresse email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
              sx={{
                px: 4,
                whiteSpace: "nowrap",
                minWidth: { xs: "100%", sm: "auto" },
              }}
            >
              {isSubmitting ? "Inscription..." : "S'inscrire"}
            </Button>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              textAlign: "center",
              mt: 2,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            En vous inscrivant, vous acceptez de recevoir des emails de ma part.
            Vous pourrez vous désabonner à tout moment.
          </Typography>
        </Paper>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
