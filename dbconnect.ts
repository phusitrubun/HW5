import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "nv1.metrabyte.cloud",
  user: "aemandko_65011212027",
  password: "65011212027",
  database: "aemandko_65011212027",
});