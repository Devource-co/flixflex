import jwt from 'jsonwebtoken';

export const signToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: '24h'
  });
  return token;
};

export const verifyToken = (token) => {
  if (!token) {
    throw new Error('Unauthorized');
  }
  jwt.verify(token, process.env.JWT_KEY, async (err, result) => {
    if (err) {
      throw new Error('malformed token');
    }
    return result;
  });
};
