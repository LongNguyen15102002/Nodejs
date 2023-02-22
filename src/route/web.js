import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/present/:id', homeController.getDetailPage);
    router.post('/create-new-present', homeController.createNewPresent);
    router.post('/delete-present', homeController.deletePresent);
    router.get('/edit-present/:id', homeController.getEditPage);
    router.post('/update-present', homeController.postUpdatePresent);
    router.get('/about', (req, res) => {
        res.send(`I'm Long Nguyen!`)
    })

    return app.use('/', router)
}


export default initWebRoute;