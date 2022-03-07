const express = require('express');
const posts = require ('../models/posts');
const Booking = require('../models/booking');
const Admin = require('../models/Admin');

const router = express.Router();

//save post

router.post('/post/save',(req,res)=>{

    let newpost = new posts(req.body);

    newpost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"posts saved successfully"
        });
    });
});
//get posts

router.get('/posts',(req,res) =>{
    posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });

});

//update posts

router.put('/post/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//Get a specific post

router.get("/post/:id",(req,res) =>{

    let postid = req.params.id;

    posts.findById(postid,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//Delete post

router.delete('/post/delete/:id',(req,res) =>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedpost
        });

    });
});


//save post

router.post('/booking/save',(req,res)=>{

    let newpost = new Booking(req.body);

    newpost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"posts saved successfully"
        });
    });
});

//get posts

router.get('/booking',(req,res) =>{
    Booking.find().exec((err,booking) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:booking
        });
    });

});

//update posts

router.put('/bookings/update/:id',(req,res) =>{
    Booking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//Get a specific post

router.get('/booking/:id',(req,res) =>{

    let postid = req.params.id;

    Booking.findById(postid,(err,booking) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            booking
        });
    });
});

//Delete post

router.delete('/booking/delete/:id',(req,res) =>{
    Booking.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedpost
        });

    });
});

router.post('/admin/adminlogin',(req,res)=>{
    const {emailadd, password} = req.body;
    Admin.findOne({emailadd:emailadd ,password:password},(err, Admin) => {
        if(Admin) {
            if(password=== Admin.password){   
                res.send({message: "login successfull"})      

            }

            else{
                res.send({message: "Invalid credentials"})
            }
        }
    })
})

module.exports = router;