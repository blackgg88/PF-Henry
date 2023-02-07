import { Router } from 'express';

import { getAllUsers } from '../controllers/users/getAllUsers';
import { getUserByEmail } from '../controllers/users/getUserByEmail';
import { getOneUser } from '../controllers/users/getOneUser';
import { postUser } from '../controllers/users/postUser';
import { deleteUser } from '../controllers/users/deleteUser';
import { putUser } from '../controllers/users/putUser';
import { putImgUser } from '../controllers/users/putImageUser';
import { putBannerUser } from '../controllers/users/putBannerUser';
import { getAllUsersformated } from '../controllers/users/getAllUsersformated'

const user = Router();

// // USER ROUTES!!

user.get('/', getAllUsers);
user.get('/list', getAllUsersformated)

user.put('/img', putImgUser);
user.put('/banner', putBannerUser);
//find by ID and Email // devuelve el usuario buscado por ID y Email
user.get('/:id', getOneUser);
user.get('/:email', getUserByEmail);

//post user // crea un nuevo usuario
user.post('/', postUser);

//delete user // eliminamos un usuario existente
user.delete('/:id', deleteUser);

///UPDATE USER // updateamos usuarios
user.put('/:id', putUser);


export default user;
