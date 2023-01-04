db.createView("createUserPicks", "games", [
    {        
        $lookup: {
          from: "schools",
          localField: "awaySchoolId",
          foreignField: "_id",
          as: "awaySchools"
        },

        $lookup: {
          from: "schools",
          localField: "homeSchoolId",
          foreignField: "_id",
          as: "homeSchools"
        },

        /* $lookup: {
          from: "picks",
          localField: "_id",
          foreignField: "gameId",
          as: "picks"
        }, */

        $project: {
            _id: 0,
            gameId: 1,
            week: 1,
            day: 1,
            date: 1,
            finalScore: 1,
            awaySchoolId: 0,
            homeSchoolId: 0,
            location: 1,
            schoolName: 1,
            schoolMascot: 1,
            awaySchoolName: "$awaySchools.schoolName",
            awayMascot: "$awaySchools.schoolMascot",
            homeSchoolName: "$homeSchools.schoolName",
            homeMascot: "$homeSchools.schoolMascot",
        }
    }
]);