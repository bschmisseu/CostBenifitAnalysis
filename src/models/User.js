var  User = (function() {
    var _id = "";
    var firstName = "";
    var entries = "";

    var get_id = function() {
        return _id;
    }

    var set_id = function(_id) {
        this._id = _id;
    }

    var getFirstName = function () {
        return  firstName;
    }

    var setFirstName = function (firstName) {
        this.firstName = firstName;
    }

    var getEntries = function () {
        return entries;
    }

    var setEntries = function (entries) {
        this.entries = entries;
    }

    return {
        get_id: get_id,
        set_id: set_id,
        getFirstName: getFirstName,
        setFirstName: setFirstName,
        getEntries: getEntries,
        setEntries: setEntries
    }
})();

export default User;