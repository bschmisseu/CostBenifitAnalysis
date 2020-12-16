var  Entry = (function() {
    var _id = "";
    var  name = "";
    var cost = [];
    var revenues = [];
    var _userId = "";
    var ratio = 0;
    var netProfit = 0;

    var get_id = function() {
        return _id;
    }

    var set_id = function(_id) {
        this._id = _id;
    }

    var getName = function() {
        return name;
    }

    var setName = function(name) {
        this.name = name;
    }

    var getCost = function() {
        return cost;
    }

    var setCost = function(cost) {
        this.cost = cost;
    }

    var getRevenues = function() {
        return revenues;
    }

    var setRevenues = function(revenues) {
        this.revenues = revenues;
    }

    var get_userId = function() {
        return _userId;
    }

    var set_userId  = function(_userId) {
        this._userId = _userId;
    }

    var getRatio = function() {
        return ratio;
    }

    var setRatio = function(ratio) {
        this.ratio = ratio;
    }

    var getNetProfit = function() {
        return netProfit;
    }

    var setNetProfit  = function(netProfit) {
        this.netProfit = netProfit;
    }

    return {
        get_id: get_id,
        set_id: set_id,
        getName: getName,
        setName: setName,
        getCost: getCost,
        setCost: setCost,
        getRevenues: getRevenues,
        setRevenues: setRevenues,
        get_userId: get_userId,
        set_userId: set_userId,
        getRatio: getRatio,
        setRatio: setRatio,
        getNetProfit: getNetProfit,
        setNetProfit: setNetProfit
    }

})();

export default Entry;