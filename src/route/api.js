import express from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/presents', APIController.getAllPresents); // method GET -> READ data
    router.post('/create-present', APIController.createNewPresent); // method POST -> CREATE data
    router.put('/update-present', APIController.updatePresent); //method PUT -> UPDATE data
    router.delete('/delete-present/:id', APIController.deletePresent); //method DELETE -> DELETE data

    return app.use('/api/v1/', router)
}


export default initAPIRoute;