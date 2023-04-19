# Gitlab Tutorial
## What is Gitlab

## How to use Gitlab
### 1. Create a Gitlab account
### 2. Create a New project
### 3. Add Team Members
### 4. Clone the Project
- Get the repo link from the Repository/Files link on the left side of our Gitlab project.
- Click the blue clone button to the right of the screen and select which style you want to clone.
- Add the clone link and run the code below
```
git clone <gitlabs repo link>
```
- It will then ask for your username and password
  - Username: name registered with Gitlab, not email address
    - Can be found under Project Information/Members
    - Do not use the @ symbol
  - Password: I can't help you there
### 5. Create a new Branch
- When working on a project, it's important to create a new branch for each new feature or change. This he3lps keep the main branch clean and makes it easier to manage changes. To create a new branch, run the following command:
```
git checkout -b <new_branch_name>
```
### 6. Make Changes
- Once you have created a new branch, you can make changes to your project. You can do this by editing files in your local copy of the project.
### 7. Stage and Commit Changes
- When you have made changes to your project, you'll need to stage and commit them. To stage your changes, run the following command:
```
git add .
```
- This will stage all changes you've made. To commit your changes, run the following command:
```
git commit -m "commit message"
```
### 8. Push Changes
- Once you have commited your chnages, you can push them to GitLab, To push your changes, run the following command:
```
git push origin <branch name>
```
- This will push your changes to the branch you created earlier.

### 9. Create a Merge Request
