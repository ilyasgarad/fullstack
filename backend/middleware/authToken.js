const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        console.log("token", token);
        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    // If token is expired, decode it to get the payload
                    const expiredDecoded = jwt.decode(token);
                    const newToken = jwt.sign({ _id: expiredDecoded._id, email: expiredDecoded.email }, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
                    res.cookie('token', newToken, { httpOnly: true }); // Set new token in cookies
                    req.userId = expiredDecoded._id;
                    next();
                } else {
                    console.log("error auth", err);
                    return res.status(401).json({
                        message: "Authentication failed",
                        error: true,
                        success: false
                    });
                }
            } else {
                console.log("decoded", decoded);
                req.userId = decoded._id;
                next();
            }
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
