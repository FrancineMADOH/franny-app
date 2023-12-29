import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  
    destination: function (req, file, cb) {
      cb(null, "/public/avatars");
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname + req.params.id + new Date().toLocaleDateString() );
      //cb(null,  file.originalname + req.params.id + "av" );
    },
});


const illustration = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
    },
    
    filename: function (req, file, cb) {
      let image_name =  `up-${ Date.now()}-${file.originalname}`;
      cb(null,image_name );
    },
});

export const upload = multer({ storage: storage }); //,  limits: { fileSize: 2000000 }

export const uploadillustration = multer({ 
  storage: illustration , limits: { fileSize:  20000000 }
}); 