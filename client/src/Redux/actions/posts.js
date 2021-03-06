import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const res = await api.createPost(post);

    dispatch({ type: "CREATE", payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const res = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispath) => {
  try {
    const res = await api.likePost(id);
    dispath({ type: "LIKE", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
