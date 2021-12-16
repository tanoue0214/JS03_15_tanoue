 // 送信者の定義づけ（自分=true,相手=false）

 let isMyself=true;


// 自分が送信するときの送信ボタンのクリックイベント
 let sendBtn=document.getElementById("sendBtn");
 sendBtn.addEventListener("click",function(){
     let inputMessage=document.getElementById("inputMessage");
     let messageText=inputMessage.value;
    //入力値の内容確認
    if (messageText ==""){
       return;
    }
    
    // メッセージ用のdiv作成の関数を呼び起こす
    let messageBox=createMessageBox();

    let message=createMessage(messageText);

    // divにpを追加する！！
    messageBox.appendChild(message);

    console.log(messageBox);

    // チャット画面にメッセを追加してくー！
    let room=document.getElementById("room");
    room.appendChild(messageBox);

    // 入力文字のリセット！
    inputMessage.value="";

    // 送信者の変更プログラム！
    if(isMyself){
        isMyself=false;
    }else{
        isMyself=true;
    }

 })

// divタグ作成の関数
function createMessageBox(){
    let messageBox=document.createElement("div");
    
    //  送信者の分岐
     if(isMyself){
        messageBox.classList.add("box-right");

     }else{
         messageBox.classList.add("box-left");
     }
    return messageBox;
}

// pタグ作成の関数

function createMessage(messasgeText){
    let message=document.createElement("p");
    message.textContent=messasgeText;

    message.classList.add("message-box");

    if(isMyself){
        message.classList.add("green");
    }else{
        message.classList.add("white");
    }
    return message;


}

// 背景を雪にする

window.addEventListener('DOMContentLoaded', ()=> {
    // ①雪を発生させるコンテナを指定
    const container = document.querySelector('.snow-container');
  
    // ②雪を生成する関数
    const createSnow = () => {
      const snowEl = document.createElement('span');
      snowEl.className = 'snow';
      const minSize = 5;
      const maxSize = 10;
      const size = Math.random() * (maxSize - minSize) + minSize;
      snowEl.style.width = `${size}px`;
      snowEl.style.height = `${size}px`;
      snowEl.style.left = Math.random() * 100 + '%';
      container.appendChild(snowEl);
  
      // 一定時間が経てば雪を消す
      setTimeout(() => {
        snowEl.remove();
      }, 10000);
    }
  
    // ③雪を生成する関数を一定間隔で呼び出す
    setInterval(createSnow, 100);
  });




