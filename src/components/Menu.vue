<template>
	<div>
		<nav>
			<div class="nav-wrapper">
				<ul class="menu">
					<li>Каталог товарів</li>
					<li>Акції</li>
					<li>Portfolio</li>
					<li>Про нас</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";

</script>


<style lang="scss" scoped>
@import '@/styles/vars';
nav {
	// border: 2px solid #231323;
	width: 300px;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
}

.nav-wrapper {
	top: 0px;
	position: sticky;
}
.menu {
	padding-top: 10px;
	text-align: center;
	background: $bgFone;
}

</style>