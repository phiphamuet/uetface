/**
 * Created by Phi on 4/16/2015.
 */
var express=require('express');
var async=require('async');
var router=express.Router();
var mongoose=require('mongoose');
var isNull=require('./../../isNull');
function userNotLoggedIn(req,res,next){
    if(!req.session.username){
        res.redirect('/');
    }else{
        next();
    }
}
router.get('/',userNotLoggedIn,function(req,res,next){
    var subjects =require('./../../data/models/subjects');
    var practice_info =require('./../../data/models/practice_info');
    var theory_info=require('./../../data/models/theory_info');
    if(mongoose.connection.readyState==0) mongoose.connect(dbURL);
    async.parallel([
        function getTheory(cb){
            theory_info.find({}).deepPopulate('thong_tin_mon',{_id:0}).exec(cb);
        },function getPractice(cb){
            practice_info.find({}).deepPopulate('thong_tin_mon',{_id:0}).exec(cb);
        }
    ],function(err, result){
        res.json(result);
    });
})
router.post('/',userNotLoggedIn,function(req,res,next){
    console.log(req.body);
    if(req.body.class_id&&req.body.class_id!=''&&req.body.ghi_chu&&req.body.ghi_chu!=''){
        var subjects =require('./../../data/models/subjects');
        var practice_info =require('./../../data/models/practice_info');
        var theory_info=require('./../../data/models/theory_info');
        var theory=require('./../../data/models/theory');
        var practice=require('./../../data/models/practice');
        if(mongoose.connection.readyState==0) mongoose.connect(dbURL);
        async.parallel([
            function getTheory(cb){
                theory_info.findOne({ma_lop:req.body.class_id,ghi_chu:req.body.ghi_chu}).exec(cb);
            },function getPractice(cb){
                practice_info.findOne({ma_lop:req.body.class_id,ghi_chu:req.body.ghi_chu}).exec(cb);
            }
        ],function(err, result){
            if (err) return console.error(err);
            //process save class
            if(isNull(result[0])){
                var practice_new=new practice({
                    ma_sinh_vien: req.session.username,
                    ma_lop:req.body.class_id,
                    ghi_chu: req.body.ghi_chu,
                    thong_tin_lop: result[1]._id
                });
                practice_new.save(function(err){
                    if(err){
                        res.json('Đã có lỗi xảy ra!');
                    }else{
                        res.json('Thêm lớp thành công!');
                    }
                });
            }else{
                var theory_new=new theory({
                    ma_sinh_vien: req.session.username,
                    ma_lop:req.body.class_id,
                    ghi_chu: req.body.ghi_chu,
                    thong_tin_lop: result[0]._id
                });
                theory_new.save(function(err){
                    if(err){
                        res.json('Đã có lỗi xảy ra!');
                    }else{
                        res.json('Thêm lớp thành công!');
                    }
                });
            }
        });
    }
});

module.exports=router;