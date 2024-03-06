import mysql from "mysql";
import { Movie, Person, creator, star } from "./../model/Table_Movie";
import Express from "express";
import { conn } from "../dbconnect";

export const router = Express.Router();

// Insert Person
router.post("/person", (req, res) => {
  const insert: Person = req.body;
  let sql =
    "INSERT INTO `person` (`name`,`birthdate`,`detail`,`rank`)  VALUES (?,?,?,?)";

  sql = mysql.format(sql, [
    insert.name,
    insert.birthdate,
    insert.detail,
    insert.rank,
  ]);

  conn.query(sql, (err, result) => {
    if (err) throw err;

    res.status(201).json({
      affected_row: result.affectedRows,
      last_idx: result.insertId,
    });
  });
});

//Insert Movie
router.post("/movie", (req, res) => {
  const Movie: Movie = req.body;
  let sql =
    "INSERT INTO `Movie` (`name`,`rate`,`time`,`detail`,`release`,`type`)  VALUES (?,?,?,?,?,?)";

  sql = mysql.format(sql, [
    Movie.name,
    Movie.rate,
    Movie.time,
    Movie.detail,
    Movie.release,
    Movie.type,
  ]);

  conn.query(sql, (err, result) => {
    if (err) throw err;

    res.status(201).json({
      affected_row: result.affectedRows,
      last_idx: result.insertId,
    });
  });
});

//star
router.post('/star',(req,res)=>{
    let star:star =req.body;

    let sql = "INSERT INTO `Stars` (`pid`,`mid`)  VALUES (?,?)"

    sql = mysql.format(sql,[
      star.pid,
      star.mid
    ]);

    conn.query(sql, (err, result)=>{
        if(err) throw err;

        res.status(201).json({
            affected_row : result.affectedRows,
            last_idx : result.insertId
        })
    });
})

// router.post("/star", (req, res) => {
//   const sql = "INSERT INTO Stars (pid, mid) VALUES (?, ?)";
//   const values = [req.body.pid, req.body.mid];

//   conn.query(mysql.format(sql, values), (err, result) => {
//     if (err) throw err;
//     res.status(200).json({
//       affected_rows: result.affectedRows
//     });
//   });
// });

///creator
router.post('/creator',(req,res)=>{
    let creator:creator =req.body;

    let sql = "INSERT INTO `creators` (`pid`,`mid`)  VALUES (?,?)"

    sql = mysql.format(sql,[
      creator.mid,
      creator.pid
    ]);

    conn.query(sql, (err, result)=>{
        if(err) throw err;

        res.status(201).json({
            affected_row : result.affectedRows,
            last_idx : result.insertId
        })
    });
})
