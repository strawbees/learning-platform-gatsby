// https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
export default function makeRelativePath(url) {
	let hostname;
	//find & remove protocol (http, ftp, etc.) and get hostname
	if (url.indexOf("//") > -1) {
		hostname = url.split('/');
		return hostname.slice(3).join('/')
	}
	else {
		hostname = url.split('/');
		return hostname.slice(1).join('/')
	}
}

// TEST CODE
/*
console.log("== Testing makeRelativePath: ==");
console.log(makeRelativePath("http://www.blog.classroom.me.uk/index.php"));
console.log(makeRelativePath("http://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(makeRelativePath("https://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(makeRelativePath("www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(makeRelativePath("ftps://ftp.websitename.com/dir/file.txt"));
console.log(makeRelativePath("websitename.com:1234/dir/file.txt"));
console.log(makeRelativePath("ftps://websitename.com:1234/dir/file.txt"));
console.log(makeRelativePath("example.com?param=value"));
console.log(makeRelativePath("https://facebook.github.io/jest/"));
console.log(makeRelativePath("//youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(makeRelativePath("http://localhost:4200/watch?v=ClkQA2Lb_iE"));
*/
