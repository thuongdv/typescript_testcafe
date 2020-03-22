# Automated web application by using Testcafe, typescript
This is an example of using Testcafe test framework.

# Pre-requites
Node.js vesion >=12 is installed

# Install dependencies
1. CD to the project folder
2. Open CMD/terminal then type `npm i`. Make sure **node_modules** folder is generated

Please refer to **package.json** for more details.

# Run test and view result locally
1. CD to the project folder
2. Open CMD/terminal
3. Type `npm run c` to compile typescript files into javascript
3. Type `npm run test` to run test
4. Type `npm run alv` to view result

# Integrate with CI tool
Please read the testcafe help for further information (./node_modules/.bin/testcafe --help).
Basically, we can use the following command:
`./node_modules/.bin/testcafe 'chrome:headless:emulation:width=1440;height=900;' ./built/tests/*_test.js -r html:reports/result.html -u -e`

# Github integration
