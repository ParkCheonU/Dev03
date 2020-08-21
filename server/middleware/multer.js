const multer = require('multer');
const path = require('path');

export const upload = multer({
    storage: multer.diskStorage({
        // set a localstorage destination
        destination: (req, file, cb) => {
            cb(null, 'public/img/');
        },
        // convert a file name
        filename: (req, file, cb) => {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});