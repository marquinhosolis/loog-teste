import { React, useState, useEffect } from 'react';
import './VitrineUsuarios.scss';

export default function VitrineUsuarios(props) {
	const [membros, setMembros] = useState([]);
	const [paginaAtual, setPaginaAtual] = useState(1);

	// monta a url da api
	const endPoint = `http://api.github.com/orgs/${props.grupo}/members`;
	const urlApi = `${endPoint}?per_page=15&page=${paginaAtual}`;

	// useEffect para controlar a mudanca do grupo
	useEffect(() => {
		//reseta os membros e a paginacao quando o grupo mudar
		setMembros([]);
		setPaginaAtual(1);
		// conecta à api do github e seta os membros com a resposta
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setMembros(data))
			.catch((error) => console.log(error));
	}, [props.grupo]);

	// useEffect para controlar a mudanca da pagina
	useEffect(() => {
		fetch(urlApi)
			.then((response) => response.json())
			.then((novosMembros) =>
				setMembros((prevMembros) => [...prevMembros, ...novosMembros])
			)
			.catch((error) => console.log(error));
	}, [paginaAtual]);

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setPaginaAtual((paginaAtualState) => paginaAtualState + 1);
			}
		});
		intersectionObserver.observe(document.querySelector('#finalRolagem'));
		return () => intersectionObserver.disconnect();
	}, []);

	return (
		<div className="usuariosWrapper">
			{membros.map((membro) => (
				<a href="#" key={membro.id}>
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
			<div id="finalRolagem"></div>
		</div>
	);
}
