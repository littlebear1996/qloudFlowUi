var request=require('../../../../util/requestHandle.js');
var baseConfig=require('../../../../config/baseConfig.json');
var handleRes=require('../../../../util/temp/v1/handleResUtil.js');
var uri=baseConfig.aggregator;


module.exports = function attachHandlers(router) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    //获取所有aggregators
    router.get('/v1/aggregators',
        function(req, res) {
                var options =
                {
                    url: uri+'/aggregators',
                    method: 'GET'
                };
                function callback(error, response, data) {
                            res.send(handleRes.handleRes(error, response, data));

                }

                request(options, callback);

        });
    //删除指定connectors
    router.delete('/v1/aggregators/:id',
        function(req, res) {

                var id=encodeURI(req.params.id);
                var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'DELETE'
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);

        });
    //新增aggregators
    router.post('/v1/aggregators',
        function(req, res) {
                //数据改装成接口需要的格式
            // req.body.mapping.map(funvtion(item){
            //     return
            // });
            var mapping={};
            if(req.body.event.mappingType=='1'){

            }else{
                req.body.event.scriptEngine="";
                req.body.event.mappingScript="";
                req.body.event.mapping.forEach(function(item){
                    mapping[item.param_key]=item.param_value;
                });
            }
            req.body.event.mapping=mapping;
            var options =
                {
                    url: uri+'/aggregators',
                    method: 'POST',
                    json:true,
                    body: req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });
    //获取aggregators详情
    router.get('/v1/aggregators/:id',
        function(req, res) {
                var id=encodeURI(req.params.id);
                var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'GET'
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }

                request(options, callback);
        });
    //修改aggregators
    router.put('/v1/aggregators/:id',
        function(req, res) {
            var id=encodeURI(req.params.id);
            //数据改装成接口需要的格式
            var mapping={};
            if(req.body.event.mappingType=='1'){

            }else{
                req.body.event.scriptEngine="";
                req.body.event.mappingScript="";
                req.body.event.mapping.forEach(function(item){
                    mapping[item.param_key]=item.param_value;
                });
            }
            req.body.event.mapping=mapping;
            var options =
                {
                    url: uri+'/aggregators/'+id,
                    method: 'PUT',
                    json:true,
                    body:req.body
                };
                function callback(error, response, data) {
                    res.send(handleRes.handleRes(error, response, data));
                }
                request(options, callback);
        });
};
