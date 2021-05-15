const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
let title,cont;
app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/',(req,res)=>{
    const obj ={"Title":title,"Content":cont}; 
    res.status(200).render('home',obj);

});

app.get('/content',(req,res)=>{
    res.status(200).render('content');
});
app.post('/content',(req,res)=>{
    title = req.body.name;
    cont = req.body.text;
    res.redirect('/');
});

app.get('/login',(req,res)=>{
    res.status(200).render('login');

});
app.post('/login',(req,res)=>{
    let name = req.body.name;
    let pass = req.body.password;
    if((name=="Sherlock")&&(pass=="221bBackerst."))
    {
        res.redirect('/content');
    }
    else{
        let param = {"veredict": "Wrong Id"}
        res.status(200).render('login',param)
    }
});

app.get('/about',(req,res)=>{
    res.status(200).render('about');
});

app.listen(port, () => {
    console.log(`The app is live!`);
})
