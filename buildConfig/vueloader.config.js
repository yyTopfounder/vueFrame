module.exports = (isDev) =>{
    return {
        preserveWhitespace: true,//去除html空格
        extractCss: !isDev,//将html中样式打包至公共样式文件中
        cssMoudles: {
            localIdentName: isDev? "[path]-[name]-[hash:base64:5]":"[hash:base64:5]",
            camelCase: true
        },
    }
}
