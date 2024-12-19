dummyfunction = (req,res,next) => {
    console.log("dummy function called");
    next();
}

const dummy = {
    dummyfunction: dummyfunction
}

module.exports = dummy
