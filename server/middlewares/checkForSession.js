module.exports = (req,res,next) => {
    const { user } = req.session;
    
    if(!user){
        req.session.user = {username: '', cart: [], total: 0}
    }
    next();
}