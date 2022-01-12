import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import Menu from './components/Menu/Menu';
import VitrineUsuarios from './components/VitrineUsuarios/VitrineUsuarios';

ReactDOM.render(
	<React.StrictMode>
		<div className="pageWrapper">
			{/* menu */}
			<Menu />
			{/* area principal da pagina */}
			<main>
				{/* titulo da pagina */}
				<h1 className="pageTitle">Nome do Grupo Selecionado</h1>
				{/* searchbox */}
				<input
					className="searchBox"
					type="search"
					placeholder="Pesquisar usuário"
				/>
				{/* usuários do grupo */}
				<VitrineUsuarios />
				{/* detalhe do usuário */}
			</main>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
