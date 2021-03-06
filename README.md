DxE Slack Inviter
=================
This small Node.js server serves [slackin](https://github.com/rauchg/slackin/) as a tool to help onboard people to DxE's Slack account.

Local Development
-----------------
1. Ensure that Node is installed on your computer.
2. Clone this repo and navigate to the project directory in your terminal.
3. Run `npm install`.
4. Copy the file `lib/env.example.js` into `lib/env.js`.
5. Set any unset environment variables that you'd like in that file. `SLACK_API_KEY` is required for the server to run. You can generate a [test key](https://api.slack.com/web) for this.
6. Run `npm run start`.
7. Navigate to the local server in your web browser.

Deployment
----------
This app is deployed with Dokku. [Learn about](https://github.com/directactioneverywhere/dxe-learn2dokku) how DxE Tech deploys with Dokku. The Dokku git remote is:

    dokku@dxetech.org:slack-inviter

Configuration
-------------
The following environment variables should be configured:
* `SLACK_API_KEY` - an [API token](https://api.slack.com/web) generated by an admin of the DxE Slack group. slackin's readme suggests creating a new admin user specifically for this purpose.

License
=======
dxe-slack-inviter is licensed under GNU GPL version 3.0. For the full license see the LICENSE file.
