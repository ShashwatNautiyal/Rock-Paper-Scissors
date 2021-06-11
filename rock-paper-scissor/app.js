const game = () => {
	let pScore = 0;
	let cScore = 0;

	// Start Game
	const gameStart = () => {
		const play = document.querySelector('.play');
		const match = document.querySelector('.match');
		const intro = document.querySelector('.intro');

		play.addEventListener('click', () => {
			match.classList.remove('fade-out');
			match.classList.add('fade-in');
			intro.classList.add('fade-out');
		});
	};

	// Play Match
	const playMatch = () => {
		const playerOptions = document.querySelectorAll('.options button');
		const computerOptions = ['rock', 'paper', 'scissors'];

		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');

		const hands = document.querySelectorAll('.hands img');
		hands.forEach((hand) => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
			});
		});

		playerOptions.forEach((option) => {
			option.addEventListener('click', function () {
				const randomNo = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[randomNo];

				setTimeout(() => {
					compareHands(this.textContent, computerChoice);

					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}, 2000);

				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score');
		const computerScore = document.querySelector('.computer-score');

		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');
		console.log(computerChoice);

		if (playerChoice === computerChoice) {
			winner.textContent = 'Its a tie';
			return;
		}

		if (playerChoice === 'rock') {
			if (computerChoice === 'paper') {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}

		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}

		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			}
		}
	};
	// Functions call
	gameStart();
	playMatch();
};

game();
