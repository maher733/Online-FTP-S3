let data = require('./mock-data');
const LATENCY = 200;

export function getFiles(path, cb) {

    data.map((item) => {
        item.checked = false;
        item._uid = +Date.now();

        return item;
    });

    setTimeout(() => {
        cb(data)
    }, LATENCY)
}

export function deleteFiles(files, cb) {
    console.log('deleting', files);
    setTimeout((files) => {
        cb(files)
    }, LATENCY)
}

export function create(type, name, cb) {
    console.log('creating', type, name);
    setTimeout((type, name) => {
        cb(type, name)
    }, LATENCY)
}

export function download(files, cb) {
    console.log('downloading', files);
    setTimeout((files) => {
        cb(files)
    }, LATENCY)
}

export function upload(files, cb) {
    console.log('uploading', files);

    // var data = new FormData();
    // for single file
    // data.append('files', files[0]);
    // Or for multiple files you can also do
    //  _.each(files, function(v, k){
    //    data.append('avatars['+k+']', v);
    // });

    //this.$http.post('/avatars/upload', data, function (data, status, request) {
    //    //handling
    //}).error(function (data, status, request) {
    //    //handling
    //});

    setTimeout((files) => {
        cb(files)
    }, LATENCY)
}