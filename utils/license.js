var licenseChecker = require('license-checker')
var fs = require('fs')

let dir = process.argv[2]
let output = process.argv[3]

if (!dir) {
  console.log('Please provide a directory to check')
  process.exit(1)
}

if (!output) {
  console.log('Please provide an output file')
  process.exit(1)
}

function writeMarkdown(pkgs) {
  let outputString = '# Packages\n'
  for (let packageName in pkgs) {
    let pkg = pkgs[packageName]
    packageName = packageName.split('@')
    let version = packageName.pop()
    let name = packageName.join('@')
    let attr = [['Version', version],
      ['License', pkg.licenses],
      ['Repository', pkg.repository],
      ['Publisher', pkg.publisher],
      ['Email', pkg.email],
      ['URL', pkg.url]]
    outputString += '### ' + name + '\n'

    for (let i of attr) {
      let attrName = i[0]
      let attrValue = i[1]
      if (attrValue) {
        outputString += `* ${attrName}: ${attrValue}\n`
      }
    }
    outputString += '\n'
  }

  fs.writeFile(output, outputString, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Packages written to ' + output)
    }
  })
}

licenseChecker.init({
  start: dir,
  production: true,
  excludePrivatePackages: true,
}, (err, pkgs) => {
  if (err) {
    console.log(err)
  } else {
    writeMarkdown(pkgs)
  }
}
)
