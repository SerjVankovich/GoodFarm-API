const mongoose = require("mongoose");
const sendJSONResponse = require("../sendJsonResponse").sendJSONResponse;

const Users = mongoose.model("User");

module.exports.getAllUsers = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  Users.find().exec((err, users) => {
    if (err) return sendJSONResponse(res, 400, err);

    if (!users || users.length == 0) {
      sendJSONResponse(res, 404, {
        message: "No users find"
      });
      return;
    }

    return sendJSONResponse(res, 200, users);
  });
};

module.exports.createNewUser = (req, res) => {
  const { body: {name, email, phone, city, street, house, flat, floor, entrance, comment, price, items} } = req
  console.log(req.body)
  Users.create(
    {
      name,
      email,
      phone,
      city,
      street,
      house,
      flat: checkAndParseInt(flat),
      floor: checkAndParseInt(floor),
      entrance: checkAndParseInt(entrance),
      comment,
      activeOrders: [
        {
          price: checkAndParseFloat(price),
          items
        }
      ]
    },
    (err, user) => {
      if (err) return sendJSONResponse(res, 400, err);
      sendJSONResponse(res, 200, user);
    }
  );
};

module.exports.updateUser = (req, res) => {
  const userId = req.params.userid;
  const body = req.body;
  if (!userId) {
    return sendJSONResponse(res, 404, {
      message: "No userid in request"
    });
  }

  Users.findById(userId).exec((err, user) => {
    if (err) {
      return sendJSONResponse(res, 400, err);
    }

    if (!user) {
      return sendJSONResponse(res, 404, {
        message: "User not found"
      });
    }

    user.name = body.name;
    user.email = body.email;
    user.phone = body.phone;
    user.city = body.city;
    user.street = body.street;
    user.house = body.house;
    user.flat = checkAndParseInt(body.flat);
    user.floor = checkAndParseInt(body.floor);
    user.entrance = checkAndParseInt(body.entrance);
    user.comment = body.comment;
    user.activeOrders.push({
      price: checkAndParseFloat(body.price),
      items: body.items
    });

    user.save((err, user) => {
      if (err) return sendJSONResponse(res, 400, err);
      return sendJSONResponse(res, 200, user);
    });
  });
};

const checkAndParseInt = str => {
  if (str == undefined) {
    return null;
  }
  return parseInt(str);
};

const checkAndParseFloat = str => {
  if (str == "undefined") {
    return null;
  }
  return parseFloat(str);
};

module.exports.deleteUser = (req, res) => {
  const userId = req.params.userid;
  if (!userId) {
    return sendJSONResponse(res, 404, {
      message: "No userId in request"
    })
  }

  Users.remove({
    _id: userId
  }).exec((err, user) => {
    if (err) {
      return sendJSONResponse(res, 400, err)
    }
    sendJSONResponse(res, 200, user)
  })
}

module.exports.deleteOrder = (req, res) => {
  const userId = req.params.userid;
  const orderId = req.params.orderid;

  if (!userId || !orderId) {
    return sendJSONResponse(res, 404, {
      message: "No userid or orderid in request"
    })
  }

  Users.findById(userId)
    .exec((err, user) => {
      if (err) {
        return sendJSONResponse(res, 400, err)
      }

      if (!user) {
        return sendJSONResponse(res, 404, {
          message: "User not found"
        })
      }

      const order = user.activeOrders.id(orderId).remove();
      console.log(user.compleatedOrders)
      console.log(user)
      user.compleatedOrders.push(order);
      user.save()

      sendJSONResponse(res, 200, user)
    })
}
