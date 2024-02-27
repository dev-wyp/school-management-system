import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Breadcrumbs,
  Toolbar,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import Nav from "./Nav";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://einsteinacademiccenter.com/">
        Einstein Academic Center
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const breadcrumbs = location.pathname.split(/\//g);
const defaultTheme = createTheme();

export default function MainLayout(props: any) {
  const [title, setTitle] = useState("");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Nav />
        <Box
          component="main"
          sx={{
            backgroundColor: "rgb(238, 242, 246)",
            // backgroundColor: (theme) =>
            // 	theme.palette.mode === 'light'
            // 		? theme.palette.grey[300]
            // 		: theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "end",
                    height: 60,
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h6"
                    color="black"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {title} {props.title}
                  </Typography>
                  <Breadcrumbs
                    sx={{ fontSize: 14 }}
                    separator={<NavigateNext fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    <Link key="1" color="inherit" to="/dashboard">
                      Dashboard
                    </Link>
                    {breadcrumbs.length > 2 && (
                      <Link
                        // underline="hover"
                        key="2"
                        color="inherit"
                        to="/material-ui/getting-started/installation/"
                        // onClick={handleClick}
                      >
                        {breadcrumbs[1]}
                      </Link>
                    )}
                    <Typography
                      key={breadcrumbs[breadcrumbs.length - 1]}
                      color="text.primary"
                    >
                      {breadcrumbs[breadcrumbs.length - 1]}
                    </Typography>
                  </Breadcrumbs>
                </Paper>
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  elevation={0}
                  sx={{
                    // p: 2,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "calc(100vh - 265px)",
					backgroundColor: 'transparent'
                  }}
                >
                  <Outlet context={{ setTitle }} />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
