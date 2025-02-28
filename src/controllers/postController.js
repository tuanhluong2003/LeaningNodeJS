import db from '../models/index';

let getPost = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;  // Lấy page từ query string, mặc định là 1
        let limit = 10;  // Số lượng bản ghi mỗi trang
        let offset = (page - 1) * limit;

        // Lấy dữ liệu có phân trang
        let { count, rows } = await db.Post.findAndCountAll({
            limit: limit,
            offset: offset,
            include: [{
                model: db.Author,  // Bảng User
                as: 'Author',    // Alias phải giống với `Post.belongsTo(User, { as: 'author' })`
                attributes: ['name']  // Chỉ lấy cột 'name' của User
            }]
        });

        let totalPages = Math.ceil(count / limit); // Tính tổng số trang

        return res.render('post.ejs', {
            data: rows,
            currentPage: page,
            totalPages: totalPages
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Lỗi server!");
    }
}


module.exports = {
    getPost: getPost,
}