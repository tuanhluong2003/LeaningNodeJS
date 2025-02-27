import db from '../models/index';

let getHomePage = async (req, res) => {
    let data = await db.User.findAll();
    return res.render('homepage.ejs',
        {
            data: JSON.stringify(data)
        }
    );
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}