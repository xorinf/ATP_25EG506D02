import jwt from "jsonwebtoken";
const { verify } = jwt
export function verifyToken(request, response, next) {
    // token verification logic
    const token = request.cookies?.token;
    
    if (!token){
        return response.status(401).json({message : "Please Login to the Application"})
    }
    try {
        const decodedToken = verify(token, "charlie kirk")
        console.log(decodedToken)
        next()
    } catch (err) {
        response.status(401).json({message : "session expired or token timeout!"})
    }
}