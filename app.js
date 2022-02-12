const express = require("express");
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https");
const response = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    
    res.sendFile(__dirname +"/signup.html");
});

app.post("/",function(req,res){

    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email


    // console.log(firstName,lastName,email);

        const data= {
            members:[{
        email_address: email,
        status: "subscribe",
        merge_fields:{
            FNAME: firstName,
            LNAME: lastName
        }
        }
    ]
    }


        const jsonData = JSON.stringify(data);

        const url = "https://us14.api.mailchimp.com/lists/"List-Id""

        const option = {
            method: "POST",
            auth: "siddharth1:"API_KEY""
        }

        const request = https.request(url,option,function(response){

            if(response.statusCode === 200){
                res.sendFile(__dirname +"success.html")
            }else{
                res.sendFile(__dirname +"failuer.html")
            }
            

                response.on("data",function(data){
                    console.log(JSON.parse(data));
                })
        });
res.write(jsonData)
res.send()
});

// app.post("/failuer", function(req,res){
//     res.redirect("/") // Redirect will redirect the failuer to the sign up page
//})

app.listen(3000,function(){
    console.log("server 3000 is ready")
});



