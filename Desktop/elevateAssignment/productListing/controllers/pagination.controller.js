import Product from "../models/Product.model.js";
export const getPagination = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json({
    products,
    total,
    page,
    totalPages: Math.ceil(products.length / limit),
  });
};
export const topNSellers = async (req, res) => {
  const { n = 5 } = req.query;

  const topSellers = await Product.aggregate([
    { $group: { _id: "$userId", productCount: { $sum: 1 } } },
    { $sort: { productCount: -1 } },
    { $limit: parseInt(n) },
  ]);
  res.status(200).json({msg:'top Sellers are',data:topNSellers})
};
export const expensiveProducts = async (req, res) => {
  const { n = 3 } = req.query;
  const topExpensiveProducts = await Product.aggregate([
    { $group: { _id: "userId", expensiveProducts: { $sum: "$price" } } },
    { $sort: { expensiveProducts: -1 } },
    { $limit: parse(n) },
  ]);
  res.status(200).json({msg: `Top ${n} expensive products are`,data: topExpensiveProducts});
};
