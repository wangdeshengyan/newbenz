<template>
	<div>
		
		<div id="content">
			<div class="renovation-model-filter">
				<div class="model-filter-container">
					<div class="all-vehicles false">
						<div class="all-vehicles__nav-container"></div>


						<div class="model-filter">
							<div class="model-filter__category-container" style="min-height: 593px;">
								<div class="model-filter__category-wrapper">
									<div class="model-filter__header"></div>
									<div class="model-filter__items-wrapper">
										<div class="model-filter__category-items">
											<div v-on:click="selectState($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-image-hover model-filter__brand-all model-filter__item-selected">
												<span class="model-filter__item-title">全部</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">

											</div>
											<div v-on:click="selectState($event)"
												class="model-filter__category-item model-filter__image-active model-filter__category-image-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/brand_1.png"
													data="">
												<span class="model-filter__item-title">undefined</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState($event)"
												class="model-filter__category-item model-filter__image-active model-filter__category-image-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/brand_2.png"
													data="">
												<span class="model-filter__item-title">undefined</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState($event)"
												class="model-filter__category-item model-filter__image-active model-filter__category-image-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/brand_3.png"
													data="">
												<span class="model-filter__item-title">undefined</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState($event)"
												class="model-filter__category-item model-filter__image-active model-filter__category-image-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/brand_4.png"
													data="">
												<span class="model-filter__item-title">undefined</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
										</div>
									</div>
								</div>
								<div class="model-filter__category-wrapper">
									<div class="model-filter__header">按类别</div>
									<div class="model-filter__items-wrapper">
										<div class="model-filter__category-items">
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__item-selected model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">全部</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">轿车</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">SUV</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">轿跑车&敞篷跑车</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">MPV</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">纯电动</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">插电混合动力</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
										</div>
									</div>
								</div>
								<div class="model-filter__category-wrapper">
									<div class="model-filter__header">按车型</div>
									<div class="model-filter__items-wrapper">
										<div class="model-filter__category-items">
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__item-selected model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">全部</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">A</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">B</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">C</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">D</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">E</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">S</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GLA</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GLB</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GLC</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GLE</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GLS</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">G</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">CLA</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">CLS</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">CLA</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">GT</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">V</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">Vito</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">EQC</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
										</div>
									</div>
								</div>
								<div class="model-filter__category-wrapper">
									<div class="model-filter__header">按价格</div>
									<div class="model-filter__items-wrapper">
										<div class="model-filter__category-items">
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__item-selected model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">全部</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">30万以下</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">30-40万</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">40-60万</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">60-100万</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">100万以上</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											<div v-on:click="selectState2($event)"
												class="model-filter__category-item model-filter__title-active model-filter__category-item-hover">
												<img class="model-filter__item-img"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/undefined"
													data="">
												<span class="model-filter__item-title">自定义</span>
												<img class="model-filter__selected-confirm"
													src="https://www.mercedes-benz.com.cn/etc/designs/mb-cn/images/confirm_icon.png">
											</div>
											
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="model-filter__action">
								<button type="reset" class="button button_secondary">重置</button>
								<button type="submit" class="button button_primary">确定</button>
							</div>
							<div id="footer">

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		

</template>

