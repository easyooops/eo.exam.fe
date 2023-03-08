/**
 * open-api명세에 따라 httpClient를 생성
 *
 * @author Shin-BeomChul
 *
 */

var exec = require("child_process").execSync;

// argument Parse
function parseArgs(args) {
  var parsedArgs = {};
  args.forEach(function (arg) {
    var parts = arg.split("=");
    parsedArgs[parts[0]] = parts[1];
  });

  return parsedArgs;
}

var args = parseArgs(process.argv.slice(2));

var i = args.i;
var g = args.g == undefined ? "typescript-axios" : args.g;
var name = args.name;
var dry = args.dry != undefined ? "--dry-run" : "";
var type = args.type == undefined ? "pkg" : args.type;
console.log("###################### openapi-generator #######################");
console.log("i :", i);
console.log("g :", g);
console.log("name :", name);
console.log("isDry :", dry == undefined ? "generate" : "fake generate");
console.log("type :", type);
console.log("###################### openapi-generator #######################");

if (type === "lib") {
  // lib-open-api src생성.
  var openapigen = exec(
    "java -jar tools/scripts/openapi-generator-cli-6.2.1.jar generate \
      -i  " +
      i +
      "\
      -g " +
      g +
      "\
      -o tools/generators/lib-open-api/files/src"
  );

  console.log("openAPI Generated : ", openapigen.toString());

  // 불필요 파일 삭제.
  exec("rm tools/generators/lib-open-api/files/src/.gitignore");
  exec("rm tools/generators/lib-open-api/files/src/.npmignore");
  exec("rm tools/generators/lib-open-api/files/src/git_push.sh");
  exec("rm -r tools/generators/lib-open-api/files/src/.openapi-generator");
  exec(
    "rm -r tools/generators/lib-open-api/files/src/.openapi-generator-ignore"
  );

  // lib-open-api generator결과물 libs폴더에 생성.(power By Nx)
  var moveLibs = exec(
    "npx nx workspace-generator lib-open-api " +
      name +
      " --author=Bespin " +
      dry
  );
  console.log("generated Success 🤗");
  console.log("Here it is 🫱 ", "libs/" + name);

  // remove generators src
  exec("rm -r tools/generators/lib-open-api/files/src");
  console.log("move Libs Success : ", moveLibs.toString());
} else if (type == "pkg") {
  // open-api src생성.
  var openapigen = exec(
    "java -jar tools/scripts/openapi-generator-cli-6.2.1.jar generate \
      -i  " +
      i +
      "\
      -g " +
      g +
      "\
      -o tools/generators/pkg-open-api/files/src"
  );

  console.log("openAPI Generated : ", openapigen.toString());

  // 불필요 파일 삭제.
  exec("rm tools/generators/pkg-open-api/files/src/.gitignore");
  exec("rm tools/generators/pkg-open-api/files/src/.npmignore");
  exec("rm tools/generators/pkg-open-api/files/src/git_push.sh");
  exec("rm -r tools/generators/pkg-open-api/files/src/.openapi-generator");
  exec(
    "rm -r tools/generators/pkg-open-api/files/src/.openapi-generator-ignore"
  );

  // open-api generator결과물 libs폴더로 이동(power By Nx)
  var moveLibs = exec(
    "npx nx workspace-generator pkg-open-api " +
      name +
      " --author=Bespin " +
      dry
  );
  console.log("move Libs Success :", moveLibs.toString());

  // TypeScript 빌드
  exec("tsc -p packages/" + name + "/tsconfig.json");
  console.log("generated Success 🤗");
  console.log("Here it is 🫱 ", "packages/" + name);

  // remove generators src
  exec("rm -r tools/generators/pkg-open-api/files/src");
}
