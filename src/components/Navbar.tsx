import React from 'react';
import HamburgerComponent from './Hamburger';
import logo from '../assets/logo.svg';

const NavbarComponent: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [isVisible, setVisible] = React.useState(false);

	const navbarRef =
		React.useRef() as React.MutableRefObject<HTMLInputElement>;

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(navbarRef.current);
				}
			});
		});
		observer.observe(navbarRef.current);
		return () => observer.unobserve(navbarRef.current);
	}, []);

	return (
		<>
			<div className='navbar-container' ref={navbarRef}>
				<img src={logo} className='site-logo' />
				<ul
					className={`navbar fade-in-section-2s ${
						isVisible ? 'is-visible' : ''
					}`}
				>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
				</ul>
				<div
					className={`hamburger-nav fade-in-section-2s ${
						isVisible ? 'is-visible' : ''
					}`}
				>
					<a
						href='#'
						className='hamburger-icon'
						onClick={() => (!open ? setOpen(true) : setOpen(false))}
					>
						≡
					</a>
				</div>
			</div>
			<HamburgerComponent open={open} setOpen={setOpen} />
		</>
	);
};

export default NavbarComponent;
