const getConvdata = "SELECT * FROM conv3_full ORDER BY tstamp DESC";
const getConvstat = "SELECT * FROM conv3_stat1 ORDER BY tstamp DESC LIMIT 2";

const getConveyorDataByTime = "SELECT * FROM conv3_full WHERE tstamp >$1 and tstamp < $2"



module.exports = {
    getConvdata,
    getConvstat,
    getConveyorDataByTime,
}