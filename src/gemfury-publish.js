import {execSync} from "child_process";
import {readFileSync} from "fs";

export default function gemfuryPublish ({gemfuryUser, gemfuryApiKey}) {
    try {
        const pkg = JSON.parse(readFileSync("package.json"));
        let name = pkg.name;
        if (name.startsWith("@")) {
            name = name.substring(1, name.length);
            name = name.replace("/", "-");
        }
        const file = `${name}-${pkg.version}.tgz`;
        console.log("Packing npm module");
        execSync("npm pack");
        console.log("Uploading to gemfury");
        execSync(`curl -f -F package=@${file} https://${gemfuryApiKey}@push.fury.io/${gemfuryUser}/`);
        console.log("Cleaning workspace");
        execSync(`rm ${file}`);
        console.log(`${pkg.name}@${pkg.version} published on gemfury`);
    } catch (err) {
        console.log("Error publishing to gemfury");
        console.log(err.message);
    }
}
