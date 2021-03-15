<template>
  <div id="app">
    <div class="title-box"></div>
	<div class="title-line title-cybj">
		<div class="title-cybj-text">产业布局</div>
	</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  padding: #00f;
  height: 100%;
}

#app {
	position: relative;
	height: 100%;
	background-color: gray;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.title-box {
  height: 84px;
  background-image: url(./assets/title.png);
  background-repeat: no-repeat;
}

.title-cybj {
	position: absolute;
	left: 12.3px;
	top: 129px;
	width: 394px;
	height: 4px;
	margin: 15px;
	background-image: url(./assets/tltle-line.png);
	background-repeat: no-repeat;
	background-color: red;
}

.title-cybj:link {

}

.title-cybj:visited {

}

.title-cybj:hover {

}

.title-cybj:active {

}


.title-cybj-text {

	position: absolute;
	left: 29px;
	bottom: 3px;

	line-height: 21px;
	font-size: 14px;
	font-family: AlibabaPuHuiTi;
	font-weight: bold;
	color: #F7F5F5;

}
</style>
