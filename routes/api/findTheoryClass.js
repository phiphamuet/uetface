/**
 * Created by Phi on 3/28/2015.
 */
var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var dbURL=require('./../data/dbURL');
var isNull=require('./../isNull');
router.get('/',function(req,res){
    var theory=require('./../data/models/theory');
    if(mongoose.connection.readyState==0) mongoose.connect(dbURL);
    theory.find({'ma_sinh_vien':new RegExp(req.session.user_id, 'i')},{_id:0},function(err,result){
        if(err) {
            res.json({type:'error',content:'Lỗi server!'});
            if(mongoose.connection.readyState==1) mongoose.disconnect();
        }
        else if(isNull(result)){ res.json({type:'error',content:'Mã sinh viên không tồn tại'});}
        else{
            res.json(result);
        }
        if(mongoose.connection.readyState==1) mongoose.disconnect();
    });
});

module.exports=router;