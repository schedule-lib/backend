import { hash } from "bcrypt";
import { createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO admins(id, name, email, password , created_at) VALUES('${id}', 'admin', 'admin@genisys.com', '${password}', 'now()');`
  );

  await connection.close();
}

create().then(() => console.log("User Admin created"));
