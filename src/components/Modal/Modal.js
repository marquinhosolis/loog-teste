import React from 'react';
import './Modal.scss';
import { IoClose } from 'react-icons/io5';
import UserAvatar from '../UserAvatar/UserAvatar';

export default function Modal(props) {
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
				<UserAvatar membro={props.membroSelecionado} />
				<div className="modalNome">
					{props.membroSelecionado.name.first}
				</div>
				<ul className="modalDados">
					<li>
						Repositórios <br />
						<strong>50</strong>
					</li>
					<li>
						Seguidores <br />
						<strong>150</strong>
					</li>
					<li>
						Membro desde: <br />
						<strong>14/05/2020</strong>
					</li>
				</ul>
			</div>
		</div>
	);
}
