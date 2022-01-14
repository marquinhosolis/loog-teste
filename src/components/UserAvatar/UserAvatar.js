import React from 'react';
import './UserAvatar.scss';

export default function UserAvatar(props) {
	return (
		<div className="usuarioAvatar">
			<img
				src={props.membro.picture.large}
				alt={props.membro.name.first}
			/>
		</div>
	);
}
