const express = require('express');
const router = express.Router();
const usersJson = require('../workes.json');


router.get('/',(req,res)=>{
    return res.status(200).json({workers : usersJson.workers})
}).get('/:id',(req,res)=>{
    return res.status(200).json({workers : usersJson.workers.filter(item=> item.id === req.params.id)})
}).post('/',(req,res)=>{
    const { name, id } = req.body;
    if( !name || !id ) {
        return res.status(200).json({ error: "Must include name and ID" });
    } else if (name.length < 6 || !name.includes(' ')) {
        return res.status(200).json({ error: "Name must be min 5 chars lengts ans includes space" });
    }else if (usersJson.workers.find(item => item.id === id)) {
        return res.status(200).json({ error: "ID alreday exist" });
    }
    const obj = {
        id: id,
		name: name,
		isActive: false,
    }
    usersJson.workers.push(obj)
    return res.status(200).json({ success: "user has been added to the data base" });
	});
    
module.exports = router;
