 Essential Git Commands

```git status``` to determine branch name

```git checkout dev``` to check it out

```git checkout -b newName``` rename your branch. left lower corner to verify what branch you're in. 

In your branch, do your build and do your edits. 
```git add -A newName```

Add commits.

```git commit -m ""```



```git push --set upstream origin```


```git push origin newName``` will push it to the upstream branch. Once you get the message to set the pull request, click on that link and make the request. Remember to always git fetch

```js
git pull
git add -A
git commit -m ""
git push origin yourName

// git push --set upstream origin
//follow link to create pull request TO dev FROM yourName
```