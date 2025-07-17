import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { styled } from '@mui/material/styles';

import { data } from '../../data'

import {
	useNavigate,
	useLocation
} from "react-router-dom";

import account from '../../img/icons/logo192.png'

const pages = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Work Experience'];
const pages_link = ['/', '/Education', '/Skills', '/Projects', '/Certifications', '/Work'];

// Styled components for 3D effects
const StyledAppBar = styled(AppBar)(({ theme }) => ({
	background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
	boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
	backdropFilter: 'blur(10px)',
	borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
	position: 'relative',
	overflow: 'hidden',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
		transform: 'translateX(-100%)',
		animation: 'shimmer 3s infinite',
	},
	'@keyframes shimmer': {
		'0%': { transform: 'translateX(-100%)' },
		'100%': { transform: 'translateX(100%)' },
	},
}));

const NavButton = styled(motion.div)(({ theme, active }) => ({
	position: 'relative',
	margin: '0 8px',
	'& .nav-button': {
		color: active ? '#ffd700' : '#ffffff',
		padding: '12px 24px',
		borderRadius: '12px',
		background: active 
			? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)'
			: 'transparent',
		border: active ? '1px solid rgba(255, 215, 0, 0.3)' : '1px solid transparent',
		transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		textTransform: 'none',
		fontWeight: active ? 600 : 400,
		fontSize: '0.95rem',
		position: 'relative',
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: '-100%',
			width: '100%',
			height: '100%',
			background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
			transition: 'left 0.5s',
		},
		'&:hover': {
			background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%)',
			border: '1px solid rgba(255, 215, 0, 0.4)',
			color: '#ffd700',
			transform: 'translateY(-2px)',
			boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
			'&::before': {
				left: '100%',
			},
		},
		'&:active': {
			transform: 'translateY(0px)',
		},
	},
}));

const Logo = styled(motion.div)(({ theme }) => ({
	'& .logo-text': {
		background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontFamily: 'Cinzel Decorative',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
		position: 'relative',
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: '-2px',
			left: '0',
			width: '100%',
			height: '2px',
			background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
			borderRadius: '1px',
		},
	},
}));

const ContactAvatar = styled(motion.div)(({ theme }) => ({
	'& .avatar': {
		width: 45,
		height: 45,
		border: '2px solid rgba(255, 215, 0, 0.5)',
		boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
		transition: 'all 0.3s ease',
		'&:hover': {
			border: '2px solid #ffd700',
			boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)',
			transform: 'scale(1.1)',
		},
	},
}));

const MobileMenu = styled(motion.div)(({ theme }) => ({
	'& .mobile-menu': {
		background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
		backdropFilter: 'blur(20px)',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		borderRadius: '12px',
		marginTop: '8px',
		'& .MuiMenuItem-root': {
			color: '#ffffff',
			padding: '12px 20px',
			borderRadius: '8px',
			margin: '4px 8px',
			transition: 'all 0.3s ease',
			'&:hover': {
				background: 'rgba(255, 215, 0, 0.1)',
				color: '#ffd700',
				transform: 'translateX(8px)',
			},
		},
	},
}));

const ResponsiveAppBar = () => {
	let navigate = useNavigate();
	let location = useLocation();
	
	const nav = (index) => {
		navigate(`${index}`)
	}

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (index) => {
		nav(index)
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const isActivePage = (path) => {
		return location.pathname === path;
	};

	return (
		<StyledAppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Logo
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
					>
						<Typography className="logo-text" variant="h6" noWrap component="div">
							{data.information.name}
						</Typography>
					</Logo>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								sx={{ 
									color: '#ffd700',
									'&:hover': {
										background: 'rgba(255, 215, 0, 0.1)',
									}
								}}
							>
								<MenuIcon />
							</IconButton>
						</motion.div>
						<AnimatePresence>
							{anchorElNav && (
								<MobileMenu
									initial={{ opacity: 0, scale: 0.8, y: -20 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.8, y: -20 }}
									transition={{ duration: 0.2 }}
								>
									<Menu
										className="mobile-menu"
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
										onClose={() => setAnchorElNav(null)}
										sx={{
											display: { xs: 'block', md: 'none' },
										}}
									>
										{pages.map((page, index) => (
											<motion.div
												key={page}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 }}
											>
												<MenuItem onClick={() => handleCloseNavMenu(pages_link[index])}>
													<Typography textAlign="center">{page}</Typography>
												</MenuItem>
											</motion.div>
										))}
									</Menu>
								</MobileMenu>
							)}
						</AnimatePresence>
					</Box>

					<Logo
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						<Typography className="logo-text" variant="h6" noWrap component="div">
							{data.information.name}
						</Typography>
					</Logo>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
						{pages.map((page, index) => (
							<NavButton
								key={page + index}
								active={isActivePage(pages_link[index])}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								whileHover={{ 
									scale: 1.05,
									rotateX: 5,
									rotateY: 5,
								}}
								whileTap={{ scale: 0.95 }}
								style={{
									transformStyle: 'preserve-3d',
									perspective: '1000px',
								}}
							>
								<Button 
									className="nav-button"
									onClick={() => handleCloseNavMenu(pages_link[index])}
								>
									{page}
								</Button>
							</NavButton>
						))}
					</Box>

					<ContactAvatar
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						whileHover={{ 
							rotateY: 180,
							transition: { duration: 0.6 }
						}}
						sx={{ flexGrow: 0 }}
					>
						<Tooltip title="Contact Me" arrow>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar 
									className="avatar"
									alt="Contact" 
									src={account} 
									variant="square" 
								/>
							</IconButton>
						</Tooltip>
						<AnimatePresence>
							{anchorElUser && (
								<motion.div
									initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
									animate={{ opacity: 1, scale: 1, rotateX: 0 }}
									exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
									transition={{ duration: 0.3 }}
								>
									<Menu
										sx={{ 
											mt: '45px',
											'& .MuiPaper-root': {
												background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
												backdropFilter: 'blur(20px)',
												border: '1px solid rgba(255, 255, 255, 0.1)',
												borderRadius: '12px',
											}
										}}
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
										onClose={handleCloseUserMenu}
									>
										{data.information.profiles.map((object, index) => (
											<motion.div
												key={object.media}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 }}
												whileHover={{ x: 8 }}
											>
												<a href={object.url} className='link' onClick={handleCloseUserMenu}>
													<MenuItem sx={{
														color: '#ffffff',
														'&:hover': {
															background: 'rgba(255, 215, 0, 0.1)',
															color: '#ffd700',
														}
													}}>
														<Typography textAlign="center">{object.media}</Typography>
													</MenuItem>
												</a>
											</motion.div>
										))}
									</Menu>
								</motion.div>
							)}
						</AnimatePresence>
					</ContactAvatar>
				</Toolbar>
			</Container>
		</StyledAppBar>
	);
};

export default ResponsiveAppBar;