/**
 * Created by Phi on 3/28/2015.
 */
var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var dbURL=require('./../data/dbURL');
var isNull=require('./../isNull');
var async=require('async');
router.get('/',function(req,res){
    var theory=require('./../data/models/theory');
    var theory_info=require('./../data/models/theory_info');
    var subject=require('./../data/models/subjects');
    if(mongoose.connection.readyState==0) mongoose.connect(dbURL);
    theory.find({'ma_sinh_vien':req.session.user_id},{_id:0}).deepPopulate('thong_tin_lop.thong_tin_mon').exec(function(err,result){
        if(err) {
            res.json({type:'error',content:'Lỗi server!'});
        }
        else if(isNull(result)){ res.json({type:'error',content:'Mã sinh viên không tồn tại'});}
        else{
            res.json(result);
        }
    });
});

module.exports=router;