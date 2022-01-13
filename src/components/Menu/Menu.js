import React from 'react';
import './Menu.scss';

import { IoLogoAngular } from 'react-icons/io5';
import { IoLogoVue } from 'react-icons/io5';
import { IoLogoReact } from 'react-icons/io5';

export default function Menu(props) {
	function mudarGrupo(grupoNovo) {
		props.grupo(grupoNovo);
	}

	return (
		<nav>
			<ul>
				<li>
					<a onClick={() => mudarGrupo('Angular')}>
						<IoLogoAngular />
						<span>Angular</span>
					</a>
				</li>
				<li>
					<a onClick={() => mudarGrupo('Facebook')}>
						<IoLogoReact />
						<span>React</span>
					</a>
				</li>
				<li>
					<a onClick={() => mudarGrupo('VueJs')}>
						<IoLogoVue />
						<span>VueJs</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}
