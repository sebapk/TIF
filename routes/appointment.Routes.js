import {Router} from 'express'

export const router = Router()


router
    .get('/', (req,res)=> res.send('<h1>soy H1 desde appointment get</h1><div>soy el div</div>'))
    .post('/', (req,res)=> res.send('<h1>soy H1 desde appointment post</h1><div>soy el div</div>'))
    .put('/', (req,res)=> res.send('<h1>soy H1</h1><div>soy el div</div>'))
    .delete('/', (req,res)=> res.send('<h1>soy H1 desde post</h1><div>soy el div</div>'))
 