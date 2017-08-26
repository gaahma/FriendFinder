var friendList = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendList);
    });

    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        if(friendList.includes(newFriend)){
            res.json(false);
        } else {
            friendList.push(newFriend);
            res.json(true);
        }
    });
}