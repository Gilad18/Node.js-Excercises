db.getCollection("resturants").find({})
db.getCollection("resturants").find({"cuisine" : "indian"})
db.getCollection("resturants").find({"kosher" : false})
db.getCollection("resturants").find({"address.city" : "Bat-Yam"})
db.getCollection("resturants").find({"address.street" : "Balfur 15"})
db.getCollection("resturants").find({"address.coordinates":[-10.46574, 30.6774]})
db.getCollection("resturants").find().sort({"name":1})
db.getCollection("resturants").find().sort({"address.city":1})
db.getCollection("resturants").update({name: 'coconut jam'}, {$set: {name: 'strawberry jam'}})
db.getCollection("resturants").update({_id:ObjectId("607d73a0092dd332549368b2")},{
$addToSet:{"reviews": {
   "date": new Date("2019-01-01"),
                 "score": 8,
}}
})
db.getCollection("resturants").updateMany({"kosher": false}, {$set: {"kosher": true}})
db.getCollection("resturants").deleteOne({"_id" : ObjectId("607d73a0092dd332549368b6")})
db.getCollection("resturants").update({_id:ObjectId("607d73a0092dd332549368b3")},{
// {"reviews.date": "ISODate("2019-01-01T00:00:00.000+0000")" },{ $inc: { "reviews.$.score" : 10 } }
// })



