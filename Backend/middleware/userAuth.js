const jwt = require('jsonwebtoken');


const userAuth = async (req,res,next) =>{
    
    try{
        const token = req.cookies.access_token;

        if(!token) return res.status(401).json("No token found");
        jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
            if(err){
                return res.status(403).json("Invalid token!");
            }
            res.send("horil");
            req.user = { id: payload.id};
            next();
        });
        
        const user = await User.findOne({_id:verfyUser._id});
        next();
            
    }catch(error)
    {
        res.status(401);
        throw new Error("Invalid credentials!");
    }
    
}

module.exports = userAuth;