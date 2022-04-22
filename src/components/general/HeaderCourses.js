import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link, Grid, Stack, MenuItem, Tooltip, Button, Avatar, Container, CardMedia, AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import '../../styles/header.css';
import bgImage from '../../assets/images/background.jpg'
import emoji from '../../assets/emojis/man-tech.png'
import { ThemeProvider, createTheme } from '@mui/material/styles/'
import { styled } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';

const pages = ['Courses', 'Bootcamps', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
 
const HeaderCourses = () => {

    const Logo = styled('div')({
        fontSize: "2rem",
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
        backdropFilter: "blur(1rem)",
        color: '#fff'
    });

    const theme = createTheme({
        palette: {
            primary: {
                main: "#fff",
                light: "#ffffff",
                dark: "#363636",
            },
        },
        typography: {
            fontSize: 12,
        },
    });

    const [anchorElNav, setAnchorElNav] = React.useState(null);
/*     const [anchorElUser, setAnchorElUser] = React.useState(null);
 */
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
/*     const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }; */

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

/*     const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }; */

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" className="header">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* LOGO */}
                        <Logo
                            noWrap
                            sx={{ display: { xs: 'none', md: 'flex' }, fontFamily: 'Roboto Slab', borderRadius: 4, height: 40, width: 40 }}
                            color="primary"
                        >
                            <CodeIcon sx={{ width: 25, height: 25, m: "auto" }} className='iconLogo'/>
                        </Logo>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Logo
                            noWrap
                            sx={{ display: { xs: 'flex', md: 'flex' }, fontFamily: 'Roboto Slab', borderRadius: 2, height: 30, width: 30 }}
                            color="primary">
                            <CodeIcon sx={{ width: 20, height: 20, m: "auto" }}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                className='iconLogo'
                            >
                            </CodeIcon>
                            </Logo>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                            >
                                {/* NAVIGATION */}
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            
                        </Box>
                    
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {/* REDES */}
                        <Box display="flex" sx={{ flexGrow: 0, justifyContent: 'space-around' }} spacing={1} >
                            <Link href="https://www.youtube.com/watch?v=AasyNtCS0uo" className="icon">
                                <GitHubIcon color="primary" />
                            </Link>
                            <Link href="https://www.youtube.com/watch?v=HL4fhFj7IeE" className="icon">
                                <LinkedInIcon color="primary" />
                            </Link>
                            <Link href="https://mui.com/system/properties/" className="icon">
                                <AlternateEmailIcon color="primary" />
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
                {/* BACKGROUND */}
                <Box className="bkg"
                    sx={{
                        width: 1,
                        height: 1,
                        backgroundImage: `url(${bgImage})`,
                    }}
                />
                {/* CALL TO ACTION */}
                <Container className="call-to-action">

                    <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center" >

                        <Box display="flex" sx={{ alignItems: "baseline", mb: 1 / 5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                color="white"
                                className='material'
                            >Material Dev
                            <CardMedia sx={{ width: "75px", height: "75px", ml: 2, md: 2, }} image={emoji} title="emoji" component="img" src="img" className='emoji' />
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                        Take off your career in technology 🚀. Study remotely and intensively. And the best? You only pay us when you get a new job.
                        </Typography>
                        {/*BOTONES CALL TO ACTION  */}
                        <Stack spacing={1} direction="row" mt={3}>
                            <Button variant="contained" color="primary" className="first-boton" sx={{ borderRadius: 2 }} >Get Started</Button>
                            <Button color="primary">Read more</Button>
                        </Stack>
                    </Grid>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default HeaderCourses