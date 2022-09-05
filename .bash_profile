function node-project {
   git init
   npm init -y
   npx license $(npm get init.license) -o "$(npm get init.author.name)" > LICENSE
   npx gitignore node
   npx covgen "$(npm get init.author.email)"
   echo "## Usage
   
   - Describe

   # Author

   $(npm get init.author.name)

   # Licence

   $(npm get init.license)" > README.md
   echo "# Changelog" > CHANGELOG.md
   git add -A
   git commit -m "Initial commit"
}