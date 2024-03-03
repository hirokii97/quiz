task1 : 正解を押下したら答えが出てくる  
task2 :　結果発表画面を作成  
task3 : uuidの発行、パラメーター付与  

### Node.jsのモジュールやnpmのモジュールを、ブラウザでも使用できるようにする  
uuid生成ライブラリを使用するために必要  
require importなどを使うため  
index.js → bundle.jsに変換する  

```
browserify index.js -o bundle.js
```
