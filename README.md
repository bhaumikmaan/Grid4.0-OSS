
# Flipkart GRiD 4.0 | Infosec Track 
_**:heart::octocat: TEAM RuntimeTerror :octocat::heart:**_ 

## Problem Statement
All OSS repositories may not be maintained properly, because of which, vulnerabilities may get introduced with time. Whereas, some OSS repos could be created by attackers themselves to trick the users. <br>
We need an OSS inspector to solve this problem. This tool will help us to identify the genuineness of the repos and perform a security health check.

## Deliverables/Expectations for Level 2 (Idea + Code Submission)
The solution should :
- Be able to analyse github, pypi, npm and other repos as well
- Should be able to perform scan of repo with link
- Criteria to say a repo/package is vulnerable
- Should provide rating of repo

Other Tips:
- Avoid giving suggestions or just plain solutions. Your idea should be backed by a solid approach and logic.
- You need to submit the code along with the idea proposal deck. 
- Feel free to add links to any demo video as well

## Use-Cases
P0: Checks the authenticity of a website and whether it is safe to use or not
 
P1: Repository owner can check if their package/repository will be considered safe or not for them or others to use

P2: Measures can be provided to secure repository/project via code scanning.

P3: DevOps certification of assets before deployment. If it can be assessed rapidly, automated, and without increasing the risk surface, it should be a part of every Secure DevOps

P4: Deployment architectures that do not easily support network scans – remote devices, cloud, and mobile

## Idea 

We’ve set criteria's to decide whether a repository can be trusted or not using:
	- Repo owner’s profile rating
	- Repository/Package Score based on forks, code scan result and more.

In analysis phase, code passes through various checkers whose results are combined to show the final verdict (isItSafe? “YES”:”NO”);

![Checkers](https://user-images.githubusercontent.com/82998871/182045686-e2ca7021-d427-4c9a-88d5-8552fb2f4b84.png) <hr>

## Workflow

This is the key workflow of our project idea

- A GitHub repository is passed as input in the search box which is then fetched using GitHub API.

- If the repo is not found then error will be displayed, else the code files in the repository are scanned through previously mentioned checkers.

- An output is generated on the basis of all the scores from the above checkers. This score determines whether a repository should be considered safe for use or not

<img src="https://user-images.githubusercontent.com/82998871/182045678-6ef8f300-1041-4a89-992d-4ea8b9b11cff.png" alt="Workflow" width="350" height="500"/>
<hr>


## Limitations
- Currently doesn’t scan npm and py-pi repositories.
- Scores can improved using ML models in future.
- Multiple vulnerability databases can be used to scan the repositories.
- Doesn’t check for possible DDoS attacks or malware injections
- Doesn’t take under consideration Cross-site Scripting (XSS) and Cross-Site Request Forgery (CSRF) 

## Future Scope
- Workflow/Github action can be created to keep a check of the integrity of a particular repository at regular intervals
- Automation: Whenever an event happens in the repository, it automatically checks for vulnerabilities in the newly added code.
- A vulnerability management plan that tracks all the layers in the repository.
- Notification System: When working with various contributors, in case of a fatal vulnerability, notifications to be sent to repository owner.
<hr>
<p align="middle"><b><i>Made with :heart: by RuntimeTerror</i></b></p>
