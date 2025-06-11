import jwt from 'jsonwebtoken';
import { createError } from './error.js';
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log('Cookie Token:', token);
  
    if (!token) {
      console.log('No token provided');
      return next(createError(401, "You are not authenticated"));
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        console.log('Token verification error:', err);
        return next(createError(403, "Token is not valid"));
      }
      req.user = user;
      next();
    });
  };
  

export const verifyUser =  (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id ===  req.params.id || req.user.isAdmin){
            next()
        }
        else{
             return next(createError(403, "You are not authorized!"));
        }
    })
}

export const verifyAdmin =  (req,res,next) => {
    verifyToken(req,res, next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
             return next(createError(403, "You are not admin!"));

        }

    })
}