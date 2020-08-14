<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainter></ListContainter>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainter from "./ListContainter";
import Recommend from "./Recommend";
import Brand from "./Brand";
import Floor from "./Floor";
import Rank from "./Rank";
import Like from "./Like";
export default {
  name: "Home",
  components: {
    ListContainter,
    Recommend,
    Brand,
    Floor,
    Rank,
    Like,
  },
};
</script>

<style lang="less" scoped></style>
