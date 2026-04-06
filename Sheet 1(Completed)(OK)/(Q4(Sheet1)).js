var countSubscribedUsers = function () {
    var users = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        users[_i] = arguments[_i];
    }
    return users.filter(function (user) { return user.IsSubscribed; }).length;
};
var Users = [{ id: 1, name: 'Alice', eamil: 'alice@gmail.com', IsSubscribed: true }, { id: 2, name: 'Ahmed', eamil: 'ahmed@gmail.com', IsSubscribed: false }, { id: 3, name: 'mora', eamil: 'mora@gmail.com', IsSubscribed: false }, { id: 4, name: 'Alia', eamil: 'alia@gmail.com', IsSubscribed: true }];
var res = document.getElementById("result");
res.textContent = "Number of Subscribed Users: " + countSubscribedUsers.apply(void 0, Users);
