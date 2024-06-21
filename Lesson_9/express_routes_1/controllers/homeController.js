exports.sendReqParam = (req,res) => {
    let veg = req.params.vegetable;
    res.send('this is the page for ${veg}');
};