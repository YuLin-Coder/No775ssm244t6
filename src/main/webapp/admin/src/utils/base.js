const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm244t6/",
            name: "ssm244t6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm244t6/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学习交流论坛"
        } 
    }
}
export default base
