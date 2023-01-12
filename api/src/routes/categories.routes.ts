import { Router } from 'express'
import { getAllCategories } from '../controllers/categories/getAllCategories'
import { getCategoryById } from '../controllers/categories/getCategoryById'
import { postCategory } from '../controllers/categories/postCategory'
import { deleteCategory } from '../controllers/categories/deleteCategory'
import { updateCategory } from '../controllers/categories/updateCategory'

const category = Router()

// // CATEGORY ROUTES!!

//find categories// devuelve lista de todos los categorias
category.get('/', getAllCategories)

//find by ID // devuelve la categoria buscado por ID
category.get('/:id', getCategoryById)

//post category // crea una nueva categoria
category.post('/', postCategory)

//delete category // eliminamos una categoria existente
category.delete('/:id', deleteCategory)

///UPDATE category // updateamos una categoria
category.put('/:id', updateCategory)

export default category
