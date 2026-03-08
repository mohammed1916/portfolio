import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
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

// Use static image URL that browsers cache better
const accountImageUrl = '/logo192.png';

// Image cache to prevent repeated requests
const imageCache = new Map();

// Custom hook for cached image loading
const useCachedImage = (src) => {
	const [imageSrc, setImageSrc] = React.useState(src);
	
	React.useEffect(() => {
		if (imageCache.has(src)) {
			setImageSrc(imageCache.get(src));
			return;
		}
		
		const img = new Image();
		img.onload = () => {
			// Cache the successful URL
			imageCache.set(src, src);
			setImageSrc(src);
		};
		img.onerror = () => {
			// Cache the fallback
			imageCache.set(src, src);
			setImageSrc(src);
		};
		img.src = src;
	}, [src]);
	
	return imageSrc;
};

// Simple memoized Avatar component with caching
const MemoizedAvatar = React.memo(({ alt, className, variant, sx, ...props }) => {
	const cachedImageSrc = useCachedImage(accountImageUrl);
	
	return (
		<Avatar 
			className={className}
			alt={alt}
			src={cachedImageSrc}
			variant={variant}
			sx={sx}
			{...props}
		/>
	);
});

// Enhanced animated components
const AnimatedIconButton = React.memo(({ children, onClick, sx = {}, ...props }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
		animate={{ 
			opacity: 1, 
			scale: 1, 
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 20,
				delay: 0.2
			}
		}}
		whileHover={{ 
			scale: 1.15,
			rotate: 5,
			boxShadow: '0 0 25px rgba(225, 190, 231, 0.6)',
			transition: { duration: 0.2 }
		}}
		whileTap={{ 
			scale: 0.9,
			rotate: -5,
			transition: { duration: 0.1 }
		}}
		style={{
			borderRadius: '50%',
			display: 'inline-block',
		}}
	>
		<IconButton 
			onClick={onClick}
			sx={{
				position: 'relative',
				overflow: 'hidden',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: 0,
					height: 0,
					background: 'radial-gradient(circle, rgba(225, 190, 231, 0.3) 0%, transparent 70%)',
					borderRadius: '50%',
					transform: 'translate(-50%, -50%)',
					transition: 'width 0.6s, height 0.6s',
				},
				'&:hover::before': {
					width: '300px',
					height: '300px',
				},
				...sx
			}}
			{...props}
		>
			{children}
		</IconButton>
	</motion.div>
));

const AnimatedMenuIcon = React.memo(({ isOpen = false }) => (
	<motion.div
		animate={{
			rotate: isOpen ? 90 : 0,
		}}
		transition={{ duration: 0.3, ease: "easeInOut" }}
		style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
	>
		<motion.svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				animate={{
					d: isOpen ? "M6 6L18 18" : "M3 6h18"
				}}
				initial={{ d: "M3 6h18" }}
				transition={{ duration: 0.3 }}
			/>
			<motion.path
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				animate={{
					opacity: isOpen ? 0 : 1,
					x: isOpen ? 10 : 0
				}}
				initial={{ opacity: 1, x: 0, d: "M3 12h18" }}
				d="M3 12h18"
				transition={{ duration: 0.3 }}
			/>
			<motion.path
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				animate={{
					d: isOpen ? "M6 18L18 6" : "M3 18h18"
				}}
				initial={{ d: "M3 18h18" }}
				transition={{ duration: 0.3 }}
			/>
		</motion.svg>
	</motion.div>
));

