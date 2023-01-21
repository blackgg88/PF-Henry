import { Router } from 'express';

import { getAllUsers } from '../controllers/users/getAllUsers';
import { getUserById } from '../controllers/users/getUserById';
import { postUser } from '../controllers/users/postUser';
import { deleteUser } from '../controllers/users/deleteUser';
import { putUser } from '../controllers/users/putUser';

const user = Router();

// // USER ROUTES!!

user.get('/', getAllUsers);

//find by ID // devuelve el usuario buscado por ID
user.get('/:id', getUserById);

//post user // crea un nuevo usuario
user.post('/', postUser);

//delete user // eliminamos un usuario existente
user.delete('/:id', deleteUser);

///UPDATE USER // updateamos usuarios
user.put('/:id', putUser);

export default user;
