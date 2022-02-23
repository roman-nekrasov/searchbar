import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";
import Users from "./components/Users";

const api_url = "https://venbest-test.herokuapp.com/";

function App() {

	const [users, setUsers] = useState([]);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [age, setAge] = useState('');
	const [isMale, setIsMale] = useState(true);
	const [isFemale, setIsFemale] = useState(true);

	useEffect(() => {
		fetch(api_url)
			.then(res => res.json())
			.then(data => {
				setUsers(data);
				setSelectedUsers(data);
			})
	}, [])

	useEffect(() => {
		setSelectedUsers(users.filter(user => {
			return (user.name.toLowerCase().includes(name.toLowerCase()) &&
				user.lastname.toLowerCase().includes(lastname.toLowerCase()) &&
				(user.age == age || !age) &&
				((isMale === true && user.sex === "m") || (isFemale === true && user.sex === "f")))
		}))
	}, [name, lastname, age, isMale, isFemale])

	return (
		<>
			<div className="wrapper">
				<SearchBar
					onChangeName={e => setName(e.target.value)}
					onChangeLastname={e => setLastname(e.target.value)}
					onChangeAge={e => setAge(e.target.value)}
					onChangeIsMale={e => setIsMale(e.target.checked)}
					onChangeIsFemale={e => setIsFemale(e.target.checked)}
					isMale={isMale}
					isFemale={isFemale}
				/>
				<Users
					users={selectedUsers}
				/>
			</div>
		</>
	);
}

export default App;
