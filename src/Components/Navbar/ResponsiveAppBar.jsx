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
const pages_link = ['about', 'education', 'skills', 'projects', 'certifications', 'work'];

// Styled components for violet purple theme
const StyledAppBar = styled(AppBar)(({ theme }) => ({
	background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
	boxShadow: '0 8px 32px rgba(74, 20, 140, 0.4)',
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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: '70px !important',
	alignItems: 'center',
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		minHeight: '64px !important',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
	},
}));

const NavButton = styled(motion.div)(({ theme, active }) => ({
	position: 'relative',
	margin: '0 4px',
	[theme.breakpoints.up('lg')]: {
		margin: '0 8px',
	},
	'& .nav-button': {
		color: active ? '#e1bee7' : '#ffffff',
		padding: '10px 16px',
		borderRadius: '12px',
		background: active 
			? 'linear-gradient(135deg, rgba(225, 190, 231, 0.2) 0%, rgba(225, 190, 231, 0.1) 100%)'
			: 'transparent',
		border: active ? '1px solid rgba(225, 190, 231, 0.4)' : '1px solid transparent',
		transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		textTransform: 'none',
		fontWeight: active ? 600 : 400,
		fontSize: '0.85rem',
		minWidth: 'auto',
		position: 'relative',
		overflow: 'hidden',
		[theme.breakpoints.up('lg')]: {
			padding: '12px 20px',
			fontSize: '0.95rem',
		},
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
			background: 'linear-gradient(135deg, rgba(225, 190, 231, 0.15) 0%, rgba(225, 190, 231, 0.05) 100%)',
			border: '1px solid rgba(225, 190, 231, 0.5)',
			color: '#e1bee7',
			transform: 'translateY(-2px)',
			boxShadow: '0 8px 25px rgba(225, 190, 231, 0.3)',
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
	display: 'flex',
	alignItems: 'center',
	'& .logo-text': {
		background: 'linear-gradient(135deg, #e1bee7 0%, #f3e5f5 50%, #e1bee7 100%)',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontFamily: 'Cinzel Decorative',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		textShadow: '0 0 20px rgba(225, 190, 231, 0.5)',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			fontSize: '1.5rem',
		},
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: '-2px',
			left: '0',
			width: '100%',
			height: '2px',
			background: 'linear-gradient(90deg, transparent, #e1bee7, transparent)',
			borderRadius: '1px',
		},
	},
}));

const ContactAvatar = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	'& .avatar': {
		width: 40,
		height: 40,
		padding: '8px',
		border: '2px solid rgba(225, 190, 231, 0.5)',
		boxShadow: '0 0 20px rgba(225, 190, 231, 0.3)',
		[theme.breakpoints.up('md')]: {
			width: 45,
			height: 45,
		},
	},
}));

const MobileMenu = styled(motion.div)(({ theme }) => ({
	'& .mobile-menu': {
		background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
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
				background: 'rgba(225, 190, 231, 0.1)',
				color: '#e1bee7',
				transform: 'translateX(8px)',
			},
		},
	},
}));

const NavContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 1,
	height: '100%',
	paddingTop: '4px', // Align with logo and avatar
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const MobileMenuButton = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));

const ResponsiveAppBar = () => {
	let navigate = useNavigate();
	let location = useLocation();
	
	// Smooth scroll function
	const scrollToSection = (sectionId) => {
		// If we're not on the main page, navigate to it first
		if (location.pathname !== '/') {
			navigate('/');
			// Wait for navigation to complete, then scroll
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					const navbarHeight = 80; // Height of fixed navbar
					const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
					const offsetPosition = elementPosition - navbarHeight;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});
				}
			}, 100);
		} else {
			// We're already on the main page, just scroll
			const element = document.getElementById(sectionId);
			if (element) {
				const navbarHeight = 80; // Height of fixed navbar
				const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - navbarHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		}
	}

	const nav = (sectionId) => {
		scrollToSection(sectionId);
	}

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [activeSection, setActiveSection] = React.useState('about');

	// Intersection Observer to detect which section is currently visible
	React.useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '-20% 0px -60% 0px',
			threshold: 0
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		// Observe all sections
		pages_link.forEach(sectionId => {
			const element = document.getElementById(sectionId);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [location.pathname]);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (sectionId) => {
		nav(sectionId)
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const isActivePage = (sectionId) => {
		// If we're not on the main page, no section is active
		if (location.pathname !== '/') return false;
		return activeSection === sectionId;
	};

	return (
		<StyledAppBar position="fixed"
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Container maxWidth="xl">
				<StyledToolbar disableGutters>
					{/* Desktop Logo */}
					<Logo
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						sx={{ 
							mr: { xs: 2, md: 4 }, 
							display: { xs: 'none', md: 'flex' },
							minWidth: 'fit-content'
						}}
					>
						<Typography className="logo-text" variant="h6" noWrap component="div">
							{data.information.name}
						</Typography>
					</Logo>

					{/* Mobile Menu Button */}
					<MobileMenuButton>
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
									color: '#e1bee7',
									'&:hover': {
										background: 'rgba(225, 190, 231, 0.1)',
									}
								}}
							>
								<MenuIcon />
							</IconButton>
						</motion.div>
					</MobileMenuButton>

					{/* Mobile Menu */}
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

					{/* Mobile Logo */}
					<Logo
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						sx={{ 
							flexGrow: 1, 
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'center'
						}}
					>
						<Typography className="logo-text" variant="h6" noWrap component="div">
							{data.information.name}
						</Typography>
					</Logo>

					{/* Desktop Navigation */}
					<NavContainer>
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
					</NavContainer>

					{/* Contact Avatar */}
					<ContactAvatar
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						sx={{ 
							flexGrow: 0,
							minWidth: 'fit-content'
						}}
					>
						<Tooltip title="Contact Me" arrow>
							<motion.div
								whileHover={{
									scale: 1.1,
									boxShadow: '0 0 30px rgba(225, 190, 231, 0.6)',
									borderColor: '#e1bee7',
								}}
								transition={{ 
									type: "spring", 
									stiffness: 100, 
									damping: 10 
								}}
							>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar 
										className="avatar"
										alt="Contact" 
										src={account} 
										variant="square" 
										sx={{
											border: '2px solid rgba(225, 190, 231, 0.5)',
											boxShadow: '0 0 20px rgba(225, 190, 231, 0.3)',
										}}
									/>
								</IconButton>
							</motion.div>
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
												background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
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
															background: 'rgba(225, 190, 231, 0.1)',
															color: '#e1bee7',
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
				</StyledToolbar>
			</Container>
		</StyledAppBar>
	);
};

export default ResponsiveAppBar;