const express = require('express');
var cors = require('cors')
const port = 9000;
const app = express()
app.use(cors());
app.listen(port,()=>{
console.log("server running on port",port);
})
app.use(express.json())
app.get('/getAll',(req,res)=>{
  res.json(db)
})
app.post('/Post', (req,res)=>{
    if(req.body === null){
        res.json("bad request")
    }
else if(req.body.title != undefined && req.body.status != undefined &&req.body.language != undefined ){
const newDb = {
    id : ++lengthOfDB,
    title : req.body.title,
    status: req.body.status,
    language : req.body.language
}
 db.push(newDb) 
  res.json(db)
}
res.json("bad request")
})

app.get('/delete/:ID',(req,res)=>{
    console.log(req.params.ID);

   db = db.filter(item=>{
        return item.id != req.params.ID
    })
    res.json(db)
})
app.get('/check/:ID',(req,res)=>{
    db = db.map(item=>{
        if(item.id == req.params.ID){
            if(item.status === "Private"){
                item.status = "Public"
            }
            else{
                item.status = "Private"
            }
        }
        return item
    })
    res.json(db)
})
let db= [
    {
      id: 1,
      title: 'JS',
      status: 'Private',
      language: 'JS'
    },
    {
      id: 2,
      title: 'Java',
      status: 'Public',
      language: 'Java'
    }
  ]
  let lengthOfDB = db.length
