import { React, useState, useEffect } from 'react';
import './VitrineUsuarios.scss';

import Modal from '../Modal/Modal';
import UserAvatar from '../UserAvatar/UserAvatar';

export default function VitrineUsuarios(props) {
	const [membros, setMembros] = useState([]);
	const [paginaAtual, setPaginaAtual] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [membroSelecionado, setMembroSelecionado] = useState({});

	// monta a url da api
	const endpoint = `http://api.github.com/orgs/${props.grupo}/members`;
	const urlApi = `${endpoint}?per_page=25&page=${paginaAtual}&order=DESC`;

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
			.catch((error) => alert(error));
	}, [paginaAtual]);

	useEffect(() => {
		setMembros([]);
		setPaginaAtual(1);

		const intersectionObserver = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setPaginaAtual((paginaState) => paginaState + 1);
			}
		});
		intersectionObserver.observe(document.querySelector('#finalRolagem'));
		return () => intersectionObserver.disconnect();
	}, [props.grupo]);

	return (
		<ul className="usuariosWrapper">
			{membros.map((membro) => (
				<li
					key={membro.id}
					onClick={() => {
						setShowModal(true);
						setMembroSelecionado(membro);
					}}
				>
					<div className="usuarioCard">
						<UserAvatar membro={membro} />
						<div className="usuarioNome">{membro.login}</div>
					</div>
				</li>
			))}
			{showModal && (
				<Modal
					membroSelecionado={membroSelecionado}
					setShowModal={() => setShowModal()}
				/>
			)}
			<li id="finalRolagem"></li>
		</ul>
	);
}
