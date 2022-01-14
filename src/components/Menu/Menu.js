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
				<li onClick={() => mudarGrupo('Angular')}>
					<IoLogoAngular />
					<span>Angular</span>
				</li>
				<li onClick={() => mudarGrupo('Facebook')}>
					<IoLogoReact />
					<span>React</span>
				</li>
				<li onClick={() => mudarGrupo('VueJs')}>
					<IoLogoVue />
					<span>VueJs</span>
				</li>
			</ul>
		</nav>
	);
}
