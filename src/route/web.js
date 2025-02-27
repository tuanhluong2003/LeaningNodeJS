import express from 'express';
import homeController from '../controllers/homeController';


let router = express.Router();


let initWebRoutes = (app) => {

    // router.get("/", homeController.getHomePage);

    router.get("/", (req, res) => {
        return res.send("Le quan cut me di");
    });


    router.get("/homepage", homeController.getHomePage);
    router.get("/aboutpage", homeController.getAboutPage);


    // router.get("/hoidanit", (req, res) => {
    //     return res.send("xin chao hoidanit");
    // });

    return app.use("/", router);
}

module.exports = initWebRoutes;