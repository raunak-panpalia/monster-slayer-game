new Vue({

	el:'#app',
	data: {
		myHealth:100,
		monsterHealth:100,
		log:[]
	},

	watch:{
		
		myHealth:function(){
			if (this.myHealth < 1){
				alert('You lost')
				this.startGame()
			}

			if (this.myHealth > 99){
				this.myHealth = 100
			}


		},

		monsterHealth:function(){
			if (this.monsterHealth < 1){
				alert('You won')
				this.startGame()
			}
			if (this.monsterHealth > 99){
				this.monsterHealth = 100
			}
		}

	},

	methods:{
		startGame:function(){
			this.myHealth = 100
			this.monsterHealth = 100
			this.log=[]
		},

		attack:function(){

			var a = this.calculateDamage()
			var b = this.calculateDamage()
			this.myHealth = this.myHealth - a
			this.monsterHealth = this.monsterHealth - b
			this.log.unshift({
				monster:false,
				text: 'You hit monster for ' + a + ' points'
			})
			this.log.unshift({
				monster:true,
				text: 'Monster hit you for ' + b + ' points'
			})
		},

		heal:function(){
			if (this.checkHealth(this.myHealth)){
				var a = this.calculateDamage()
				this.myHealth = this.myHealth + a
				this.log.unshift({
					monster:false,
					text: 'You healed to gain ' + a + ' points'
				})
			}

			if (this.checkHealth(this.monsterHealth)){
				var b = this.calculateDamage()
				this.monsterHealth = this.monsterHealth + b
				this.log.unshift({
					monster:true,
					text:'Monster healed to gain ' + b + ' points'})
			}


		},

		specialAttack:function(){
			var a = this.calculateDamage()*5
			var b = this.calculateDamage()*5
			this.myHealth = this.myHealth - a
			this.monsterHealth = this.monsterHealth - b
			this.log.unshift({
				monster:false,
				text:'You bombed monster for ' + a + ' points'
			})
			this.log.unshift({
				monster:true,
				text: 'Monster bombed you for ' + b + ' points'
			})
		},

		giveup:function(){
			alert('Bah! Chickened out')
			this.startGame()
		},

		calculateDamage:function(){
			return Math.floor(Math.random()*10)
		},

		checkHealth:function(playerHealth){
			if (playerHealth >= 100){
				return false
			}
			else{
				return true
			}
		}


	}

});