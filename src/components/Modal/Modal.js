import React from 'react';
import './Modal.scss';
import { IoClose } from 'react-icons/io5';

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
				<div className="usuarioAvatar">
					<img
						src={props.membroSelecionado.picture.large}
						alt={props.membroSelecionado.name.first}
					/>
				</div>
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
