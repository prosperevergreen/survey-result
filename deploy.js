var ghpages = require("gh-pages");

const options = {
    message: "commit from local repo"
};

const sourcePath = "dist"

ghpages.publish(sourcePath, options, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("deployed successfully");
	}
});
