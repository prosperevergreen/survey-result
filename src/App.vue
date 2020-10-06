<template>
	<div id="app">
		<div class="container-fluid bg-secondary py-3">
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4">Результаты Опроса</h1>
					<p class="lead">Это краткое изложение результатов опроса.</p>
				</div>
			</div>
			<div class="card my-3 bg-info">
				<div class="card-body">
					<h5 class="card-title text-light font-weight-bold" style="font-size: 1.5rem">Прошли опрос: {{surveyCounter}} людей</h5>
				</div>
			</div>
			<div class="row d-flex justify-center">
				<div class="col-lg-6" v-for="(word,index) in words" :key=index>
					<ul class="list-group list-group-horizontal my-1 text-center">
						<li class="list-group-item bg-dark text-light">{{word}}</li>
						<li class="list-group-item flex-fill px-1">{{ansSum[0][index]}} x 1</li>
						<li class="list-group-item flex-fill px-1">{{ansSum[1][index]}} x 2</li>
						<li class="list-group-item flex-fill px-1">{{ansSum[2][index]}} x 3</li>
						<li class="list-group-item flex-fill px-1">{{ansSum[3][index]}} x 4</li>
						<li class="list-group-item flex-fill px-1">{{ansSum[4][index]}} x 5</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import AppSurveyResult from "./components/SurveyResult.vue";
	import { db } from "./db";

	export default {
		name: "App",
		components: {
			// AppSurveyResult,
		},
		data: () => ({
			surveyCounter: 0,
			ansSum: [
				Array(182).fill(0),
				Array(182).fill(0),
				Array(182).fill(0),
				Array(182).fill(0),
				Array(182).fill(0),
			],
			unsubscribe: null,
			words: [
				"bonzer",
				"pot",
				"fudge",
				"flash",
				"gal",
				"shirt",
				"nerd",
				"boob",
				"witch",
				"fool",
				"blob",
				"hit",
				"bloop",
				"frosh",
				"wow",
				"sheik",
				"frump",
				"beans",
				"dreck",
				"babe",
				"mope",
				"meal",
				"hoke",
				"blub",
				"bim",
				"cher",
				"posh",
				"boot",
				"bub",
				"tuff",
				"saw",
				"fab",
				"tits",
				"case",
				"A",
				"charge",
				"smooth",
				"cake",
				"swave",
				"reet",
				"thing",
				"slick",
				"there",
				"bug",
				"cork",
				"boff",
				"tube",
				"class",
				"down",
				"cinch",
				"dope",
				"check",
				"fish",
				"in",
				"spoon",
				"mess",
				"neat",
				"hop",
				"pill",
				"hash",
				"shag",
				"mink",
				"wall",
				"dot",
				"skag",
				"curl",
				"goof",
				"hot",
				"keen",
				"tip",
				"wimp",
				"dish",
				"nub",
				"woke",
				"tooth",
				"flub",
				"tickety-boo",
				"floocie",
				"mouse",
				"scoops",
				"gear",
				"beef",
				"jazz-bo",
				"ice",
				"pip",
				"large",
				"woozle",
				"rush",
				"jake",
				"deadwood",
				"goum",
				"zinc",
				"frimp",
				"warm",
				"dill",
				"mush",
				"ponce",
				"zool",
				"dreamboat",
				"shim",
				"guff",
				"muff",
				"ace",
				"doll",
				"puss",
				"wog",
				"poop",
				"ride",
				"small",
				"close",
				"lob",
				"spook",
				"stiff",
				"buzz",
				"twerp",
				"vag",
				"yum",
				"dove",
				"hash(2)",
				"shag(2)",
				"fluf",
				"top",
				"noise",
				"kack",
				"squaw",
				"stooge",
				"kick",
				"sunny",
				"blab",
				"shack",
				"great",
				"fine",
				"loop",
				"mensch",
				"oogley",
				"shish",
				"spoof",
				"hood",
				"tough",
				"score",
				"hard",
				"moke",
				"darb",
				"fliv",
				"gump",
				"peach",
				"heel",
				"flam",
				"sooh",
				"shtick",
				"jive",
				"foul",
				"bash",
				"feeb",
				"beat",
				"devoon",
				"gig",
				"beaut",
				"shloomp",
				"snide",
				"cush",
				"click",
				"tart",
				"dud",
				"fave",
				"flop",
				"bosh",
				"ray",
				"dane",
				"rip",
				"blip",
				"whiz",
				"zib",
				"oomph",
				"souse",
				"punk",
				"foz",
				"dumb",
				"boobie",
				"mod",
				"spoon(2)",
				"mess(2)",
			],
		}),
		methods: {
			updateUI(surveys) {
				this.surveyCounter = surveys.length;
				let ansTotal = [
					Array(182).fill(0),
					Array(182).fill(0),
					Array(182).fill(0),
					Array(182).fill(0),
					Array(182).fill(0),
				];

				for (const survey of surveys) {
					let answer = survey.answers;
					for (let index = 0; index < answer.length; index++) {
						if (answer[index] > 0) {
							ansTotal[answer[index] - 1][index]++;
						}
					}
				}
				this.ansSum = ansTotal;
			},
		},
		created() {
			var that = this;
			this.unsubscribe = db
				.collection("reviews")
				.onSnapshot(function (querySnapshot) {
					let newData = [];
					querySnapshot.forEach(function (doc) {
						// doc.data() is never undefined for query doc snapshots
						// console.log(doc.id, " => ", doc.data());
						newData.push(doc.data());
					});
					that.updateUI(newData);
				});
		},
		beforeDestroy() {
			if (this.unsubscribe != null) {
				this.unsubscribe();
			}
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
