topic covered are
1.how to commit your project on github repository simultaneously while developing app

following are the steps

step-1
1.install git in your machine using command "sudo apt-get install git"

2.make a github account using signup in github website

if your account is already exist skip this
let github user name="johndoe143"
let github password="hello@123"

3.go back to your terminal and type following commands

git config –global user.name "johndoe143"
git config –global user.email “your_emailid”

step-2
make a new repository on github website using your account credentials
let repo name="social_app"

step-3
1.go inside your working project folder using cd command
2.when you reached in inside working folder typed following command in your terminal window
git init
git remote add origin  https://github.com/johndoe143/social_app.git

you have now configured and installed git and, created and configured a repository. 

step-4
following commands are used to commit in your git repo

git add .                                    //to add in git repository
git commit -m "type your commit message"     //to commit message in git repository
git status                                   //to see commits in your terminal

step-4
follwing command is used to commit a git repository which is hosted on github
git push origin master        //it will asked for github user name and password

Enter your github user name and password
congratulation :)
your project code is commited on github repository

i hope this helped you
