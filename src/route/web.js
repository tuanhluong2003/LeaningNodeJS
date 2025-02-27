import express from 'express';
// import homeController from '../controllers/homeController';


let router = express.Router();


let initWebRoutes = (app) => {

    // router.get("/", homeController.getHomePage);

    router.get("/", (req, res) => {
        return res.send("Le quan cut me di");
    });
    // router.get("/", homeController.getHomePage);

    // router.get("/hoidanit", (req, res) => {
    //     return res.send("xin chao hoidanit");
    // });

    // router.get("/about", homeController.getAboutPage);

    return app.use("/", router);
}

module.exports = initWebRoutes;