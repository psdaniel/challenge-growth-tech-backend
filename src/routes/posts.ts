import { Router } from 'express';
import { getUsers, filterUserByCompany, getPosts, filterData } from '../utils';

const router = Router();

router.post('/api/posts', async (req, res) => {
    const users = await getUsers();

    const filteredUser = filterUserByCompany(users, req.body);

    const posts = await getPosts();

    const filteredData = filterData(filteredUser, posts);

    return res.json({ user: filteredUser, posts: filteredData })
})

export { router as postsRoutes };