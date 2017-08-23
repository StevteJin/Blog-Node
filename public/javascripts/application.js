// 主入口文件
requirejs.config({
    baseUrl: "/javascripts/scripts", // 配置默认访问路径
});

requirejs(['GM','page','upload'],function(GM,page,upload){
  // 获取后台爬取的github数据信息
  // 首页处理数据展示
  (function (){
    var Ajax = GM.ajax(); // 实例化一个Ajax对象
    var github_sign = document.getElementsByClassName('github_sign');

    if(github_sign){
      for(var i = 0;i < github_sign.length;i++){
        github_sign[i].addEventListener('click',function (){
          Ajax.init({
            url: '/github',
            method: 'get',
            datatype: 'json',
            success: function (result){
              result = JSON.parse(result);
              var url = 'https://github.com/login/oauth/authorize?client_id=' + result;

              window.location = url;
            }
          });
        },false);
      }
    }
  })();
});
