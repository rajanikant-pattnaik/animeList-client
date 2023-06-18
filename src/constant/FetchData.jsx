const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'e0cbff1d6bmsh1590119e6cd2caep12aea8jsn1665268a4464',
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


