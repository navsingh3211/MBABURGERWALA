
export const myProfile = (req, res, next) => {
    res.status(200).json({
        success: true,
        user:req.user
    })
}

export const logout = (req, res, next) => {
    req.session.destroy((error) => {
        if (error) return next(error);
        res.clearCookie("connect.sid");
        res.status(200).json({
            message:"Logged Out"
        })
    })
}