<script>
	// @ is an alias to /src


	export default {
		name: 'model-fliter',
		
		methods: {
			selectState($event) {

				var show = $event.currentTarget.lastElementChild;
				var div_lists = $event.currentTarget.parentElement.children;

				if ($event.currentTarget == div_lists[0]) {

					// console.log($event.currentTarget);
					// console.log(div_lists[0]);
					if (show.style.display == "inline-block") {
						show.style.display == "none"
					} else {
						for (var i = 0; i < div_lists.length; i++) {
							div_lists[i].lastElementChild.style.display = "none";
							div_lists[i].className =
								"model-filter__category-item model-filter__image-active model-filter__category-image-hover";
						}
						div_lists[0].lastElementChild.style.display = "inline-block";
						div_lists[0].className =
							"model-filter__category-item model-filter__title-active model-filter__category-image-hover model-filter__brand-all model-filter__item-selected";
					}
				} else {
					if (show.style.display == "inline-block") {
						show.style.display = "none";
						$event.currentTarget.className =
							"model-filter__category-item model-filter__image-active model-filter__category-image-hover";
					} else {
						show.style.display = "inline-block";
						$event.currentTarget.className =
							"model-filter__category-item model-filter__image-active model-filter__category-image-hover model-filter__item-selected";
						div_lists[0].lastElementChild.style.display = "none";
						div_lists[0].className =
							"model-filter__category-item model-filter__title-active model-filter__category-image-hover model-filter__brand-all";
					}
				}
			},
			selectState2($event) {

				var show = $event.currentTarget;
				var div_lists = show.parentElement.children;
				var div_parent3 = show.parentElement.parentElement.parentElement;

				if (show == div_lists[0]) {

					if (show.className ==
						"model-filter__category-item model-filter__title-active model-filter__category-item-hover model-filter__item-selected"
					) {
						show.classname ==
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					} else {
						for (var i = 0; i < div_lists.length; i++) {
							div_lists[i].className =
								"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
						}

						div_lists[0].className =
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover model-filter__item-selected";
					}
				} else {

					if (show.className ==
						"model-filter__category-item model-filter__title-active model-filter__category-item-hover model-filter__item-selected"
					) {
						show.className =
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					} else {
						show.className =
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover model-filter__item-selected";
						div_lists[0].className =
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					}
				}
			},
			selectState3($event) {

				var show = $event.currentTarget;
				var div_lists = show.parentElement.children;
				var div_lastChild = show.lastElementChild;
				var div_parent3 = show.parentElement.parentElement.parentElement;


				if (show.className !=
					"model-filter__category-item model-filter__title-active model-filter__category-item-hover") {
					for (var i = 0; i < div_lists.length; i++) {
						div_lists[i].className =
							"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					}
					show.className =
						"model-filter__category-item model-filter__title-active model-filter__category-item-hover model-filter__item-selected";
					div_parent3.className = "model-filter__category-wrapper model-filter__price-customize-active";
				} else {

					show.className ==
						"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					div_lists[0].className =
						"model-filter__category-item model-filter__title-active model-filter__category-item-hover";
					div_parent3.className = "model-filter__category-wrapper";
				}
			}

		}
	}
</script>

<style>
	#content {
		min-height: 800px;
		z-index: 500;
		position: relative;
		display: block;
	}

	#content,
	footer {
		transition: transform 0.3s cubic-bezier(0.19, 0.15, 0.36, 0.95);
	}

	.model-filter-container .all-vehicles {
		background-color: #121212;
	}

	.model-filter-container .all-vehicles__nav-container {
		background-color: #121212;
	}





	.model-filter-container .model-filter {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		color: white;
		padding-top:50px;
	}

	.model-filter-container .model-filter__category-wrapper {
		margin: 0;
	}

	.model-filter-container .model-filter__category-wrapper:last-child {
		margin-bottom: 80px;
	}

	.model-filter-container .model-filter__header {
		font-size: 24px;
		margin-bottom: 15px;
		margin-top: 35px;
		font-family: serif;
		transform: scaleX(0.7);
		transform-origin: left;
		text-align: left;
	}

	.model-filter-container .model-filter__items-wrapper {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}

	.model-filter-container .model-filter__category-items {
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.model-filter-container .model-filter__category-wrapper:first-child .model-filter__category-item {
		-ms-flex: 1 0;
		flex: 1 0;
		max-width: 235px;
	}

	.model-filter-container .model-filter__category-item:not(:last-child) {
		margin-right: 3px;
	}

	.model-filter-container .model-filter__title-active {
		margin-bottom: 10px;
	}

	.model-filter-container .model-filter__item-selected {
		background-color: #525252;
		color: white;
	}

	.model-filter-container .model-filter__brand-all {
		font-size: 16px;
	}

	.model-filter-container .model-filter__category-item {
		cursor: pointer;
		color: #bfbfbf;
		position: relative;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: center;
		align-items: center;
		border-radius: 2px;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
	}

	.model-filter-container .model-filter__title-active .model-filter__item-title {
		min-width: 42px;
		text-align: center;
	}

	.model-filter-container .model-filter__category-wrapper:first-child .model-filter__item-selected .model-filter__selected-confirm {
		display: inline-block;
	}

	.model-filter-container .model-filter__category-wrapper .model-filter__selected-confirm {
		display: none;
	}

	.model-filter-container .model-filter__selected-confirm {
		position: absolute;
		right: 11px;
		top: 11px;
		height: 17px;
		width: 17px;
	}

	.model-filter-container .model-filter__image-active {
		position: relative;
	}

	.model-filter-container .model-filter__category-item .model-filter__item-img {
		width: 100%;
		height: 100%;
	}

	.model-filter-container .model-filter__image-active .model-filter__item-title {
		display: none;
	}

	.model-filter-container .model-filter__category-image-hover:hover {
		opacity: 0.3;
	}

	.model-filter-container .model-filter__category-wrapper:nth-child(2) .model-filter__category-item {
		padding: 9.5px 6.5px;
	}

	.model-filter-container .model-filter__category-wrapper:not(:first-child) .model-filter__category-item {
		padding: 9.5px 4px;
	}

	.model-filter-container .model-filter__category-item:not(:last-child) {
		margin-right: 3px;
	}

	.model-filter-container .model-filter__title-active {
		margin-bottom: 10px;
	}

	.model-filter-container .model-filter__item-selected {
		background-color: #525252;
		color: white;
	}

	.model-filter-container .model-filter__category-item {
		cursor: pointer;
		color: #bfbfbf;
		position: relative;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		-ms-flex-align: center;
		align-items: center;
		border-radius: 2px;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
	}

	.model-filter-container .model-filter__title-active .model-filter__item-img {
		display: none;
	}

	.model-filter-container .model-filter__category-item .model-filter__item-img {
		width: 100%;
		height: 100%;
	}

	.model-filter-container .model-filter__category-wrapper:nth-child(2) .model-filter__category-item .model-filter__item-title {
		min-width: 51px;
	}

	.model-filter-container .model-filter__title-active .model-filter__item-title {
		min-width: 42px;
		text-align: center;
	}

	.model-filter-container .model-filter__selected-confirm {
		position: absolute;
		right: 11px;
		top: 11px;
		height: 17px;
		width: 17px;
	}

	.model-filter-container .model-filter__action button:first-child {
		width: 146px;
		height: 40px;
		color: black;
		background-color: white;
		margin-right: 20px;
		margin-left: 100px;
	}

	.model-filter-container .model-filter__action button {
		font-size: 16px;
		border-radius: 2px;
	}

	.model-filter-container .model-filter__action button:last-child {
		width: 146px;
		height: 40px;
		color: white;
		background-color: black;
		border: solid 1px #666666;
	}

	.button,
	.compact-tile-grid__copy-container--button .content-tile__link {
		border-radius: 2px;
		color: currentColor;
		display: inline-block;
		font-family: "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Microsoft YaHei", "SimHei", Helvetica, Arial;
		font-size: 12px;
		font-weight: 700;
		line-height: 1.83333;
		padding: 5px 10px;
		text-decoration: none;
		cursor: pointer;
	}



	.model-filter-container .model-filter__action {
		background-color: #292929;
		height: 80px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}

	.model-filter__category-item-hover:hover {
		/* opacity: 0.3; */
		background: rgba(15, 15, 15, 1);
	}

	.model-filter__category-item-hover:hover span {
		color: white;
	}

	.model-filter-container .model-filter__category-wrapper:first-child .model-filter__item-selected:not(:first-child)::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.3);
	}

	.model-filter-container .model-filter__category-image-hover:hover::before {
		display: block;
	}

	.model-filter-container .model-filter__category-image-hover::before {
		content: '';
		display: none;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.1);
	}

	.model-filter-container .model-filter__item-selected {
		background-color: #525252;
		color: white;
	}

	.model-filter-container .model-filter__price-customize-active .model-filter__price-customize {
		display: -ms-flexbox;
		display: flex;
	}

	.model-filter-container .model-filter__price-customize {
		font-size: 0;
		display: none;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
	}

	h1::before,
	h1::after,
	h2::before,
	h2::after,
	h3::before,
	h3::after,
	h4::before,
	h4::after,
	h5::before,
	h5::after,
	h6::before,
	h6::after,
	a::before,
	a::after,
	span::before,
	span::after {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
	}

	.model-filter-container .model-filter__price-customize-wrapper:first-child {
		margin-left: 15px;
	}

	.model-filter-container .model-filter__price-customize-wrapper {
		background-color: #292929;
		display: inline-block;
		height: 37px;
		font-size: 12px;
		border-radius: 2px;
		width: 145px;
	}

	.model-filter-container .model-filter__price-customize-wrapper input {
		background: none;
		outline: none;
		border: 0px;
		height: 100%;
		color: white;
		text-indent: 10px;
		font-size: 12px;
		padding: 0;
		width: 103px;
	}

	.model-filter-container .model-filter__price-customize-wrapper .unit {
		color: #bfbfbf;
		margin-right: 9px;
	}

	.model-filter-container .model-filter__price-customize-sep {
		font-size: 12px;
		background-color: #111;
		display: inline-block;
		height: 37px;
		width: 25px;
		text-align: center;
		line-height: 37px;
	}

	.model-filter-container .model-filter__price-customize-wrapper {
		background-color: #292929;
		display: inline-block;
		height: 37px;
		font-size: 12px;
		border-radius: 2px;
		width: 145px;
	}

	.model-filter-container .model-filter__price-invalid {
		font-size: 12px;
		color: #ff3131;
		position: absolute;
		left: 15px;
		bottom: -36px;
		display: none;
	}





	@media screen and (max-width: 767px) {
		.model-filter-container .model-filter__category-wrapper {
			margin: 0 28.5px;

		}

		.model-filter-container .model-filter__category-wrapper:first-child .model-filter__category-item {
			-ms-flex: 0 0 calc((100vw - 66px) / 3);
			flex: 0 0 calc((100vw - 66px) / 3);
		}

		.model-filter-container .model-filter__category-wrapper:first-child .model-filter__category-item:not(:last-child) {
			margin-right: 1.5px;
			margin-left: 1.5px;
		}

		.model-filter-container .model-filter__category-wrapper:first-child .model-filter__category-item {
			-ms-flex: 0 0 calc((100vw - 66px) / 3);
			flex: 0 0 calc((100vw - 66px) / 3);
		}
	}


	@media screen and (min-width: 768px) {
		.model-filter-container .model-filter__category-wrapper {
			margin: 0;
		}

		.model-filter-container .model-filter__category-container {
			margin: 0 200px;
			max-width: 1440px;
		}

		.model-filter-container .model-filter__category-wrapper:first-child .model-filter__category-item:not(:last-child) {
			margin-right: 16px;
			margin-bottom: 0;
		}

		.model-filter-container .model-filter__brand-all {
			font-size: 16px;
		}

	}

	#footer{
		width:100%;
		height:106px;
		background: #000;
	}
</style>
