import { React, useState, useEffect } from 'react';
import './Modal.scss';
import { IoClose } from 'react-icons/io5';
import UserAvatar from '../UserAvatar/UserAvatar';

export default function Modal(props) {
	const [detalheMembro, setDetalheMembro] = useState({});

	useEffect(() => {
		fetch(`https://api.github.com/users/${props.membroSelecionado.login}`)
			.then((response) => response.json())
			.then((detalheMembro) => setDetalheMembro(detalheMembro))
			.catch((error) => alert(error));
	}, [props.membroSelecionado]);

	return (
		<div className="modal">
			<div className="modalContent">
				<div
					className="fecharModal"
					onClick={() => {
						props.setShowModal(false);
					}}
				>
					<IoClose />
				</div>
				<UserAvatar membro={detalheMembro} />
				<div className="modalNome">{detalheMembro.login}</div>
				<ul className="modalDados">
					<li>
						Repositórios <br />
						<strong>{detalheMembro.public_repos}</strong>
					</li>
					<li>
						Seguidores <br />
						<strong>{detalheMembro.followers}</strong>
					</li>
					<li>
						Membro desde: <br />
						<strong>
							{new Date(
								`${detalheMembro.created_at}`
							).toLocaleDateString('pt-BR', {
								year: 'numeric',
								month: 'numeric',
								day: 'numeric',
							})}
						</strong>
					</li>
				</ul>
			</div>
		</div>
	);
}
