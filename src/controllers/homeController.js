import db from '../models/index';
import CRUDService from "../services/CRUDService"

let getHomePage = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;  // Lấy page từ query string, mặc định là 1
        let limit = 10;  // Số lượng bản ghi mỗi trang
        let offset = (page - 1) * limit;

        // Lấy dữ liệu có phân trang
        let { count, rows } = await db.User.findAndCountAll({
            limit: limit,
            offset: offset
        });

        let totalPages = Math.ceil(count / limit); // Tính tổng số trang

        return res.render('homepage.ejs', {
            data: rows,
            currentPage: page,
            totalPages: totalPages
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Lỗi server!");
    }
}

let getINFOPage = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;  // Lấy page từ query string, mặc định là 1
        let limit = 10;  // Số lượng bản ghi mỗi trang
        let offset = (page - 1) * limit;

        // Lấy dữ liệu có phân trang
        let { count, rows } = await db.INFO.findAndCountAll({
            limit: limit,
            offset: offset
        });

        let totalPages = Math.ceil(count / limit); // Tính tổng số trang

        return res.render('test/about.ejs', {
            data: rows,
            currentPage: page,
            totalPages: totalPages
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Lỗi server!");
    }
}


let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postcrud = async (req, res) => {
    console.log(req.body);
    let mesage = await CRUDService.createNewUser(req.body);
    console.log(mesage);
    return res.send("abs");
}

module.exports = {
    getHomePage: getHomePage,
    getINFOPage: getINFOPage,
    getCRUD: getCRUD,
    postcrud: postcrud,
}