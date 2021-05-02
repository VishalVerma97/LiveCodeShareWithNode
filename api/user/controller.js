let User = require('./userModel');

exports.param = function(req, res, next, id) {
  User.findById(id).select('-password').exec()
    .then(function(user) {
      if(!user) {
        next(new Error("No User found with this id"));
      } else {
        req.user = user;
        next();
      }
    },
      function(err) {
        next(err);
      }
    )
}

exports.get = function(req, res, next) {
  User.find({}).select('-password').exec()
    .then(function(users) {
      res.json(users.map((user) => {
        return user.toJSON();
      }));
    },
    function(err) {
      next(err);
    })
}


exports.post = function(req, res, next) {
  let newUser = new User(req.body);
  newUser.save(function(err, user) {
    if(err) {
      next(err);
    } else {
      res.json(user.toJSON());
    }
  })
}

exports.getOne = function(req, res, next) {
  let user = req.user;
  res.json(user.toJSON());
}

exports.put = function(req, res, next) {
  let user = req.user;
  let updatedUserInfo = req.body;

  user = {updatedUserInfo, ...user};
  console.log('after updating user this is the object', user);
  user.save(function(err, user) {
    if(err) {
      next(err);
    } else {
      res.json(user.toJSON());
    }
  })
}

exports.delete = function(req, res, next) {
  let user = req.user;
  user.remove(function(err, removedUser) {
    if(err) {
      next(err);
    } else {
      res.json(removedUser.toJSON());
    }
  })
}