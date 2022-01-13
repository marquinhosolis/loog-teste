import { React, useState, useEffect } from 'react';
import './VitrineUsuarios.scss';

export default function VitrineUsuarios(props) {
	const [membros, setMembros] = useState([]);
	const [paginaAtual, setPaginaAtual] = useState(1);

	// monta a url da api
	const endpoint = `http://api.github.com/orgs/${props.grupo}/members`;
	const urlApi = `${endpoint}?per_page=25&page=${paginaAtual}`;

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setPaginaAtual((paginaState) => paginaState + 1);
			}
		});
		intersectionObserver.observe(document.querySelector('#finalRolagem'));
		return () => intersectionObserver.disconnect();
	}, []);

	// useEffect para controlar a paginação (incrementado com scroll infinito)
	useEffect(() => {
		fetch(urlApi)
			.then((response) => response.json())
			.then(
				(novosMembros) =>
					setMembros((prevMembros) => [
						...prevMembros,
						...novosMembros,
					]) // adiciona os novos membros ao array (nao zera como na mudanca de  grupo)
			)
			.catch((error) => console.log(error));
	}, [paginaAtual]);

	useEffect(() => {
		setMembros([]);
		setPaginaAtual(1);
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setMembros(data))
			.catch((error) => console.log(error));
	}, [props.grupo]);

	return (
		<ul className="usuariosWrapper">
			{membros.map((membro) => (
				<li href="#" key={membro.id}>
					<div className="usuarioCard">
						<div className="usuarioAvatar">
							<img
								src={`https://github.com/${membro.login}.png`}
								alt={membro.login}
							/>
						</div>
						<div className="usuarioNome">{membro.login}</div>
					</div>
				</li>
			))}
			<li id="finalRolagem"></li>
		</ul>
	);
}
