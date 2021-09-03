module.exports = function popup(url: string) {
    if (typeof window !== "undefined") {
        window.open(url, "", "toolbar=0,status=0,width=626,height=436");
    }
};
