import pool from "../configs/connectDB";

let getAllPresents = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM present");

    return res.status(200).json({
        message: "ok",
        data: rows,
    });
};

let createNewPresent = async (req, res) => {
    let { presentName, presentType } = req.body;

    if (!presentName || !presentType) {
        return res.status(200).json({
            message: "missing required params",
        });
    }

    await pool.execute(
        "insert into present(presentName, presentType) values (?, ?)",
        [presentName, presentType]
    );

    return res.status(200).json({
        message: "ok",
    });
};

let updatePresent = async (req, res) => {
    let { presentName, presentType, id } = req.body;
    if (!presentName || presentType || !id) {
        return res.status(200).json({
            message: "missing required params",
        });
    }

    await pool.execute(
        "update present set presentName= ?, presentType= ?, where id = ?",
        [presentName, presentType, id]
    );

    return res.status(200).json({
        message: "ok",
    });
};

let deletePresent = async (req, res) => {
    let presentId = req.params.id;
    if (!presentId) {
        return res.status(200).json({
            message: "missing required params",
        });
    }
    await pool.execute("delete from users where id = ?", [presentId]);
    return res.status(200).json({
        message: "ok",
    });
};

module.exports = {
    getAllPresents,
    createNewPresent,
    updatePresent,
    deletePresent
};
