import { useState } from "react";
import AxiosOp from "../AxiosOp";


const useAxiosFetch = (url: string) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = async () => {
        console.log("çağrıldı1")
        try {
            setPosts((await AxiosOp.get(url)).data);
        } catch (error: any) {
        }
    }
    
    return {posts, getPosts};
}
export default useAxiosFetch;