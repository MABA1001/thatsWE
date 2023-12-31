import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./../assets/logo.png";

export default function Navbar() {
  useEffect(() => {

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

 
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: 0,
          padding: "10px",
        }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 70, marginRight: "auto" }}
          />
          <Link
            to="/InfoHandeling"
            style={{ textDecoration: "none", color: "#2196F3" }}
          >
            <Typography variant="h6" component="div">
              Next Page
            </Typography>
          </Link>
          <div id="google_translate_element"></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
