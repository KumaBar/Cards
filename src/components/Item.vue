<template>
  <div :class="{ card: true, completed: item.completed }">
    <div
      :class="{ front: true, active: item.open, completed: item.completed }"
      @click="openCard(item.id)"
    >
    </div>
    <div
      :class="{ back: true, active: item.open, completed: item.completed }"
      @click="openCard(item.id)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object,
    openCard: Function,
  },
};
</script>

<style>
.front.active {
  transform: rotateY(180deg);
}

.back.active {
  transform: rotateY(360deg);
}
.back.completed {
  background:skyblue;
  transform: rotateY(360deg);
}
.front.completed{
  width:0;
  height:0;
  top:50%;
  left:50%;
}
.card {
  width: 150px;
  height: 150px;
  position: relative;
  perspective: 1000px;
  margin:5px;
  transition:0.3s;
}
.back,
.front {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  backface-visibility: hidden;
  cursor:pointer;
    font-size: 40px;
}
.front {
  background: crimson;
}
.back {
  background: lightgreen;
  transform: rotateY(180deg);
}
</style>
