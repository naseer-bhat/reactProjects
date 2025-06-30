import argon2 from "argon2";
export const hashPassword = async (req, res) => {
  try {
    if (!req.body.password) return res.send("password required");
    const hashedPassword = await argon2.hash(req.body.password);
    return hashedPassword;
  } catch (error) {
    return res.status(500).json({msg:'server Error'})
  }
};
