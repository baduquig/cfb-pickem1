db.createView("createUserPicks", "games", [
    {        
        $lookup: {
          from: "schools",
          localField: "awaySchoolId",
          foreignField: "_id",
          as: "awaySchoolDocs"
        },

        $lookup: {
          from: "schools",
          localField: "homeSchoolId",
          foreignField: "_id",
          as: "homeSchoolDocs"
        },

        $project: {
            _id: 0,
            gameId: 1,
            
        }
    }
]);