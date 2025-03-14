"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

// Icônes pour les réseaux sociaux
import TwitchIcon from "@mui/icons-material/Tv";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

// Définition des liens de navigation
const navLinks = [
  { title: "Accueil", path: "/" },
  { title: "À propos", path: "/about" },
  { title: "Contenu", path: "/content" },
  { title: "Projets", path: "/projects" },
  { title: "Contact", path: "/contact" },
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

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton component={Link} href={link.path}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ borderTop: 1, borderColor: "divider", pt: 2, mt: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{ px: 2, mb: 1, color: "text.secondary" }}
        >
          Réseaux sociaux
        </Typography>
        <List>
          {socialLinks.map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton
                component="a"
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box sx={{ mr: 2 }}>
                  {React.createElement(link.icon, { fontSize: "small" })}
                </Box>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(10px)", bgcolor: "rgba(18, 18, 18, 0.8)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              background: "linear-gradient(45deg, #6200EA 30%, #00E5FF 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Quant11111
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: "flex", ml: 4 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    component={Link}
                    href={link.path}
                    sx={{
                      color: "white",
                      mx: 1,
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {link.title}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.title}
                    component="a"
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {React.createElement(link.icon)}
                  </IconButton>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
