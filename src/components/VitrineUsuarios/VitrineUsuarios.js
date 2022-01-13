import { React, useState, useEffect } from 'react';
import './VitrineUsuarios.scss';

export default function VitrineUsuarios(props) {
	const [membros, setMembros] = useState([]);
	const endPoint = `http://api.github.com/orgs/${props.grupo}/members`;
	const urlApi = `${endPoint}?per_page=10&page=1`;

	// useEffect para controlar a mudanca do grupo
	useEffect(() => {
		// conecta à api do github e seta os membros com a resposta
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setMembros(data))
			.catch((error) => console.log(error));
	}, [props.grupo]);

	return (
		<div className="usuariosWrapper">
			{membros.map((membro) => (
				<a href="#">
					<div className="usuarioCard">
						<div className="usuarioAvatar">
							<img
								src={`https://github.com/${membro.login}.png`}
								alt={membro.login}
							/>
						</div>
						<div className="usuarioNome">{membro.login}</div>
					</div>
				</a>
			))}
		</div>
	);
}
