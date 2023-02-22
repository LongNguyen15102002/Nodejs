import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM present");

    return res.render("index.ejs", { dataPresent: rows, test: "abc string test" });
};

let getDetailPage = async (req, res) => {
    let presentId = req.params.id;
    let [present] = await pool.execute(`select * from present where id = ?`, [
        presentId,
    ]);
    return res.send(JSON.stringify(present));
};

let createNewPresent = async (req, res) => {
    let { presentName, presentType } = req.body;

    await pool.execute(
        "insert into present(presentName, presentType) values (?, ?)",
        [presentName, presentType]
    );

    return res.redirect("/");
};

let deletePresent = async (req, res) => {
    let presentId = req.body.presentId;
    await pool.execute("delete from users where id = ?", [presentId]);
    return res.redirect("/");
};

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [present] = await pool.execute("Select * from present where id = ?", [id]);
    return res.render("update.ejs", { dataPresent: present[0] }); // x <- y
};

let postUpdatePresent = async (req, res) => {
    let { presentName, presentType, id } = req.body;

    await pool.execute(
        "update present set presentName = ?, presentType =?, where id = ?",
        [presentName, presentType, id]
    );

    return res.redirect("/");
};

module.exports = {
    getHomepage,
    getDetailPage,
    createNewPresent,
    postUpdatePresent,
    getEditPage,
    deletePresent
};
