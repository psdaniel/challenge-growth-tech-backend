import axios from "axios";

export const getUsers = async () => await axios.get('http://jsonplaceholder.typicode.com/users');

export const getPosts = async () => await axios.get('http://jsonplaceholder.typicode.com/posts');

export const filterData = (user, posts) => posts.data.filter(post => post.userId === user[0].id);

export const filterUserByCompany = (users, userToFilter) => users.data.filter(user => user.company.name === userToFilter.companyName);