import exp from 'constants'
import multer from 'multer'

 const upload = multer({limits:{
    fileSize: 1024*1024*5,
}
})

const singleUpload = upload.single('avatar')
 
export {singleUpload}