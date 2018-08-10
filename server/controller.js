const stuff =[];

module.exports={
    getStuff:(req,res)=>{
        res.status(200).send(stuff);
    },
    addStuff:(req,res)=>{
        stuff.push(req.body.thing);
        res.status(200).send(stuff);
    },
    deleteStuff:(req,res)=>{
        stuff.splice(req.params.index,1);
        res.status(200).send(stuff);
    },
    updateStuff:(req,res)=>{
        let{thingToReplaceOriginal}=req.body;
        let{index}=req.params;

        stuff[index]=thingToReplaceOriginal;
        res.status(200).send(stuff);
    }
}