# Problem Solve

##### Solve 1.

這學期因為大部分的時間都在學習公司的程式（公司使用 SAP 模組，而 SAP 則是則是使用名為 ABAP 的程式語言），雖說在公司也在處理資料庫，但因為屬於不同的程式架構，所以在轉換自己腦中的對於資料庫的思考模式時，花了不少的時間。目前在轉換觀念的情形也越來越順暢，希望在往後的日子裡能夠更快的轉換觀念。

---

##### Solve 2.

這學期的期中考我想最困難的作業，便是複製出一個完整的網頁，前期因為想要偷吃步的原因，尋找了網路上各式快速撈 HTML 與 CSS 的資料，試過了很多工具，不過下場就是變成 HTML 與 CSS 出現的各種爆炸的現象，然而在最後也果斷的放棄這個想法，開始詢問助教關於編寫一個開放式網頁該如何執行，而也確實學習到了很多東西，例如，利用ㄧ個 component 把大框架包住，再去裡面細分各種資料，我認為這是最實在的做法，便是老老實實的編寫。

---

##### Solve 3.

目前遇到比較大的挫折為，即使將 heroku 內的 database 建立完成，卻無法將自己建立好的 database 引入
以下為自己所建立 data
![](https://i.imgur.com/FRjx7RB.png)
但是始終無法正常地引入，希望老師能夠在更加詳細的描述這一塊該如何進行操作

---

##### Solve 4.

其中一個遇到的問題則是自己在上推至 Heroku 時，爆出一些錯誤
錯誤碼如下

```
Process exited with status 143
```

並且在網路上照到了以下說法

```
Exit code 143 means that your process was terminated by a SIGTERM.
This is generally sent when you do any commands that require
your dynos to restart (config:set, restart, scale down...).
```

而我所找到的解決方式則是

```
It is due to the heroku app stopped by dyno.
So you have to restrat the app.
You can type heroku restart in the terminal.
Also heroku restart --app application_name
```

實作過後發現這個方式能更確實的解決問題，並且將檔案部署上去。

---

##### Solve 5

最後一個問題也是到目前為止也都沒有解決的問題，則是我無法將我的檔案部署至 vercel 上，因為想要將此份作業當作未來求職一個很重要的作品，所以查找了許多相關多的資料，卻無法完好的排除，在排除一個問題後，面臨另外一個問題，報錯程式碼如下，希望老師能夠改與解答。

```
npm WARN deprecated @oclif/plugin-help@3.3.0: This version has been deprecated
```
