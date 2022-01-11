import React from 'react';
import './Menu.scss';

import { IoLogoAngular } from 'react-icons/io5';
import { IoLogoVue } from 'react-icons/io5';
import { IoLogoReact } from 'react-icons/io5';

export default function Menu() {
	return (
		<nav>
			<ul>
				<li>
					<a href="#">
						<IoLogoAngular />
						<span>Angular</span>
					</a>
				</li>
				<li>
					<a href="#">
						<IoLogoReact />
						<span>React</span>
					</a>
				</li>
				<li>
					<a href="#">
						<IoLogoVue />
						<span>VueJs</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}
