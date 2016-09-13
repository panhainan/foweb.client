/**
 * Created by Pan on 2016/9/11.
 */
app.service("TestCaseService", function (RequestService) {
    this.list = function (pageNum, pageSize) {
        return RequestService.getRequest('/testbean/?pageNum=' + pageNum + "&pageSize=" + pageSize, cfg_form);
    };
    this.look = function (id) {
        return RequestService.getRequest('/testbean/' + id, cfg_form);
    };
    this.save = function (tbean) {
        if (tbean.id) {
            return RequestService.putRequest('/testbean/', tbean, cfg_json);
        } else {
            return RequestService.postRequest('/testbean/', tbean, cfg_json);
        }
    };
    this.delete = function (id) {
        return RequestService.deleteRequest('/testbean/' + id, cfg_form);
    };
});
