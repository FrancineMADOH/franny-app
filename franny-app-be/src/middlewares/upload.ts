import multer from "multer";


const storage = multer.diskStorage({
  
    destination: function (req, file, cb) {
      cb(null, "./public/avatars");
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname + req.params.id + "av" );
    },
});

export const upload = multer({ storage: storage ,  limits: { fileSize: 2000000 }}); 

const illustration = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, " ./public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, `up-${file.originalname}-${Date.now()}` );
    },
});

export const uploadillustration = multer({ storage: illustration , limits: { fileSize: 2000000 }}); 