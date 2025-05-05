import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {

    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        // If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
            message: `Something Went Wrong While Validating the Token`,
			success: false,
		});
    }

}

export default auth;