const core = require('@actions/core');
const github = require('@actions/github');

async function main() {
    try {
        const myToken = core.getInput('ghToken');
        const octokit = github.getOctokit(myToken);

        await octokit.rest.issues.createComment({
            owner: github.context.owner,
            repo: github.context.repo,
            github.context.payload.number,
            "boop",
        }); 

        const payload = JSON.stringify(github.context, undefined, 2)
        console.log(`The event payload: ${payload}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();
