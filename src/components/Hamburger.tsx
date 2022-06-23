import React from 'react';

interface IProps {
	open: boolean;
	setOpen: any;
}

const HamburgerComponent: React.FC<IProps> = (props: IProps) => {
	if (props.open) {
		return (
			<div className='hamburger-wrapper'>
				<div className='hamburger-menu'>
					<ul>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default HamburgerComponent;
