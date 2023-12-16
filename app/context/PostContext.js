"use client"

import { useContext, createContext, useState, useEffect } from "react";
import {collection, getDocs, addDoc, getDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import {db} from "../firebase";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const tempDoc = [];
        querySnapshot.forEach((doc) => {
            tempDoc.push({...doc.data(), id: doc.id});
        });
        setPosts(tempDoc);
    }
    const addPost = async (post) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), post);
            const newPost = {
                ...post,
                id: docRef.id,
            };
            setPosts([newPost, ...posts]);
        } catch (err) {
            console.error(err);
        }
    };

    const deletePost = async (id) => {
        try {
            await deleteDoc(doc(db, "posts", id));
            const newPosts = posts.filter((post) => post.id !== id);
            setPosts(newPosts);
        } catch (err) {
            console.error(err);
        }
    };


    const handleLike = async (id, uid) => {
        const postRef = doc(db, "posts", id);
        const postDoc = await getDoc(postRef);
        const post = postDoc.data();
        const likes = post.likes;
        if (likes.includes(uid)) {
            const newLikes = likes.filter((like) => like !== uid);
            await updateDoc(postRef, {likes: newLikes});
            setPosts(posts.map((post) => post.id === id ? {...post, likes: newLikes} : post));
        } else {
            await updateDoc(postRef, {likes: [...likes, uid]});
            setPosts(posts.map((post) => post.id === id ? {...post, likes: [...likes, uid]} : post));
        }
    }

    const addComment = async (id, comment) => {
        const postRef = doc(db, "posts", id);
        const postDoc = await getDoc(postRef);
        const post = postDoc.data();
        const comments = post.comments;
        await updateDoc(postRef, {comments: [...comments, comment]});
        getPosts();
    }

    useEffect(()=>{
        getPosts();
    }, []);

    return (
        <PostContext.Provider value = {{posts, addPost, deletePost, handleLike, addComment}}>{children}</PostContext.Provider>
    );
    }

    export const UsePost = () => useContext(PostContext);
