const Record = require('./Connect');
const express = require ('express');
const app = express();
const axios = require ('axios');

const apikey = 'c82363bd';

app.get('/getMovie', (req,res)=>{
const title = req.query.title;
const querystr = `https://api.themoviedb.org/3/search/company?${title}api_key=${apikey}`;
    axios.get(querystr).then((response)=>{
    Title = response.data.Title;
    Year = response.data.Year;
    Director = response.data.Director;

    filmValue = new Record({
        movieTitle:original_title,
        movieYear:Year,
        movieDirector:Director,
    });

    filmValue.save().then(result=>{
        console.log("Success"+result);
    }).catch(error=>{
        console.log("Error"+error);
    })

    res.send(Title + "<br>" + Year + "<br>" + Director + "<br>" + "Record saved");
    }
    );
});

app.get('/deleteMovie',(req, res)=>{
    const title = req.query.title;
    console.log(title);
    Record.deleteOne({ movieTitle: title},function(err){
            if (err) return handleError(err);
            //deleted at most one tanked docuement
        });
      
        res.send(Title +  "<br>" + "Record Deleted");
    
});

app.listen(3001);