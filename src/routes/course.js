import express from 'express';
import courseController from '../app/controllers/courseController.js';
import upload from '../util/upload.js';
const router = express.Router();
import middleware from "../app/controllers/middleware/authMiddleware.js"

router.get('/teacherAdd',middleware.isAuthenticated, courseController.teacherAdd);
router.post('/teacherAdd',middleware.isAuthenticated, upload, courseController.postAdd);
router.get('/edit/:id',middleware.isAuthenticated, courseController.edit);
router.put('/edit/:id',middleware.isAuthenticated, upload, courseController.storeEdit);
router.post('/comment',middleware.isAuthenticated, courseController.commentCourse);
router.get('/pathVideo', courseController.pathVideo);
router.get('/about/:id', courseController.about);
router.get('/:id', courseController.registerCourse);

export default router;
