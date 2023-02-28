import * as React from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { database } from '../../firebase-config';
import { ref, child, get } from "firebase/database";
import {
	getAuth,
	signOut,
} from 'firebase/auth';
import {
	useNavigate
} from "react-router-dom";


import account from '../../img/icons/logo192.png'

const pages = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Work Experience'];

const ResponsiveAppBar = ({ username }) => {
	const params = useParams();
	var user = params.username;
	const pages_link = [`/${user}/home`, `/${user}/home/Education`, `/${user}/home/Skills`, `/${user}/home/Projects`, `/${user}/home/Certifications`, `/${user}/home/Work`];
	let navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	function signOutUser() {
		signOut(getAuth());
		sessionStorage.removeItem('Auth Token');
		console.log("signout ...");
		navigate('/')
	}

	const [namePlaceHolder, setNamePlaceholder] = React.useState();
	const dbRef = ref(database);

	get(child(dbRef, `${user}/information/`)).then((snapshot) => {
		if (snapshot.exists()) {
			// console.log("val ...", snapshot.val());
			setNamePlaceholder(snapshot.child("name/").val());
			// console.log("namePlaceHolder ...", namePlaceHolder);
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error("error ...", error);
	});



	return (
		<AppBar position="static"
			sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? 'primary.900' : 'black',
				color: (theme) =>
					theme.palette.mode === 'dark' ? '#fff' : 'yellow',
			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontFamily: 'Cinzel Decorative' }}>
						{namePlaceHolder}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
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
							}}>
							{pages.map((page, index) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center"><a href={pages_link[index]}>{page}</a></Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="p"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						{namePlaceHolder}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page, index) => (
							<a key={page} href={pages_link[index]}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}>
									{page}
								</Button>
							</a>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Sign Out">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Contact" src={account} variant="square" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>

							<MenuItem key={"signin"} onClick={handleCloseUserMenu}>
								<Typography textAlign="center" onClick={() => signOutUser()}>Sign Out</Typography>
							</MenuItem>

						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;