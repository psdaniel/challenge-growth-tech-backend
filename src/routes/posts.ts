import { Router } from 'express';
import { getUsers, filterUserByCompany, getPosts, filterData } from '../utils';

const router = Router();

router.post('/api/posts-company', async (req, res) => {
    const users = await getUsers();

    const filteredUser = filterUserByCompany(users, req.body);

    const posts = await getPosts();

    if (filteredUser.length === 0) {
        return res.status(400).send({
            message: 'Não foi encontrado nenhum usuário com o nome dessa empresa!'
        });
    }

    const filteredData = filterData(filteredUser, posts);

    return res.json({ user: filteredUser, posts: filteredData })
})

export { router as postsRoutes };