# Exercise 11.1. - CI Setup with Java Spring projects

## Tools to take care of CI - linting, testing and building
Spring is a web-development framework for Java that is commonly used in the University of Helsinki CS department. As Spring and especially Java have relatively long history as tools in development, the utilities that have been created to support them are numerous.

Linting and other static analysis is usually done by the IDE - integrated development environment. Currently, the market leader (and my favourite) IDE to use is the IntelliJ IDE. Other popular ones include Ecplipse and Netbeans. The one to use depends usually on the preferences and history of the team mates and possible dependencies to third party recourses the project may have.

There are multiple testing libraries that can be used for unit, integration and UI testing (SpringBoot, Mockito and FluentLenium to name few) and testing is usually tied in to the project development cycle with a build automation tool such as Maven, Gradle or Ant. Again, the pick depends on the team's preferences and project scope.

## What alternatives there are to Jenkins and and Github actions?
Github's direct rival Bitbucket serve similar pipeline tooling as Github actions which is natural service to consider if the project team uses Bitbucket instead of Github. Jenkins is written in Java and is a well known tool amongst professionals though new ones like TravisCI and CircleCI are gaining popularity. Of course hybrid solutions exist and integration of tools like Docker and Kubernetes can help manage and extend workflow that used to be solely relying on Jenkins.

## Would this setup be better in a self-hosted or a cloud-based environment?
Either one can be correct setup for this project. The most important factors to consider include for example:

- Does the team have necessary expertise? Especially with self-hosting network and server admin knowledge comes in handy.
- Is there already existing infrastructure to include in the solution? Does it help or complicate the switch?
- How much control do you need to have over the servers? Is there for example legislation that determines where the servers and their data is located. Self hosting gives more control (and responsibility) to the team
- What is the installation cost? Small, non-complex projects can be configured with cloud-based services with little time and money
- What is the up-keeping cost? When paying by the server you may pay for "running air" but you also get predictability for the costs. With cloud-based services you usually pay as you go.
- How are you expecting to scale? When the traffic increases in the application cloud-based solutions can usually keep up as long as more money is brought to table. Self-hosting means installing new servers.
