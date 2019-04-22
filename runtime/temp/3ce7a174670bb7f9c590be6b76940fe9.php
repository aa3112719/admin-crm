<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:85:"D:\Appcation\phpstudy\PHPTutorial\WWW\72crm/application/admin\view\install\index.html";i:1555924107;s:85:"D:\Appcation\phpstudy\PHPTutorial\WWW\72crm\application\admin\view\public\header.html";i:1555924172;s:85:"D:\Appcation\phpstudy\PHPTutorial\WWW\72crm\application\admin\view\public\footer.html";i:1555924158;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <title>CRM安装向导</title>
  <link rel="shortcut icon" href="/72crm/public/static/icon/favicon.ico">
  <link rel="stylesheet" href="/72crm/public/static/style/base.css">
  <link rel="stylesheet" href="/72crm/public/static/style/index.css">
  <script src="/72crm/public/static/js/jquery-3.3.1.min.js"></script>
</head>
<body>
  <div class="header-wrapper">
	<header class="header">
  <div class="header-content">
    <h1 class="logo">
      <a href="http://www.5kcrm.com"><img class="pic" src="/72crm/public/static/img/logo.png" alt=""></a>
    </h1>
    <div class="title">
      安装向导
    </div>
    <div class="concat-us">
      <img class="icon" src="/72crm/public/static/icon/phone.png" alt="">
      <span class="desc">#</span>
    </div>
  </div>
</header>
   
  </div>
  <div class="top">
	<div class="agreement-title">CRM系统</div>
  </div>

  <div class="container">
	<div class="agreement">
		<p style="text-align:center;font-size:18px;">CRM</p>
    
	</div>
	<div class="agree-btn">我同意</div>
  </div>
  <div class="footer-wrapper">
	 <footer class="footer">
  <div class="content">
    <br>
    &copy;2019 弈启学车<a target="_blank" href="http://www.5kcrm.com">www.5kcrm.com</a>
  </div>
</footer>

  </div>
</body>
<script>
  $('.agree-btn').click(function () {
	window.location = 'step1.html'
  });
</script>
</html>