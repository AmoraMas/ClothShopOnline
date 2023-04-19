# Quick Run Down of Git Work Flow

* When cloning or creating a new repository it will default the working branch you are on to be **main branch** which means any updates you make to the code will be in the **main branch** _(bad practice)_
* To efficiently make updates to working code is to **create a new branch** (git checkout -b (branch name)) 
  * This allows **version control**, if anything should happen to this new branch and it cannot be fixed it can be deleted (git branch -D (branch name)), then we can branch out again from the **main branch** _(best practice)_
* Once you do make succesful changes to your **new branch**, its been tested that it works, it is now time to merge the new updates back into the **main branch**
  * this can be done by switching back to the **main branch** either using **git switch (branch name)** or **git checkout (branch name)** then when you are in the **main branch** you will **git merge (branch name)(this will be the branch you made to make updates on)** then you **git pull origin main** to recieve the new updates
  * the other option of a merge is using **GitLab** this platform allows a very controlled environment of keeping up with your teams workflow progress and it allows someone to **request a merge,** this is  good because they can set it so someone else can review and approve the code they created and tested, then everyone will transfer back to **main branch** and **git pull origin main** to recieve the updates

![GitWorkFlow](uploads/c5c8eba6728aced175582011622014ab/GitWorkFlow.jpg)