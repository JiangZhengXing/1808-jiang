<?php
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'index';

	// 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }

    // 设置字符集
    $conn->set_charset('utf8');
?>