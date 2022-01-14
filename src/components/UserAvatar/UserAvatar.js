import React from 'react';
import './UserAvatar.scss';

export default function UserAvatar(props) {
	return (
		<div className="usuarioAvatar">
			<img
				src={`https://github.com/${props.membro.login}.png`}
				alt={props.membro.login}
			/>
		</div>
	);
}
