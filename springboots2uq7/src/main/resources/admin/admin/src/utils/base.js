const base = {
    get() {
        return {
            url : "http://localhost:8080/springboots2uq7/",
            name: "springboots2uq7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboots2uq7/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "武理多媒体信息共享平台开发"
        } 
    }
}
export default base
