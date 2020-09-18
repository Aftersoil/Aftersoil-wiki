set -e

before="\033[32m"
rear="\033[0m"

echo -e "$before▶ Start executing the command. $rear"

git status

echo -e "$before▶ The newly edited file is being submitted to the staging area, please wait....$rear"

git add .

# Write a sleep 1s to solve the problem of concurrency
sleep 1s

echo -e "$before▶ The file has been delivered to the staging area.$rear"

git status

echo -e "$before▶ Enter your submission commit：$rear"
read commit
git commit -m "$commit"

echo -e "$before▶ commit added successfully.$rear"

sleep 1s

echo -e "$before▶ Please enter the branch you want to submit.$rear"
read branch

git push origin "$branch"
 
echo -e "$before▶ Push successfully.$rear"

exit
