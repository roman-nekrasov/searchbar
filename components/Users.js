function Users(props) {
	const {
		users
	} = props;

	return (
		<>
			{users.map(user => {
				return <div key={user.name + user.lastname} className="users__item user">
						<p className="user__row">{user.name} {user.lastname}</p>
						<p className="user__row">Возраст: {user.age}</p>
						<p className="user__row">Пол: {user.sex === "m" ? "мужской" : "женский"}</p>
						</div>
			})}
		</>
	)
}

export default Users