import { React, useState, useEffect } from 'react';
import './VitrineUsuarios.scss';

import Modal from '../Modal/Modal';

export default function VitrineUsuarios(props) {
	const [membros, setMembros] = useState([]);
	const [paginaAtual, setPaginaAtual] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [membroSelecionado, setMembroSelecionado] = useState({});

	// monta a url da api
	// const endpoint = `http://api.github.com/orgs/${props.grupo}/members`;
	// const urlApi = `${endpoint}?per_page=25&page=${paginaAtual}`;

	const endpoint = `https://randomuser.me/api/`;
	const urlApi = `${endpoint}?results=25&gender=${props.group}`;

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
						...novosMembros.results,
					]) // adiciona os novos membros ao array (nao zera como na mudanca de  grupo)
			)
			.catch((error) => console.log(error));
	}, [paginaAtual]);

	useEffect(() => {
		setMembros([]);
		setPaginaAtual(1);
		fetch(urlApi)
			.then((response) => response.json())
			.then((data) => setMembros(data.results))
			.catch((error) => console.log(error));
	}, [props.grupo]);

	return (
		<ul className="usuariosWrapper">
			{/* {membros.map((membro) => (
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
			))} */}
			{showModal && (
				<Modal
					membroSelecionado={membroSelecionado}
					setShowModal={() => setShowModal()}
				/>
			)}
			{membros.map((membro) => (
				<li
					href="#"
					key={membro.id}
					onClick={() => {
						setShowModal(true);
						setMembroSelecionado(membro);
					}}
				>
					<div className="usuarioCard">
						<div className="usuarioAvatar">
							<img
								src={membro.picture.large}
								alt={membro.name.first}
							/>
						</div>
						<div className="usuarioNome">{membro.name.first}</div>
					</div>
				</li>
			))}

			<li id="finalRolagem"></li>
		</ul>
	);
}
