
var app = new Vue({
  el: '#app',
  data: {
    addText: '',
    list:[],
    date: '',
    uniqueKey: 0,
  },
  methods: {
    addToDo() {
      nowDate = new Date();
      // 各情報を変数に格納
      year    = nowDate.getFullYear();
      month   = nowDate.getMonth()+1;
      date    = nowDate.getDate();
      // 0埋め処理
      month   = ( '0' + month ).slice( -2 );
      date    = ( '0' + date ).slice( -2 );
      if (this.addText) {
        this.list.unshift({
          'text': this.addText,
          'id': this.uniqueKey + 1,
          'flag' : true,
          'date': year+'/'+month+'/'+date,
        });
        this.addText = '';
        this.uniqueKey++;
      }  
    },
    deleteToDo(id) {
      var deleteIndex = '';
      var check = confirm('本当に削除しますか？');
      if (check === true) {
        this.list.some(function (value, index) {
          if (value.id === id) {
            deleteIndex = index;
          }
        });
        this.list.splice(deleteIndex, 1);
      }
    },
    editToDo(id) {
      var newText = window.prompt('以下内容で更新します');
      if (newText === '') {
        alert('入力欄が空欄です');
      } else if(newText !== null) {
          this.edit(id, newText);
      }
    },
    edit(id, text) {
      var editIndex = '';
      this.list.some(function(value, index) {
        if (value.id === id) {
          editIndex = index;
        }
      });
      this.list[editIndex].text = text; 
    },
    changeToDo(id) {
      var changeIndex = '';
      this.list.some(function (value, index) {
        if(value.id === id) {
          changeIndex = index;
        }
      });
      this.list[changeIndex].flag = this.change(changeIndex);
    },
    change(changeIndex) {
      if (this.list[changeIndex].flag === true) {
        return false;
      } else {
        return true;
      }
    }
  }
});