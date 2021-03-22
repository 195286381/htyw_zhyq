<template>
	<div class="demo">
		Head
	</div>
</template>

<script>
export default {
	name: 'Head',
	// 返回原始数据.
	data () {
		return {
			name: 'xiaozhui',
			age: 45
		}
	},

	created () {
		console.log('head 组件创建成功!');
	}
}
</script>

<style>

</style>
