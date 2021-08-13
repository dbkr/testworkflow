const core = require('@actions/core');
const github = require('@actions/github');

async function main() {
    try {
        console.log(JSON.stringify(github.context));
        github.getOctokit(core.getInput('ghToken')).rest.checks.create({
            ...github.context.repo,
            head_sha: github.context.payload.pull_request.head.sha,
            name: "name of the check",
            status: "completed",
            conclusion: "action_required",
            details_url: "https://www.google.com/",
            output: {
                title: "the title",
                summary: "summery",
                text: "the text",
            },
        });
        
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
