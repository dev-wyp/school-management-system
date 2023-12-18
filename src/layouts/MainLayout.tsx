import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { NavigateNext, ChevronRight, ChevronLeft, Notifications} from '@mui/icons-material';
import { MainListItems } from '../data/constant';
import { Breadcrumbs, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" to="https://einsteinacademiccenter.com/">
				Einstein Academic Center
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		// width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			border: 0,
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

const breadcrumbs = [
	<Link key="1" color="inherit" to="/" >
		MUI
	</Link>,
	<Link
		// underline="hover"
		key="2"
		color="inherit"
		to="/material-ui/getting-started/installation/"
		// onClick={handleClick}
	>
		Core
	</Link>,
	<Typography key="3" color="text.primary">
		Breadcrumb
	</Typography>,
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function MainLayout() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="fixed" open={open} elevation={0} >
					<Toolbar
						sx={{
							bgcolor: 'white',
							color: 'steelBlue',
							pr: '24px', // keep right padding when drawer closed
						}}
					>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								width: '216px',
								textAlign: 'center',
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}
						>
							Dashboard
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<Notifications />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open} sx={{marginTop: '64px'}}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							px: [1],
						}}
					>
						<IconButton onClick={toggleDrawer}>
							{open ? <ChevronLeft /> : <ChevronRight />}
						</IconButton>
					</Toolbar>
					<Divider />
					<List component="nav" sx={{px: 2}}>
						
						{MainListItems.map((item) => 
							<Link key={item.id} to={item.route} style={{textDecoration: 'none', color: 'inherit'}}>
								<ListItemButton sx={{mb: 0.5, '&.MuiButtonBase-root:hover': {backgroundColor: 'rgb(70 130 180 / 50%)', borderRadius: 2, color: 'white'}}}>
									<ListItemIcon sx={{minWidth: '45px'}}>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.title} />
								</ListItemButton>
							</Link>
						)}
						<Divider sx={{ my: 1 }} />
						{/* {secondaryListItems} */}
					</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: 'rgb(238, 242, 246)',
						// backgroundColor: (theme) =>
						// 	theme.palette.mode === 'light'
						// 		? theme.palette.grey[300]
						// 		: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
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
									display: 'flex',
									justifyContent: 'end',
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
									Dashboard
								</Typography>
								<Breadcrumbs
									sx={{fontSize: 14}}
									separator={<NavigateNext fontSize="small" />}
									aria-label="breadcrumb"
								>
									{breadcrumbs}
								</Breadcrumbs>
							</Paper>
						</Grid>

							<Grid item xs={12} md={12} lg={12}>
								<Paper
								elevation={0}
									sx={{
										p: 2,
										borderRadius: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 'calc(100vh - 265px)',
									}}
								>
									<Outlet />
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