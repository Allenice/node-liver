node-liver
-------
livereload for node.

## 安装
```bash
sudo npm install node-liver -g
```

## 使用
```bash
liver [path] [--port port]

# example
liver /Users/me/code/ ./curentDir/code  --port 1234
```

## 参数说明
`path`:  监听路径，相对路径或绝对路径都可以；可以多个，使用空格隔开；
`port`: livereload 端口，建议不要指定，使用其默认的端口
