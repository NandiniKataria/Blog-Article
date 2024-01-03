const express=require("express")
const mongoose=require("mongoose")
const articleRouter=require('./routes/articles')

const app=express();
mongoose.connect('mongodb://localhost/blog',{
  
})
const port = 3000;

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use('/articles',articleRouter)


app.get("/",(req,res)=>{
const articles=[{
  title: 'Test Aticle',
  Date:new Date(),
  Description:'test Description'


}]
res.render('articles/index',{
  articles:articles
})
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
