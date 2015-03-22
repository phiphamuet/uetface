{"changed":true,"filter":false,"title":"ad_class.js","tooltip":"/routes/admin/ad_class.js","value":"/**\n * Created by Phi on 2/8/2015.\n */\nvar express=require('express');\nvar router=express.Router();\nrouter.get('/',function(req,res,next){\n    if(req.session.level){\n        res.render('admin/ad_class',{ad:req.session.user_ad});\n    }\n    else{\n        res.render('admin/admin')\n    }\n});\nrouter.post('/',function(req,res,next){\n\n});\nrouter.get('/api',function(req,res,next){\n    res.json({api:'done'});\n});\nmodule.exports=router;","undoManager":{"mark":11,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":6,"column":23},"end":{"row":6,"column":25},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["ẻ"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["ẻ"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["e"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":29},"action":"remove","lines":["if(err) console.log(err);"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":41},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":17,"column":22},"action":"remove","lines":["var express=require('express');","var router=express.Router();","router.get('/', function (req,res,next) {","    if(req.session.level){","        res.render('admin/class',{title:\"Quản lí lớp học\",ad:req.session.user_ad});","    }else{","        res.redirect('/admin');","    }","});","","router.get('/api',function(req,res,next){","    res.json({content:'This function being construct!'});","});","","module.exports=router;"]},{"start":{"row":3,"column":0},"end":{"row":16,"column":22},"action":"insert","lines":["var express=require('express');","var router=express.Router();","router.get('/',function(req,res,next){","    if(req.session.level){","        res.render('admin/dashboard',{ad:req.session.user_ad});","    }","    else{","        res.render('admin/admin')","    }","});","router.post('/',function(req,res,next){","","});","module.exports=router;"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":26},"end":{"row":7,"column":35},"action":"remove","lines":["dashboard"]},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":3},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":3},"end":{"row":16,"column":4},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":10},"end":{"row":16,"column":12},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":11},"end":{"row":16,"column":13},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":12},"end":{"row":16,"column":13},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":26},"end":{"row":16,"column":28},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"remove","lines":["e"]},{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["é"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"remove","lines":["é"]},{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["e"]},{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"remove","lines":["e"]},{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"insert","lines":["ẽ"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"remove","lines":["ẽ"]},{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":37},"end":{"row":16,"column":38},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":35},"end":{"row":16,"column":38},"action":"remove","lines":["nex"]},{"start":{"row":16,"column":35},"end":{"row":16,"column":39},"action":"insert","lines":["next"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":40},"end":{"row":16,"column":41},"action":"insert","lines":["Ơ"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":40},"end":{"row":16,"column":41},"action":"remove","lines":["Ơ"]},{"start":{"row":16,"column":40},"end":{"row":16,"column":42},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":41},"end":{"row":18,"column":0},"action":"insert","lines":["","    ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["ì"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["ì"]},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["e"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["é"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["é"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["e"]},{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":12},"end":{"row":17,"column":14},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":13},"end":{"row":17,"column":15},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":13},"end":{"row":17,"column":15},"action":"remove","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["Ơ"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["Ơ"]},{"start":{"row":17,"column":13},"end":{"row":17,"column":15},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":18},"end":{"row":17,"column":20},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":26},"end":{"row":17,"column":28},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":26},"end":{"row":17,"column":28},"action":"remove","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":3},"end":{"row":18,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1426993748209}