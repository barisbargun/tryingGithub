import { useEffect, useState } from "react";
import AxiosOp from "../AxiosOp";
import axios from "axios";


const useAxiosFetch = (url: string) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const getPosts = async () => {
        setIsLoaded(true);
        console.log("çağrıldı1")
        try {
            setPosts((await AxiosOp.get(url)).data);
            setError(false);
        } catch (error: any) {
            setError(error.message);
        }
    }
    
    return {posts, getPosts};
}
export default useAxiosFetch;