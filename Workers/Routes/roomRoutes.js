const express = require('express');
const router = express.Router();
const roomsJson = require('../rooms.json')

router.get('/',(req,res)=> {
    return res.status(200).json({rooms : roomsJson.rooms})
}).post('/' , (req,res) => {
    const {number , amount , name} = req.body;
    if (!name || !number || !amount) {
        return res.status(200).json({ error: "Room must include num ,name and amount" });
    }
    const obj = {
        number : number,
        amount : amount,
        name : name,
        isActive : false,
        currentWorkers : []
    }
    roomsJson.rooms.push(obj)
    return res.status(200).json({ success : "Rooms has been added to the data base" });
}).put('/add' , (req , res) => {
    const { workerID , roomNum} = req.body
    roomsJson.rooms.filter(item => item.number === roomNum).map(item => {
        if(item.currentWorkers.length == item.amount ) {
            return res.status(200).json({ error: "Room capacity is full" });
        } else {
            item.currentWorkers.push(workerID)
        }
    })
    return res.status(200).json({ success: "worker has been succesfully assign to room" });
}).put('/remove' , (req , res) => {
    const { workerID , roomNum} = req.body
    console.log(typeof workerID)
    console.log(typeof roomNum)
     let selectedRoom = roomsJson.rooms.filter(item => item.number === roomNum);
     console.log(selectedRoom)
     return res.status(200).json({ success: "worker has been succesfully remove from this room" });
})

module.exports = router;