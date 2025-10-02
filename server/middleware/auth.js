import jwt from "jsonwebtoken"


// const authUser = async (req, res, next) => {
        
//         try {
//         // const { token } = req.header;
//         const token = req.header("Authorization");
        
//         if(!token){
//             return res.json({success: false, message: "You are not logged in, Login Again"})
//         }
//             const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//             req.body.userId = token_decode.id
//             next();
//         } catch (error) {
//             console.log(error.message);
//             res.json({success: false, message: error.message})
//         }
// }

// const authUser = async (req, res, next) => {
//     try {
//       const authHeader = req.header("Authorization");
  
//       // console.log("💬 Received Auth Header:", authHeader);
  
//       if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.json({ success: false, message: "You are not logged in, Login Again" });
//       }
  
//       const token = authHeader.split(" ")[1];
//       const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//       req.body.userId = token_decode.id;
//       next();
//     } catch (error) {
//       console.log("❌ Middleware Error:", error.message);
//       res.json({ success: false, message: error.message });
//     }
//   };
const authUser = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
  
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized - No token provided" 
            });
        }
  
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Better  practice: set the user ID in req.user
        req.user = { 
            id: decoded.id,
        };
        // console.log(decoded, req.user);
        
        next();
    } catch (error) {
        console.log("❌ Auth Middleware Error:", error.message);
        res.status(401).json({ 
            success: false, 
            message: "Unauthorized - Invalid token" 
        });
    }
};


export default authUser