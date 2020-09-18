set -e
 
echo "▶ Start executing the command."

git status

echo "▶ The newly edited file is being submitted to the staging area, please wait...."

git add .

# Write a sleep 1s to solve the problem of concurrency
sleep 1s

echo "▶ The file has been delivered to the staging area."

git status

echo "▶ Enter your submission commit："
read commit
git commit -m "$commit"

echo "▶ commit added successfully."

sleep 1s

echo "▶ Please enter the branch you want to submit."
read branch

git push origin "$branch"
 
echo "▶ Push successfully."
