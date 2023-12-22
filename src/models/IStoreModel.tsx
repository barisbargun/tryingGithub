import {Thunk, Action, Computed} from "easy-peasy";

export interface IStoreModel {
    //Get Posts
    posts: IPost[];
    setPosts: Action<IStoreModel, IPost[]>;
    postsCount:Computed<IStoreModel,{count:number}>;

    //AJAX - GRUD
    fetchPosts:Thunk<IStoreModel>
    addPost:Thunk<IStoreModel,IPost>;
    deletePost:Thunk<IStoreModel,{id:number}>;
    patchPost:Thunk<IStoreModel,IPost>;

    //SearchPost
    searchPost:string;
    setSearchPost:Action<IStoreModel,string>
  }