import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import Menu from './components/Menu/Menu';

ReactDOM.render(
	<React.StrictMode>
		<div className="pageWrapper">
			{/* menu */}
			<Menu />
			{/* area principal da pagina */}
			<main></main>
		</div>

		{/* titulo da pagina */}
		{/* searchbox */}
		{/* usuários do grupo */}
		{/* detalhe do usuário */}
	</React.StrictMode>,
	document.getElementById('root')
);
