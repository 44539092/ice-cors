let cors=() => {
    return (req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
        res.header("Access-Control-Expose-Headers", "*");
        if(req.method==='OPTIONS'){
            res.send('');
            return;
        }
        next();
    }
};
module.exports=cors;