const AnimatedAvatar = React.memo(({ src, alt, sx = {} }) => {
	const cachedImageSrc = useCachedImage(src);
	
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0, rotate: -180 }}
			animate={{ 
				opacity: 1, 
				scale: 1, 
				rotate: 0,
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 15,
					delay: 0.3
				}
			}}
			whileHover={{ 
				scale: 1.1,
				rotate: 10,
				boxShadow: '0 0 30px rgba(225, 190, 231, 0.8)',
				transition: { duration: 0.3 }
			}}
			whileTap={{ 
				scale: 0.95,
				rotate: -5,
				transition: { duration: 0.1 }
			}}
			style={{
				borderRadius: '12px',
				display: 'inline-block',
				position: 'relative',
			}}
		>
			{/* Rotating ring animation */}
			<motion.div
				animate={{
					rotate: 360,
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}}
				style={{
					position: 'absolute',
					inset: '-4px',
					background: 'conic-gradient(from 0deg, transparent, rgba(225, 190, 231, 0.4), transparent)',
					borderRadius: '16px',
					zIndex: -1,
				}}
			/>
			
			<Avatar 
				alt={alt}
				src={cachedImageSrc}
				variant="square"
				sx={{
					position: 'relative',
					zIndex: 1,
					...sx
				}}
			/>
		</motion.div>
	);
});

const pages = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Work', 'Resume'];
const pages_link = ['about', 'education', 'skills', 'projects', 'certifications', 'work', 'resume'];

// Styled components for violet purple theme
const NavbarWrapper = styled('div', {
	shouldForwardProp: (prop) => prop !== 'iscompact'
})(({ theme, iscompact }) => ({
	position: 'fixed',
	top: iscompact ? '20px' : '0',
	left: iscompact ? '300px' : '0',
	right: iscompact ? '300px' : '0',
	zIndex: 1100,
	transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
	borderRadius: iscompact ? '16px' : '0',
	overflow: 'hidden', // Ensure child elements are clipped
}));

const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== 'iscompact'
})(({ theme, iscompact }) => ({
	background: iscompact 
		? 'rgba(74, 20, 140, 0.65)' 
		: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
	boxShadow: iscompact 
		? '0 4px 24px rgba(74, 20, 140, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
		: '0 8px 32px rgba(74, 20, 140, 0.4)',
	backdropFilter: iscompact ? 'blur(25px) saturate(200%)' : 'blur(10px)',
	borderBottom: `1px solid rgba(255, 255, 255, ${iscompact ? '0.25' : '0.1'})`,
	position: 'relative',
	borderRadius: iscompact ? '16px' : '0',
	overflow: 'hidden',
	padding: iscompact ? '8px 0' : '0',
	transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
	// Ensure all child elements respect the border radius
	'& .MuiToolbar-root': {
		borderRadius: iscompact ? '16px' : '0',
		overflow: 'hidden',
	},
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: iscompact ? '16px' : '0',
		background: iscompact 
			? 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.12) 50%, transparent 70%)'
			: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
		transform: 'translateX(-100%)',
		animation: 'shimmer 4s infinite',
		zIndex: 1,
	},
	'&::after': iscompact ? {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: '16px',
		background: 'rgba(255, 255, 255, 0.02)',
		pointerEvents: 'none',
		zIndex: 0,
	} : {},
	'@keyframes shimmer': {
		'0%': { transform: 'translateX(-100%)' },
		'100%': { transform: 'translateX(100%)' },
	},
}));

const StyledToolbar = styled(Toolbar, {
	shouldForwardProp: (prop) => prop !== 'iscompact'
})(({ theme, iscompact }) => ({
	minHeight: iscompact ? '48px !important' : '70px !important',
	alignItems: 'center',
	justifyContent: iscompact ? 'center' : 'space-between', // Space between for desktop to place contact icon on right
	transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
	overflow: 'hidden', // Ensure content respects parent border radius
	borderRadius: iscompact ? '16px' : '0',
	position: 'relative',
	zIndex: 2, // Stay above pseudo-elements
	display: 'flex',
	// Perfect centering for compact mode
	...(iscompact && {
		justifyContent: 'center',
		textAlign: 'center',
	}),
	[theme.breakpoints.down('md')]: {
		minHeight: iscompact ? '44px !important' : '64px !important',
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(3), // Extra padding for contact icon
	},
}));

