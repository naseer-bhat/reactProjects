

db.sales.aggregate([{$group:{_id:'$item',totalRevenue:{$multiply:['$price','$quantity']}}},{$sort:{totalRevenue:-1}}])

db.sales.aggregate([{$match:{quantity:{$gte:3}}},{$group:{_id:'$item',totalQuantity:{$sum:'$quantity'},averagePrice:{$avg:'$price'},}},{
    $match: {
      totalQuantity: { $gt: 5 }
    }
  },{$project:{totalQuantity:{$gt:5}}},{$sort:{totalQuantity:-1}}])

  db.sales.aggregate([{$project:{totalRevenue:{$sum:{$multiply:['$price','$quantity']}}}},{$group:{_id:'$item'}},{$sort:{totalRevenue:-1}},{$limit:3}])


  db.orders.aggregate([{
    $lookup:{
      from:'users',
      localFied:'userId',
      foreignField:'id',
      as :'details'
    }
  },
{ $unwind:'details'},
{$project:{
  _id:0,
  orderId:'$_id',
  userName:'$details.name',
  email:'$details.email',
  amount:1
}}
])