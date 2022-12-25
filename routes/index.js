import { Router } from 'express';
import pool from '../db/db.js';
const router = Router();

router.get('/', (req,res) => {
    return new Promise(async(resolve, reject) => {
        let conn = null;
        try {
            conn = await pool.getConnection();
            const todos = await conn.query('SELECT * FROM task');
            resolve(res.render('index', {todos}))
        } catch (error) {
            console.log(error)
        } finally {
            if (conn) return conn.end();
        }
    })
});

router.post('/', (req, res)=> {
    return new Promise(async(resolve, reject) => {
        let conn = null;
        try {
            const input = req.body;
            conn = await pool.getConnection();
            await conn.query('INSERT INTO task VALUES (NULL, ?, 0, NOW(), NOW())', [input.task]);
            const todos = await conn.query('SELECT * FROM task');
            resolve(res.render('index', {todos}))
        } catch (error) {
            console.log(error)
        } finally {
            if (conn) return conn.end();
        }
    })
});

router.put('/edit/:id', async (req, res) => {
    let conn = null;
    try {
        const id = req.params.id;
        const input = req.body;
        conn = await pool.getConnection();
        await conn.query('UPDATE task SET task = ? WHERE id = ?', [input.task, id]);
        const data = await conn.query("SELECT * FROM task");
        res.json(data);
    } catch (error) {
        console.log(error)
    } finally {
        if(conn) return conn.end();
    }
})

router.put('/task/:id', async (req, res) => {
    let conn = null;
    try {
        conn = await pool.getConnection();
        await conn.query('UPDATE task SET status = 1 WHERE id = ?', [req.params.id]);
        const response = await conn.query('SELECT * FROM task WHERE id = ?', [req.params.id]);
        res.json(response);
    } catch (error) {
        console.log(error)
    } finally {
        if (conn) return conn.end();
    }
})

router.get('/:id', (req, res) => {
    return new Promise(async(resolve, reject) => {
        let conn = null;
        try {
            const id = req.params.id;
            conn = await pool.getConnection();
            const todo = await conn.query('SELECT * FROM task WHERE id = ?', [id]);
            res.json(todo[0])
        } catch (error) {
            console.log(error)
        } finally {
            if (conn) return conn.end();
        }
    })
});

router.delete('/:id', async(req, res) => {
    let conn = null;
    try {
        const id = req.params.id;
        conn = await pool.getConnection();
        const response = await conn.query("DELETE FROM task WHERE id = ?", [id]);
        const data = await conn.query("SELECT * FROM task");
        res.json(data);
        
    } catch (error) {
        console.log(error)   
    } finally {
        if(conn) return conn.end();
    }
});


export default router;