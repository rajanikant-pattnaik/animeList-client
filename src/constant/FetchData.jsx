const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
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


