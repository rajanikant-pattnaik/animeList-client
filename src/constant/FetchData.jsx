const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'046c6ca621mshc8c8d8c67a0efe4p16c26ajsnc8760c2652fe',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

export const animeSearch = async (name) => {
    const data = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=${name}&sortBy=ranking&sortOrder=asc`, options);
    const res = await data.json();
    return res;
}

export const animeDataSearch=async(_id)=>{
	const data=await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${_id}`,options)
	const res=await data.json();
	return res;
}


