
import express from "express";
import chapterController from "../app/controllers/chapterController.js"; 
import upload from "../util/upload.js";
import middleware from "../app/controllers/middleware/authMiddleware.js"



const router = express.Router();

router.put("/:id", upload, chapterController.edit)

// router.put('/:id', upload, chapterController.edit);

router.delete('/overview/:id/:slug', middleware.isAuthenticated,chapterController.deleteOverview);
router.delete('/basic/:id/:slug', middleware.isAuthenticated,chapterController.deleteBasic);
router.delete('/master/:id/:slug', chapterController.deleteMaster);
router.delete('/advanced/:id/:slug', chapterController.deleteAdvanced);

router.get('/overview/:id', middleware.isAuthenticated, chapterController.allOverview);
router.post('/overview/:id', middleware.isAuthenticated, upload, chapterController.addOverview);

router.get('/basic/:id', middleware.isAuthenticated, chapterController.allBasic);
router.post('/basic/:id', middleware.isAuthenticated, upload, chapterController.addBasic);

router.get('/master/:id', middleware.isAuthenticated, chapterController.allMaster);
router.post('/master/:id', middleware.isAuthenticated, upload, chapterController.addMaster);

router.get('/advanced/:id', middleware.isAuthenticated, chapterController.allAdvanced);
router.post('/advanced/:id', middleware.isAuthenticated, upload, chapterController.addAdvanced); 


router.get('/image/:filename', chapterController.imageRender);
router.get('/video/:filename', chapterController.video);


export default router