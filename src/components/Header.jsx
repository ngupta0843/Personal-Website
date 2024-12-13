import React, { useRef, useState, useEffect } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Header = () => {
  const targetRef = useRef(null);
  const [scrollDown, setScrollDown] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (isScrolling) return;
    setIsScrolling(true);

    if (scrollDown) {
      if (targetRef.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setTimeout(() => {
      setScrollDown(!scrollDown);
      setIsScrolling(false);
    }, 500);
  };

  useEffect(() => {
    const onScroll = () => {
      if (!isScrolling) {
        if (window.scrollY > 0) {
          setScrollDown(false);
        } else {
          setScrollDown(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolling]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: 2, minHeight: "100vh" }}>
        <Typography variant="h1" component="h1" sx={{ color: "#474747" }}>
          Nikhil Gupta
        </Typography>
        <Typography variant="h1" component="h1" sx={{ color: "#696969" }}>
          Nikhil Gupta
        </Typography>
        <Typography variant="h1" component="h1" sx={{ color: "#8f8f8f" }}>
          Nikhil Gupta
        </Typography>
        <Typography variant="h1" component="h1" sx={{ color: "#c2c2c2" }}>
          Nikhil Gupta
        </Typography>
        <Typography variant="h1" component="h1" sx={{ color: "white" }}>
          Nikhil Gupta
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            scale: 3,
            position: "absolute",
            bottom: "7vh",
            transition: "transform 0.5s",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={handleScroll}
        >
          {scrollDown ? (
            <KeyboardDoubleArrowDownIcon
              sx={{ color: "white", transition: "transform 0.5s" }}
            />
          ) : (
            <KeyboardDoubleArrowUpIcon
              sx={{ color: "white", transition: "transform 0.5s" }}
            />
          )}
        </IconButton>
      </Box>
      <Box ref={targetRef} sx={{ marginTop: "10vh" }}></Box>
      <Box>about me</Box>
    </Container>
  );
};

export default Header;
