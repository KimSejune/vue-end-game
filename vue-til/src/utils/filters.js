function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	const month =
		date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
	const day = date.getDate();
	const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
	const minutes = date.getMinutes();
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export { formatDate };
