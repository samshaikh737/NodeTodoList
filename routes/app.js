const express = require("express");
const router = express.Router();
//todo models
const TodoModel = require("../db/models/todoData");
const verifyUserByToken = require("../auth/tokenVerify");

router.get("/:token", verifyUserByToken ,async (req,res)=>{
    const allItem = await TodoModel.find();
    res.send(allItem)
})

router.post("/:token/add", verifyUserByToken ,async (req,res)=>{
    try {
        const addItem = new TodoModel(req.body);
        const saveItem = await addItem.save();
        res.send(saveItem);

    } catch (error) {
        res.status(400).send({"error":error?.message})
    }
})

router.put("/:token/update/:id", verifyUserByToken ,async (req,res)=>{
    try {
        const _id = req.params?.id;
        const updateItem = await TodoModel.findByIdAndUpdate(_id,req.body,{new:true});
        if(!updateItem) return res.status(400).send({"error":"Id Not Found"});

        res.send(updateItem);

    } catch (error) {
        res.status(400).send({"error":"Id Not Found"})
    }
})

router.delete("/:token/delete/:id", verifyUserByToken ,async (req,res)=>{
    try {
        const _id = req.params?.id;
        const deleteItem = await TodoModel.findByIdAndDelete(_id);
        if(!deleteItem) return res.status(400).send({"error":"Id Not Found"});

        res.send(deleteItem);

    } catch (error) {
        res.status(400).send({"error":"Id Not Found"})
    }
})

module.exports = router;