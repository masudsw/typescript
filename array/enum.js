//enum-- store constants; duplicate vaue is not allowed .
var requestType;
(function (requestType) {
    requestType[requestType["GetData"] = 2] = "GetData";
    requestType[requestType["ReadData"] = 3] = "ReadData";
    requestType[requestType["DeleteData"] = 4] = "DeleteData";
    requestType[requestType["SaveData"] = 5] = "SaveData";
})(requestType || (requestType = {}));
console.log(requestType);
//string enumaration.
var requestType2;
(function (requestType2) {
    requestType2["ReadData"] = "READ_DATA";
    requestType2["DeleteData"] = "DELETE_DATA";
    requestType2[requestType2["SaveData"] = 5] = "SaveData";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
