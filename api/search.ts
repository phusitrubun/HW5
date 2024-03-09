import Express from "express";
import { conn } from "../dbconnect";

export const router = Express.Router();
router.get('/', (req, res)=>{
  res.send('helloooooooooooo pnat');
});

router.get("/search", (req, res) => {
    conn.query(
      "SELECT * FROM Movie WHERE name LIKE ?",
      ["%" + req.query.name + "%"],
      (err, Movie_result) => {
        if (err) throw err;

        conn.query(
          "SELECT * FROM person INNER JOIN Stars ON person.pid = Stars.pid WHERE Stars.mid IN (SELECT Mid FROM Movie WHERE name LIKE ?)",
          ["%" + req.query.name + "%"],
          (err, Stars_result) => {
            if (err) throw err;
            conn.query(
              "SELECT * FROM person INNER JOIN creators ON person.pid = creators.pid WHERE creators.mid IN (SELECT mid FROM Movie WHERE name LIKE ?)",
              ["%" + req.query.name + "%"],
              (err, Creators_Result) => {
                if (err) throw err;

              // Send the response with all data
              res.json({
                Movie: Movie_result.map((movie: any) => ({
                  ...movie,
                  Stars: Stars_result.filter(
                    (star: any) => star.mid === movie.mid
                  ).map((star: any) => ({
                    pid: star.pid,
                    name: star.name,
                    birthdate: star.birthdate,
                    detail: star.detail,
                    rank: star.rank,
                  })),
                  creators: Creators_Result.filter(
                    (creator: any) => creator.mid === movie.mid
                  ).map((creator: any) => ({
                    cid: creator.cid,
                    name: creator.name,
                    birthdate: creator.birthdate,
                    detail: creator.detail,
                    rank: creator.rank,
                  })),
                })),
              });
            }
          );
        }
      );
    }
  );
});

