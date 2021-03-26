import {request, Request, Response} from 'express'
import ImageView from '../Views/images_view'
const knex = require('../database/index.js')

export default {
    async create (req: Request, res: Response){
        const {username, email, password} = req.body
        try {
            const RequestImages = req.files as Express.Multer.File[]
            const images = RequestImages.map(image => {
                return {path: image.filename}
            })

            const data = {
                username,
                email,
                password,
                imageUrl: images
            }
        
            const user = await knex('users').insert(data)
        
            return res.json({data})
        } catch (error) {
            console.log(error)
        }
        
    }
}