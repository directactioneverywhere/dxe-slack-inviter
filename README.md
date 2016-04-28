DxE Slack Inviter
=================

This small Node.js server serves [slackin](https://github.com/rauchg/slackin/) as a tool to help onboard people to DxE's Slack account.

The following environment variables should be configured:
* `SLACK_API_KEY` - an [API token](https://api.slack.com/web) generated by an admin of the DxE Slack group. slackin's readme suggests creating a new admin user specifically for this purpose.
* `PORT` - Dokku will set this automatically, and locally it will fall back to `3000` if no other value is configured.

Deployment
----------

Push this repo to a Dokku-enabled server. You should configure `SLACK_API_KEY` as an environment variable using `dokku apps:config <appname> "SLACK_API_KEY=<api_key>"`


Local development
-----------------

1. Ensure that Node is installed on your computer.
2. Clone this repo and navigate to the project directory in your terminal.
3. Run `npm install`.
4. Copy the file `env.example.js` into `env.js`.
5. Set any unset environment variables that you'd like in that file. `SLACK_API_KEY` is required for the server to run.
6. Run `node server.js`.
7. Navigate to the local server in your web browser.

License
-------

Copyright © 2016 DxE Tech Working Group and licensed under the GNU General Public License v3.0. See the LICENSE file for the complete license.
