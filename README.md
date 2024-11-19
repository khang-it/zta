# zta
echo "# zta" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/khang-it/zta.git
git push -u origin main

###
touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status