const NavButton = styled(motion.div)(({ theme, active }) => ({
	position: 'relative',
	margin: '0 4px',
	[theme.breakpoints.up('lg')]: {
		margin: '0 8px',
	},
	   '& .nav-button': {
		   color: active ? 'var(--color-secondary)' : 'var(--color-navbar-text)',
		   padding: '10px 16px',
		   borderRadius: '12px',
		   background: active 
			   ? 'linear-gradient(135deg, var(--color-secondary-bg) 0%, var(--color-secondary-bg-light) 100%)'
			   : 'transparent',
		   border: active ? '1px solid var(--color-secondary-border)' : '1px solid transparent',
		   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		   textTransform: 'none',
		   fontWeight: active ? 600 : 400,
		   fontSize: '0.85rem',
		   minWidth: 'auto',
		   position: 'relative',
		   overflow: 'hidden',
		   fontFamily: "var(--font-gilroy-bold)",
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
			   background: 'linear-gradient(90deg, transparent, var(--color-secondary-glow), transparent)',
			   transition: 'left 0.5s',
		   },
		   '&:hover': {
			   background: 'linear-gradient(135deg, var(--color-secondary-bg-hover) 0%, var(--color-secondary-bg-light) 100%)',
			   border: '1px solid var(--color-secondary-border-hover)',
			   color: 'var(--color-secondary)',
			   transform: 'translateY(-2px)',
			   boxShadow: '0 8px 25px var(--color-secondary-shadow)',
			   '&::before': {
				   left: '100%',
			   },
		   },
		   '&:active': {
			   transform: 'translateY(0px)',
		   },
	   },
}));

// Custom container that doesn't interfere with AppBar positioning
const CustomContainer = styled('div')(({ theme }) => ({
	width: '100%',
	maxWidth: '1200px',
	margin: '0 auto',
	padding: '0 24px',
	overflow: 'hidden', // Ensure content respects parent border radius
	borderRadius: 'inherit', // Inherit border radius from parent
	[theme.breakpoints.down('md')]: {
		padding: '0 20px', // More padding for medium screens
	},
	[theme.breakpoints.down('sm')]: {
		padding: '0 20px', // Extra padding for mobile to accommodate contact icon
	},
}));

const Logo = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	   '& .logo-text': {
		   background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-logo-bg) 50%, var(--color-secondary) 100%)',
		   backgroundClip: 'text',
		   WebkitBackgroundClip: 'text',
		   WebkitTextFillColor: 'transparent',
		   fontFamily: 'var(--font-cinzel)',
		   fontSize: '1.2rem',
		   fontWeight: 'bold',
		   textShadow: '0 0 20px var(--color-secondary-shadow)',
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
			   background: 'linear-gradient(90deg, transparent, var(--color-secondary), transparent)',
			   borderRadius: '1px',
		   },
	   },
}));

const ContactAvatar = styled(motion.div)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	marginRight: theme.spacing(1), // Add right margin for better spacing
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
	// Additional spacing for smaller screens
	[theme.breakpoints.down('md')]: {
		marginRight: theme.spacing(0.5),
	},
}));

const MobileMenu = styled(motion.div)(({ theme }) => ({
	   '& .mobile-menu': {
		   background: 'var(--color-navbar-mobile-bg)',
		   backdropFilter: 'blur(20px)',
		   border: '1px solid var(--color-navbar-mobile-border)',
		   borderRadius: '12px',
		   marginTop: '8px',
		   '& .MuiMenuItem-root': {
			   color: 'var(--color-navbar-mobile-text)',
			   padding: '12px 20px',
			   borderRadius: '8px',
			   margin: '4px 8px',
			   transition: 'all 0.3s ease',
			   fontFamily: "var(--font-gilroy-light)",
			   '&:hover': {
				   background: 'var(--color-secondary-bg-hover)',
				   color: 'var(--color-secondary)',
				   transform: 'translateX(8px)',
			   },
		   },
	   },
}));

