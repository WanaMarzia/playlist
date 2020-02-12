// $("#add").click(function(adds) {
// let songs = ["Never Gonna Give You Up", "Crab Rave", "Baby I'm Yours"]
// songs.forEach(function(song) {
//     $("#songs").append("<li>"+song+"</li>")
// })
// let artists = ["Rick Astley", "Noisestorm", "BreakBot"]
// artists.forEach(function(artist) {
//     $("#artists").append("<li>"+song+"</li>")
// })
// let lengths = ["3:33", "2:41", "1:56"]
// lengths.forEach(function(length) {
//     $("#lengths").append("<li>"+song+"</li>")
// })
// let images = ["https://i2.wp.com/www.rockcellarmagazine.com/wp-content/uploads/2019/03/rick-astley-never-gonna-art.jpg", "https://www.theloadout.com/wp-content/uploads/2019/12/crab-rave-meme-580x334.jpg", "https://static1.squarespace.com/static/5b59fe6a7e3c3ac212f4a9aa/t/5b5a4d952483d6109bb02f47/1283019769223/1000w/Breakbot_Baby+Im+Yours.jpg"]
//  images.forEach(function(image) {
//      $("#images").append("<img src='"+image+"'>")
// }

var playlist = [
            {
                song: "Never Gonna Give You Up",
                artist: "Rick Astley",
                length: "3:33",
                image: "https://i2.wp.com/www.rockcellarmagazine.com/wp-content/uploads/2019/03/rick-astley-never-gonna-art.jpg"
            },
            {
                song: "Crab Rave",
                artist: "Noisestorm",
                length: "2:41",
                image: "https://i.ytimg.com/vi/NvztevMqaPU/maxresdefault.jpg"
            },
            {
                song: "Baby I'm Yours",
                artist: "BreakBot",
                length: "1:56",
                images: "https://static1.squarespace.com/static/5b59fe6a7e3c3ac212f4a9aa/t/5b5a4d952483d6109bb02f47/1283019769223/1000w/Breakbot_Baby+Im+Yours.jpg"
            }

];
playlist.forEach(function(song) {
$("#images").append("<img src='"+song.images+"'>")
})