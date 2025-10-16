import React from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";

export default function SignupCard() {
  return (
  <Grid
    container
    spacing={4}
    sx={{
      p: 4,
      minHeight: "100vh",
      backgroundColor: "hsla(226, 39%, 77%, 1.00)", // pink background
      backgroundImage: "url('/images/bg-intro-desktop.png')", // optional
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >

      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Learn to code by watching others
        </Typography>
        <Typography variant="body1">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Typography>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Full Width Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "hsl(248, 32%, 49%)",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "hsl(249, 32%, 39%)",
              },
            }}
          >
            <Typography variant="body2" fontWeight={500}>
              <strong>Try it free 7 days</strong> then $20/mo thereafter
            </Typography>
          </Button>

          {/* Contact Form */}
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              p: { xs: 2, md: 4 },
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              maxWidth: 400,
              width: "100%",
            }}
          >
            <TextField label="First Name" variant="outlined" fullWidth />
            <TextField label="Last Name" variant="outlined" fullWidth />
            <TextField label="Email Address" variant="outlined" fullWidth />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "hsl(154, 59%, 51%)",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: 1,
                "&:hover": {
                  backgroundColor: "hsl(154, 59%, 41%)",
                },
              }}
            >
              Claim your free trial
            </Button>

            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
            >
              By clicking the button, you are agreeing to our{" "}
              <span style={{ color: "hsl(0, 100%, 74%)", fontWeight: 600 }}>
                Terms and Services
              </span>
              .
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
