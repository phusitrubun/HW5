import Express from "express";
import { conn } from "../dbconnect";

export const router = Express.Router();

//delete MOVIE
router.delete("/movie/:id",(req,res)=>{
    let id = +req.params.id;
    conn.query("DELETE FROM Movie WHERE mid = ?",[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json
        ({ affected_row: result.affectedRows });
    })
})

//delete Person
router.delete("/Person/:id",(req,res)=>{
    let id = +req.params.id;
    conn.query("DELETE FROM person WHERE pid = ?",[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json
        ({ affected_row: result.affectedRows });
    })
})

//Delete Stars
router.delete("/star/:id",(req,res)=>{
    let id = +req.params.id;
    conn.query("DELETE FROM Stars WHERE sid = ?",[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json
        ({ affected_row: result.affectedRows });
    })
})

//Delete Creator
router.delete("/creator/:id",(req,res)=>{
    let id = +req.params.id;
    conn.query("DELETE FROM creators WHERE cid = ?",[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json
        ({ affected_row: result.affectedRows });
    })
})