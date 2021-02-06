# Contributing to Gonk
:tada: First off, thanks for taking the time to contribute :tada:

When contributing to this repository, please first discuss the change you whish to make via [Issue](https://github.com/Elanum/Gonk/issues), [Discord](https://discord.gg/YV5pFwk), or any other method with the ownders of this repository before making a change.

The following is a set of guideline for contributing to **Gonk**, which is hosted by [Elanum](https://elanum.de) on GitHub.

#### Table Of Contents

- [Code of Conduct](#code-of-conduct)
- [I just have a question](#i-just-have-a-question-or-have-an-idea)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Code Contribution](#code-contribution)
    - [Git Workflow](#git-workflow)
    - [Commits](#commits)
- [License](#license)
- [Additional Notes](#additional-notes)

## Code of Conduct
This project and everyone participating in it is governed by the [Code of Conduct](https://github.com/Elanum/Gonk/blob/develop/.github/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [mail@elanum.de](mailto:mail@elanum.de).

## I just have a question or have an idea!
We use the [GitHub Discussions](https://github.com/Elanum/Gonk/discussions) for new ideas, questions or if you just want to share your **Gonk** experience!

If you want to chat with other cool community members, you can join Elanum's [Discord](https://discord.gg/YV5pFwk)-Server and if you have coding-related questions you can use the `#dev-talk` channel!

## How Can I Contribute?
### Reporting Bugs
Before creating bug reports, please check the current open [Issues](https://github.com/Elanum/Gonk/issues) as you might find out that you don't need to create on. 
When you are creating a bug report, please include as many details as possible and fill out the required template.

### Code Contribution
#### Git Workflow
As you may notice we have two main branches, the `stable` and the `develop` branch. 
- The `stable` branch contains the code which is currently used to host **Gonk**.
- The `develop` branch conteins the current stable development stage of **Gonk** for the next release.

We use a modified version of [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) so please name your branch based on your changes:
- feature: `feature/branchname`
- bugfix: `fix/branchname`

If you want to contribute:
1. Fork the repo and create your branch from `develop`
2. If needed, update the documentation
3. Test your code
4. Make sure your code lints
5. Create a pull request back to `develop`

#### Commits
Since we're using [semantic-release](https://semantic-release.gitbook.io/) for automated versioning and changelog generation, please use [Conventional Commits](https://www.conventionalcommits.org/). 

Please dont put everything in one big commit and try to group up your changes in different steps *(otherwise we ask you to rebase your commits and nobody wants this 😉)*.

Link related issues and/or pull requests in the commit message footer. If you want how to properly link them, read the [GitHub Docs](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)

And last but not least, also use the matching [gitmoji](https://gitmoji.dev/) for your commits, to have beautiful repository.

```
feat: ✨ add cool feature`

this feature makes everything better!

closes: #1
```

## Licence
By contributing, you agree that your contributions will be licensed under its [MIT License](https://github.com/Elanum/Gonk/blob/develop/LICENSE).

## Additional Notes
If something is unclear or you still have questions how to properly contribute, please check out the [Discussions](https://github.com/Elanum/Gonk/discussions)-Tab or the [Discord](https://discord.gg/YV5pFwk)-Server and ask for help.
