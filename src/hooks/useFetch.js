import {
	useEffect,
	useState
} from "react";

const useFetch = (uri)=>{
	const [data,setData] = useState("");

	useEffect(()=>{
		const fetchdData = async()=>{
			try{
				const req = await fetch(uri);
				const res = await req.json();
				console.log(res);
				setData(res);
			}catch(err){
				console.log(err);
			}
		}
		fetchdData();
	},[uri]);

	return data;
};

export default useFetch;