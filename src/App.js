import React from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import VitrineUsuarios from './components/VitrineUsuarios/VitrineUsuarios';

export default function App() {
	const [grupo, setGrupo] = useState('facebook');

	return (
		<div className="pageWrapper">
			{/* menu */}
			<Menu grupo={setGrupo} />
			{/* area principal da pagina */}
			<main>
				{/* titulo da pagina */}
				<h1 className="pageTitle">Nome do Grupo {grupo}</h1>
				{/* searchbox */}
				<input
					className="searchBox"
					type="search"
					placeholder="Pesquisar usuário"
				/>
				{/* usuários do grupo */}
				<VitrineUsuarios grupo={grupo} />
				{/* detalhe do usuário */}
			</main>
		</div>
	);
}
