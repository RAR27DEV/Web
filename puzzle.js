<script>
    const puzzleContainer = document.getElementById('puzzle-container');
    const puzzleImageContainer = document.getElementById('puzzle-image-container');
    const hintBtn = document.getElementById('hint-btn');
    const restartBtn = document.getElementById('restart-btn');
    const completeMessage = document.getElementById('complete-message');
    const nextLevelBtn = document.getElementById('next-level-btn');
    const levelDisplay = document.getElementById('level');
    const backgroundMusic = document.getElementById('background-music');

    let currentLevel = 1;
    let pieces = [];
    let correctPositions = [];

    function initializePuzzle() {
        pieces = [];
        correctPositions = [];
        puzzleImageContainer.innerHTML = '';

        for (let i = 0; i < 9; i++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            piece.draggable = true;
            piece.dataset.index = i;
            
            const row = Math.floor(i / 3);
            const col = i % 3;
            piece.style.backgroundImage = `url('puzzle${i + 1}.jpeg')`;
            piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
            
            pieces.push(piece);
            correctPositions.push(i);
        }

        shufflePieces();

        pieces.forEach(piece => {
            puzzleImageContainer.appendChild(piece);
            piece.addEventListener('dragstart', dragStart);
            piece.addEventListener('dragover', dragOver);
            piece.addEventListener('drop', drop);
            piece.addEventListener('touchstart', touchStart);
            piece.addEventListener('touchmove', touchMove);
            piece.addEventListener('touchend', touchEnd);
        });
    }

    function shufflePieces() {
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const fromIndex = e.dataTransfer.getData('text/plain');
        const toIndex = e.target.dataset.index;
        swapPieces(fromIndex, toIndex);
        checkCompletion();
    }

    function touchStart(e) {
        e.preventDefault();
        e.target.dataset.touching = true;
        e.target.dataset.touchStartX = e.touches[0].clientX;
        e.target.dataset.touchStartY = e.touches[0].clientY;
    }

    function touchMove(e) {
        if (e.target.dataset.touching === 'true') {
            e.preventDefault();
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const diffX = touchX - e.target.dataset.touchStartX;
            const diffY = touchY - e.target.dataset.touchStartY;
            e.target.style.transform = `translate(${diffX}px, ${diffY}px)`;
        }
    }

    function touchEnd(e) {
        if (e.target.dataset.touching === 'true') {
            e.preventDefault();
            const touchX = e.changedTouches[0].clientX;
            const touchY = e.changedTouches[0].clientY;
            const elements = document.elementsFromPoint(touchX, touchY);
            const targetPiece = elements.find(el => el.classList.contains('puzzle-piece') && el !== e.target);
            
            if (targetPiece) {
                swapPieces(e.target.dataset.index, targetPiece.dataset.index);
                checkCompletion();
            }

            e.target.style.transform = 'none';
            e.target.dataset.touching = false;
        }
    }

    function swapPieces(fromIndex, toIndex) {
        const tempBackground = pieces[toIndex].style.backgroundImage;
        const tempPosition = pieces[toIndex].style.backgroundPosition;
        
        pieces[toIndex].style.backgroundImage = pieces[fromIndex].style.backgroundImage;
        pieces[toIndex].style.backgroundPosition = pieces[fromIndex].style.backgroundPosition;
        
        pieces[fromIndex].style.backgroundImage = tempBackground;
        pieces[fromIndex].style.backgroundPosition = tempPosition;

        const tempDataIndex = pieces[toIndex].dataset.index;
        pieces[toIndex].dataset.index = pieces[fromIndex].dataset.index;
        pieces[fromIndex].dataset.index = tempDataIndex;
    }

    function checkCompletion() {
        const currentOrder = Array.from(puzzleImageContainer.children).map(piece => parseInt(piece.dataset.index));
        if (JSON.stringify(currentOrder) === JSON.stringify(correctPositions)) {
            showCompleteMessage();
        }
    }

    function showCompleteMessage() {
        completeMessage.style.display = 'flex';
        document.getElementById('complete-image').src = `level${currentLevel}.jpg`;
    }

    function nextLevel() {
        currentLevel++;
        levelDisplay.textContent = `Level: ${currentLevel}`;
        completeMessage.style.display = 'none';
        initializePuzzle();
    }

    function showHint() {
        const hintDuration = 2000;
        pieces.forEach((piece, index) => {
            const correctIndex = correctPositions[index];
            const row = Math.floor(correctIndex / 3);
            const col = correctIndex % 3;
            piece.style.backgroundImage = `url('puzzle${correctIndex + 1}.jpeg')`;
            piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
        });
        setTimeout(() => {
            pieces.forEach((piece, index) => {
                const currentIndex = parseInt(piece.dataset.index);
                const row = Math.floor(currentIndex / 3);
                const col = currentIndex % 3;
                piece.style.backgroundImage = `url('puzzle${currentIndex + 1}.jpg')`;
                piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
            });
        }, hintDuration);
    }

    hintBtn.addEventListener('click', showHint);
    restartBtn.addEventListener('click', initializePuzzle);
    nextLevelBtn.addEventListener('click', nextLevel);

    backgroundMusic.play();

    initializePuzzle();
</script>