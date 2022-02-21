function SearchBar(props) {
	const {
		onChangeName,
		onChangeLastname,
		onChangeAge,
		onChangeIsMale,
		onChangeIsFemale,
		isMale,
		isFemale
	} = props

	return (
		<>
			<div className="searchbar">
					<label className="searchbar__label">
						<p className="searchbar__text">Имя:</p>
						<input type="text" name="name" className="searchbar__input" placeholder="Введите имя" onChange={onChangeName} />
					</label>
					<label className="searchbar__label">
						<p className="searchbar__text">Фамилия:</p>
						 <input type="text" name="lastname" className="searchbar__input" placeholder="Введите фамилию" onChange={onChangeLastname} />
					</label>
					<label className="searchbar__label">
						<p className="searchbar__text">Возраст:</p>
						<input type="number" name="age" className="searchbar__input" placeholder="Введите возраст" onChange={onChangeAge} />
					</label>
					<label className="searchbar__label">
						<p className="searchbar__text"> Пол:</p>
						<input type="checkbox" name="isMale" className="searchbar__checkbox" checked={isMale} onChange={onChangeIsMale} /> <span>мужской</span>
					</label>
					<label className="searchbar__label">
						<input type="checkbox" name="isFemale" className="searchbar__checkbox" checked={isFemale} onChange={onChangeIsFemale} /> <span>женский</span>
					</label>
			</div>
		</>
	)
}

export default SearchBar