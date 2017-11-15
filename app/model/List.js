var Sequelize = require('sequelize');

    var Lists = {
    item_name: {
        type: Sequelize.STRING
    },
    event_id: {
        type: Sequelize.INTEGER
    },
    claimed: {
        type: Sequelize.BOOLEAN
    }, 
    user_id: {
        type: Sequelize.INTEGER
    },   
            }
    module.exports.Lists= Lists;