const CompactNavButton = styled(motion.div)(({ theme, active }) => ({
	position: 'relative',
	margin: '0 3px',
	[theme.breakpoints.up('lg')]: {
		margin: '0 6px',
	},
	   '& .compact-nav-button': {
		   color: active ? 'var(--color-secondary)' : 'var(--color-navbar-text)',
		   padding: '8px 14px',
		   borderRadius: '10px',
		   background: active 
			   ? 'var(--color-secondary-bg)' 
			   : 'var(--color-navbar-bg)',
		   border: active ? '1px solid var(--color-secondary-border)' : '1px solid var(--color-navbar-border)',
		   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		   textTransform: 'none',
		   fontWeight: active ? 600 : 500,
		   fontSize: '0.8rem',
		   minWidth: 'auto',
		   backdropFilter: 'blur(10px)',
		   fontFamily: "var(--font-gilroy-bold)",
		   [theme.breakpoints.up('lg')]: {
			   padding: '10px 18px',
			   fontSize: '0.9rem',
		   },
		   '&:hover': {
			   background: 'var(--color-secondary-bg-hover)',
			   border: '1px solid var(--color-secondary-border-hover)',
			   color: 'var(--color-secondary)',
			   transform: 'translateY(-2px)',
			   boxShadow: '0 6px 20px var(--color-secondary-shadow)',
		   },
	   },
}));

const NavContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 1,
	height: '100%',
	position: 'relative', // For absolute positioning of child elements
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
	
	// Aggressive image preloading strategy
	React.useEffect(() => {
		// Create multiple cached references
		const preloadStrategies = [
			// Strategy 1: Simple Image preload
			() => {
				const img = new Image();
				img.src = accountImageUrl;
				return img;
			},
			// Strategy 2: Fetch with cache
			() => {
				fetch(accountImageUrl, {
					cache: 'force-cache',
					mode: 'cors'
				}).catch(() => {});
			},
			// Strategy 3: Create object URL and cache it
			() => {
				fetch(accountImageUrl)
					.then(response => response.blob())
					.then(blob => {
						const objectUrl = URL.createObjectURL(blob);
						imageCache.set(accountImageUrl + '_blob', objectUrl);
					})
					.catch(() => {});
			}
		];
		
		// Execute all strategies
		preloadStrategies.forEach(strategy => {
			try {
				strategy();
			} catch (e) {
				console.log('Preload strategy failed:', e);
			}
		});
	}, []);
	
	// Smooth scroll function
	const scrollToSection = (sectionId) => {
		// If we're not on the main page, navigate to it first
		if (location.pathname !== '/') {
			navigate('/');
			// Wait for navigation to complete, then scroll
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					const navbarHeight = 70; // Height of navbar
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
				const navbarHeight = 70; // Height of navbar
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
	const [isScrolled, setIsScrolled] = React.useState(false);

	// Scroll listener to detect when user scrolls
	React.useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			setIsScrolled(scrollTop > 80); // Show compact navbar after 80px scroll
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<NavbarWrapper iscompact={isScrolled}>
			<motion.div
				animate={{
					y: isScrolled ? [0, -2, 0] : 0,
					boxShadow: isScrolled 
						? [
							'0 4px 24px rgba(74, 20, 140, 0.4)',
							'0 8px 32px rgba(74, 20, 140, 0.6)',
							'0 4px 24px rgba(74, 20, 140, 0.4)'
						] 
						: '0 8px 32px rgba(74, 20, 140, 0.4)',
					borderRadius: isScrolled ? '16px' : '0px',
				}}
				transition={{
					y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
					boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
					borderRadius: { duration: 0.4, ease: "easeInOut" }
				}}
				style={{
					overflow: 'hidden', // Clip content to border radius
					borderRadius: isScrolled ? '16px' : '0px',
				}}
			>
				<StyledAppBar 
					iscompact={isScrolled}
				>
				<CustomContainer>
				<StyledToolbar disableGutters iscompact={isScrolled}>
					{/* Enhanced Mobile Menu Button - Centered */}
					<Box sx={{ 
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						justifyContent: 'center'
					}}>
						<AnimatedIconButton
							onClick={handleOpenNavMenu}
							aria-label="menu"
							sx={{
								color: '#e1bee7',
								'&:hover': {
									backgroundColor: 'rgba(225, 190, 231, 0.1)',
								}
							}}
						>
							<AnimatedMenuIcon isOpen={anchorElNav} />
						</AnimatedIconButton>
					</Box>

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
									
									{/* Contact Links for Mobile */}
									<motion.div
										key="contact-divider"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: pages.length * 0.1 }}
									>
										<MenuItem disabled sx={{ opacity: 0.5, borderTop: '1px solid rgba(255,255,255,0.1)', mt: 1 }}>
											<Typography textAlign="center" variant="caption">Contact</Typography>
										</MenuItem>
									</motion.div>
									
									{data.information.profiles.map((object, index) => (
										<motion.div
											key={`mobile-${object.media}`}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: (pages.length + index + 1) * 0.1 }}
										>
											<a href={object.url} className='link' style={{ textDecoration: 'none', color: 'inherit' }}>
												<MenuItem onClick={() => setAnchorElNav(null)} sx={{
													color: 'var(--color-navbar-mobile-contact)',
													fontFamily: "var(--font-gilroy-light)",
													'&:hover': {
														background: 'var(--color-secondary-bg-hover)',
														color: 'var(--color-secondary)',
													},
													'& a': {
														color: 'inherit',
													}
												}}>
													<Typography textAlign="center" sx={{ color: 'inherit', fontFamily: "var(--font-gilroy-light)" }}>{object.media}</Typography>
												</MenuItem>
											</a>
										</motion.div>
									))}
								</Menu>
							</MobileMenu>
						)}
					</AnimatePresence>

					{/* Desktop Navigation */}
					<NavContainer sx={{ justifyContent: 'center' }}>
						{/* Compact Navigation (always mounted) */}
						<motion.div
							initial={{ 
								opacity: 0,
								y: -20,
								scale: 0.9,
								x: '-50%'
							}}
							animate={{ 
								opacity: isScrolled ? 1 : 0,
								y: isScrolled ? 0 : -20,
								scale: isScrolled ? 1 : 0.9,
								x: '-50%', // Always centered
								pointerEvents: isScrolled ? 'auto' : 'none'
							}}
							transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
							style={{ 
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center',
								position: 'absolute',
								left: '50%',
								width: 'auto'
							}}
						>
							{pages.map((page, index) => (
								<CompactNavButton
									key={`compact-${page}-${index}`}
									active={isActivePage(pages_link[index])}
									initial={{ 
										opacity: 0,
										y: -10
									}}
									animate={{ 
										opacity: isScrolled ? 1 : 0,
										y: isScrolled ? 0 : -10
									}}
									transition={{ delay: isScrolled ? index * 0.05 : 0, duration: 0.3 }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button 
										className="compact-nav-button"
										onClick={() => handleCloseNavMenu(pages_link[index])}
									>
										{page.split(' ')[0]} {/* Show only first word */}
									</Button>
								</CompactNavButton>
							))}
						</motion.div>

						{/* Full Navigation (always mounted) */}
						<motion.div
							initial={{ 
								opacity: 1,
								y: 0,
								scale: 1,
								x: '-50%'
							}}
							animate={{ 
								opacity: !isScrolled ? 1 : 0,
								y: !isScrolled ? 0 : 20,
								scale: !isScrolled ? 1 : 0.9,
								x: '-50%', // Always centered
								pointerEvents: !isScrolled ? 'auto' : 'none'
							}}
							transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
							style={{ 
								display: 'flex', 
								alignItems: 'center',
								justifyContent: 'center',
								position: 'absolute',
								left: '50%',
								width: 'auto'
							}}
						>
							{pages.map((page, index) => (
								<NavButton
									key={`full-${page}-${index}`}
									active={isActivePage(pages_link[index])}
									initial={{ 
										opacity: 1,
										y: 0
									}}
									animate={{ 
										opacity: !isScrolled ? 1 : 0,
										y: !isScrolled ? 0 : -30
									}}
									transition={{ delay: !isScrolled ? index * 0.08 : 0, duration: 0.5, type: "spring" }}
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
						</motion.div>
					</NavContainer>

				</StyledToolbar>
			</CustomContainer>
		</StyledAppBar>
		</motion.div>
		</NavbarWrapper>
	);
};

export default ResponsiveAppBar;