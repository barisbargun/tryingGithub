import { createStore, action, thunk, computed } from "easy-peasy";
import AxiosOp from "./AxiosOp";
import { IStoreModel } from "./models/IStoreModel";
import { format } from "date-fns";
import axios from "axios";



export default createStore<IStoreModel>({
    posts: [],
    setPosts: action((state, posts) => {
        state.posts = posts;
    }),
    postsCount: computed((state) => { return { count: state.posts.length } }),
    fetchPosts: thunk(async (actions) => {
        const source = axios.CancelToken.source();
        try {
            actions.setPosts((await AxiosOp.get("/posts",{cancelToken:source.token})).data);
        } catch (error: any) {
            if (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                console.log(error.message);
            }
        } finally {
            source.cancel();
        }
    }),
    addPost: thunk(async (actions, { title, body }) => {
        if (title && body && title.length >= 1 && body.length >= 1) {
            const newPost: IPost = {
                title: title,
                body: body,
                date: format(new Date(), "HH:mm:ss dd-MM-yyyy")
            }
            try {
                await AxiosOp.post("posts", newPost);
                actions.fetchPosts()

            } catch (error: any) {
                console.log(error.message);
            }
        }

    }),
    deletePost: thunk(async (actions, { id }) => {
        try {
            await AxiosOp.delete(`posts/${id}`);
            actions.fetchPosts();
        } catch (error: any) {
            console.log(error.message);
        }
    }),
    patchPost: thunk(async (actions, post) => {
        try {
            post.date = format(new Date(), "HH:mm:ss dd-MM-yyyy")
            await AxiosOp.patch(`posts/${post.id}`, post);
        } catch (error: any) {
            console.log(error.message);
        } finally {
            actions.fetchPosts();
        }
    }),
    searchPost: "",
    setSearchPost: action((state, payload) => {
        state.searchPost = payload;
    })

})