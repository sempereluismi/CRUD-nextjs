import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'mysql-db',
  user: 'user',
  password: 'user',
  database: 'recetas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function getChefsTableInfo() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute("SELECT codigo, nombre, nombreartistico, localidad FROM chef;");
    return rows;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
}


export async function getChef(id) {
  const connection = await pool.getConnection()
  try {
    const [rows] = await connection.execute("SELECT c.codigo, c.nombre, c.apellido1, c.apellido2, c.nombreartistico, c.sexo, c.fecha_nacimiento, c.localidad, p.nombre FROM chef as c join provincia as p on (c.cod_provincia = p.codigo) WHERE c.codigo = ?", [id])
    return rows
  } finally {
    connection.release()
  }
}