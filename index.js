const core = require('@actions/core');
const github = require('@actions/github');

async function main() {
    try {
        const myToken = core.getInput('ghToken');
        const octokit = github.getOctokit(myToken);

        await octokit.rest.issues.createComment({
            ...github.context.repo,
            issue_number: github.context.payload.number,
            body: "boop",
        }); 

        const payload = JSON.stringify(github.context, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
