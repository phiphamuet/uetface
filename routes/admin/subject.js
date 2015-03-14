/**
 * Created by Phi on 2/8/2015.
 */
var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');

router.get('/', function (req,res,next) {
    if(req.session.level){
        res.render('admin/subject',{title:'Quản lí môn học',ad:req.session.user_ad});
    }else{
        res.redirect('/admin');
    }
});
router.get('/api',function(req,res,next){
    var data={number_page:1};
    if(req.query.page_num){
       var page_num=req.query.page_num;
    }else{
       var page_num=1;
    }
    if(req.query.page_length){
        var page_length=req.query.page_length;
    }else{
        var page_length=10;
    }
    var subject=require('./../data/models/subjects');
    if(mongoose.connection.readyState==0) mongoose.connect('mongodb://localhost/uetface');
    subject.paginate({}, page_num, page_length, function(error, pageCount, paginatedResults, itemCount) {
        if (error) {
            res.json({type:'error',rp:'Đã có lỗi xảy ra!'});
        } else {
            data.rows=[];
            data.rows=paginatedResults;
            data.number_page=pageCount;
            res.json(data);
            if(mongoose.connection.readyState==1){
                mongoose.disconnect();
            }
        }
    },{columns:{'_id':0,'ma_mon':1,'ten_mon':1,'ma_danh_gia':1,'tin_chi':1,'khoa':1}});
});
router.post('/api',function(req,res,next){
    if(req.session.level){
        if(req.body.subject){
            if(req.body.action=='add'){
                if(req.body.subject.ma_mon!=''&&req.body.subject.ten_mon!=''&&req.body.subject.tin_chi!=''&&req.body.subject.ma_mon&&req.body.subject.ten_mon&&req.body.subject.tin_chi){
                        var subject=require('./../data/models/subjects');
                        if(mongoose.connection.readyState==0) mongoose.connect('mongodb://localhost/uetface');
                        subject.count({'ma_mon':req.body.subject.ma_mon},function(err,result){
                            if(err){
                                res.json({type:'error',rp:'Đã có lỗi xảy ra!'});
                                if(mongoose.connection.readyState==1) mongoose.disconnect();
                            }
                            if(result>=1){
                                res.json({type:'error',rp:'Môn học đã tồn tại!'})
                                if(mongoose.connection.readyState==1) mongoose.disconnect();
                            }else{
                                var newSubject= new subject(req.body.subject);
                                newSubject.save(function(err){
                                    if(err) res.json({type:'error',rp:'Đã có lỗi xảy ra!'});
                                    res.json({type:'success',rp:'Thêm môn học thành công!'})
                                    if(mongoose.connection.readyState==1) mongoose.disconnect();
                                });
                            }
                        });
                }else{
                    res.json({type:'error',rp:'Bạn đã nhập thiếu thông tin.'})
                }
            }else{
                res.json({type:'error',rp:'Đã có lỗi xảy ra! Sai phương thức!'});
            }
        }
    }
    else{
        res.redirect('/admin');
    }
});
router.put('/api',function(req,res,next){
    if(req.session.level){
        if(req.body.action=='edit'){
            if(req.body.subject.ma_mon!=''&&req.body.subject.ten_mon!=''&&req.body.subject.tin_chi!=''&&req.body.subject.ma_mon&&req.body.subject.ten_mon&&req.body.subject.tin_chi){


            }else{
                res.json({type:'error',rp:'Bạn đã nhập thiếu thông tin.'})
            }
        }else{
            res.json({type:'error',rp:'Đã có lỗi xảy ra! Sai phương thức!'})
        }
    }else{
        res.redirect('/admin');
    }
});
router.delete('/api',function(req,res){
    if(req.session.level){
        console.log(req.query.ma_mon);
        var ma_mon=req.query.ma_mon;
        var check_subject=connect(mysql);
        check_subject.query('select * from monhoc where ma_mon="'+ma_mon+'"',function(err,rows,fields){
            if(err) res.json({type:'error',rp:'Lỗi truy vấn.'});
            if(rows.length!=1){
                res.json({type:'error',rp:'Môn học không tồn tại.'});
            }
            if(rows.length==1) {
                var delete_subject = connect(mysql);
                var query='DELETE FROM monhoc where ma_mon="'+ma_mon+'"';
                delete_subject.query(query,function(err,result){
                    if(err) res.json({type:'error',rp:'Đã xảy ra lỗi.'});
                    else{
                        res.json({type:'success',rp:'Xóa môn học thành công.'});
                    }
                });
                delete_subject.end(function(err){
                    if(err) console.log(err);
                });
            }
        });
        check_subject.end(function(err){
            if(err) console.log(err);
        });
    }else{
        res.json({type:'error',rp:'Có lỗi xảy ra.'})
    }
});
module.exports=router;