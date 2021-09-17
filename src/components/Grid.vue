<template>
  <div class="grid">
    <Item v-for="item in itemsRan" :key="item.id" :item="item" :openCard="openCard" />
    <div :class="{ start: startGame }">
      <div class="start-btn" @click="start">START</div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "Grid",
  data() {
    return {
      startGame: true,
      currentOpenCards: [],
      maxOpenCards: 2,
      items: [
        { id: 1, value: 1, open: false, completed: false },
        { id: 2, value: 2, open: false, completed: false },
        { id: 3, value: 3, open: false, completed: false },
        { id: 4, value: 4, open: false, completed: false },
        { id: 5, value: 5, open: false, completed: false },
        { id: 6, value: 6, open: false, completed: false },
        { id: 7, value: 1, open: false, completed: false },
        { id: 8, value: 2, open: false, completed: false },
        { id: 9, value: 3, open: false, completed: false },
        { id: 10, value: 4, open: false, completed: false },
        { id: 11, value: 5, open: false, completed: false },
        { id: 12, value: 6, open: false, completed: false },
      ],
      itemsRan: [],
    };
  },
  methods: {
    openCard(id) {
      if (
        this.items.find((item) => {
          if (item.id === id && (item.open === true || item.completed === true))
            return true;
        }) !== undefined
      )
        return;
      if (this.currentOpenCards.length < this.maxOpenCards) {
        this.currentOpenCards.push(
          this.items.find((item) => {
            if (item.id === id) {
              item.open = !item.open;
              return true;
            }
          })
        );
      } else {
        this.currentOpenCards[0].open = !this.currentOpenCards[0].open;
        this.currentOpenCards[0] = this.items.find((item) => {
          if (item.id === id) {
            item.open = !item.open;
            return true;
          }
        });
        this.currentOpenCards.reverse();
      }
      if (this.currentOpenCards.length === 2) {
        this.items.find((item) => {
          if (
            item.value === this.currentOpenCards[0].value &&
            item.value === this.currentOpenCards[1].value
          ) {
            //console.log("12312");
            item.completed = true;
          }
        });
      }
      //console.log(JSON.stringify(this.currentOpenCards));
      //console.log(JSON.stringify(this.items));
    },
    shuffle() {
      for (let i = this.items.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
        this.itemsRan.push(this.items[i]);
      }
    },
    start() {
      this.startGame = false;
      this.items.forEach( item=>{
        item.completed=false
        item.open=false
      })
      this.itemsRan=[]
      this.currentOpenCards=[]
      for (let i = this.items.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
        this.itemsRan.push(this.items[i]);
      }
    },
  },
  watch: {
    currentOpenCards() {
      if (
        this.items.find((item) => {
          if (item.completed===false) return true;
        }) === undefined 
      ) {
         this.startGame = true;
      }
    },
  },
  mounted() {
    this.shuffle();
  },
  components: {
    Item,
  },
};
</script>

<style>
.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 650px;
  margin: 50px auto;
  position: relative;
}
.start {
  transition: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.start-btn {
  padding: 10px;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
</style>
